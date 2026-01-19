import path from "node:path"
import * as fs from "node:fs"

interface RegistryItemProps {
  files?: {
    path?: string
    content?: string
  }[]
}

function extractRegistryId(input: string) {
  const value = input.trim().replace(/^\/+|\/+$/g, "")
  const parts = value.split("/").filter(Boolean)
  return parts.at(-1) ?? value
}

function readRegistryItem(id: string): RegistryItemProps | null {
  const filePath = path.join(process.cwd(), "public", "r", `${id}.json`)
  if (!fs.existsSync(filePath)) return null
  return JSON.parse(fs.readFileSync(filePath, "utf8")) as RegistryItemProps
}

function codeLangFromPath(p?: string) {
  if (!p) return "txt"
  if (p.endsWith(".tsx") || p.endsWith(".ts")) return "tsx"
  if (p.endsWith(".css")) return "css"
  if (p.endsWith(".json")) return "json"
  if (p.endsWith(".md") || p.endsWith(".mdx")) return "md"
  if (p.endsWith(".php")) return "php"
  return "txt"
}

function toMarkdownCodeBlocks(item: RegistryItemProps) {
  const files =
    item.files?.filter((f) => typeof f.content === "string" && f.content.trim().length > 0) ?? []
  if (!files.length) return ""

  return files
    .map((file) => {
      const code = (file.content ?? "").replaceAll("export default", "export")
      const lang = codeLangFromPath(file.path)
      const header = file.path ? `\n\n**${file.path}**\n\n` : "\n\n"
      return `${header}\`\`\`${lang}\n${code}\n\`\`\``
    })
    .join("\n\n")
}

function readLlmsTxt() {
  const filePath = path.join(process.cwd(), "public", "llms.txt")
  if (!fs.existsSync(filePath)) return ""
  return fs.readFileSync(filePath, "utf8")
}

function buildLlmsUrlIndex() {
  const text = readLlmsTxt()
  const map = new Map<string, string>()

  for (const m of text.matchAll(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g)) {
    const label = (m[1] ?? "").trim()
    const url = (m[2] ?? "").trim()
    if (!label || !url) continue
    map.set(label.toLowerCase(), url)
  }

  return map
}

function parseComposedComponents(block: string) {
  const match = block.match(/components\s*=\s*\{\s*\[([\s\S]*?)\]\s*\}/)
  if (!match) return []
  const body = match[1] ?? ""
  const items = Array.from(body.matchAll(/"([^"]+)"|'([^']+)'/g)).map((m) =>
    (m[1] ?? m[2] ?? "").trim(),
  )
  return items.filter(Boolean)
}

function parseSandboxRegistries(block: string) {
  const match = block.match(/registries\s*=\s*\{\s*\[([\s\S]*?)\]\s*\}/)
  if (!match) return []
  const body = match[1] ?? ""
  const items = Array.from(body.matchAll(/"([^"]+)"|'([^']+)'/g)).map((m) =>
    (m[1] ?? m[2] ?? "").trim(),
  )
  return items.filter(Boolean)
}

export function processMdxForLLMs(content: string) {
  const llmsIndex = buildLlmsUrlIndex()

  let output = content

  const howRegex = /<How[\s\S]*?toUse=(?:"([^"]+)"|'([^']+)')[\s\S]*?\/>/g
  output = output.replace(howRegex, (match, a?: string, b?: string) => {
    const raw = (a ?? b ?? "").trim()
    if (!raw) return match

    const id = extractRegistryId(raw)
    const item = readRegistryItem(id)
    if (!item) return match

    const md = toMarkdownCodeBlocks(item)
    return md || match
  })

  const sourceCodeRegex = /<SourceCode[\s\S]*?toShow=(?:"([^"]+)"|'([^']+)')[\s\S]*?\/>/g
  output = output.replace(sourceCodeRegex, (match, a?: string, b?: string) => {
    const raw = (a ?? b ?? "").trim()
    if (!raw) return match

    const id = extractRegistryId(raw)
    const item = readRegistryItem(id)
    if (!item) return match

    const md = toMarkdownCodeBlocks(item)
    return md || match
  })

  const sandboxRegex = /<Sandbox[\s\S]*?\/>/g
  output = output.replace(sandboxRegex, (match) => {
    const registries = parseSandboxRegistries(match)
    if (!registries.length) return match

    const blocks = registries
      .map((name) => {
        const id = extractRegistryId(name)
        const item = readRegistryItem(id)
        if (!item) return ""

        const filesMd = toMarkdownCodeBlocks(item)
        return filesMd ? `## Sandbox: ${id}\n\n${filesMd}` : ""
      })
      .filter(Boolean)
      .join("\n\n")

    return blocks || match
  })

  const composedRegex = /<Composed[\s\S]*?\/>/g
  output = output.replace(composedRegex, (match) => {
    const components = parseComposedComponents(match)
    if (!components.length) return match

    const links = components
      .map((name) => {
        const key = name.trim().toLowerCase()
        const url = llmsIndex.get(key)
        if (!url) return ""
        return `- [${name}](${url})`
      })
      .filter(Boolean)
      .join("\n")

    return links ? links : match
  })

  return output
}
