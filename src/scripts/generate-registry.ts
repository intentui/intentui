import "dotenv/config"
import { promises as fs } from "fs"
import path from "path"
import { registryItemSchema, registrySchema } from "shadcn/schema"
import { builtinModules } from "node:module"
import { titleCase } from "usemods";
import * as process from "node:process";
import { baseTheme } from "@/scripts/styles/base-theme";
import { defaultDark, defaultLight } from "@/scripts/styles/default";
import { blueDark, blueLight } from "@/scripts/styles/blue";
import { skyDark, skyLight } from "@/scripts/styles/sky";
import { indigoDark, indigoLight } from "@/scripts/styles/indigo";
import { emeraldDark, emeraldLight } from "@/scripts/styles/emerald";
import { makeRegistry } from "@/scripts/make-registry";

makeRegistry()

const LIB_ALLOW = ["number", "date", "primitive"]
const HOOKS_ALLOW = ["use-media-query", "use-theme"]
const REGISTRY_NAME = process.env.REGISTRY_NAME || "intentui"
const REGISTRY_HOMEPAGE = process.env.NEXT_PUBLIC_APP_URL
const REGISTRY_STYLE = process.env.REGISTRY_STYLE || "blocks"
const REGISTRY_IMPORT_PREFIX = process.env.REGISTRY_IMPORT_PREFIX || "@/registry"
const PAGE_TARGET_ROOT = process.env.PAGE_TARGET_ROOT || "app"

const ROOT = process.cwd()
const UI_DIR = path.resolve(ROOT, "src/components/ui")
const DEMO_DIR = path.resolve(ROOT, "src/components/docs")
const LIB_DIR = path.resolve(ROOT, "src/lib")
const HOOKS_DIR = path.resolve(ROOT, "src/hooks")
const BLOCKS_DIR = path.resolve(ROOT, "src/app/pre-blocks")
const STAGE_DIR = path.resolve(ROOT, "registry")


