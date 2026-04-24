"use client"

import { ArrowUpRightIcon } from "@heroicons/react/16/solid"
import { twMerge } from "tailwind-merge"
import { Link } from "@/components/link"
import { buttonStyles } from "@/components/ui/button"

export function NoLimitButton({ className }: { className?: string }) {
  return (
    <Link
      href="https://design.intentui.com/?utm_source=intentui.com&utm_medium=referral&utm_campaign=navprobutton"
      target="_blank"
      className={buttonStyles({
        size: "sm",
        className: twMerge("rounded-sm", className),
      })}
    >
      Pro <ArrowUpRightIcon />
    </Link>
  )
}
