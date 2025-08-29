import fs from "node:fs"
import path from "node:path"
import { makeRegistry } from "./make-registry"
import { baseTheme } from "./styles/base-theme"
import { blueDark, blueLight } from "./styles/blue"
import { defaultDark, defaultLight } from "./styles/default"
import { emeraldDark, emeraldLight } from "./styles/emerald"
import { indigoDark, indigoLight } from "./styles/indigo"
import { skyDark, skyLight } from "./styles/sky"

makeRegistry()

const registryUrl = process.env.VERCEL_URL ? "https://intentui.com" : "http://localhost:3000"

const customCSS = {
  "@layer base": {
    "*, ::after, ::before, ::backdrop, ::file-selector-button": {
      "border-color": "var(--border, currentColor)",
    },
    "*": {
      "scrollbar-width": "thin",
      "scrollbar-color": "var(--border) transparent",
    },
    html: {
      "font-feature-settings": '"cv02", "cv03", "cv04", "cv11"',
      "font-variation-settings": "normal",
      "scroll-behavior": "smooth",
      height: "100%",
      "-webkit-font-smoothing": "antialiased",
      "-moz-osx-font-smoothing": "grayscale",
      "-webkit-tap-highlight-color": "transparent",
    },
    body: { "background-color": "var(--bg)", color: "var(--fg)" },
    "::-webkit-scrollbar": { width: "4px" },
    "::-webkit-scrollbar-track": { background: "transparent" },
    "::-webkit-scrollbar-thumb": {
      background: "var(--border)",
      "border-radius": "4px",
    },
  },
}

type RegistryType =
  | "registry:block"
  | "registry:component"
  | "registry:lib"
  | "registry:hook"
  | "registry:ui"
  | "registry:page"
  | "registry:file"
  | "registry:style"
  | "registry:theme"

type RegistryJsonItem = {
  name: string
  extends?: "none"
  type: RegistryType
  cssVars?: Record<string, any>
  title: string
  description: string
  dependencies: string[]
  registryDependencies: string[]
  css: Record<string, any>
  files: {
    content?: string
    path: string
    type: RegistryType
  }[]
}

const registryBaseStyle = {
  extends: "none",
  name: "style-default",
  type: "registry:style",
  title: "Base style",
  dependencies: [
    "tw-animate-css",
    "@intentui/icons",
    "tailwindcss-react-aria-components",
    "react-aria-components",
    "tailwind-merge",
  ],
  registryDependencies: ["@intentui/lib/primitive"],
  files: [],
  description: "",
  css: customCSS,
  cssVars: {
    theme: baseTheme,
    light: defaultLight,
    dark: defaultDark,
  },
} satisfies RegistryJsonItem

const registryBlueStyle = {
  ...registryBaseStyle,
  name: "style-blue",
  cssVars: {
    theme: baseTheme,
    light: blueLight,
    dark: blueDark,
  },
  title: "Blue style",
} satisfies RegistryJsonItem

const registrySkyStyle = {
  ...registryBaseStyle,
  name: "style-sky",
  title: "Sky style",
  cssVars: {
    theme: baseTheme,
    light: skyLight,
    dark: skyDark,
  },
} satisfies RegistryJsonItem

const registryIndigoStyle = {
  ...registryBaseStyle,
  name: "style-indigo",
  title: "Indigo style",
  cssVars: {
    theme: baseTheme,
    light: indigoLight,
    dark: indigoDark,
  },
} satisfies RegistryJsonItem

const registryEmeraldStyle = {
  ...registryBaseStyle,
  name: "style-emerald",
  title: "Emerald style",
  cssVars: {
    theme: baseTheme,
    light: emeraldLight,
    dark: emeraldDark,
  },
} satisfies RegistryJsonItem

type IntermediateRegistryItem = Partial<RegistryJsonItem> & {
  filePath: string
  internalImportPaths?: string[]
}

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)

