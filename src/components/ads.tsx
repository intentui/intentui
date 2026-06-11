"use client"

import { ArrowUpRightIcon } from "@heroicons/react/16/solid"
import { twMerge } from "tailwind-merge"
import { Logo } from "@/components/logo"
import { buttonStyles } from "@/components/ui/button"
import { Text } from "@/components/ui/text"

export function Ads({ className }: { className?: string }) {
  return (
    <a
      target="_blank"
      href="https://design.intentui.com/?utm_source=intentui.com&utm_medium=referral&utm_campaign=docs_intentui"
      className={twMerge("block border-page border-t bg-muted/50 p-6", className)}
      rel="noopener"
    >
      <span className="block font-medium text-base/6">
        Unlock the full power of <br /> Intent UI Design
      </span>
      <Text className="mt-2.5 mb-3 block text-pretty text-muted-fg">
        Build modern web apps faster with{" "}
        <strong className="font-semibold text-fg">1000+ resources</strong> across{" "}
        <strong className="font-semibold text-fg">components</strong>,{" "}
        <strong className="font-semibold text-fg">blocks</strong>,{" "}
        <strong className="font-semibold text-fg">patterns</strong>,{" "}
        <strong className="font-semibold text-fg">templates</strong>, and{" "}
        <strong className="font-semibold text-fg">starter kits</strong>.
      </Text>
      <span
        className={buttonStyles({
          intent: "outline",
          size: "sm",
          className:
            "rounded-sm border-none bg-white shadow-xs ring ring-muted-fg/20 group-hover:ring-muted-fg/20 dark:bg-white/10 dark:ring-white/20 dark:group-hover:ring-white/30",
        })}
      >
        <Logo />
        Learn more <ArrowUpRightIcon />
      </span>
    </a>
  )
}
