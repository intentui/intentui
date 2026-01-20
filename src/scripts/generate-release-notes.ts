import { execSync } from "node:child_process"
import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs"
import { basename, join, resolve } from "node:path"

const UI_COMPONENTS_PATH = "src/components/ui"
const DOCS_COMPONENTS_PATH = "src/components/docs"
const PRE_BLOCKS_PATH = "src/app/pre-blocks"
const MDX_DOCS_PATH = "src/content/docs/components"
const OUTPUT_PATH = resolve(process.cwd(), "src/json/release-notes.json")
const SEARCH_SCRIPT_PATH = resolve(process.cwd(), "src/scripts/generate-search.ts")

function toName(filename: string): string {
  const withoutExt = filename.replace(".tsx", "")
  const words = withoutExt.split("-").join(" ")
  return words.charAt(0).toUpperCase() + words.slice(1)
}

function walkMdxFiles(dir: string): string[] {
  const files: string[] = []
  const entries = readdirSync(dir)

  for (const entry of entries) {
    const fullPath = join(dir, entry)
    const stat = statSync(fullPath)

    if (stat.isDirectory()) {
      files.push(...walkMdxFiles(fullPath))
    } else if (entry.endsWith(".mdx")) {
      files.push(fullPath)
    }
  }

  return files
}

function findUrlAndCategoryForDemo(demoFile: string): { url: string; category: string } {
  const relativePath = demoFile.replace(`${DOCS_COMPONENTS_PATH}/`, "").replace(".tsx", "")
  const parts = relativePath.split("/")
  const docsCategory = parts[0]
  const demoName = parts[parts.length - 1]

  const mdxFiles = walkMdxFiles(resolve(process.cwd(), MDX_DOCS_PATH))

  for (const mdxFile of mdxFiles) {
    const content = readFileSync(mdxFile, "utf-8")
    const searchPattern = `toUse="${docsCategory}/`

    if (content.includes(searchPattern) && content.includes(demoName)) {
      const mdxName = basename(mdxFile, ".mdx")
      const mdxRelative = mdxFile.replace(resolve(process.cwd(), MDX_DOCS_PATH) + "/", "")
      const category = mdxRelative.split("/")[0]
      return { url: `/${mdxName}`, category }
    }
  }

  return { url: `/${demoName.replace(/-demo$/, "")}`, category: docsCategory }
}

function findCategoryForComponent(componentName: string): string {
  const mdxFiles = walkMdxFiles(resolve(process.cwd(), MDX_DOCS_PATH))

  for (const mdxFile of mdxFiles) {
    const mdxName = basename(mdxFile, ".mdx")
    if (mdxName === componentName) {
      const mdxRelative = mdxFile.replace(resolve(process.cwd(), MDX_DOCS_PATH) + "/", "")
      return mdxRelative.split("/")[0]
    }
  }

  return "unknown"
}

function getDiffStats(file: string): { additions: number; deletions: number } {
  let additions = 0
  let deletions = 0

  try {
    const diff = execSync(`git diff --numstat ${file}`, { encoding: "utf-8" }).trim()
    if (diff) {
      const [add, del] = diff.split("\t")
      additions = Number.parseInt(add, 10) || 0
      deletions = Number.parseInt(del, 10) || 0
    }
  } catch {
    try {
      const stagedDiff = execSync(`git diff --cached --numstat ${file}`, { encoding: "utf-8" }).trim()
      if (stagedDiff) {
        const [add, del] = stagedDiff.split("\t")
        additions = Number.parseInt(add, 10) || 0
        deletions = Number.parseInt(del, 10) || 0
      }
    } catch {}
  }

  return { additions, deletions }
}