const extractExternalDependencies = (content: string): string[] => {
  const importRegex = /import(?: | .* from )['"]([^'"]+)['"]/g
  const dependencies = new Set<string>()
  let match: RegExpExecArray | null
  while (true) {
    match = importRegex.exec(content)
    if (match === null) {
      break
    }
    const importPath = match[1]
    if (typeof importPath !== "string") {
      continue
    }
    if (
      !importPath.startsWith(".") &&
      !importPath.startsWith("@/") &&
      !importPath.startsWith("node:") &&
      ![
        "react",
        "react-dom",
        "clsx",
        "tailwind-merge",
        "next",
        "next/image",
        "embla-carousel-react",
      ].includes(importPath)
    ) {
      let dep = importPath === "motion/react" ? "motion" : importPath
      if (dep.startsWith("recharts/")) {
        dep = "recharts"
      }
      dependencies.add(dep)
    }
  }
  return Array.from(dependencies).sort()
}

const extractInternalDependencyPaths = (
  content: string,
  currentFilePath: string,
  projectRoot: string,
): string[] => {
  const importRegex = /import[\s\S]*?from\s+['"]([^'"]+)['"]/g
  const internalImportsRaw = new Set<string>()
  let match: RegExpExecArray | null
  while ((match = importRegex.exec(content)) !== null) {
    const rawImport = match[1]
    if (rawImport && (rawImport.startsWith("@/") || rawImport.startsWith("."))) {
      internalImportsRaw.add(rawImport)
    }
  }
  const resolvedPaths = new Set<string>()
  for (const rawImport of internalImportsRaw) {
    const basePath = rawImport.startsWith("@/")
      ? path.resolve(projectRoot, "src", rawImport.slice(2))
      : path.resolve(path.dirname(currentFilePath), rawImport)
    const potentialPaths = [
      `${basePath}.ts`,
      `${basePath}.tsx`,
      path.join(basePath, "index.ts"),
      path.join(basePath, "index.tsx"),
    ]
    for (const p of potentialPaths) {
      if (fs.existsSync(p)) {
        if (path.resolve(p) !== path.resolve(currentFilePath)) {
          resolvedPaths.add(path.resolve(p))
          break
        }
      }
    }
  }
  return Array.from(resolvedPaths)
}

const keyToSpecifier = (key: string): string => {
  const idx = key.indexOf("-")
  if (idx < 0) return key
  const prefix = key.slice(0, idx)
  const rest = key.slice(idx + 1)
  if (prefix === "ui") return `@intentui/ui/${rest}`
  if (prefix === "hook") return `@intentui/hooks/${rest}`
  if (prefix === "lib") return `@intentui/lib/${rest}`
  if (prefix === "block") return `@intentui/blocks/${rest}`
  if (prefix === "page") return `@intentui/pages/${rest}`
  if (prefix === "style") return `@intentui/styles/${rest}`
  if (prefix === "theme") return `@intentui/themes/${rest}`
  return `@intentui/${prefix}/${rest}`
}

