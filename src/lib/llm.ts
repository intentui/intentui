import * as fs from "node:fs"
import path from "node:path"

interface RegistryItemProps {
  files?: {
    path?: string
    content?: string
  }[]
}

const REGISTRY_DIR = path.join(process.cwd(), "public", "r")
const LLMS_PATH = path.join(process.cwd(), "public", "llms.txt")

const HOW_RE = /<How[\s\S]*?toUse=(?:"([^"]+)"|'([^']+)')[\s\S]*?\/>/g
const SOURCE_RE = /<SourceCode[\s\S]*?toShow=(?:"([^"]+)"|'([^']+)')[\s\S]*?\/>/g
const SANDBOX_RE = /<Sandbox[\s\S]*?\/>/g
const COMPOSED_RE = /<Composed[\s\S]*?\/>/g
const INSTALL_COMMAND_RE = /<InstallCommand[\s\S]*?command=(?:"([^"]+)"|'([^']+)')[\s\S]*?\/>/g

export function processMdxForLLMs(content: string) {
  const llmsIndex = buildLlmsUrlIndex()
  let output = content

  output = output.replace(HOW_RE, (match, a?: string, b?: string) => {
    return embedRegistryCode(match, extractRegistryId((a ?? b ?? "").trim()))
  })

  output = output.replace(SOURCE_RE, (match, a?: string, b?: string) => {
    return embedRegistryCode(match, extractRegistryId((a ?? b ?? "").trim()))
  })

  output = output.replace(INSTALL_COMMAND_RE, (match, a?: string, b?: string) => {
    const cmd = (a ?? b ?? "").trim()
    return cmd ? `\n\`\`\`bash\n${cmd}\n\`\`\`\n` : match
  })

  output = output.replace(SANDBOX_RE, (match) => {
    const registries = parseArrayProp(match, "registries")
    if (!registries.length) return match

    const blocks = registries
      .map((name) => {
        const id = extractRegistryId(name)
        const item = readRegistryItem(id)
        if (!item) return ""
        const md = toMarkdownCodeBlocks(item)
        return md ? `## Sandbox: ${id}\n${md}` : ""
      })
      .filter(Boolean)
      .join("\n\n")

    return blocks || match
  })

  output = output.replace(COMPOSED_RE, (match) => {
    const components = parseArrayProp(match, "components")
    if (!components.length) return match

    const links = components
      .map((name) => {
        const url = llmsIndex.get(name.trim().toLowerCase())
        return url ? `- [${name}](${url})` : ""
      })
      .filter(Boolean)
      .join("\n")

    return links || match
  })

  return output
}

function embedRegistryCode(fallback: string, raw: string) {
  if (!raw) return fallback
  const item = readRegistryItem(raw)
  if (!item) return fallback
  const md = toMarkdownCodeBlocks(item)
  return md || fallback
}

function extractRegistryId(input: string) {
  const value = input.trim().replace(/^\/+|\/+$/g, "")
  const parts = value.split("/").filter(Boolean)
  return parts.at(-1) ?? value
}

function readRegistryItem(id: string): RegistryItemProps | null {
  const filePath = path.join(REGISTRY_DIR, `${id}.json`)
  if (!fs.existsSync(filePath)) return null
  return JSON.parse(fs.readFileSync(filePath, "utf8")) as RegistryItemProps
}

function toMarkdownCodeBlocks(item: RegistryItemProps) {
  const files = item.files?.filter((f) => typeof f.content === "string" && f.content.trim()) ?? []
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

function codeLangFromPath(p?: string) {
  if (!p) return "txt"
  if (p.endsWith(".tsx") || p.endsWith(".ts")) return "tsx"
  if (p.endsWith(".css")) return "css"
  if (p.endsWith(".json")) return "json"
  if (p.endsWith(".md") || p.endsWith(".mdx")) return "md"
  if (p.endsWith(".php")) return "php"
  return "txt"
}

function parseArrayProp(block: string, prop: string) {
  const re = new RegExp(`${prop}\\s*=\\s*\\{\\s*\\[([\\s\\S]*?)\\]\\s*\\}`, "m")
  const match = block.match(re)
  if (!match) return []
  const body = match[1] ?? ""
  const items = Array.from(body.matchAll(/"([^"]+)"|'([^']+)'/g)).map((m) =>
    (m[1] ?? m[2] ?? "").trim(),
  )
  return items.filter(Boolean)
}

function buildLlmsUrlIndex() {
  if (!fs.existsSync(LLMS_PATH)) return new Map<string, string>()

  const text = fs.readFileSync(LLMS_PATH, "utf8")
  const map = new Map<string, string>()

  for (const m of text.matchAll(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g)) {
    const label = (m[1] ?? "").trim()
    const url = (m[2] ?? "").trim()
    if (!label || !url) continue
    map.set(label.toLowerCase(), url)
  }

  return map
}
