import { promises as fs } from "node:fs"
import path from "node:path"

interface FileItem {
  path: string
  type: string
}

interface RegistryItem {
  name: string
  type: string
  title: string
  description: string
  dependencies: string[]
  registryDependencies: string[]
  files: FileItem[]
}

interface RegistryData {
  $schema: string
  name: string
  homepage: string
  items: RegistryItem[]
}

async function filterAndWriteComponents() {
  const inputFile = "registry.json"
  const outputFile = path.join("public", "r", "index.json")

  try {
    const fileContent = await fs.readFile(inputFile, "utf8")
    const jsonData: RegistryData = JSON.parse(fileContent)

    const componentItems = jsonData.items.filter((item) => item.type === "registry:component")

    await fs.mkdir(path.dirname(outputFile), { recursive: true })
    await fs.writeFile(outputFile, JSON.stringify(componentItems, null, 2), "utf8")
    console.info(`Successfully filtered components and wrote to ${outputFile}`)
  } catch (error) {
    console.error("An error occurred:", error)
  }
}

filterAndWriteComponents()
