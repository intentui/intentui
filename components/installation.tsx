"use client"

import React from "react"

import { CodeHighlighter } from "@/components/docs/rehype/code"
import { IconCheck, IconDuplicate } from "@intentui/icons"
import { trackEvent } from "@openpanel/nextjs"
import { AnimatePresence, motion } from "motion/react"
import { Button, type ButtonProps } from "react-aria-components"
import { tv } from "tailwind-variants"
import { Link, Menu } from "ui"
import { copyToClipboard } from "usemods"

const manualText =
  "Sometimes, using the CLI is the way to go, so make sure you install the necessary\n" +
  "          dependencies for the components you want to use."

const installationStyles = tv({
  slots: {
    copyButton:
      "focus:outline-none d3k32ksd absolute right-0 mr-2 inset-y-1/2 -translate-y-1/2 pressed:bg-zinc-800 size-[1.85rem] grid place-content-center text-white border border-zinc-700 rounded-md bg-black/10 backdrop-blur hover:bg-zinc-800",
    install:
      "flex h-12 border pr-8 relative overflow-hidden rounded-lg bg-[#0e0e10] items-center [&_[data-rehype-pretty-code-figure]_pre]:border-0"
  }
})

const { copyButton, install } = installationStyles()

export interface InstallationProps {
  items: string[]
  command?: string
  className?: string
  options: {
    isInit?: boolean
    isComponent?: boolean
    isManual?: boolean
    isExecutor?: boolean
  }
}

export function Installation({ className, ...props }: InstallationProps) {
  const {
    options = { isExecutor: false, isInit: false, isComponent: false, isManual: false },
    items
  } = props
  const [pkgManager, setPkgManager] = React.useState({
    name: "npm",
    action: "i"
  })
  const [isCopied, setIsCopied] = React.useState(false)

  React.useEffect(() => {
    let timer: NodeJS.Timeout
    if (isCopied) {
      timer = setTimeout(() => setIsCopied(false), 2000)
    }
    return () => clearTimeout(timer)
  }, [isCopied])

  return (
    <>
      {options.isComponent && (
        <p>
          If you hit any issues, make sure you check out the installation guide{" "}
          <Link
            className="not-prose font-medium"
            intent="primary"
            href="/docs/getting-started/installation"
            target="_blank"
            rel="noreferrer"
          >
            here
          </Link>
          .
        </p>
      )}
      {options.isManual && <p>{manualText}</p>}
      <div className={install({ className })}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="ml-[0.395rem] md:block hidden size-6 -mr-3.5 text-zinc-400 z-10"
        >
          <path stroke="currentColor" d="m10 16 4-4-4-4" strokeLinecap="square" strokeWidth="2" />
        </svg>
        <CodeHighlighter
          className="flex-1 chlt overflow-x-auto pr-4"
          lang="bash"
          code={
            props.command ||
            (options.isInit
              ? "npx justd-cli@latest init"
              : options.isComponent
                ? `npx justd-cli@latest add ${items[0]}`
                : `${pkgManager.name} ${pkgManager.action} ${items.join(" ")}`)
          }
        />
        {props.command ? (
          <ButtonCopy
            onPress={() => {
              copyToClipboard(props.command as string).then(() => {
                setIsCopied(true)
                trackEvent("cli pressed", { copy: props.command })
              })
            }}
            isCopied={isCopied}
          />
        ) : options.isComponent ? (
          <ButtonCopy
            onPress={() => {
              copyToClipboard(`npx justd-cli@latest add ${items[0]}`).then(() => {
                setIsCopied(true)
                trackEvent("cli pressed", { copy: `add ${items.join(" ")}` })
              })
            }}
            isCopied={isCopied}
          />
        ) : options.isInit ? (
          <ButtonCopy
            onPress={() => {
              copyToClipboard(`npx justd-cli@latest init`).then(() => {
                setIsCopied(true)
                trackEvent("cli pressed", { copy: `init` })
              })
            }}
            isCopied={isCopied}
          />
        ) : (
          <ChoosePkgManager
            {...{
              isExecutor: options.isExecutor,
              isCopied,
              setIsCopied,
              setPkgManager,
              items
            }}
          />
        )}
      </div>
    </>
  )
}

const copyVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 }
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
  setIsCopied,
  setPkgManager,
  ...props
}: ChoosePkgManagerProps) {
  function handleAction(tool: string) {
    let selectedPkgManager: PkgManager = {
      name: "",
      executor: "",
      action: ""
    }

    switch (tool) {
      case "npm":
        selectedPkgManager = {
          name: "npm",
          executor: "npx",
          action: "i"
        }
        break
      case "yarn":
        selectedPkgManager = {
          name: "yarn",
          executor: "yarn dlx",
          action: "add"
        }
        break
      case "pnpm":
        selectedPkgManager = {
          name: "pnpm",
          executor: "pnpm dlx",
          action: "add"
        }
        break
      case "bun":
        selectedPkgManager = {
          name: "bun",
          executor: "bunx",
          action: "add"
        }
        break
    }

    setPkgManager(selectedPkgManager)

    const executor = isExecutor ? selectedPkgManager.executor : selectedPkgManager.name
    copyToClipboard(`${executor} ${selectedPkgManager.action} ${items.join(" ")}`).then(() => {
      setIsCopied(true)
      trackEvent("cli pressed", {
        copy: `${executor} ${selectedPkgManager.action} ${items.join(" ")}`
      })
    })
  }

  return (
    <Menu>
      <ButtonCopy isCopied={props.isCopied} />
      <Menu.Content showArrow placement="bottom end">
        {[
          { name: "NPM", vendor: "npm" },
          { name: "Yarn", vendor: "yarn" },
          { name: "Bun", vendor: "bun" },
          { name: "PNPM", vendor: "pnpm" }
        ].map(({ name, vendor }) => (
          <Menu.Item key={name} onAction={() => handleAction(vendor)}>
            {name}
          </Menu.Item>
        ))}
      </Menu.Content>
    </Menu>
  )
}

interface ButtonCopyProps extends ButtonProps {
  isCopied: boolean
}

function ButtonCopy({ isCopied, ...props }: ButtonCopyProps) {
  return (
    <Button className={copyButton()} {...props}>
      <AnimatePresence mode="wait" initial={false}>
        {isCopied ? (
          <motion.span
            key="check"
            variants={copyVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <IconCheck />
          </motion.span>
        ) : (
          <motion.span
            key="copy"
            variants={copyVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <IconDuplicate />
          </motion.span>
        )}
      </AnimatePresence>
    </Button>
  )
}
