"use client"

import React, { useState } from "react"

import generated from "@/../__registry__/generated"
import { CodeHighlighter } from "@/components/code/code-highlighter"
import { CopyMotionButton } from "@/components/code/copy-button"
import { createFetchRegistryFile } from "@/lib/fetch-registry"
import { IconBrandReactjs } from "@intentui/icons"

type RegistryItem = {
  component: React.LazyExoticComponent<any>
  files: string[]
  [key: string]: any
}

const registry = generated as Record<string, RegistryItem>

type SourceCodeProps = {
  toShow: string
  message?: string
  title?: string
  ext?: string
}

const fetchRegistryFile = createFetchRegistryFile("/r")

export const SourceCode = ({ toShow, ...props }: SourceCodeProps) => {
  const [rawSourceCode, setRawSourceCode] = useState<string | null>(null)

  /*
   * Prepend the `ui/` prefix to the provided `toShow` prop
   * to construct the registry key dynamically.
   */
  const registryKey = `ui/${toShow}`

  /*
   * Retrieve the component from the registry using the dynamic key.
   * This ensures that the correct component is loaded via React.lazy.
   */
  const Component = registry[registryKey]?.component
  const processedSourceCode = React.useMemo(() => {
    if (!rawSourceCode) return null

    return rawSourceCode
  }, [rawSourceCode])

  React.useEffect(() => {
    fetchRegistryFile(`ui-${toShow}`).then(setRawSourceCode)
  }, [toShow])

  if (!Component) {
    /*
     * Display a fallback message if the component is not found in the registry.
     */
    return <p>Component "{toShow}" not found in the registry.</p>
  }

  if (processedSourceCode) {
    return (
      <section {...props} className="group not-prose relative my-6">
        <p className="-mt-2 mb-4">
          {props.message
            ? props.message
            : "You can copy the code below and paste it into your component folder."}
        </p>
        {props.title && <figcaption data-rehype-pretty-code-title="">{props.title}</figcaption>}
        <div className="mb-1 flex items-center justify-between">
          <div className="flex items-center font-mono text-[13px]/6 text-muted-fg tracking-tight">
            <IconBrandReactjs
              data-slot="brand-icon"
              className="mr-1.5 size-3.5 text-cyan-600 dark:text-cyan-500"
            />{" "}
            {toShow}.tsx
          </div>
          <CopyMotionButton
            className="absolute top-20 right-2 hidden rounded-sm group-hover:opacity-100 sm:inline"
            text={processedSourceCode}
          />
        </div>
        <div className="overflow-hidden rounded-lg border border-shiki-border bg-shiki-bg">
          <CodeHighlighter
            className="**:[pre]:p-4"
            removeLastLine
            plain
            code={processedSourceCode}
            lang={props.ext}
          />
        </div>
      </section>
    )
  }
}
