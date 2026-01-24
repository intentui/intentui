"use client"

import { CheckIcon } from "@heroicons/react/24/outline"
import { useInView } from "motion/react"
import { useEffect, useMemo, useRef, useState } from "react"
import { Button, type Key, Tab, TabList, TabPanel, Tabs } from "react-aria-components"
import { CodeHighlighter } from "@/components/code/code-highlighter"
import { BrandReactjsIcon } from "@/components/icons/brand-reactjs-icon"
import { ShadcnuiLogo } from "@/components/icons/shadcn-logo"
import { Heading } from "@/components/ui/heading"
import { Skeleton } from "@/components/ui/skeleton"
import { Tooltip, TooltipContent } from "@/components/ui/tooltip"
import { useClipboard } from "@/hooks/use-clipboard"
import { cx } from "@/lib/primitive"

interface RegistryFile {
  path: string
  content: string
  type: string
  target?: string
}

interface RegistryItem {
  name: string
  type: string
  title: string
  description?: string
  registryDependencies?: string[]
  files: RegistryFile[]
}

const REGISTRY_ORIGIN = process.env.NEXT_PUBLIC_APP_URL

function filename(p: string) {
  const segs = p.split("/")
  return segs[segs.length - 1] || p
}

async function loadRegistryItem(name: string, signal?: AbortSignal): Promise<RegistryItem> {
  const urls = [`${REGISTRY_ORIGIN}/r/${name}`, `${REGISTRY_ORIGIN}/r/${name}.json`]
  for (const url of urls) {
    const r = await fetch(url, { cache: "no-store", signal })
    if (r.ok) return r.json()
  }
  throw new Error(`Failed to load ${name}`)
}

function SourceTabs({ files }: { files: RegistryFile[] }) {
  const items = useMemo(
    () =>
      files.map((f) => ({
        id: filename(f.path),
        content: f.content,
      })),
    [files],
  )
  const [fileKey, setFileKey] = useState<Key>(items[0]?.id ?? "")
  useEffect(() => {
    if (!items.find((i) => i.id === fileKey) && items[0]) setFileKey(items[0].id)
  }, [items, fileKey])
  return (
    <Tabs selectedKey={fileKey} onSelectionChange={setFileKey} className="flex flex-col gap-3">
      <TabList className="scrollbar-hidden flex flex-nowrap gap-x-2 overflow-x-auto font-medium text-xs/5">
        {items.map((it) => (
          <Tab
            className="group flex cursor-pointer items-center gap-x-1 whitespace-nowrap rounded-sm selected:bg-secondary px-2 py-1 selected:text-fg text-muted-fg"
            id={it.id}
            key={it.id}
          >
            <BrandReactjsIcon className="size-3.5 shrink-0 text-muted-fg group-selected:text-cyan-500" />
            <span className="font-mono">{it.id}</span>
          </Tab>
        ))}
      </TabList>
      {items.map((it) => (
        <TabPanel key={it.id} id={it.id}>
          <CodeHighlighter max96={false} className="max-h-140" code={it.content} />
        </TabPanel>
      ))}
    </Tabs>
  )
}

function RegistryItemViewer({ item }: { item: RegistryItem }) {
  const [tab, setTab] = useState<Key>("preview")
  const b = item.name.split("-")[0]
  const c = item.name
  const src = `${REGISTRY_ORIGIN}/pre-blocks/${b}/${encodeURIComponent(c)}`
  const { copied, copy } = useClipboard()
  return (
    <section className="space-y-4">
      <Tabs selectedKey={tab} onSelectionChange={setTab} className="flex flex-col gap-3">
        <div className="not-prose flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <header className="space-y-1">
            <Heading className="font-medium capitalize sm:text-base" level={2}>
              {item.title.replaceAll("-", " ")}
            </Heading>

            <Tooltip delay={0}>
              <Button
                onPress={() => {
                  copy(`npx shadcn@latest add @intentui/block/${item.title}`)
                }}
                className="flex items-center gap-x-2 truncate font-mono text-muted-fg text-sm tracking-tigth"
              >
                {copied ? <CheckIcon className="size-4" /> : <ShadcnuiLogo className="size-4" />}
                @intentui/block/{item.title}
              </Button>
              <TooltipContent className="rounded-full">Click to copy</TooltipContent>
            </Tooltip>
          </header>
          <TabList className="flex w-full gap-x-1 md:w-auto">
            <SourceTab id="preview">Preview</SourceTab>
            <SourceTab id="source">Source</SourceTab>
            <SourceTab
              id="fullscreen"
              href={`/pre-blocks/${b}/${encodeURIComponent(c)}`}
              target="_blank"
              className="no-underline"
            >
              Fullscreen
            </SourceTab>
          </TabList>
        </div>
        <TabPanel id="preview" className="rounded-lg border">
          <iframe
            title={c}
            src={src}
            className="aspect-video h-96 w-full rounded-lg md:h-auto"
            loading="lazy"
          />
        </TabPanel>
        <TabPanel id="source">
          <SourceTabs files={item.files} />
        </TabPanel>
      </Tabs>
    </section>
  )
}

function SourceTab({ className, ...props }: React.ComponentProps<typeof Tab>) {
  return (
    <Tab
      className={cx(
        "group inline-flex cursor-default items-center gap-x-2 rounded-sm selected:bg-secondary px-2 py-1 font-medium text-sm/6 hover:bg-secondary",
        className,
      )}
      {...props}
    />
  )
}

function LazyRegistryItem({ name }: { name: string }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { margin: "100px 0px 100px 0px", once: true })
  const [item, setItem] = useState<RegistryItem | null>(null)
  const [error, setError] = useState<string>("")
  useEffect(() => {
    if (!isInView || item || error) return
    const ac = new AbortController()
    loadRegistryItem(name, ac.signal)
      .then((res) => setItem(res))
      .catch((e) => {
        if (e?.name !== "AbortError") setError(String(e?.message || e))
      })
    return () => ac.abort()
  }, [isInView, name, item, error])
  return (
    <div ref={ref} className="min-h-90">
      {error ? (
        <div className="rounded-lg border p-4 text-red-600 text-sm">{error}</div>
      ) : item ? (
        <RegistryItemViewer item={item} />
      ) : (
        <div className="animate-pulse space-y-3 rounded-lg border p-4">
          <Skeleton className="h-5 w-48" />
          <Skeleton className="h-4 w-80" />
          <Skeleton className="aspect-video w-full" />
        </div>
      )}
    </div>
  )
}

export function Sandbox({ registries }: { registries: string[] }) {
  return (
    <>
      {registries.map((name) => (
        <LazyRegistryItem key={name} name={name} />
      ))}
    </>
  )
}
