"use client"

import { IconBrandV0 } from "@/components/icons/icon-brand-v0"
import { Button, buttonStyles } from "@/components/ui/button"
import { Link } from "@/components/ui/link"
import { Tooltip } from "@/components/ui/tooltip"
import { siteConfig } from "@/config/site"
import { copyToClipboard } from "@/lib/copy"
import { openInV0Url } from "@/lib/utils"
import { IconCheck, IconDuplicate, IconTerminal } from "@intentui/icons"
import { useState } from "react"
import { twMerge } from "tailwind-merge"

interface PullRegistryProps {
  processedSourceCode: string | null
  blockDemo: string
  className?: string
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
    <div className={twMerge("flex items-center gap-x-1", className)}>
      <Tooltip>
        <Button
          onPress={() => handleCopy("code", processedSourceCode as string)}
          intent="plain"
          className="size-7 rounded-xs"
          size="square-petite"
        >
          {copy.code ? <IconCheck /> : <IconDuplicate />}
        </Button>
        <Tooltip.Content>Copy code</Tooltip.Content>
      </Tooltip>
      <Tooltip>
        <Button
          onPress={() => handleCopy("command", `npx ${siteConfig.cliCommand} add -b ${blockDemo}`)}
          intent="plain"
          className="size-7 rounded-xs"
          size="square-petite"
        >
          {copy.command ? <IconCheck /> : <IconTerminal />}
        </Button>
        <Tooltip.Content>Copy registry command</Tooltip.Content>
      </Tooltip>
      <Tooltip>
        <Link
          href={openInV0Url(blockDemo as string)}
          target="_blank"
          className={buttonStyles({
            size: "square-petite",
            intent: "plain",
            className: "size-7 rounded-xs",
          })}
        >
          <IconBrandV0 />
        </Link>
        <Tooltip.Content>Open in V0</Tooltip.Content>
      </Tooltip>
    </div>
  )
}
