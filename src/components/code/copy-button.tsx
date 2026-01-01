"use client"

import { CheckIcon } from "@heroicons/react/24/outline"
import type React from "react"
import { useEffect, useState } from "react"
import { Button } from "react-aria-components"
import { twJoin } from "tailwind-merge"
import { DuplicateIcon } from "@/components/icons/duplicate-icon"
import { copyToClipboard } from "@/lib/copy"
import { cx } from "@/lib/primitive"

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
      className={cx(
        twJoin(
          "relative h-8 w-14 overflow-hidden p-1.5 font-medium pressed:text-fg text-muted-fg text-sm/6 hover:text-fg",
          isCopied && "text-fg",
        ),
        className,
      )}
      {...props}
    >
      {isCopied ? <CheckIcon className="size-4" /> : <DuplicateIcon className="size-4" />}
    </Button>
  )
}
