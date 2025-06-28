"use client"

import {
  IconBrackets2,
  IconBrandCss,
  IconBrandReactjs,
  IconBrandTypescript,
  IconFile,
} from "@intentui/icons"
import { useEffect, useState } from "react"
import { Tab } from "react-aria-components"
import { twMerge } from "tailwind-merge"
import { CodeHighlighter } from "@/components/code/code-highlighter"
import { CopyButton } from "@/components/code/pull-registry"
import { TabList, TabPanel, Tabs } from "@/components/ui/tabs"
import { copyToClipboard } from "@/lib/copy"

interface Props {
  source: Record<string, string>
}

export function CodeBlock({ source }: Props) {
  const [contents, setContents] = useState<Record<string, string>>({})
  const [copiedStates, setCopiedStates] = useState<Record<string, boolean>>({})

  const handleCopy = (key: string, value: string | null) => {
    if (value) {
      copyToClipboard(value)
      setCopiedStates((prev) => ({ ...prev, [key]: true }))
      setTimeout(() => {
        setCopiedStates((prev) => ({ ...prev, [key]: false }))
      }, 2000)
    }
  }
  useEffect(() => {
    const fetchContents = async () => {
      const loadedContents: Record<string, string> = {}
      for (const [name, path] of Object.entries(source)) {
        try {
          const response = await fetch(`/stubs/${path}.json`)
          const data = await response.json()
          loadedContents[name] = data.files[0].content
        } catch (error) {
          console.error(`Error fetching ${path}:`, error)
        }
      }
      setContents(loadedContents)
    }

    fetchContents()
  }, [source])

  return (
    <>
      {contents && Object.keys(contents).length > 0 ? (
        <Tabs className="relative gap-0">
          <div className="flex items-center justify-between gap-x-2">
            <TabList className="gap-0 border-0">
              {Object.keys(contents).map((key) => (
                <Tab
                  className={(values) =>
                    twMerge(
                      "flex min-w-0 cursor-default items-center gap-x-1 truncate px-1 py-2 font-medium text-sm/6 *:data-[slot=icon]:hidden sm:p-2 sm:*:data-[slot=icon]:block",
                      values.isSelected || values.isFocused || values.isFocusVisible
                        ? "text-fg"
                        : "text-muted-fg hover:text-fg",
                    )
                  }
                  key={key}
                  id={key}
                >
                  {key.includes("css") ? (
                    <IconBrandCss className="text-blue-500" />
                  ) : key.includes(".tsx") ? (
                    <IconBrandReactjs className="text-sky-500" />
                  ) : key.includes(".ts") ? (
                    <IconBrandTypescript className="text-sky-500" />
                  ) : key.includes(".json") ? (
                    <IconBrackets2 className="text-purple-400" />
                  ) : (
                    <IconFile />
                  )}
                  <span className="inline sm:hidden">{key.split("/").pop()}</span>
                  <span className="hidden sm:inline">{key}</span>
                </Tab>
              ))}
            </TabList>
          </div>
          {Object.entries(contents).map(([key, value]) => (
            <TabPanel key={key} id={key} className="overflow-hidden rounded-lg border bg-shiki-bg">
              <CopyButton
                className="absolute top-1.5 right-0"
                label="Copy"
                copiedLabel="Copied"
                isCopied={copiedStates[key] || false}
                onCopy={() => handleCopy(key, value)}
              />
              <CodeHighlighter
                plain
                removeLastLine
                className="overflow-auto p-4"
                code={value || "No source code available"}
              />
            </TabPanel>
          ))}
        </Tabs>
      ) : (
        <div className="p-4 text-center">Loading source code...</div>
      )}
    </>
  )
}
