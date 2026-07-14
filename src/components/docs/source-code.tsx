'use client'

import { useEffect, useMemo, useState } from 'react'
import { CodeHighlighter } from '@/components/docs/code-highlighter'
import { CopyButton } from '@/components/docs/copy-button'
import { BrandReactjsIcon } from '@/components/icons/brand-reactjs-icon'
import { createFetchRegistryFile } from '@/lib/fetch-registry'

type SourceCodeProps = {
  toShow: string
  message?: string
  title?: string
  ext?: string
}

const fetchRegistryFile = createFetchRegistryFile('/r')

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
      <section {...props} className="group not-typeset relative my-6">
        <p className="mb-3 text-base/6">
          {props.message
            ? props.message
            : 'You can copy the code below and paste it into your component folder.'}
        </p>
        <div className="overflow-hidden rounded-lg border bg-shiki-bg">
          {props.title && <figcaption data-rehype-pretty-code-title="">{props.title}</figcaption>}
          <div className="flex items-center justify-between border-b">
            <div className="flex cursor-default items-center gap-x-1 px-3 py-2 font-medium text-sm/6">
              <BrandReactjsIcon className="size-4 text-sky-500" />
              {toShow}.tsx
            </div>
            <CopyButton className="grid size-10 place-content-center" text={processedSourceCode} />
          </div>
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
