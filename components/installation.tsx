"use client"

import React, { useState } from "react"

import { CodeHighlighter } from "@/components/code/code-highlighter"
import { CopyButton } from "@/components/code/copy-button"
import { Button } from "@/components/ui/button"
import { Link } from "@/components/ui/link"
import { Menu } from "@/components/ui/menu"
import { composeTailwindRenderProps } from "@/components/ui/primitive"
import { copyToClipboard } from "@/resources/lib/copy"
import { IconCheck, IconDuplicate } from "@intentui/icons"
import { Group } from "react-aria-components"

export interface InstallationProps {
  items: string[]
  command?: string
  className?: string
  options: {
    isInit?: boolean
    isComponent?: boolean
    isManual?: boolean
    isExecutor?: boolean
    noText?: boolean
  }
}

export function Installation({ className, ...props }: InstallationProps) {
  const {
    options = {
      isExecutor: false,
      isInit: false,
      isComponent: false,
      isManual: false,
      noText: true,
    },
    items,
  } = props
  const [pkgManager, setPkgManager] = useState({
    name: "npm",
    action: "i",
  })
  const [isCopied, setIsCopied] = useState(false)

  React.useEffect(() => {
    let timer: NodeJS.Timeout
    if (isCopied) {
      timer = setTimeout(() => setIsCopied(false), 2000)
    }
    return () => clearTimeout(timer)
  }, [isCopied])

  return (
    <div className={className}>
      {options.isComponent && !options.noText && (
        <p>
          If you hit any issues, make sure you check out the installation guide{" "}
          <Link
            className="not-prose xd2432 text-blue-600 hover:underline dark:text-blue-400"
            intent="primary"
            href="/docs/2.x/getting-started/cli"
            target="_blank"
            rel="noreferrer"
          >
            here
          </Link>{" "}
          for more information.
        </p>
      )}
      {options.isManual && (
        <p>
          Make sure you also install the <strong>composed components</strong> and the{" "}
          <strong>required packages</strong> for the component to function properly.
        </p>
      )}
      <Group
        className={composeTailwindRenderProps(
          className,
          "group relative flex h-12 items-center overflow-hidden rounded-lg border bg-shiki-bg pr-1",
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="z-10 ml-[0.395rem] hidden size-6 text-zinc-400 md:block"
        >
          <path stroke="currentColor" d="m10 16 4-4-4-4" strokeLinecap="square" strokeWidth="2" />
        </svg>
        <CodeHighlighter
          plain
          className="flex-1 overflow-x-auto px-4 sm:px-1"
          lang="bash"
          code={
            props.command ||
            (options.isInit
              ? "npx @intentui/cli@latest init"
              : options.isComponent
                ? `npx @intentui/cli@latest add ${items[0]}`
                : `${pkgManager.name} ${pkgManager.action} ${items.join(" ")}`)
          }
        />
        {props.command ? (
          <CopyButton isCopied={isCopied} setIsCopied={setIsCopied} />
        ) : options.isComponent ? (
          <CopyButton
            isCopied={isCopied}
            setIsCopied={setIsCopied}
            text={`npx @intentui/cli@latest add ${items[0]}`}
          />
        ) : options.isInit ? (
          <CopyButton
            isCopied={isCopied}
            setIsCopied={setIsCopied}
            text="npx @intentui/cli@latest init"
          />
        ) : (
          <ChoosePkgManager
            {...{
              isExecutor: options.isExecutor,
              isCopied,
              setIsCopied,
              setPkgManager,
              items,
            }}
          />
        )}
      </Group>
    </div>
  )
}

interface PkgManager {
  name: string
  action: string
  executor?: string
}

interface ChoosePkgManagerProps {
  isCopied: boolean
  setIsCopied: (isCopied: boolean) => void
  setPkgManager: (pkgManager: PkgManager) => void
  items: string[]
  isExecutor?: boolean
}

function ChoosePkgManager({
  isExecutor,
  items,
  isCopied,
  setIsCopied,
  setPkgManager,
}: ChoosePkgManagerProps) {
  function handleAction(tool: string) {
    let selectedPkgManager: PkgManager = {
      name: "",
      executor: "",
      action: "",
    }

    switch (tool) {
      case "npm":
        selectedPkgManager = {
          name: "npm",
          executor: "npx",
          action: "i",
        }
        break
      case "yarn":
        selectedPkgManager = {
          name: "yarn",
          executor: "yarn dlx",
          action: "add",
        }
        break
      case "pnpm":
        selectedPkgManager = {
          name: "pnpm",
          executor: "pnpm dlx",
          action: "add",
        }
        break
      case "bun":
        selectedPkgManager = {
          name: "bun",
          executor: "bunx",
          action: "add",
        }
        break
    }

    setPkgManager(selectedPkgManager)

    const executor = isExecutor ? selectedPkgManager.executor : selectedPkgManager.name
    copyToClipboard(`${executor} ${selectedPkgManager.action} ${items.join(" ")}`).then(() => {
      setIsCopied(true)
    })
  }

  return (
    <Menu>
      <Button
        size="square-petite"
        intent="plain"
        className="pressed:bg-transparent hover:bg-transparent"
      >
        {isCopied ? <IconCheck /> : <IconDuplicate />}
      </Button>
      <Menu.Content showArrow placement="bottom end">
        {[
          { name: "NPM", vendor: "npm" },
          { name: "Yarn", vendor: "yarn" },
          { name: "Bun", vendor: "bun" },
          { name: "PNPM", vendor: "pnpm" },
        ].map(({ name, vendor }) => (
          <Menu.Item key={name} onAction={() => handleAction(vendor)}>
            {name}
          </Menu.Item>
        ))}
      </Menu.Content>
    </Menu>
  )
}