const generateComponentRegistry = () => {
  const registryJsonPath = "registry.json"
  const projectRoot = process.cwd()
  const docsPath = "src/components/docs"

  const blockSources = fs.readdirSync(docsPath, { withFileTypes: true }).flatMap((entry) =>
    entry.isDirectory()
      ? fs
        .readdirSync(path.join(docsPath, entry.name), { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => ({
          type: "block",
          path: path.join(docsPath, entry.name, dirent.name),
        }))
      : [],
  )

  const sources = [
    ...blockSources,
    { type: "ui", path: "src/components/ui" },
    { type: "lib", path: "src/lib" },
    { type: "hook", path: "src/hooks" },
  ]

  const getAllFiles = (dirPath: string, arrayOfFiles: string[] = []): string[] => {
    if (!fs.existsSync(dirPath)) {
      return []
    }
    const files = fs.readdirSync(dirPath)
    for (const file of files) {
      const fullPath = path.join(dirPath, file)
      if (fs.statSync(fullPath).isDirectory()) {
        getAllFiles(fullPath, arrayOfFiles)
      } else if (file.endsWith(".tsx") || file.endsWith(".ts")) {
        arrayOfFiles.push(path.resolve(fullPath))
      }
    }
    return arrayOfFiles
  }

  const intermediateData: Map<string, IntermediateRegistryItem> = new Map()
  const filePathToKeyMap: Map<string, string> = new Map()

  for (const { type, path: sourcePath } of sources) {
    const absoluteSourcePath = path.resolve(sourcePath)
    const componentFiles = getAllFiles(absoluteSourcePath)
    for (const absoluteFilePath of componentFiles) {
      const componentBaseName = path.basename(absoluteFilePath, path.extname(absoluteFilePath))
      const fileContent = fs.readFileSync(absoluteFilePath, "utf-8")
      const relativePathFromRoot = path.relative(projectRoot, absoluteFilePath).replace(/\\/g, "/")
      const relativeKey = path
        .relative(absoluteSourcePath, absoluteFilePath)
        .replace(/\\/g, "/")
        .replace(/\.(tsx|ts)$/, "")
      const nameKey = `${type}-${relativeKey}`
      if (!nameKey) {
        continue
      }
      filePathToKeyMap.set(absoluteFilePath, nameKey)
      const externalDeps = extractExternalDependencies(fileContent)
      const internalDepPaths = extractInternalDependencyPaths(
        fileContent,
        absoluteFilePath,
        projectRoot,
      )
      let whatType: IntermediateRegistryItem["type"]
      switch (true) {
        case nameKey.startsWith("ui-"):
          whatType = "registry:component"
          break
        case nameKey.startsWith("block-"):
          whatType = "registry:block"
          break
        case nameKey.startsWith("lib-"):
          whatType = "registry:lib"
          break
        case nameKey.startsWith("hook-"):
          whatType = "registry:hook"
          break
        default:
          if (type === "ui") whatType = "registry:component"
          else if (type === "block") whatType = "registry:block"
          else if (type === "lib") whatType = "registry:lib"
          else whatType = "registry:file"
      }
      const item: IntermediateRegistryItem = {
        filePath: absoluteFilePath,
        name: nameKey,
        type: whatType,
        title: capitalize(componentBaseName.replace(/-/g, " ")),
        description: "",
        dependencies: externalDeps,
        files: [{ path: relativePathFromRoot, type: whatType }],
        internalImportPaths: internalDepPaths,
        registryDependencies: [],
      }
      intermediateData.set(nameKey, item)
    }
  }

  for (const item of intermediateData.values()) {
    const resolvedRegistryDeps = new Set<string>()
    if (item.internalImportPaths) {
      for (const importPath of item.internalImportPaths) {
        const dependencyKey = filePathToKeyMap.get(importPath)
        if (dependencyKey) {
          resolvedRegistryDeps.add(keyToSpecifier(dependencyKey))
        }
      }
    }
    if (item.registryDependencies) {
      item.registryDependencies = Array.from(resolvedRegistryDeps).sort()
    }
  }

  const themes: RegistryJsonItem[] = [
    registryBaseStyle,
    registryBlueStyle,
    registrySkyStyle,
    registryIndigoStyle,
    registryEmeraldStyle,
  ]

  const finalRegistryItems: RegistryJsonItem[] = [
    ...themes,
    ...Array.from(intermediateData.values()).map((item) => {
      const { filePath, internalImportPaths, ...rest } = item
      return {
        name: rest.name || "",
        type: item.type,
        title: rest.title || "",
        description: rest.description || "",
        dependencies: rest.dependencies || [],
        registryDependencies: rest.registryDependencies || [],
        files: rest.files || [],
      } as RegistryJsonItem
    }),
  ]

  finalRegistryItems.sort((a, b) => a.name.localeCompare(b.name))

  const registryJsonObject = {
    $schema: "https://ui.shadcn.com/schema/registry.json",
    name: "intentui",
    homepage: "https://intentui.com",
    items: finalRegistryItems,
  }

  fs.writeFileSync("registry.json", JSON.stringify(registryJsonObject, null, 2))
}

generateComponentRegistry()
