"use client"

import React, { useState } from "react"

import { codeToHtml } from "shiki"
import { twMerge } from "tailwind-merge"

export interface CodeHighlighterProps {
  plain?: boolean
  lang?: string
  code: string
  max96?: boolean
  className?: string
  removeLastLine?: boolean
}

export const CodeHighlighter = ({
  max96 = true,
  removeLastLine = false,
  plain = false,
  lang = "tsx",
  code,
  className,
  ...props
}: CodeHighlighterProps) => {
  const [loading, setLoading] = useState(false)
  const [formattedCode, setFormattedCode] = useState("")
  const [error, setError] = useState("")

  React.useEffect(() => {
    setLoading(true)
    const processCode = async () => {
      try {
        const file = await codeToHtml(code, {
          lang: lang,
          themes: { light: "github-light", dark: "github-dark" },
        })
        setFormattedCode(String(file))
      } catch (err) {
        setError("Failed to process code. Please check the configuration.")
        console.error(err)
      }
    }
    processCode().then(() => setLoading(false))
  }, [code, lang])

  if (error) {
    return <p>Error: {error}</p>
  }

  return loading ? (
    <div />
  ) : (
    <div
      {...props}
      className={twMerge(
        "not-prose overflow-auto font-mono text-sm leading-8 **:[pre]:outline-hidden",
        max96 && "max-h-96",
        !plain && "rounded-lg bg-shiki-bg px-4 py-2.5 ring-1 ring-border",
        removeLastLine &&
          "**:data-rehype-pretty-code-figure:*:[pre]:*:[code]:*:data-line:last:hidden",
        className,
      )}
      dangerouslySetInnerHTML={{ __html: formattedCode }}
    />
  )
}
