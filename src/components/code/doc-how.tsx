"use client"

import { Suspense, useEffect, useMemo, useState } from "react"
import { Group, ToggleButton, Toolbar } from "react-aria-components"
import { twJoin, twMerge } from "tailwind-merge"
import generated from "@/../__registry__/generated"
import { CodeHighlighter } from "@/components/code/code-highlighter"
import { PullRegistry } from "@/components/code/pull-registry"
import { Loader } from "@/components/ui/loader"
import { createFetchRegistryFile } from "@/lib/fetch-registry"
import type { RegistryItem } from "@/types"

const registry = generated as Record<string, RegistryItem>

type HowProps = {
  toUse: string
  copyButton?: boolean
  minW60?: boolean
  description?: string
  isCenter?: boolean
  className?: string
  withNoPadding?: boolean
  src?: string
  readMore?: string
}

const fetchRegistryFile = createFetchRegistryFile("/r")

export const DocHow = ({
  toUse,
  className,
  minW60 = false,
  isCenter = true,
  withNoPadding = false,
  copyButton = true,
  src,
  ...props
}: HowProps) => {
  const [currentTab, setCurrentTab] = useState<"tab_preview" | "tab_code">("tab_preview")
  const [rawSourceCode, setRawSourceCode] = useState<string | null>(null)
  /*
   * Prepend the `demo/` prefix to the provided `toUse` prop
   * to construct the registry key dynamically.
   */
  const registryKey = `demo/${toUse}`

  /*
   * Retrieve the component from the registry using the dynamic key.
   * This ensures that the correct component is loaded via React.lazy.
   */
  const Component = registry[registryKey]?.component

  const blockDemo = toUse.split("/").pop() ?? ""

  const processedSourceCode = useMemo(() => {
    if (!rawSourceCode) return null

    /*
     * Rename the default export to a named export.
     * Use regex to match `export default function <name>()`
     * Replace with `export function Component()`
     */
    const defaultExportRegex = /export\s+default\s+function\s+([a-zA-Z0-9_$]+)\s*\(/
    return rawSourceCode.replace(defaultExportRegex, "export function Component(")
  }, [rawSourceCode])

  useEffect(() => {
    const name = `${toUse?.split("/").pop()}`
    fetchRegistryFile(name).then(setRawSourceCode)
  }, [toUse])

  if (!Component) {
    /*
     * Display a fallback message if the component is not found in the registry.
     */
    return <p>Component "{toUse}" not found in the registry.</p>
  }
  return (
    <div className="not-prose">
      <Toolbar className="mb-1 flex items-center justify-between sm:*:-mx-2">
        <Group>
          <ToggleButton
            className={twJoin(
              "p-2 font-medium text-sm/6 outline-hidden focus-visible:text-blue-500 dark:focus-visible:text-blue-300",
              currentTab === "tab_preview"
                ? "text-fg focus:text-fg"
                : "text-muted-fg hover:text-fg",
            )}
            onPress={() => setCurrentTab("tab_preview")}
          >
            Preview
          </ToggleButton>
          <ToggleButton
            className={twJoin(
              "p-2 font-medium text-sm/6 outline-hidden focus:text-fg",
              currentTab === "tab_code" ? "text-fg focus:text-fg" : "text-muted-fg hover:text-fg",
            )}
            onPress={() => setCurrentTab("tab_code")}
          >
            Code
          </ToggleButton>
        </Group>
        <Group>
          <PullRegistry
            readMore={props.readMore}
            processedSourceCode={processedSourceCode}
            blockDemo={blockDemo}
          />
        </Group>
      </Toolbar>

      <div className="h-fit w-full">
        {currentTab === "tab_preview" ? (
          <div
            className={twMerge(
              "overflow-y-auto p-4 sm:p-8",
              !withNoPadding
                ? [
                    "relative gap-4 rounded-lg border dark:bg-muted/30",
                    "ring ring-border ring-offset-2 ring-offset-white dark:ring-offset-black",
                  ]
                : "sm:py-24",
            )}
          >
            <div className={twMerge(isCenter && "flex items-center justify-center")}>
              <Suspense
                fallback={
                  <div className="flex items-center justify-center py-6 text-muted-fg text-sm">
                    <Loader variant="spin" />
                    <span className="sr-only">Loading...</span>
                  </div>
                }
              >
                <div className={twMerge(minW60 && "min-w-60", "not-prose", className)}>
                  <Component />
                </div>
              </Suspense>
            </div>
          </div>
        ) : (
          <div>
            {processedSourceCode ? (
              <div
                className={twJoin(
                  "group relative rounded-lg border",
                  "ring ring-border ring-offset-2 ring-offset-white dark:ring-offset-black",
                )}
              >
                <CodeHighlighter
                  className="h-full rounded-[calc(var(--radius-lg)-1px)]"
                  removeLastLine
                  code={processedSourceCode}
                />
              </div>
            ) : (
              <p>Loading source code...</p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
