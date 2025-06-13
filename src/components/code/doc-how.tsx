"use client"

import React, { Suspense, useState } from "react"

import generated from "@/../__registry__/generated"
import { CodeHighlighter } from "@/components/code/code-highlighter"
import { PullRegistry } from "@/components/code/pull-registry"
import { Loader } from "@/components/ui/loader"
import { createFetchRegistryFile } from "@/lib/fetch-registry"
import type { RegistryItem } from "@/types"
import { Group, ToggleButton, Toolbar } from "react-aria-components"
import { twJoin, twMerge } from "tailwind-merge"

const registry = generated as Record<string, RegistryItem>

type HowProps = {
  toUse: string
  copyButton?: boolean
  minW72?: boolean
  description?: string
  isCenter?: boolean
  className?: string
  withNoPadding?: boolean
  src?: string
}

const fetchRegistryFile = createFetchRegistryFile("/r")

export const DocHow = ({
  toUse,
  className,
  minW72 = false,
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

  const processedSourceCode = React.useMemo(() => {
    if (!rawSourceCode) return null

    /*
     * Rename the default export to a named export.
     * Use regex to match `export default function <name>()`
     * Replace with `export function Component()`
     */
    const defaultExportRegex = /export\s+default\s+function\s+([a-zA-Z0-9_$]+)\s*\(/
    return rawSourceCode.replace(defaultExportRegex, "export function Component(")
  }, [rawSourceCode])

  React.useEffect(() => {
    const name = `block-${toUse?.split("/").pop()}`
    fetchRegistryFile(name).then(setRawSourceCode)
  }, [toUse])

  if (!Component) {
    /*
     * Display a fallback message if the component is not found in the registry.
     */
    return <p>Component "{toUse}" not found in the registry.</p>
  }
  const divProps = { ...props } as React.HTMLProps<HTMLDivElement>
  return (
    <div className="not-prose">
      <Toolbar className="flex items-center justify-between">
        <Group>
          <ToggleButton
            className={twJoin(
              "p-2 font-medium text-sm/6",
              currentTab === "tab_preview" ? "text-fg" : "text-muted-fg hover:text-fg",
            )}
            onPress={() => setCurrentTab("tab_preview")}
          >
            Preview
          </ToggleButton>
          <ToggleButton
            className={twJoin(
              "p-2 font-medium text-sm/6",
              currentTab === "tab_code" ? "text-fg" : "text-muted-fg hover:text-fg",
            )}
            onPress={() => setCurrentTab("tab_code")}
          >
            Code
          </ToggleButton>
        </Group>
        <Group>
          <PullRegistry processedSourceCode={processedSourceCode} blockDemo={blockDemo} />
        </Group>
      </Toolbar>
      <div className="max-h-140 w-full">
        {currentTab === "tab_preview" ? (
          <div
            className={twMerge(
              !withNoPadding && "relative gap-4 rounded-lg border bg-overlay p-6",
              isCenter &&
                "preview flex min-h-56 items-center justify-center overflow-x-auto py-6 sm:py-24 lg:min-h-96",
            )}
          >
            <Suspense
              fallback={
                <div className="flex items-center justify-center py-6 text-muted-fg text-sm">
                  <Loader variant="spin" />
                  <span className="sr-only">Loading...</span>
                </div>
              }
            >
              <div className={twMerge(minW72 && "min-w-72", "not-prose", className)}>
                <Component />
              </div>
            </Suspense>
          </div>
        ) : (
          <div>
            {processedSourceCode ? (
              <Group className="group relative">
                <CodeHighlighter
                  className="h-full max-h-140"
                  removeLastLine
                  code={processedSourceCode}
                />
              </Group>
            ) : (
              /*
               * Display a loading message while the source code is being fetched.
               */
              <p>Loading source code...</p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
