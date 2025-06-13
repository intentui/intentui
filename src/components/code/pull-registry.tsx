"use client"

import { Link } from "@/components/ui/link"
import { siteConfig } from "@/config/site"
import { copyToClipboard } from "@/lib/copy"
import { openInV0Url } from "@/lib/utils"
import { useState } from "react"
import { Button } from "react-aria-components"
import { twJoin } from "tailwind-merge"

interface PullRegistryProps {
  processedSourceCode: string | null
  blockDemo: string
  className?: string
}

interface CopyButtonProps {
  label: string
  copiedLabel: string
  value: string
  isCopied: boolean
  onCopy: () => void
}

function CopyButton({ label, copiedLabel, value, isCopied, onCopy }: CopyButtonProps) {
  return (
    <Button
      className="relative h-8 w-14 overflow-hidden p-2 font-medium pressed:text-fg text-muted-fg text-sm/6 hover:text-fg"
      onPress={onCopy}
    >
      <span
        className={twJoin(
          "absolute inset-0 flex items-center justify-center transition duration-300",
          isCopied ? "-translate-y-1.5 text-fg opacity-0" : "translate-y-0 opacity-100",
        )}
      >
        {label}
      </span>
      <span
        className={twJoin(
          "absolute inset-0 flex items-center justify-center transition duration-300",
          isCopied ? "translate-y-0 text-fg opacity-100" : "translate-y-1.5 opacity-0",
        )}
      >
        {copiedLabel}
      </span>
    </Button>
  )
}

export function PullRegistry({ className, processedSourceCode, blockDemo }: PullRegistryProps) {
  const [copy, setCopy] = useState({ code: false, command: false })

  const handleCopy = (key: "code" | "command", value: string) => {
    copyToClipboard(value).then(() => {
      setCopy((prev) => ({ ...prev, [key]: true }))
      setTimeout(() => setCopy((prev) => ({ ...prev, [key]: false })), 2000)
    })
  }

  return (
    <div className="relative flex items-center gap-x-0.5">
      <CopyButton
        label="Copy"
        copiedLabel="Copied"
        value={processedSourceCode as string}
        isCopied={copy.code}
        onCopy={() => handleCopy("code", processedSourceCode as string)}
      />

      <CopyButton
        label="Registry"
        copiedLabel="Copied"
        value={`npx ${siteConfig.cliCommand} add -b ${blockDemo}`}
        isCopied={copy.command}
        onCopy={() => handleCopy("command", `npx ${siteConfig.cliCommand} add -b ${blockDemo}`)}
      />

      <Link
        className="hidden p-2 pressed:text-fg text-muted-fg text-sm/6 hover:text-fg"
        href={openInV0Url(blockDemo)}
        target="_blank"
      >
        Open in V0
      </Link>
    </div>
  )
}
