import { promises as fs } from "node:fs"

type Item = { slug: string; title: string }
type SubSection = { subsection: string; children: Item[] }
type Group = { section: string; children: Item[] | SubSection[] }

async function build() {
  const groups: Group[] = JSON.parse(
    await fs.readFile("src/components-search.json", "utf8")
  )

  const lines: string[] = []

  for (const group of groups) {
    const isPrologue = group.section.toLowerCase() === "prologue"

    if (isPrologue) {
      for (const item of group.children as Item[])
        lines.push(`- [${item.title}](https://intentui.com${item.slug}.md)`)
      continue
    }

    lines.push(`\n## ${group.section}`)

    const firstChild = group.children[0]

    // @ts-ignore
    if ("subsection" in firstChild) {
      for (const sub of group.children as SubSection[]) {
        lines.push(`\n### ${sub.subsection}`)
        for (const item of sub.children)
          lines.push(`- [${item.title}](https://intentui.com${item.slug}.md)`)
      }
    } else {
      for (const item of group.children as Item[])
        lines.push(`- [${item.title}](https://intentui.com${item.slug}.md)`)
    }
  }

  await fs.writeFile("public/llms.txt", lines.join("\n"))
}

build()
