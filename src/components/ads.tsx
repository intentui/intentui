"use client"

import { type ReactNode, useEffect, useState } from "react"
import { twMerge } from "tailwind-merge"

type AdVariant = {
  href: string
  title: ReactNode
  description: ReactNode
}

const variants: AdVariant[] = [
  {
    href: "https://dub.sh/designiui",
    title: (
      <>
        Unlock the full power of <br /> Design Intent UI
      </>
    ),
    description: (
      <>
        Build modern web apps faster with{" "}
        <strong className="font-semibold text-fg">500+ blocks</strong>,{" "}
        <strong className="font-semibold text-fg">patterns</strong> and polished{" "}
        <strong className="font-semibold text-fg">templates</strong> crafted for you.
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
    // @ts-expect-error
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
        "not-prose group block w-full rounded-lg border bg-muted p-4 hover:border-fg/30 sm:w-60 sm:rounded-xl",
        className,
      )}
    >
      <span className="mb-1.5 block font-semibold text-sm/5">{variant.title}</span>
      <div className="mb-1 block text-pretty text-[0.83rem]/5 text-muted-fg">
        {variant.description}
      </div>
    </a>
  )
}
