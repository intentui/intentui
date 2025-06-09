import { titleCase } from "usemods"

export function title(title: string) {
  const minorWords = [
    "and",
    "but",
    "for",
    "or",
    "nor",
    "a",
    "an",
    "the",
    "as",
    "at",
    "by",
    "for",
    "in",
    "of",
    "on",
    "per",
    "to",
    "vs",
    "via",
  ]
  const spacedTitle = title
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .toLowerCase()

  return spacedTitle
    .split(" ")
    .map((word, index) => {
      const lowerWord = word.toLowerCase()
      if (
        index === 0 ||
        index === spacedTitle.split(" ").length - 1 ||
        !minorWords.includes(lowerWord)
      ) {
        return word.charAt(0).toUpperCase() + word.slice(1)
      }
      return lowerWord
    })
    .join(" ")
    .replaceAll("-", " ")
}

export function wait(number: number) {
  return new Promise((resolve) => setTimeout(resolve, number))
}

export function getSiteName(url: string): string {
  return url.replace(/^(https?:\/\/)?(www\.)?/, "").split(".")[0]!
}

export function extractJSX(code: string) {
  // biome-ignore lint/correctness/noEmptyCharacterClassInRegex: <explanation>
  const match = code.match(/return\s*(\([^]*?\)|.*?);?\s*}/)
  if (match?.[1]) {
    const jsx = match[1].replace(/^\(|\)$/g, "").trim()
    const lines = jsx.split("\n")

    if (lines.length === 1) {
      return jsx
    }

    return lines
      .map((line) => {
        // @ts-ignore
        const indent = line.match(/^\s*/)[0]
        return indent.slice(4) + line.trim()
      })
      .join("\n")
      .trim()
  }
  return null
}

export function extractImports(code: string) {
  const importRegex = /^(import\s+(?:\{[^}]*}|[^;]+)\s*from\s*['"][^'"]+['"]\s*;?)$/gm
  const matches = code.match(importRegex)
  return matches ? matches.join("\n") : ""
}

export const openInV0Url = (blockName: string) => {
  const title = titleCase(blockName.replace(/-/g, " "))
  const url = `https://intentui.com/r/block/${blockName}`
  return `https://v0.dev/chat/api/open?title=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`
}
