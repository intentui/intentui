"use client"

import * as React from "react"

import jsonPreviews from "@/components/docs/generated/previews.json"
import { Code } from "@/components/docs/rehype/code"
import { IconBrandReactjs } from "@intentui/icons"

interface SourceCodeProps extends React.HTMLAttributes<HTMLDivElement> {
  toShow: string
  message?: string
  title?: string
  ext?: string
}

export function SourceCode({ title, message, ext = "tsx", toShow, ...props }: SourceCodeProps) {
  const [codeString, setCodeString] = React.useState<{ name: string; code: string } | null>(null)

  React.useEffect(() => {
    // @ts-ignore
    const componentData = jsonPreviews[toShow]
    if (componentData) {
      setCodeString({
        name: toShow,
        code: componentData.raw.replace(
          /export default function \w+\(\) \{/g,
          "export default function App() {"
        )
      })
    } else {
      setCodeString(null)
    }
  }, [toShow])

  if (codeString) {
    return (
      <section {...props} className="my-6 not-prose">
        <p className="mb-4 -mt-2">
          {message
            ? message
            : "And next, you can copy the code below and paste it into your component folder."}
        </p>
        {title && <figcaption data-rehype-pretty-code-title="">{title}</figcaption>}
        <Code
          title={`${toShow}.tsx`}
          icon={IconBrandReactjs}
          code={codeString.code}
          lang={ext}
          withImportCopy={false}
        />
      </section>
    )
  }

  return null
}
