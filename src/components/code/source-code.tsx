"use client"

import { IconBrandReactjs } from "@intentui/icons"
import { useEffect, useMemo, useState } from "react"
import { CodeHighlighter } from "@/components/code/code-highlighter"
import { CopyButton } from "@/components/code/copy-button"
import { createFetchRegistryFile } from "@/lib/fetch-registry"

type SourceCodeProps = {
  toShow: string
  message?: string
  title?: string
  ext?: string
}

const fetchRegistryFile = createFetchRegistryFile("/r")

export const SourceCode = ({ toShow, ...props }: SourceCodeProps) => {
  const [rawSourceCode, setRawSourceCode] = useState<string | null>(null)
  const processedSourceCode = useMemo(() => {
    if (!rawSourceCode) return null

    return rawSourceCode
  }, [rawSourceCode])
  useEffect(() => {
    fetchRegistryFile(`${toShow}`).then(setRawSourceCode)
  }, [toShow])

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
