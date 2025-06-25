"use client"

import React, { useState } from "react"

import generated from "@/../__registry__/generated"
import { CodeHighlighter } from "@/components/code/code-highlighter"
import { CopyButton, CopyMotionButton } from "@/components/code/copy-button"
import { PullRegistry } from "@/components/code/pull-registry"
import { Loader } from "@/components/ui/loader"
import { copyToClipboard } from "@/lib/copy"
import type { RegistryItem } from "@/types"
import { IconBrandCss, IconBrandReactjs, IconFile } from "@intentui/icons"
import { TabList as PrimitiveTabsList, Tab, TabPanel, Tabs } from "react-aria-components"
import { twJoin, twMerge } from "tailwind-merge"

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
      <TabPanel
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
      </TabPanel>
      <TabPanel id="code" className={classNames?.code}>
        {rawSourceCode && Object.keys(rawSourceCode).length > 0 ? (
          <Tabs className="relative gap-0">
            <div className="flex items-center justify-between overflow-hidden rounded-t-lg border-x border-y bg-shiki-bg">
              <PrimitiveTabsList className="scrollbar-hidden relative flex gap-0 overflow-x-auto border-0">
                {Object.keys(rawSourceCode).map((key) => (
                  <Tab
                    className={(values) =>
                      twMerge(
                        "flex cursor-default items-center gap-x-1.5 whitespace-nowrap p-2 font-mono text-muted-fg text-xs tracking-tight",
                        "**:data-[slot=icon]:-ml-0.5 border-transparent border-x first:border-l-0 focus:outline-transparent **:data-[slot=icon]:size-4 **:data-[slot=icon]:shrink-0",
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
                      <IconBrandReactjs className="text-sky-500" />
                    ) : (
                      <IconFile />
                    )}
                    <span>{key}</span>
                  </Tab>
                ))}
              </PrimitiveTabsList>
            </div>
            {Object.entries(rawSourceCode).map(([key, value]) => (
              <TabPanel
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
              </TabPanel>
            ))}
          </Tabs>
        ) : (
          <div className="p-4 text-center">Loading source code...</div>
        )}
      </TabPanel>
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
    <div className="group not-prose relative">
      <PrimitiveTabsList className="flex items-center font-medium *:text-sm/6">
        <Tab
          className={({ isSelected }) =>
            twJoin(
              isSelected
                ? "text-fg"
                : "pressed:text-fg text-muted-fg hover:text-fg focus:outline-transparent focus-visible:text-fg",
              "cursor-default p-2",
            )
          }
          id="preview"
        >
          Preview
        </Tab>
        <Tab
          className={({ isSelected }) =>
            twJoin(
              isSelected
                ? "text-fg"
                : "pressed:text-fg text-muted-fg hover:text-fg focus:outline-transparent focus-visible:text-fg",
              "cursor-default p-2",
            )
          }
          id="code"
        >
          Code
        </Tab>
        {src && (
          <Tab
            className="ml-auto pressed:text-fg text-muted-fg hover:text-fg focus:outline-transparent focus-visible:text-fg"
            target="_blank"
            href={src}
          >
            Fullscreen
          </Tab>
        )}
      </PrimitiveTabsList>
      {hasRegistry && (
        <PullRegistry
          className="-top-0.5 absolute right-0"
          processedSourceCode={code as string}
          blockDemo={blockDemo as string}
        />
      )}
      {copyButton && <CopyMotionButton className="-top-2 absolute" text={code!} />}
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
