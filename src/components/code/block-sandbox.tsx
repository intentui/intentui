"use client"

import { cache, memo, useCallback, useEffect, useLayoutEffect, useRef, useState } from "react"

import generated from "@/../__registry__/generated"
import { BrandIcon } from "@/components/brand-icon"
import { CodeHighlighter } from "@/components/code/code-highlighter"
import { CopyButton } from "@/components/code/copy-button"
import { IconDevicePhone } from "@/components/icon-device"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/resizable"
import { Button, buttonStyles } from "@/components/ui/button"
import { Link } from "@/components/ui/link"
import { Separator } from "@/components/ui/separator"
import {
  Sidebar,
  SidebarContent,
  SidebarDisclosure,
  SidebarDisclosureGroup,
  SidebarDisclosurePanel,
  SidebarDisclosureTrigger,
  SidebarHeader,
  SidebarInset,
  SidebarItem,
  SidebarLabel,
  SidebarNav,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { Tabs } from "@/components/ui/tabs"
import { Toggle } from "@/components/ui/toggle"
import quotes from "@/json/quotes.json"
import type { RegistryItem } from "@/types"
import {
  IconCube,
  IconDeviceDesktop2,
  IconFolderFill,
  IconFolderOpenFill,
  IconFullscreen,
  IconLayoutAlignBottom,
  IconLayoutAlignLeft,
  IconLayoutAlignTop,
  IconX,
} from "@intentui/icons"
import { type Key, Tab, TabList, ToggleButtonGroup } from "react-aria-components"
import type { ImperativePanelHandle } from "react-resizable-panels"
import { twMerge } from "tailwind-merge"

const registry = generated as Record<string, RegistryItem>
interface FolderStructure {
  components: {
    ui?: Record<string, string>
    [key: string]: any
  }
  [key: string]: any
}

type Props = {
  title: string
  defaultSelected: string
  preview: string
  fullscreen?: string
  expandKeys: string[]
  initialRegistry: string
  folders: FolderStructure
  isIframe?: boolean
}

function Component({ folders, fullscreen, isIframe = false, title, ...props }: Props) {
  const [width, setWidth] = useState(new Set<Key>([100]))
  const resizablePanelRef = useRef<ImperativePanelHandle>(null)
  const [selectedKey, setSelectedKey] = useState(props.defaultSelected)
  const [code, setCode] = useState("")
  const [registryKey, setRegistryKey] = useState(props.initialRegistry)
  const ComponentRegistry = registry[props.preview]?.component as React.ComponentType

  useEffect(() => {
    if (!registryKey) return
    fetchCode(registryKey, folders).then((fetchedCode) => {
      const updatedCode = fetchedCode
        .replace(
          /import\s+AppSidebarNav\s+from\s+["']..\/app-sidebar-nav["']/g,
          'import AppSidebarNav from "@/components/app-sidebar-nav"',
        )
        .replace(
          /import\s+AppSidebar\s+from\s+["'](\.\/|\.\.\/)app-sidebar["']/g,
          'import AppSidebar from "@/components/app-sidebar"',
        )
        .replace(
          /import\s+AppNavbar\s+from\s+["'](\.\/|\.\.\/)app-navbar["']/g,
          'import AppNavbar from "@/components/app-navbar"',
        )
        .replace(
          /import\s+AppSidebar\s+from\s+["']\.\/app-sidebar["']/g,
          'import AppSidebar from "@/components/app-sidebar"',
        )
      setCode(updatedCode)
    })
  }, [registryKey, folders])

  const renderTree = useCallback(
    (tree: FolderStructure, nestedLevel = 1) =>
      Object.entries(tree).map(([key, value]) => {
        const isString = typeof value === "string"
        return isString ? (
          <SidebarItem
            key={key}
            className="pl-[calc(var(--nested-level)*16px)]"
            style={{ "--nested-level": nestedLevel } as React.CSSProperties}
            onPress={() => {
              setRegistryKey(value)
              setSelectedKey(key)
            }}
            isCurrent={key === selectedKey}
          >
            <BrandIcon label={key} />
            <SidebarLabel>{key}</SidebarLabel>
          </SidebarItem>
        ) : (
          <DisclosureGroup
            key={key}
            defaultExpandedKeys={props.expandKeys!}
            id={key}
            element={({ isExpanded }) => (
              <>
                <SidebarDisclosureTrigger
                  className="pl-[calc(var(--nested-level)*16px)]"
                  style={{ "--nested-level": nestedLevel } as React.CSSProperties}
                >
                  {isExpanded ? (
                    <IconFolderOpenFill className="size-4 text-sky-600 dark:text-[#62cfff]" />
                  ) : (
                    <IconFolderFill className="size-4 text-sky-600 dark:text-[#62cfff]" />
                  )}
                  <SidebarLabel>{key}</SidebarLabel>
                </SidebarDisclosureTrigger>
                <SidebarDisclosurePanel>
                  {renderTree(value, nestedLevel + 1)}
                </SidebarDisclosurePanel>
              </>
            )}
          />
        )
      }),
    [props.expandKeys, selectedKey],
  )
  if (!Component && !isIframe) {
    return <p>Component "{props.preview}" not found in the registry.</p>
  }
  return (
    <div className="not-prose relative isolate flex">
      <Tabs className="w-full gap-0">
        <div className="px-px">
          <div className="-mb-px relative z-30 flex items-center justify-between overflow-hidden rounded-t-lg bg-navbar ring-1 ring-border">
            <h2 className="ml-3.5 inline-flex items-center gap-x-1.5 font-medium text-sm **:data-[slot=icon]:text-muted-fg">
              {title.includes("Sidebar") ? (
                <IconLayoutAlignLeft />
              ) : title.includes("Navbar") ? (
                <IconLayoutAlignTop />
              ) : (
                <IconCube />
              )}
              {title}
            </h2>
            <div className="flex items-center rounded-s-2xl bg-bg px-2 py-1 shadow-sm ring-1 ring-transparent dark:ring-border">
              <TabList className="flex items-center text-xs">
                <Tab
                  className={({ isSelected }) =>
                    twMerge(
                      "cursor-default rounded-sm px-2.5 py-1.5 outline-hidden",
                      isSelected && "bg-primary text-primary-fg",
                    )
                  }
                  id="preview"
                >
                  Preview
                </Tab>
                <Tab
                  className={({ isSelected }) =>
                    twMerge(
                      "cursor-default rounded-sm px-2.5 py-1.5 outline-hidden",
                      isSelected && "bg-primary text-primary-fg",
                    )
                  }
                  id="code"
                >
                  Code
                </Tab>
              </TabList>
              <Separator orientation="vertical" className="mx-2 h-6" />
              <ToggleButtonGroup
                selectionMode="single"
                className="hidden items-center gap-x-0.5 **:data-[slot=icon]:size-4.5 sm:flex *:[[role=radio]]:rounded-none"
                selectedKeys={width}
                onSelectionChange={(v) => {
                  setWidth(v)
                  if (resizablePanelRef?.current) {
                    resizablePanelRef.current.resize(+[...v].join())
                  }
                }}
              >
                <ToggleDevice aria-label="Switch to phone display" id={30}>
                  <IconDevicePhone />
                </ToggleDevice>
                <ToggleDevice aria-label="Switch to ipad/tablet display" id={60}>
                  <IconLayoutAlignBottom />
                </ToggleDevice>
                <ToggleDevice aria-label="Switch to desktop / large screen display" id={100}>
                  <IconDeviceDesktop2 />
                </ToggleDevice>
              </ToggleButtonGroup>
              <Separator orientation="vertical" className="mx-2 hidden h-6 sm:block" />
              {fullscreen && (
                <Link
                  href={fullscreen}
                  target="_blank"
                  className={buttonStyles({ intent: "plain", size: "square-petite" })}
                  aria-label="Open in fullscreen"
                >
                  <IconFullscreen />
                </Link>
              )}
            </div>
          </div>
        </div>
        <Tabs.Panel id="preview">
          <div className="w-full">
            <ResizablePanelGroup autoSaveId="persistence" direction="horizontal">
              <ResizablePanel
                ref={resizablePanelRef}
                defaultSize={100}
                minSize={30}
                className="relative w-full rounded-b-lg border bg-bg"
              >
                {isIframe ? (
                  <IframeComponent
                    title="preview"
                    src={props.preview}
                    className="min-h-[45rem] w-full overflow-y-auto sm:max-h-min"
                  />
                ) : (
                  <div className="min-h-[45rem] w-full overflow-y-auto sm:max-h-min">
                    <ComponentRegistry />
                  </div>
                )}
              </ResizablePanel>
              <ResizableHandle className="relative z-50 hidden w-0 bg-transparent p-0 after:absolute after:right-0 after:h-full after:w-0 md:block" />
              <ResizablePanel defaultSize={0} minSize={0} />
            </ResizablePanelGroup>
          </div>
        </Tabs.Panel>
        <Tabs.Panel id="code">
          <div className="flex max-h-(--height) min-h-(--height) overflow-hidden rounded-b-lg ring-1 ring-border [--height:85vh]">
            <SidebarProvider className="min-h-full">
              <Sidebar intent="fleet" className="h-full" collapsible="none">
                <SidebarHeader className="flex h-12 flex-row items-center justify-between border-b bg-linear-to-b py-0">
                  <Link
                    className="flex items-center gap-x-2 group-data-[collapsible=dock]:size-10 group-data-[collapsible=dock]:justify-center"
                    href="/docs/2.x/components/layouts/sidebar"
                  >
                    <IconFolderFill className="size-4.5" />
                    <SidebarLabel className="font-medium text-sm">intentui.com</SidebarLabel>
                  </Link>
                </SidebarHeader>
                <SidebarContent className="pb-10">{renderTree(folders)}</SidebarContent>
              </Sidebar>
              <SidebarInset className="overflow-hidden">
                <SidebarNav className="flex h-12 shrink-0 justify-between bg-sidebar">
                  <div className="flex flex-1 items-center">
                    <BrandIcon label={selectedKey} />
                    <strong className="ml-2 font-medium text-xs">{selectedKey}</strong>
                  </div>
                  <Button
                    onPress={() => {
                      setCode(`/**
* "${randomQuote.quote}"
* - ${randomQuote.name}
*/
                      `)
                    }}
                    className="-mr-2 hover:bg-transparent **:data-[slot=icon]:text-muted-fg **:data-[slot=icon]:duration-200 hover:**:data-[slot=icon]:rotate-90"
                    size="square-petite"
                    intent="plain"
                  >
                    <IconX />
                  </Button>
                  <CopyButton
                    alwaysVisible
                    className="text-zinc-600 hover:text-zinc-70 dark:text-zinc-400 dark:hover:text-zinc-50"
                    text={code}
                  />
                </SidebarNav>
                <CodeHighlighter
                  max96={false}
                  plain
                  className={"h-full overflow-y-auto bg-shiki-bg px-6 pt-6 pb-32 text-white"}
                  code={code}
                />
              </SidebarInset>
            </SidebarProvider>
          </div>
        </Tabs.Panel>
      </Tabs>
    </div>
  )
}

function DisclosureGroup(props: {
  defaultExpandedKeys: string[]
  id: string
  element: ({ isExpanded }: { isExpanded: any }) => React.ReactNode
}) {
  return (
    <SidebarDisclosureGroup defaultExpandedKeys={props.defaultExpandedKeys}>
      <SidebarDisclosure id={props.id}>{props.element}</SidebarDisclosure>
    </SidebarDisclosureGroup>
  )
}

const ToggleDevice = (props: React.ComponentProps<typeof Toggle>) => {
  return (
    <Toggle
      intent="plain"
      size="square-petite"
      className="relative size-7.5 selected:bg-bg hover:bg-bg selected:*:data-[slot=icon]:fill-primary/20 selected:*:data-[slot=icon]:text-primary hover:*:data-[slot=icon]:text-primary"
      {...props}
    />
  )
}

const fetchCode = cache(async (registryKey: string, folders: FolderStructure) => {
  const uiValues = Object.values(folders.components?.ui ?? {})
  const isUI = uiValues.includes(registryKey)

  const response = await fetch(`${isUI ? "/r" : "/registry"}/${registryKey}.json`)
  const registryEntry = await response.json()
  return registryEntry?.files?.[0]?.content || ""
})

const IframeComponent = ({ style, src, ...props }: React.ComponentPropsWithoutRef<"iframe">) => {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [isInView, setIsInView] = useState(false)
  const [height, setHeight] = useState("0px")
  useLayoutEffect(() => {
    const iframe = iframeRef.current
    if (!iframe) return

    iframe.style.opacity = "0"

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsInView(true)
            observer.disconnect()
            break
          }
        }
      },
      { threshold: 0.1 },
    )

    observer.observe(iframe)

    const handleLoad = () => {
      iframe.style.opacity = "1"

      const resizeFrame = () => {
        const iframeBody = iframe.contentWindow?.document.body
        if (iframeBody) {
          const newHeight = `${iframeBody.scrollHeight}px`
          setHeight(newHeight)
        }
      }

      resizeFrame()

      const resizeObserver = new ResizeObserver(resizeFrame)
      if (iframe.contentWindow?.document.body) {
        resizeObserver.observe(iframe.contentWindow.document.body)
      }

      return () => resizeObserver.disconnect()
    }

    if (isInView && src) {
      iframe.addEventListener("load", handleLoad)
    }

    return () => {
      observer.disconnect()
      iframe.removeEventListener("load", handleLoad)
    }
  }, [isInView, src])

  return (
    <iframe
      ref={iframeRef}
      src={isInView ? src : undefined}
      style={{
        opacity: 0,
        transition: "opacity 0.15s",
        height,
        width: "100%",
        ...style,
      }}
      {...props}
    />
  )
}

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]!

export const BlockSandbox = memo(Component)
