import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Menu } from "@/components/ui/menu"
import { IconCheck, IconChevronRight, IconDuplicate } from "@intentui/icons"
import { copyToClipboard } from "usemods"

type Tool = "Bun" | "Yarn" | "PNPM" | "NPM"

export function InstallIcon({ pkg = "@intentui/icons" }: { pkg?: string }) {
  const [isCopied, setIsCopied] = useState(false)
  const [command, setCommand] = useState("")
  const commandArgs = pkg

  const installMap: Record<Tool, string> = {
    Bun: "bun add",
    Yarn: "yarn add",
    PNPM: "pnpm add",
    NPM: "npm i",
  }

  const handleCopy = (tool: Tool) => {
    const newCommand = `${installMap[tool]} ${commandArgs}`
    setCommand(newCommand)
    copyToClipboard(newCommand).then(() => {
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    })
  }

  return (
    <div className="[&_.xd]:-mt-px xd flex h-10 w-full items-center justify-between rounded-lg border p-1 pl-3 font-mono text-sm sm:min-w-72 sm:max-w-72 [&_.xd]:mr-[-0.30rem]">
      <div className="flex items-center">
        <IconChevronRight className="-ml-1.5 size-5.5 text-muted-fg" />
        {command || "npm i @intentui/icons"}
      </div>
      <Menu>
        <Button
          size="square-petite"
          intent="outline"
          className="size-7 rounded-sm"
          aria-label="Copy npm command"
        >
          {isCopied ? <IconCheck /> : <IconDuplicate />}
        </Button>
        <Menu.Content placement="bottom end">
          <Menu.Item onAction={() => handleCopy("NPM")}>NPM</Menu.Item>
          <Menu.Item onAction={() => handleCopy("Bun")}>Bun</Menu.Item>
          <Menu.Item onAction={() => handleCopy("Yarn")}>Yarn</Menu.Item>
          <Menu.Item onAction={() => handleCopy("PNPM")}>PNPM</Menu.Item>
        </Menu.Content>
      </Menu>
    </div>
  )
}
