"use client"
import { twMerge } from "tailwind-merge"

const dots = "mx-[1px] inline-block size-[0.3125rem] animate-blink rounded-md"

export const LoadingDots = ({ className }: { className: string }) => {
  return (
    <span className="mx-2 inline-flex items-center">
      <span className={twMerge(dots, className)} />
      <span className={twMerge(dots, "animation-delay-[200ms]", className)} />
      <span className={twMerge(dots, "animation-delay-[400ms]", className)} />
    </span>
  )
}
