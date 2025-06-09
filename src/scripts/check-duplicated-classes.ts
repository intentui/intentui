import fs from "node:fs"
import path from "node:path"

/**
 * Function to get all .tsx files in a directory and its subdirectories and return an array of file paths
 * @param dir - The directory to scan for .tsx files
 * @param fileList
 */
const get = (dir: string, fileList: string[] = []): string[] => {
  const files = fs.readdirSync(dir)

  for (const file of files) {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)

    if (stat.isDirectory()) {
      get(filePath, fileList)
    } else if (filePath.endsWith(".tsx")) {
      fileList.push(filePath)
    }
  }

  return fileList
}

/**
 * Function to find duplicate classes in a string and return an array of objects with the tag and duplicate classes
 * @param content - The string to search for duplicate classes
 * @returns An array of objects with the tag and duplicate classes
 */
const find = (content: string): { tag: string; duplicateClasses: string[] }[] => {
  const classRegex = /<([a-zA-Z0-9]+)([^>]*)\bclass(Name)?="([^"]*)"/g
  const duplicates: { tag: string; duplicateClasses: string[] }[] = []

  let match = classRegex.exec(content)
  while (match) {
    const tag = match[1]
    const rawClasses = match[4]
    const classes = rawClasses?.split(/\s+/)
    const seen = new Set<string>()
    const tagDuplicates: string[] = []

    if (classes) {
      for (const cls of classes) {
        if (seen.has(cls)) {
          tagDuplicates.push(cls)
        } else {
          seen.add(cls)
        }
      }
    }

    if (tagDuplicates.length > 0) {
      // @ts-ignore
      duplicates.push({ tag, duplicateClasses: tagDuplicates })
    }

    match = classRegex.exec(content)
  }

  return duplicates
}

/**
 * Function to scan directories recursively for duplicate classes
 * @param directories
 */
const detect = (directories: string[]) => {
  const results: { file: string; tag: string; duplicates: string[] }[] = []

  for (const dir of directories) {
    const files = get(dir)

    for (const file of files) {
      const content = fs.readFileSync(file, "utf-8")
      const duplicates = find(content)

      for (const { tag, duplicateClasses } of duplicates) {
        if (duplicateClasses.length > 0) {
          results.push({
            file,
            tag,
            duplicates: duplicateClasses,
          })
        }
      }
    }
  }

  if (results.length > 0) {
    console.table(
      results.map(({ file, tag, duplicates }) => ({
        File: file,
        Tag: tag,
        "Duplicate Classes": duplicates.join(", "),
      })),
    )
  } else {
    console.info("————————————————————————————————")
    console.info("👌 No duplicate classes found.")
    console.info("————————————————————————————————")
  }
}

/**
 * Directory to scan for duplicate classes
 */
const directoriesToScan = ["app", "components"]

detect(directoriesToScan)
