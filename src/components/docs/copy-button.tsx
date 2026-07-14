'use client'

import { CheckIcon } from '@heroicons/react/20/solid'
import type React from 'react'
import { useEffect, useState } from 'react'
import { Button } from 'react-aria-components/Button'
import { DuplicateIcon } from '@/components/icons/duplicate-icon'
import { useClipboard } from '@/hooks/use-clipboard'
import { cx } from '@/lib/primitive'

interface CopyButtonProps extends React.ComponentProps<typeof Button> {
  isCopied?: boolean
  setIsCopied?: (isCopied: boolean) => void
  alwaysVisible?: boolean
  text?: string
}

export function CopyButton({
  text,
  alwaysVisible: _alwaysVisible = false,
  isCopied: isCopiedProp,
  setIsCopied: setIsCopiedProp,
  className,
  ...props
}: CopyButtonProps) {
  const { copy } = useClipboard()
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

  const onPressHandler = async () => {
    if (text) {
      const didCopy = await copy(text)
      if (didCopy) setIsCopied(true)
    }
  }

  return (
    <Button
      aria-label="Copy to clipboard"
      onPress={props.onPress || onPressHandler}
      className={cx(
        'relative h-8 w-14 overflow-hidden p-1.5 font-medium pressed:text-fg text-muted-fg text-sm/6 hover:text-fg',
        isCopied && 'text-fg',
        className
      )}
      {...props}
    >
      {isCopied ? <CheckIcon className="size-4" /> : <DuplicateIcon className="size-4" />}
    </Button>
  )
}
