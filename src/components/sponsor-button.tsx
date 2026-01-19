"use client"

import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline"
import { twMerge } from "tailwind-merge"
import { buttonStyles } from "@/components/ui/button"
import { Link } from "@/components/ui/link"

export function SponsorButton({ className }: { className?: string }) {
  return (
    <Link
      target="_blank"
      href="https://buy.polar.sh/polar_cl_Ro49EUalfykVhZrYUBr7m1NJOwlcfyRlqDcXS4G38Sm"
      className={buttonStyles({
        size: "sm",
        intent: "outline",
        className: twMerge(
          "rounded-sm border-fg bg-fg text-bg hover:bg-fg *:data-[slot=icon]:text-zinc-300 dark:*:data-[slot=icon]:text-zinc-600",
          className,
        ),
      })}
    >
      Sponsor
      <ArrowTopRightOnSquareIcon />
    </Link>
  )
}
