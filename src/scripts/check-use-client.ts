import fs from "node:fs"
import path from "node:path"

const directoryPath = "./components/docs"

function findFilesWithoutUseClient(dirPath: string): void {
  fs.readdir(dirPath, { withFileTypes: true }, (err, files) => {
    if (err) {
      console.error(`Unable to scan directory: ${err}`)
      return
    }

    for (const file of files) {
      const fullPath = path.join(dirPath, file.name)

      if (file.isDirectory()) {
        findFilesWithoutUseClient(fullPath)
      } else if (file.name.endsWith(".tsx") || file.name.endsWith(".ts")) {
        fs.readFile(fullPath, "utf8", (err, content) => {
          if (err) {
            console.error(`Unable to read file: ${err}`)
            return
          }

          if (!content.includes('"use client"') && !content.includes("use client")) {
            console.info(`Component does not contain 'use client': ${fullPath}`)
          }
        })
      }
    }
  })
}

findFilesWithoutUseClient(directoryPath)
