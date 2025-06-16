import type React from "react"
import { useEffect, useState } from "react"

import { copyToClipboard } from "@/lib/copy"
import { composeTailwindRenderProps } from "@/lib/primitive"
import { IconDuplicate } from "@intentui/icons"
import { Button } from "react-aria-components"
import { twJoin, twMerge } from "tailwind-merge"

interface CopyButtonProps extends React.ComponentProps<typeof Button> {
  isCopied?: boolean
  setIsCopied?: (isCopied: boolean) => void
  alwaysVisible?: boolean
  text?: string
}

export function CopyButton({
  text,
  alwaysVisible = false,
  isCopied: isCopiedProp,
  setIsCopied: setIsCopiedProp,
  className,
  ...props
}: CopyButtonProps) {
  const [isCopiedState, setIsCopiedState] = useState(false)

  const isControlled = isCopiedProp !== undefined
  const isCopied = isControlled ? isCopiedProp : isCopiedState
  const setIsCopied = isControlled ? setIsCopiedProp || (() => {}) : setIsCopiedState

  useEffect(() => {
    if (isCopied) {
      const timeout = setTimeout(() => setIsCopied(false), 2000)
      return () => clearTimeout(timeout)
    }
  }, [isCopied, setIsCopied])

  const onPressHandler = () => {
    if (text) {
      copyToClipboard(text)
      setIsCopied(true)
    }
  }

  return (
    <Button
      aria-label="Copy to clipboard"
      onPress={props.onPress || onPressHandler}
      className={composeTailwindRenderProps(
        className,
        twJoin(
          "relative h-8 w-14 overflow-hidden p-1.5 font-medium pressed:text-fg text-muted-fg text-sm/6 hover:text-fg",
          isCopied && "text-fg",
        ),
      )}
      {...props}
    >
      <span
        className={twJoin(
          "absolute inset-0 flex items-center justify-center transition duration-300",
          isCopied ? "-translate-y-1.5 opacity-0" : "translate-y-0 opacity-100",
        )}
      >
        Copy
      </span>
      <span
        className={twJoin(
          "absolute inset-0 flex items-center justify-center transition duration-300",
          isCopied ? "translate-y-0 opacity-100" : "translate-y-1.5 opacity-0",
        )}
      >
        Copied
      </span>
    </Button>
  )
}

export function CopyMotionButton({ className, text }: { className?: string; text: string }) {
  const [copyCount, setCopyCount] = useState(0)
  const copied = copyCount > 0

  useEffect(() => {
    if (copyCount > 0) {
      const timeout = setTimeout(() => setCopyCount(0), 1000)
      return () => {
        clearTimeout(timeout)
      }
    }
  }, [copyCount])

  return (
    <button
      type="button"
      className={twMerge(
        "group/button -top-0.5 absolute right-0 overflow-hidden rounded-sm py-1 pr-2.5 pl-1.5 font-medium text-[0.70rem]/[1.20rem] opacity-0 backdrop-blur transition focus:opacity-100 group-hover/how:opacity-100",
        copied
          ? "bg-blue-400/10 ring-1 ring-blue-400/20 ring-inset"
          : "bg-secondary/80 text-secondary-fg ring-1 ring-fg/10 ring-inset",
        className,
      )}
      onClick={() => {
        window.navigator.clipboard.writeText(text).then(() => {
          setCopyCount((count) => count + 1)
        })
      }}
    >
      <span
        aria-hidden={copied}
        className={twMerge(
          "pointer-events-none flex items-center gap-0.5 text-zinc-500 transition duration-300 dark:text-zinc-400",
          copied && "-translate-y-1.5 opacity-0",
        )}
      >
        <IconDuplicate className="size-3.5 fill-zinc-600/20 stroke-zinc-600 transition-colors group-hover/button:stroke-zinc-500 dark:fill-zinc-500/20 dark:stroke-zinc-500 dark:group-hover/button:stroke-zinc-400" />
        Copy
      </span>
      <span
        aria-hidden={!copied}
        className={twMerge(
          "pointer-events-none absolute inset-0 flex items-center justify-center text-blue-400 transition duration-300",
          !copied && "translate-y-1.5 opacity-0",
        )}
      >
        Copied!
      </span>
    </button>
  )
}
