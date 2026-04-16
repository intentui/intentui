"use client"

import { CodeBracketIcon, DocumentTextIcon } from "@heroicons/react/24/outline"
import { useEffect, useState } from "react"
import { Tab } from "react-aria-components/Tabs"
import { twJoin, twMerge } from "tailwind-merge"
import { CodeHighlighter } from "@/components/code/code-highlighter"
import { CopyButton } from "@/components/code/copy-button"
import { BrandCssIcon } from "@/components/icons/brand-css-icon"
import { BrandReactjsIcon } from "@/components/icons/brand-reactjs-icon"
import { BrandTypescriptIcon } from "@/components/icons/brand-typescript-icon"
import { TabList, TabPanel, Tabs } from "@/components/ui/tabs"
import { useClipboard } from "@/hooks/use-clipboard"

interface Props {
  source: Record<string, string>
}

export function CodeBlock({ source }: Props) {
  const [contents, setContents] = useState<Record<string, string>>({})
  const [copiedStates, setCopiedStates] = useState<Record<string, boolean>>({})
  const { copy } = useClipboard()

  const handleCopy = async (key: string, value: string | null) => {
    if (value) {
      const didCopy = await copy(value)
      if (!didCopy) return
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
                    <BrandCssIcon className="size-4 text-blue-500" />
                  ) : key.includes(".tsx") ? (
                    <BrandReactjsIcon className="size-4 text-sky-500" />
                  ) : key.includes(".ts") ? (
                    <BrandTypescriptIcon className="size-4 text-sky-500" />
                  ) : key.includes(".json") ? (
                    <CodeBracketIcon className="size-4 text-purple-400" />
                  ) : (
                    <DocumentTextIcon />
                  )}
                  <span className="inline sm:hidden">{key.split("/").pop()}</span>
                  <span className="hidden sm:inline">{key}</span>
                </Tab>
              ))}
            </TabList>
          </div>
          {Object.entries(contents).map(([key, value]) => (
            <TabPanel key={key} id={key}>
              <div
                className={twJoin(
                  "relative overflow-hidden rounded-lg border bg-shiki-bg",
                  "ring ring-border ring-offset-2 ring-offset-white dark:ring-offset-black",
                )}
              >
                <CopyButton
                  className="absolute top-1 right-1 z-2 grid size-10 place-content-center"
                  onPress={() => handleCopy(key, value)}
                  isCopied={copiedStates[key] || false}
                />
                <CodeHighlighter
                  plain
                  className="px-4 py-3"
                  removeLastLine
                  code={value || "No source code available"}
                />
              </div>
            </TabPanel>
          ))}
        </Tabs>
      ) : (
        <div className="p-4 text-center">Loading source code...</div>
      )}
    </>
  )
}
