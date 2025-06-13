"use client"

import { CodeHighlighter } from "@/components/code/code-highlighter"
import { CopyButton } from "@/components/code/pull-registry"
import { Tabs } from "@/components/ui/tabs"
import { copyToClipboard } from "@/lib/copy"
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
            <Tabs.List className="gap-0 border-0">
              {Object.keys(contents).map((key) => (
                <Tab
                  className={(values) =>
                    twMerge(
                      "flex cursor-default items-center gap-x-1 p-2 font-medium text-sm/6",
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
                  <span>{key}</span>
                </Tab>
              ))}
            </Tabs.List>
          </div>
          {Object.entries(contents).map(([key, value]) => (
            <Tabs.Panel
              key={key}
              id={key}
              className="overflow-hidden rounded-lg border bg-shiki-bg"
            >
              <CopyButton
                className="absolute top-1.5 right-0"
                label="Copy"
                copiedLabel="Copied"
                value={value as string}
                isCopied={copiedStates[key] || false}
                onCopy={() => handleCopy(key, value)}
              />
              <CodeHighlighter
                plain
                removeLastLine
                className="overflow-auto p-4"
                code={value || "No source code available"}
              />
            </Tabs.Panel>
          ))}
        </Tabs>
      ) : (
        <div className="p-4 text-center">Loading source code...</div>
      )}
    </>
  )
}
