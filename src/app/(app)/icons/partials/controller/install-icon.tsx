import { CheckIcon } from "@heroicons/react/20/solid"
import { useState } from "react"
import { DuplicateIcon } from "@/components/icons/duplicate-icon"
import { Button } from "@/components/ui/button"
import { Menu, MenuContent, MenuItem } from "@/components/ui/menu"
import { useClipboard } from "@/hooks/use-clipboard"

const npms = ["bun", "yarn", "pnpm", "npm"] as const
type Tool = (typeof npms)[number]

export function InstallIcon({ pkg = "@intentui/icons" }: { pkg?: string }) {
  const [isCopied, setIsCopied] = useState(false)
  const [command, setCommand] = useState("")
  const { copy } = useClipboard()

  const installMap: Record<Tool, string> = {
    bun: "bun add",
    yarn: "yarn add",
    pnpm: "pnpm add",
    npm: "npm i",
  }

  const handleCopy = async (tool: Tool) => {
    const newCommand = `${installMap[tool]} ${pkg}`
    setCommand(newCommand)
    const didCopy = await copy(newCommand)
    if (!didCopy) return
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  return (
    <div className="xd flex h-10 w-full items-center justify-between rounded-lg border p-1 pl-3 font-mono text-sm backdrop-blur-xs duration-200 hover:border-current/10 sm:min-w-72 sm:max-w-72 dark:bg-secondary [&_.xd]:-mt-px [&_.xd]:mr-[-0.30rem]">
      <div className="flex items-center">{command || `npm i ${pkg}`}</div>
      <Menu>
        <Button
          size="sq-sm"
          intent="secondary"
          className="size-7 rounded-sm bg-bg hover:bg-bg/80"
          aria-label="Copy install command"
        >
          {isCopied ? <CheckIcon /> : <DuplicateIcon />}
        </Button>
        <MenuContent placement="bottom end">
          {npms.map((item) => (
            <MenuItem key={item} onAction={() => handleCopy(item)}>
              {item}
            </MenuItem>
          ))}
        </MenuContent>
      </Menu>
    </div>
  )
}
