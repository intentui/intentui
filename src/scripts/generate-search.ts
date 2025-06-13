import { promises as fs } from "node:fs"
import path from "node:path"

export type Component = {
  slug: string
  title: string
}

export type SubSection = {
  id: number
  subsection: string
  children: Component[]
}

export type Grouped =
  | {
      id: number
      section: string
      children: Component[]
    }
  | {
      id: number
      section: string
      children: SubSection[]
    }

const sectionOrder = ["prologue", "getting-started", "dark-mode", "components"]

async function walk(dir: string, basePath: string): Promise<string[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const files: string[] = []

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      const nested = await walk(fullPath, basePath)
      files.push(...nested)
    } else if (entry.isFile() && entry.name.endsWith(".mdx")) {
      files.push(path.relative(basePath, fullPath))
    }
  }

  return files
}

function titleize(name: string): string {
  return name
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ")
}

async function generate() {
  const basePath = path.join(process.cwd(), "src/content/docs")
  const files = await walk(basePath, basePath)

  const normalGroups: Record<string, Component[]> = {}
  const componentSubGroups: Record<string, Component[]> = {}

  for (const file of files) {
    const parts = file.split(path.sep)
    const section = String(parts[0]).toLowerCase()
    const name = path.basename(file, ".mdx")
    const slug = `/docs/${file.replace(/\.mdx$/, "").replace(/\\/g, "/")}`
    const title = name === "cli" ? "CLI" : titleize(name)

    if (section === "components") {
      const subsection = parts[1]
      const key = String(subsection).toLowerCase()
      if (!componentSubGroups[key]) componentSubGroups[key] = []
      componentSubGroups[key].push({ slug, title })
    } else {
      if (!normalGroups[section]) normalGroups[section] = []
      normalGroups[section].push({ slug, title })
    }
  }

  const result: Grouped[] = sectionOrder.map((section, index) => {
    if (section === "components") {
      const children: SubSection[] = Object.entries(componentSubGroups)
        .sort(([a], [b]) => titleize(a).localeCompare(titleize(b)))
        .map(([sub, items], subIndex) => ({
          id: subIndex + 1,
          subsection: titleize(sub),
          children: items,
        }))

      return {
        id: index + 1,
        section: titleize(section),
        children,
      }
    }

    return {
      id: index + 1,
      section: titleize(section),
      children: normalGroups[section] ?? [],
    }
  })

  await fs.writeFile("src/components-search.json", JSON.stringify(result, null, 2))
}

generate()
