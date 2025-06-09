"use client"

import React, { useState } from "react"

import generated from "@/../__registry__/generated"
import { CodeHighlighter } from "@/components/code/code-highlighter"
import { CopyButton, CopyMotionButton } from "@/components/code/copy-button"
import { PullRegistry } from "@/components/code/pull-registry"
import { Loader } from "@/components/ui/loader"
import { Tabs } from "@/components/ui/tabs"
import { copyToClipboard } from "@/lib/copy"
import type { RegistryItem } from "@/types"
import { IconBrandCss, IconBrandReactjs, IconFile, IconWindowVisitFill } from "@intentui/icons"
import { Tab } from "react-aria-components"
import { twMerge } from "tailwind-merge"

interface Props {
  source: Record<string, string>
  src?: string
  isIframe?: boolean
  classNames?: {
    preview?: string
    code?: string
  }
}

const registry = generated as Record<string, RegistryItem>

export function CodeSandbox({ isIframe = true, classNames, source, src }: Props) {
  const [copiedStates, setCopiedStates] = useState<Record<string, boolean>>({})
  const [rawSourceCode, setRawSourceCode] = useState<Record<string, string | null>>({})
  const Component = registry[source.preview!]?.component

  const handleCopy = (key: string, value: string | null) => {
    if (value) {
      copyToClipboard(value)
      setCopiedStates((prev) => ({ ...prev, [key]: true }))
      setTimeout(() => {
        setCopiedStates((prev) => ({ ...prev, [key]: false }))
      }, 2000)
    }
  }

  React.useEffect(() => {
    fetchRegistryData(source).then(setRawSourceCode)
  }, [source])

  if (!Component) {
    return <p>Component "{source.preview}" not found in the registry.</p>
  }

  return (
    <Tabs className="not-prose" aria-label="Code Sandbox">
      <TabsList src={src} />
      <Tabs.Panel
        id="preview"
        className={twMerge("max-h-110 grow overflow-y-auto", classNames?.preview)}
      >
        <React.Suspense
          fallback={
            <div className="flex items-center justify-center py-6 text-muted-fg text-sm">
              <Loader variant="spin" />
              <span className="sr-only">Loading...</span>
            </div>
          }
        >
          {isIframe ? (
            <iframe
              src={src}
              title="sanddbox-preview"
              className="size-full min-h-110 overflow-hidden rounded-xl border"
            />
          ) : (
            <Component />
          )}
        </React.Suspense>
      </Tabs.Panel>
      <Tabs.Panel id="code" className={classNames?.code}>
        {rawSourceCode && Object.keys(rawSourceCode).length > 0 ? (
          <Tabs className="relative gap-0">
            {/*bg-[#0e0e10]*/}
            <div className="flex items-center justify-between overflow-hidden rounded-t-lg border-x border-y bg-shiki-bg">
              <Tabs.List className="scrollbar-hidden relative gap-0 overflow-x-auto border-0">
                {Object.keys(rawSourceCode).map((key) => (
                  <Tab
                    className={(values) =>
                      twMerge(
                        "flex cursor-default items-center gap-x-1.5 whitespace-nowrap p-3 font-mono text-muted-fg text-xs tracking-tight",
                        "**:data-[slot=icon]:-ml-0.5 border-transparent border-x outline-hidden first:border-l-0 **:data-[slot=icon]:size-4 **:data-[slot=icon]:shrink-0",
                        (values.isSelected || values.isFocused || values.isFocusVisible) &&
                          "border-input bg-secondary text-secondary-fg dark:bg-muted",
                        values.isHovered && "bg-secondary text-secondary-fg dark:bg-muted",
                      )
                    }
                    key={key}
                    id={key}
                  >
                    {key.includes("css") ? (
                      <IconBrandCss className="text-blue-500" />
                    ) : key.includes(".tsx") ? (
                      <IconBrandReactjs className="text-cyan-500" />
                    ) : (
                      <IconFile />
                    )}
                    <span>{key}</span>
                  </Tab>
                ))}
              </Tabs.List>
            </div>
            {Object.entries(rawSourceCode).map(([key, value]) => (
              <Tabs.Panel
                key={key}
                id={key}
                className="overflow-hidden rounded-b-lg border-x border-b bg-shiki-bg"
              >
                <CopyButton
                  className="absolute top-0.5 right-1 hidden sm:grid"
                  alwaysVisible
                  isCopied={copiedStates[key] || false}
                  onPress={() => handleCopy(key, value)}
                />
                <CodeHighlighter
                  max96={false}
                  plain
                  className="max-h-110 overflow-auto p-4"
                  removeLastLine
                  code={value || "No source code available"}
                />
              </Tabs.Panel>
            ))}
          </Tabs>
        ) : (
          <div className="p-4 text-center">Loading source code...</div>
        )}
      </Tabs.Panel>
    </Tabs>
  )
}

interface TabListProps {
  src?: string
  code?: string
  hasRegistry?: boolean
  blockDemo?: string
  copyButton?: boolean
}

export const TabsList = ({ hasRegistry, src, code, blockDemo, copyButton }: TabListProps) => {
  return (
    <div className="group relative">
      <Tabs.List>
        <Tabs.Tab id="preview">Preview</Tabs.Tab>
        <Tabs.Tab id="code">Code</Tabs.Tab>
        {src && (
          <Tabs.Tab className="ml-auto flex items-center" target="_blank" href={src}>
            <IconWindowVisitFill />
            Fullscreen
          </Tabs.Tab>
        )}
      </Tabs.List>
      {hasRegistry && (
        <PullRegistry
          className="-top-0.5 absolute right-0"
          processedSourceCode={code as string}
          blockDemo={blockDemo as string}
        />
      )}
      {copyButton && <CopyMotionButton text={code!} />}
    </div>
  )
}

export const fetchRegistryData = React.cache(async (source: Record<string, string>) => {
  const fetchedSourceCode: Record<string, string | null> = {}

  await Promise.all(
    Object.entries(source)
      .filter(([key]) => key !== "preview")
      .map(async ([key, path]) => {
        const registryKey = path
        const registryItem = registry[registryKey]

        if (registryItem) {
          try {
            const response = await fetch(`/registry/${registryKey}.json`)
            if (response.ok) {
              const registryEntry = await response.json()
              fetchedSourceCode[key] = registryEntry.files?.[0]?.content || "No content available"
            } else {
              console.error(`Failed to fetch source code for ${path}:`, response.status)
              fetchedSourceCode[key] = "Error loading source code."
            }
          } catch (error) {
            console.error(`Error fetching source code for ${path}:`, error)
            fetchedSourceCode[key] = "Error loading source code."
          }
        } else {
          console.error(`Registry item for ${registryKey} not found.`)
          fetchedSourceCode[key] = "Registry item not found."
        }
      }),
  )

  return fetchedSourceCode
})
