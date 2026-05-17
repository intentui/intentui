"use client"

import type React from "react"
import { twMerge } from "tailwind-merge"

export function OptionPreview({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={twMerge("absolute top-4 left-4 inline-flex min-w-32 flex-col gap-1", className)}
      {...props}
    />
  )
}
