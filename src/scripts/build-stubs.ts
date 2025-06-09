import * as fs from "node:fs"
import path from "node:path"

const inputDir = path.join(__dirname, "../stubs")
const outputDir = "public/stubs"

function getAllFiles(dir: string, basePath = ""): string[] {
  let files: string[] = []
  for (const file of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, file)
    const relativePath = path.join(basePath, file)
    if (fs.statSync(fullPath).isDirectory()) {
      files = files.concat(getAllFiles(fullPath, relativePath))
    } else {
      files.push(relativePath)
    }
  }

  return files
}

function buildStubs() {
  const files = getAllFiles(inputDir)
  for (const file of files) {
    const filePath = path.join(inputDir, file)
    const content = fs.readFileSync(filePath, "utf-8")

    const stubJson = {
      name: file,
      files: [
        {
          name: file,
          content,
        },
      ],
    }

    const outputFilePath = path.join(outputDir, file.replace(/\.stub$/, ".json"))

    const outputDirPath = path.dirname(outputFilePath)
    if (!fs.existsSync(outputDirPath)) {
      fs.mkdirSync(outputDirPath, { recursive: true })
    }

    fs.writeFileSync(outputFilePath, JSON.stringify(stubJson, null, 2))
  }
}

buildStubs()
