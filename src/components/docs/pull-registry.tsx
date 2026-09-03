'use client'

import { track } from '@vercel/analytics'
import { useState } from 'react'
import { Button } from 'react-aria-components/Button'
import { twJoin, cn } from 'cn'
import { Link } from '@/components/ui/link'
import { app } from '@/config/app'
import { useClipboard } from '@/hooks/use-clipboard'

interface PullRegistryProps {
  readMore?: string
  processedSourceCode: string | null
  blockExample: string
}

interface CopyButtonProps {
  label?: string
  copiedLabel?: string
  isCopied: boolean
  onCopy: () => void
  className?: string
}

export function CopyButton({
  label = 'Copy',
  copiedLabel = 'Copied',
  className,
  isCopied,
  onCopy,
}: CopyButtonProps) {
  return (
    <Button
      className={cn(
        'relative h-8 w-14 overflow-hidden p-1.5 font-medium pressed:text-fg text-muted-fg text-sm/6 hover:text-fg',
        className
      )}
      onPress={onCopy}
    >
      <span
        className={twJoin(
          'absolute inset-0 flex items-center justify-center transition duration-300',
          isCopied ? '-translate-y-1.5 text-fg opacity-0' : 'translate-y-0 opacity-100'
        )}
      >
        {label}
      </span>
      <span
        className={twJoin(
          'absolute inset-0 flex items-center justify-center transition duration-300',
          isCopied ? 'translate-y-0 text-fg opacity-100' : 'translate-y-1.5 opacity-0'
        )}
      >
        {copiedLabel}
      </span>
    </Button>
  )
}

export function PullRegistry({ readMore, processedSourceCode, blockExample }: PullRegistryProps) {
  const [copy, setCopy] = useState({ code: false, command: false })
  const { copy: copyToClipboard } = useClipboard()

  const handleCopy = async (key: 'code' | 'command', value: string) => {
    const didCopy = await copyToClipboard(value)
    if (!didCopy) return
    setCopy((prev) => ({ ...prev, [key]: true }))
    setTimeout(() => setCopy((prev) => ({ ...prev, [key]: false })), 2000)
  }

  return (
    <div className="relative flex items-center gap-x-0.5 sm:gap-x-3">
      <CopyButton
        label="Registry"
        className="hidden sm:inline"
        copiedLabel="Copied"
        isCopied={copy.command}
        onCopy={() => handleCopy('command', `${app.shadcn} add @intentui/${blockExample}`)}
      />
      <CopyButton
        label="Copy"
        copiedLabel="Copied"
        isCopied={copy.code}
        onCopy={() => {
          const text = processedSourceCode as string
          handleCopy('code', text)
          track('copy to clipboard', {
            text: text,
          })
        }}
      />
      {readMore && (
        <Link
          className="p-2 font-medium pressed:text-fg text-muted-fg text-sm/6 hover:text-fg"
          href={readMore}
          target="_blank"
        >
          Read more
        </Link>
      )}
      {/*<Link*/}
      {/*  className="hidden p-2 pressed:text-fg text-muted-fg text-sm/6 hover:text-fg"*/}
      {/*  href={openInV0Url(blockExample)}*/}
      {/*  target="_blank"*/}
      {/*>*/}
      {/*  Open in V0*/}
      {/*</Link>*/}
    </div>
  )
}