const customCSS = {
  "@plugin tailwindcss-react-aria-components": {},

  "@layer base": {
    "*, ::after, ::before, ::backdrop, ::file-selector-button": {
      "border-color": "var(--border, currentColor)",
    },
    "*": {
      "scrollbar-width": "thin",
      "scrollbar-color": "var(--border) transparent",
    },
    html: {
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

  "@utility touch-target": {
      "position": "relative",
      "&::before": {
        "content": "\"\"",
        "position": "absolute",
        "display": "block",
        "top": "50%",
        "left": "50%",
        "transform": "translate(-50%, -50%)",
        "width": "100%",
        "height": "100%",
        "min-height": "44px",
        "min-width": "44px",
        "z-index": "9999"
      }
  },

  "@keyframes disclosure-expanded": {
    from: { height: "0" },
    to: { height: "var(--disclosure-height)" }
  },
  "@keyframes disclosure-collapsed": {
    from: { height: "var(--disclosure-height)" },
    to: { height: "0" }
  },
}

const themeDefs = [
  ["theme-default", defaultLight, defaultDark],
  ["theme-blue", blueLight, blueDark],
  ["theme-sky", skyLight, skyDark],
  ["theme-indigo", indigoLight, indigoDark],
  ["theme-emerald", emeraldLight, emeraldDark],
]

type Token = Record<string, string>

const makeThemeItem = (name: string, light: Token, dark: Token) => {
  const base = {
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
    name,
    type: "registry:style",
    cssVars: {
      theme: {
        ...baseTheme,
        "animate-disclosure-collapsed": "disclosure-collapsed 0.2s ease-out",
        "animate-disclosure-expanded": "disclosure-expanded 0.2s ease-out"
      },
      light,
      dark
    }
  }
  if (name === "theme-default") {
    return registryItemSchema.parse({
      ...base,
      dependencies: ["tailwindcss-react-aria-components", "tw-animate-css"],
      css: customCSS
    })
  }
  return registryItemSchema.parse(base)
}

const themeItems = themeDefs.map(([name, light, dark]) =>
  makeThemeItem(name as string, light as Token, dark as Token)
)


const read = async (p: string) => fs.readFile(p, "utf8")
const write = async (p: string, c: string) => {
  await fs.mkdir(path.dirname(p), { recursive: true })
  await fs.writeFile(p, c, "utf8")
}
const exists = async (p: string) => !!(await fs.stat(p).catch(() => false))
const toPosix = (p: string) => p.split(path.sep).join("/")
const stripExt = (p: string) => p.replace(/\.[^.]+$/, "")
const stripTrailingIndex = (p: string) => p.replace(/\/index$/, "")
const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")

const listFiles = async (dir: string) => {
  const out: string[] = []
  const stack = [dir]
  while (stack.length) {
    const d = stack.pop()!
    if (!(await exists(d))) continue
    const entries = await fs.readdir(d, { withFileTypes: true })
    for (const e of entries) {
      const full = path.join(d, e.name)
      if (e.isDirectory()) stack.push(full)
      else if (/\.(tsx|ts)$/.test(e.name) && !/\.d\.ts$/.test(e.name)) out.push(full)
    }
  }
  return out
}

const importSpecifiers = (code: string) => {
  const re = /(?:import|export)\s+(?:[^'"]*from\s*)?["']([^"']+)["']|import\(\s*["']([^"']+)["']\s*\)/g
  const set = new Set<string>()
  let m
  // @ts-ignore
  while ((m = re.exec(code))) set.add((m[1] || m[2]).trim())
  return [...set]
}

const resolveLocalPath = async (fromFile: string, spec: string) => {
  const base = path.dirname(fromFile)
  const candidates = [
    path.resolve(base, `${spec}.tsx`),
    path.resolve(base, `${spec}.ts`),
    path.resolve(base, `${spec}/index.tsx`),
    path.resolve(base, `${spec}/index.ts`),
  ]
  for (const c of candidates) if (await exists(c)) return c
  return null
}

const resolveWithin = async (baseDir: string, rel: string) => {
  const clean = rel.replace(/^\/+/, "")
  const candidates = [
    path.join(baseDir, `${clean}.tsx`),
    path.join(baseDir, `${clean}.ts`),
    path.join(baseDir, clean, "index.tsx"),
    path.join(baseDir, clean, "index.ts"),
  ]
  for (const c of candidates) if (await exists(c)) return c
  return null
}

const aliasToFs = async (spec: string): Promise<string | null> => {
  if (spec.startsWith("@/components/ui/")) return resolveWithin(UI_DIR, spec.slice("@/components/ui/".length))
  if (spec.startsWith("@/lib/")) return resolveWithin(LIB_DIR, spec.slice("@/lib/".length))
  if (spec.startsWith("@/hooks/")) return resolveWithin(HOOKS_DIR, spec.slice("@/hooks/".length))
  if (spec.startsWith("@/components/docs/")) return resolveWithin(DEMO_DIR, spec.slice("@/components/docs/".length))

  return null
}

async function fsToNs(fsPath: string) {
  const make = (root: string, type: "ui" | "lib" | "hooks") => {
    const rel = path.relative(root, fsPath)
    if (!rel.startsWith("..")) {
      const noExt = stripExt(toPosix(rel))
      const clean = stripTrailingIndex(noExt)
      return `${REGISTRY_HOMEPAGE}/r/${clean}`
    }
    return null
  }
  return make(UI_DIR, "ui") ?? make(LIB_DIR, "lib") ?? make(HOOKS_DIR, "hooks")
}

const DEP_EXCLUDE = new Set([
  "react",
  "react-dom",
  "next",
  "server-only",
  "client-only",
  ...builtinModules,
  ...builtinModules.map((m) => m.replace(/^node:/, "")),
])

const pkgName = (specifier: string) => {
  if (specifier.startsWith("@")) {
    const [scope, name] = specifier.split("/")
    return `${scope}/${name || ""}`
  }
  return specifier.split("/")[0]
}

const topLevelPackages = (specs: string[]) =>
  // @ts-expect-error
  [...new Set(specs.filter((s) => !s.startsWith(".") && !s.startsWith("@/")).map(pkgName).filter((p) => !DEP_EXCLUDE.has(p)))]

async function findInternalDepsForFile(file: string, specs: string[]) {
  const urls: string[] = []
  for (const s of specs) {
    if (s.startsWith("./") || s.startsWith("../")) {
      const p = await resolveLocalPath(file, s)
      if (p) {
        const u = await fsToNs(p)
        if (u) urls.push(u)
      }
    } else if (s.startsWith("@/")) {
      const p = await aliasToFs(s)
      if (p) {
        const u = await fsToNs(p)
        if (u) urls.push(u)
      }
    }
  }
  return [...new Set(urls)]
}

const blockSlugFromPage = (pagePath: string) => {
  const rel = toPosix(path.relative(BLOCKS_DIR, path.dirname(pagePath)))
  return rel.split("/").filter(Boolean).pop() || ""
}


const demoSlugFromFile = (file: string) => stripExt(path.basename(file))


const collectBlocks = async (pagePath: string, code: string) => {
  const groupRoot = path.dirname(path.dirname(pagePath))
  const isTsLike = (n: string) => /\.(tsx|ts)$/.test(n) && !/\.d\.ts$/.test(n)
  const seen = new Set<string>()
  const queue: string[] = [pagePath]
  const rootEntries = await fs.readdir(groupRoot, { withFileTypes: true })
  for (const e of rootEntries) {
    if (e.isFile() && isTsLike(e.name)) {
      const fp = path.join(groupRoot, e.name)
      if (!seen.has(fp)) {
        seen.add(fp)
        queue.push(fp)
      }
    }
  }
  while (queue.length) {
    const file = queue.pop()!
    const src = file === pagePath ? code : await read(file)
    const specs = importSpecifiers(src)
    for (const s of specs) {
      if (s.startsWith("./") || s.startsWith("../")) {
        const p = await resolveLocalPath(file, s)
        if (p && p.startsWith(groupRoot) && !seen.has(p)) {
          seen.add(p)
          queue.push(p)
        }
      }
    }
  }
  seen.delete(pagePath)
  return [...seen]
}

async function rewritePrivatesToRegistry(fromFile: string, code: string, allPrivates: Set<string>, slug: string) {
  const specs = importSpecifiers(code)
  let out = code
  for (const s of specs) {
    if (!(s.startsWith("./") || s.startsWith("../"))) continue
    const p = await resolveLocalPath(fromFile, s)
    if (!p) continue
    if (!allPrivates.has(p) && p !== fromFile) continue
    const base = path.basename(p).replace(/\.[^.]+$/, "")
    const next = `${REGISTRY_IMPORT_PREFIX}/${REGISTRY_STYLE}/${slug}/${base}`
    const re = new RegExp(`(["'\`])${escapeRegExp(s)}\\1`, "g")
    out = out.replace(re, (m, q) => `${q}${next}${q}`)
  }
  return out
}

const stagedPathFor = (slug: string, fileAbs: string) => {
  const base = path.basename(fileAbs)
  return path.join(STAGE_DIR, REGISTRY_STYLE, slug, base)
}

type FilePage = { type: "registry:page"; path: string; target: string; content?: string }
type FileOther = {
  type:
    | "registry:lib"
    | "registry:block"
    | "registry:component"
    | "registry:ui"
    | "registry:hook"
    | "registry:style"
    | "registry:theme"
    | "registry:item"
    | "registry:internal"
  path: string
  content?: string
  target?: string
}
type FileOut = FilePage | FileOther

const fileEntryPage = async (absPath: string, target: string, content?: string): Promise<FilePage> => {
  const rel = toPosix(path.relative(ROOT, absPath))
  return { path: rel, type: "registry:page", target, content }
}

const fileEntryOther = async (
  absPath: string,
  type: FileOther["type"],
  content?: string,
  target?: string
): Promise<FileOther> => {
  const rel = toPosix(path.relative(ROOT, absPath))
  return { path: rel, type, content, target }
}

const buildComponentItem = async (absPath: string) => {
  const name = path.basename(absPath, path.extname(absPath))
  const code = await read(absPath)
  const specs = importSpecifiers(code)
  const deps = topLevelPackages(specs)
  const regDeps = await findInternalDepsForFile(absPath, specs)
  const files: FileOut[] = [await fileEntryOther(absPath, "registry:ui")]
  const raw = {
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
    name,
    type: "registry:ui",
    title: name,
    description: name,
    dependencies: deps.length ? deps : undefined,
    registryDependencies: regDeps.length ? regDeps : undefined,
    files,
  }
  return registryItemSchema.parse(raw)
}

const buildLibItem = async (absPath: string) => {
  const name = path.basename(absPath, path.extname(absPath))
  const code = await read(absPath)
  const specs = importSpecifiers(code)
  const deps = topLevelPackages(specs)
  const regDeps = await findInternalDepsForFile(absPath, specs)
  const files: FileOut[] = [await fileEntryOther(absPath, "registry:lib")]
  const raw = {
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
    name,
    type: "registry:lib",
    title: name,
    description: name,
    dependencies: deps.length ? deps : undefined,
    registryDependencies: regDeps.length ? regDeps : undefined,
    files,
  }
  return registryItemSchema.parse(raw)
}

const buildHookItem = async (absPath: string) => {
  const name = path.basename(absPath, path.extname(absPath))
  const code = await read(absPath)
  const specs = importSpecifiers(code)
  const deps = topLevelPackages(specs)
  const regDeps = await findInternalDepsForFile(absPath, specs)
  const files: FileOut[] = [await fileEntryOther(absPath, "registry:hook")]
  const raw = {
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
    name,
    type: "registry:hook",
    title: name,
    description: name,
    dependencies: deps.length ? deps : undefined,
    registryDependencies: regDeps.length ? regDeps : undefined,
    files,
  }
  return registryItemSchema.parse(raw)
}

const buildDemoItem = async (file: string) => {
  const slug = demoSlugFromFile(file)
  const code = await read(file)
  const specs = importSpecifiers(code)
  const deps = topLevelPackages(specs)
  const regDeps = await findInternalDepsForFile(file, specs)
  const files: FileOut[] = [await fileEntryPage(file, `${PAGE_TARGET_ROOT}/${slug}/page.tsx`)]
  const raw = {
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
    name: slug,
    type: "registry:page",
    title: titleCase(slug.replace(/-demo$/, "").replace(/-/g, " ")),
    description: slug,
    dependencies: deps.length ? deps : undefined,
    registryDependencies: regDeps.length ? regDeps : undefined,
    files,
  }
  return registryItemSchema.parse(raw)
}

const registryDepsForBlock = async (pagePath: string, code: string) => {
  const privates = await collectBlocks(pagePath, code)
  const allFiles = new Set<string>([pagePath, ...privates])
  const urls: string[] = []
  for (const file of allFiles) {
    const src = file === pagePath ? code : await read(file)
    const specs = importSpecifiers(src)
    const fileUrls = await findInternalDepsForFile(file, specs)
    for (const u of fileUrls) urls.push(u)
  }
  return [...new Set(urls)]
}

const buildBlockItem = async (pagePath: string) => {
  const code = await read(pagePath)
  const slug = blockSlugFromPage(pagePath)
  const privates = await collectBlocks(pagePath, code)
  const privSet = new Set<string>([pagePath, ...privates])
  const urlDeps = await registryDepsForBlock(pagePath, code)
  const specs = importSpecifiers(code)
  const deps = topLevelPackages(specs)
  const metaPath = path.join(path.dirname(pagePath), "meta.json")
  let title: string | undefined
  let description: string | undefined
  if (await exists(metaPath)) {
    const metaRaw = await read(metaPath).catch(() => "{}")
    try {
      const meta = JSON.parse(metaRaw)
      title = meta.title || slug
      description = meta.description || slug
    } catch {
      title = slug
      description = slug
    }
  } else {
    title = slug
    description = slug
  }
  const staged: { abs: string; type: FileOut["type"]; target?: string }[] = []
  const pageStaged = stagedPathFor(slug, pagePath)
  const pageTransformed = await rewritePrivatesToRegistry(pagePath, code, privSet, slug)
  await write(pageStaged, pageTransformed)
  staged.push({ abs: pageStaged, type: "registry:page", target: `${PAGE_TARGET_ROOT}/${slug}/page.tsx` })
  for (const p of privates) {
    const transformed = await rewritePrivatesToRegistry(p, await read(p), privSet, slug)
    const dest = stagedPathFor(slug, p)
    await write(dest, transformed)
    staged.push({ abs: dest, type: "registry:component" })
  }
  const files: FileOut[] = []
  for (const f of staged) {
    if (f.type === "registry:page") {
      files.push(await fileEntryPage(f.abs, f.target!, undefined))
    } else {
      files.push(await fileEntryOther(f.abs, f.type, undefined, f.target))
    }
  }
  const raw = {
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
    name: slug.split("/").join("-"),
    type: "registry:block",
    title,
    description,
    dependencies: deps.length ? deps : undefined,
    registryDependencies: urlDeps.length ? urlDeps : undefined,
    files,
  }
  return registryItemSchema.parse(raw)
}

const buildAllItems = (items: any[]) => {
  const base = (REGISTRY_HOMEPAGE || "http://localhost:3000").replace(/\/+$/, "")
  const urls = items
    .filter((it: any) => it.type === "registry:ui")
    .map((it: any) => `${base}/r/ui/${it.name}`)
    .sort()

  return registryItemSchema.parse({
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
    name: "all",
    type: "registry:item",
    title: "All UI components",
    description: "Installs all UI components from this registry.",
    registryDependencies: urls,
  })
}

const buildAll = async () => {
  const items: any[] = [...themeItems]
  for (const f of await listFiles(UI_DIR)) items.push(await buildComponentItem(f))
  for (const f of await listFiles(DEMO_DIR)) items.push(await buildDemoItem(f))
  for (const f of (await listFiles(LIB_DIR)).filter((f) => LIB_ALLOW.includes(path.basename(f, path.extname(f))))) {
    items.push(await buildLibItem(f))
  }
  for (const f of (await listFiles(HOOKS_DIR)).filter((f) => HOOKS_ALLOW.includes(path.basename(f, path.extname(f))))) {
    items.push(await buildHookItem(f))
  }

  const blockPages: string[] = []
  const stack = [BLOCKS_DIR]
  while (stack.length) {
    const d = stack.pop()!
    if (!(await exists(d))) continue
    const entries = await fs.readdir(d, { withFileTypes: true })
    for (const e of entries) {
      const full = path.join(d, e.name)
      if (e.isDirectory()) stack.push(full)
      else if (e.name === "page.tsx") blockPages.push(full)
    }
  }
  for (const p of blockPages) items.push(await buildBlockItem(p))
  items.push(buildAllItems(items))
  const rawRegistry = {
    name: REGISTRY_NAME,
    homepage: REGISTRY_HOMEPAGE,
    items,
  }
  const registry = registrySchema.parse({ $schema: "https://ui.shadcn.com/schema/registry.json", ...rawRegistry })
  const outPath = path.resolve(ROOT, "registry.json")
  await fs.writeFile(outPath, JSON.stringify(registry, null, 2), "utf8")
}


buildAll()
