"use client"

import { type ReactNode, useEffect, useState } from "react"
import { twMerge } from "tailwind-merge"
import { buttonStyles } from "@/components/ui/button"
import { Text } from "@/components/ui/text"

type AdVariant = {
  href: string
  title: ReactNode
  description: ReactNode
}

const variants: AdVariant[] = [
  {
    href: "https://design.intentui.com/?utm_source=intentui.com&utm_medium=referral&utm_campaign=docs_intentui",
    title: (
      <>
        Unlock the full power of <br /> Design Intent UI
      </>
    ),
    description: (
      <>
        Build modern web apps faster with{" "}
        <strong className="font-semibold text-fg">1000+ resources</strong> across{" "}
        <strong className="font-semibold text-fg">components</strong>,{" "}
        <strong className="font-semibold text-fg">blocks</strong>,{" "}
        <strong className="font-semibold text-fg">patterns</strong>,{" "}
        <strong className="font-semibold text-fg">templates</strong>, and{" "}
        <strong className="font-semibold text-fg">starter kits</strong>.
      </>
    ),
  },
  {
    href: "https://useaurelie.com?utm_source=intentui.com&utm_medium=referral&utm_campaign=docs",
    title: <>Turn your traffic into a story you can profit from</>,
    description: (
      <>
        Event based analytics for modern apps so you can see{" "}
        <strong className="font-semibold text-fg">signups</strong>,{" "}
        <strong className="font-semibold text-fg">purchases</strong> and key actions in one clear
        dashboard.
      </>
    ),
  },
]

export function Ads({ className }: { className?: string }) {
  const [variant, setVariant] = useState<AdVariant | null>(null)

  useEffect(() => {
    const index = Math.floor(Math.random() * variants.length)
    setVariant(variants[index])
  }, [])

  if (!variant) {
    return null
  }

  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={variant.href}
      className={twMerge(
        "not-prose group block w-full rounded-lg bg-zinc-100/80 p-6 sm:w-60 dark:bg-zinc-800",
        className,
      )}
    >
      <span className="mb-1.5 block font-medium text-base/6">{variant.title}</span>
      <Text className="mt-1 mb-3 block text-pretty text-muted-fg">{variant.description}</Text>
      <span
        className={buttonStyles({
          intent: "outline",
          className:
            "border-none bg-white shadow-xs ring ring-border group-hover:ring-muted-fg/20 dark:bg-white/10 dark:ring-white/20 dark:group-hover:ring-white/30",
        })}
      >
        Learn more{" "}
        <span aria-hidden className="duration-200 group-hover:translate-x-0.5">
          &rarr;
        </span>
      </span>
    </a>
  )
}
