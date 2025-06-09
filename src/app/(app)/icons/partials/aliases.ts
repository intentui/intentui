import * as icons from "@intentui/icons"

/**
 * Common aliases for icons
 */
const commonAliases = {
  storage: ["storage", "server", "database"],
  person: ["person", "people", "user", "profile", "account"],
  archive: ["storage", "box", "inbox", "folder", "file", "document"],
  music: ["audio", "sound", "music", "melody", "tune", "song"],
} satisfies Record<string, string[]>

/**
 * Base aliases for icons
 */
const baseAliases: Record<string, string[]> = {
  fill: ["filled", "solid"],
  arrow: ["direction", "navigate", "arrow", "chevron", "caret"],
  academic: ["graduation", "education", "degree", "graduate", "university", "school"],
  accessible: ["wheelchair", "disability", "accessibility", "inclusive", "support"],
  cart: ["shopping", "cart", "purchase", "buy", "store", "checkout"],
  audio: [...commonAliases.music],
  music: [...commonAliases.music],
  settings: ["settings", "control", "adjust", "configure", "preferences"],
  floppy: ["save"],
  database: [...commonAliases.storage],
  server: [...commonAliases.storage],
  storage: [...commonAliases.storage],
  person: [...commonAliases.person],
  people: [...commonAliases.person],
  user: [...commonAliases.person],
  camera: ["photo", "video", "record", "snapshot", "lens"],
  lock: ["secure", "privacy", "safe", "protection", "vault"],
  shield: ["secure", "privacy", "safe", "protection", "vault"],
  support: ["help", "question", "info", "service", "support", "faq"],
  question: ["help", "question", "info", "service", "support", "faq"],
  exclamation: ["alert", "warning", "error", "problem", "issue"],
  info: ["alert", "warning", "error", "problem", "issue"],
  inbox: ["storage", "box", "archive", "folder", "file", "document"],
}

const generateAliases = (iconKeys: string[]): Record<string, string[]> => {
  return iconKeys.reduce(
    (acc, icon) => {
      const name = icon.toLowerCase()
      const isFill = name.endsWith("fill") // Only check if it ends with "fill"
      const typeKey = Object.keys(baseAliases).find((key) => name.includes(key)) || null

      acc[icon] = [...(typeKey ? baseAliases[typeKey]! : []), ...(isFill ? baseAliases.fill : [])!]

      return acc
    },
    {} as Record<string, string[]>,
  )
}

const aliases = generateAliases(Object.keys(icons))

export const aliasLookup = Object.entries(aliases).reduce(
  (acc, [iconName, aliasList]) => {
    for (const alias of aliasList) {
      const lowerAlias = alias.toLowerCase()
      acc[lowerAlias] = acc[lowerAlias] || []
      acc[lowerAlias].push(iconName)
    }

    return acc
  },
  {} as Record<string, string[]>,
)
