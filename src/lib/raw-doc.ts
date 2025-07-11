import { readFile } from "node:fs/promises"
import { join, resolve } from "node:path"

const DOCS_DIR = resolve(process.cwd(), "src", "content", "docs")

export async function getRawDoc(slug: string[]) {
  const base = join(DOCS_DIR, ...slug)
  try {
    return await readFile(`${base}.mdx`, "utf8")
  } catch {
    try {
      return await readFile(`${base}.md`, "utf8")
    } catch {
      return null
    }
  }
}
