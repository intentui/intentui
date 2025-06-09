import { file, write } from "bun"

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
  const outputFile = "public/r/index.json"

  try {
    const fileContent = await file(inputFile).text()
    const jsonData: RegistryData = JSON.parse(fileContent)

    const componentItems = jsonData.items.filter((item) => item.type === "registry:component")

    await write(outputFile, JSON.stringify(componentItems, null, 2))
    console.info(`Successfully filtered components and wrote to ${outputFile}`)
  } catch (error) {
    console.error("An error occurred:", error)
  }
}

filterAndWriteComponents()
