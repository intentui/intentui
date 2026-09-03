'use client'

import type React from 'react'
import { cn } from 'cn'

export function OptionPreview({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('absolute top-4 left-4 inline-flex min-w-32 flex-col gap-1', className)}
      {...props}
    />
  )
}