function getChangedComponents(): ReleaseNote[] {
  const changes: ReleaseNote[] = []
  const date = new Date().toISOString().split("T")[0]

  try {
    const status = execSync(`git status --porcelain ${UI_COMPONENTS_PATH} ${DOCS_COMPONENTS_PATH} ${PRE_BLOCKS_PATH}`, { encoding: "utf-8" })

    if (!status.trim()) {
      console.log("No changes detected in src/components/ui/, src/components/docs/, or src/app/pre-blocks/")
      return []
    }

    const files = status
      .trim()
      .split("\n")
      .map((line) => {
        const parts = line.trim().split(/\s+/)
        const statusFlag = parts[0]
        const filePath = parts[parts.length - 1]
        return { statusFlag, filePath }
      })
      .filter(({ filePath }) => filePath.endsWith(".tsx"))

    for (const { statusFlag, filePath: file } of files) {
      let component: string
      let url: string
      let type: "component" | "demo" | "block"
      let category: string
      let displayName: string

      if (file.startsWith(UI_COMPONENTS_PATH)) {
        component = file.replace(`${UI_COMPONENTS_PATH}/`, "")
        url = `/${component.replace(".tsx", "")}`
        type = "component"
        category = findCategoryForComponent(component.replace(".tsx", ""))
        displayName = toName(component)
      } else if (file.startsWith(DOCS_COMPONENTS_PATH)) {
        const parts = file.replace(`${DOCS_COMPONENTS_PATH}/`, "").split("/")
        component = parts[parts.length - 1]
        const result = findUrlAndCategoryForDemo(file)
        url = result.url
        category = result.category
        type = "demo"
        displayName = toName(component)
      } else if (file.startsWith(PRE_BLOCKS_PATH)) {
        // Handle pre-blocks: src/app/pre-blocks/{category}/{block-name}/page.tsx
        const relativePath = file.replace(`${PRE_BLOCKS_PATH}/`, "")
        const parts = relativePath.split("/")
        category = parts[0] // e.g., "auth", "navbar"
        const blockName = parts[1] // e.g., "auth-02"
        component = `${blockName}/page.tsx`
        url = `/pre-blocks/${category}/${blockName}`
        type = "block"
        displayName = toName(blockName)
      } else {
        continue
      }

      const { additions, deletions } = getDiffStats(file)

      // Determine kind based on git status flag
      // A = added (new), M = modified (improvement), AM = added + modified (new)
      const isNew = statusFlag.includes("A") || statusFlag.startsWith("?")
      const kind = isNew ? "new" : "improvement"

      changes.push({
        name: displayName,
        component,
        url,
        type,
        category,
        kind,
        description: null,
        additions,
        deletions,
        date
      })
    }
  } catch (error) {
    console.error("Error getting git status:", error)
  }

  return changes
}

function updateSearchScript(components: string[]) {
  const content = readFileSync(SEARCH_SCRIPT_PATH, "utf-8")

  const regex = /const rawStatusMap: Record<"new" \| "updated" \| "beta" \| "alpha", string\[\]> = \{[\s\S]*?\n\}/
  const match = content.match(regex)

  if (!match) {
    console.error("Could not find rawStatusMap in generate-search.ts")
    return
  }

  const newStatusMap = `const rawStatusMap: Record<"new" | "updated" | "beta" | "alpha", string[]> = {
  new: [],
  updated: [${components.map((c) => `"${c}"`).join(", ")}],
  beta: [],
  alpha: [],
}`

  const updated = content.replace(regex, newStatusMap)
  writeFileSync(SEARCH_SCRIPT_PATH, updated)
  console.log("Updated rawStatusMap in generate-search.ts")
}

function main() {
  const changes = getChangedComponents()

  if (changes.length === 0) {
    console.log("No release notes to generate.")
    return
  }

  let existingNotes: ReleaseNote[] = []
  try {
    const existingContent = readFileSync(OUTPUT_PATH, "utf-8")
    existingNotes = JSON.parse(existingContent)
  } catch {}

  const changeKeys = new Set(changes.map((c) => `${c.component}-${c.date}`))
  const filteredExisting = existingNotes.filter((note) => !changeKeys.has(`${note.component}-${note.date}`))

  const merged = [...changes, ...filteredExisting].sort((a, b) => b.date.localeCompare(a.date))

  writeFileSync(OUTPUT_PATH, JSON.stringify(merged, null, 2))
  console.log(`Generated release notes for ${changes.length} change(s):`)
  for (const change of changes) {
    console.log(`  - ${change.name} (${change.type}) ${change.url}: +${change.additions} -${change.deletions}`)
  }
  console.log(`Total entries: ${merged.length}`)

  // Only update search script for components, not demos or blocks
  const componentChanges = changes.filter((c) => c.type === "component")
  if (componentChanges.length > 0) {
    const componentNames = [...new Set(componentChanges.map((c) => c.url.replace("/", "")))]
    updateSearchScript(componentNames)
  }
}

main()
