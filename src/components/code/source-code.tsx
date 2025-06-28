"use client"

import { IconBrandReactjs } from "@intentui/icons"
import React, { useState } from "react"
import generated from "@/../__registry__/generated"
import { CodeHighlighter } from "@/components/code/code-highlighter"
import { CopyButton } from "@/components/code/copy-button"
import { createFetchRegistryFile } from "@/lib/fetch-registry"

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
        <div className="flex items-center justify-between">
          <div className="flex cursor-default items-center gap-x-1 p-2 font-medium text-sm/6">
            <IconBrandReactjs className="text-sky-500" />
            {toShow}.tsx
          </div>
          <CopyButton text={processedSourceCode} />
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
