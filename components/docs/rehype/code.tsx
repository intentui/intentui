"use client"

import React, { useEffect, useState } from "react"

import { IconCheck, IconCircleInfo, IconDuplicate } from "@intentui/icons"
import { AnimatePresence, motion } from "motion/react"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeStringify from "rehype-stringify"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import { Button, type ButtonProps, cn } from "ui"
import { unified } from "unified"
import { copyToClipboard } from "usemods"

export const snippetVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 }
}

export interface CodeProps {
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
  title?: string
  lang?: string
  code: string
  withImportCopy?: boolean
  className?: string
}

function Code({
  title,
  icon: Icon,
  className,
  lang = "tsx",
  code,
  withImportCopy = true
}: CodeProps) {
  const [copied, setCopied] = React.useState<string>("")

  function copyImportsToClipboard(): void {
    const importRegex = /import[\s\S]+?from\s+['"][\s\S]+?['"];?\n*/g
    const _imports = code.match(importRegex) || []
    const imports = _imports.map((importStatement: string) => importStatement.trim()).join("\n")
    copyToClipboard(imports)
      .then(() => {
        setCopied("imports")
        setTimeout(() => setCopied(""), 2000)
      })
      .catch((err) => console.error("Copy failed: ", err))
  }

  return (
    <div
      className={cn(
        "not-prose group relative [&_pre]:max-h-96 [&_pre]:overflow-auto rounded-lg font-mono text-sm",
        className
      )}
    >
      {title && (
        <figcaption
          className={cn(Icon && "flex items-center gap-x-1")}
          data-rehype-pretty-code-title=""
        >
          {Icon && <Icon className="text-cyan-600 dark:text-cyan-500 size-4" />}
          <span className="font-sans">{title}</span>
        </figcaption>
      )}
      <div className="relative">
        <div className="absolute cpybtn top-3 right-0 mr-3 z-20 flex gap-1.5 justify-end">
          {withImportCopy && (
            <CopyButton
              ariaLabel="Copy imports statement"
              initialIcon={<IconCircleInfo />}
              isCopied={copied === "imports"}
              onPress={copyImportsToClipboard}
            />
          )}
          <CopyRawButton code={code} />
        </div>
        <div className="overflow-x-auto">
          <CodeHighlighter lang={lang} code={code} />
        </div>
      </div>
    </div>
  )
}

export function CopyRawButton({ code }: { className?: string; code: string }) {
  const [copied, setCopied] = React.useState<string>("")
  const copyRaw = () => {
    copyToClipboard(code)
      .then(() => {
        setCopied("raw")
        setTimeout(() => setCopied(""), 2000)
      })
      .catch((err) => {
        console.error("Copy failed: ", err)
      })
  }
  return <CopyButton ariaLabel="Copy raw code" isCopied={copied === "raw"} onPress={copyRaw} />
}

const CodeHighlighter = ({ lang = "tsx", code, ...props }: CodeProps) => {
  const [formattedCode, setFormattedCode] = useState("")
  const [error, setError] = useState("")

  useEffect(() => {
    const processCode = async () => {
      try {
        const file = await unified()
          .use(remarkParse)
          .use(remarkRehype, { allowDangerousHtml: true })
          .use(rehypePrettyCode, {
            keepBackground: false,
            theme: "vesper",
            defaultLang: {
              block: lang,
              inline: "plaintext"
            }
          })
          .use(rehypeStringify, { allowDangerousHtml: true })
          .process(`\`\`\`${lang}\n${code}\n\`\`\``)
        setFormattedCode(String(file))
      } catch (err) {
        setError("Failed to process code. Please check the configuration.")
        console.error(err)
      }
    }

    processCode().then((r) => r)
  }, [code, lang])

  if (error) {
    return <p>Error: {error}</p>
  }

  return <div {...props} dangerouslySetInnerHTML={{ __html: formattedCode }} />
}

interface CopyButtonProps extends ButtonProps {
  isCopied?: boolean
  ariaLabel?: string
  initialIcon?: React.ReactNode
  copiedIcon?: React.ReactNode
  className?: string
}

const CopyButton = ({
  initialIcon,
  copiedIcon,
  ariaLabel = "Copy",
  isCopied,
  className,
  ...props
}: CopyButtonProps) => {
  return (
    <Button
      className={cn(
        "size-7 backdrop-blur-lg rounded-md text-white bg-zinc-900 border hover:bg-zinc-800 border-zinc-700",
        className
      )}
      aria-label={ariaLabel}
      size="square-petite"
      appearance="outline"
      {...props}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isCopied ? (
          <motion.span
            key="checkmark-import"
            variants={snippetVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {copiedIcon ?? <IconCheck />}
          </motion.span>
        ) : (
          <motion.span
            key="copy-import"
            variants={snippetVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {initialIcon ?? <IconDuplicate />}
          </motion.span>
        )}
      </AnimatePresence>
    </Button>
  )
}

export { CodeHighlighter, Code }
