import { CheckIcon, ChevronRightIcon, Square2StackIcon } from "@heroicons/react/24/outline"
import { useState } from "react"
import { copyToClipboard } from "usemods"
import { Button } from "@/components/ui/button"
import { Menu, MenuContent, MenuItem } from "@/components/ui/menu"

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
    <div className="xd flex h-10 w-full items-center justify-between rounded-lg border p-1 pl-3 font-mono text-sm backdrop-blur-xs duration-200 hover:border-current/10 sm:min-w-72 sm:max-w-72 dark:bg-secondary [&_.xd]:-mt-px [&_.xd]:mr-[-0.30rem]">
      <div className="flex items-center">
        <ChevronRightIcon className="-ml-1.5 size-5.5 text-muted-fg" />
        {command || "npm i @intentui/icons"}
      </div>
      <Menu>
        <Button
          size="sq-sm"
          intent="secondary"
          className="size-7 rounded-sm bg-bg hover:bg-bg/80"
          aria-label="Copy npm command"
        >
          {isCopied ? <CheckIcon /> : <Square2StackIcon />}
        </Button>
        <MenuContent placement="bottom end">
          <MenuItem onAction={() => handleCopy("NPM")}>NPM</MenuItem>
          <MenuItem onAction={() => handleCopy("Bun")}>Bun</MenuItem>
          <MenuItem onAction={() => handleCopy("Yarn")}>Yarn</MenuItem>
          <MenuItem onAction={() => handleCopy("PNPM")}>PNPM</MenuItem>
        </MenuContent>
      </Menu>
    </div>
  )
}
