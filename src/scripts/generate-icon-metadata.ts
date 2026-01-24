#!/usr/bin/env node

import { writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

async function generateIconMetadata() {
  console.log("🎨 Generating icon metadata...")

  try {
    const icons = await import("@intentui/icons")

    const iconMetadata = Object.keys(icons)
      .filter((key) => key !== "default")
      .map((name) => ({
        name,
        isSolid: name.toLowerCase().endsWith("fill"),
        importPath: `@intentui/icons/${name}`,
      }))
      .sort((a, b) => a.name.localeCompare(b.name))

    const outputDir = join(__dirname, "..", "generated")
    const outputPath = join(outputDir, "icon-metadata.json")

    await import("node:fs/promises").then((fs) => fs.mkdir(outputDir, { recursive: true }))

    writeFileSync(
      outputPath,
      JSON.stringify(
        {
          icons: iconMetadata,
          generated: new Date().toISOString(),
          count: iconMetadata.length,
        },
        null,
        2,
      ),
    )

    console.log(`✅ Generated metadata for ${iconMetadata.length} icons`)
    console.log(`📝 Output: ${outputPath}`)
  } catch (error) {
    console.error("❌ Error generating icon metadata:", error)
    process.exit(1)
  }
}

generateIconMetadata()
