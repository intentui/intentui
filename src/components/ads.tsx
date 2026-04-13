"use client"

import { ArrowUpRightIcon } from "@heroicons/react/16/solid"
import { motion, useReducedMotion } from "motion/react"
import { twMerge } from "tailwind-merge"
import { Logo } from "@/components/logo"
import { buttonStyles } from "@/components/ui/button"
import { Text } from "@/components/ui/text"

const border = {
  duration: 10,
  gradient:
    "conic-gradient(from var(--border-angle), transparent 0deg, transparent 235deg, rgb(var(--ads-border-color) / 0.18) 275deg, rgb(var(--ads-border-color) / 1) 310deg, rgb(var(--ads-border-color) / 0.18) 345deg, transparent 360deg)",
  mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
}

export function Ads({ className }: { className?: string }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <a
      target="_blank"
      href="https://design.intentui.com/?utm_source=intentui.com&utm_medium=referral&utm_campaign=docs_intentui"
      className={twMerge(
        "not-prose group relative inset-ring inset-ring-border block w-full overflow-hidden rounded-md bg-zinc-50 p-4 [--ads-border-color:0_0_0] sm:w-60 dark:bg-zinc-800 dark:[--ads-border-color:255_255_255]",
        className,
      )}
      rel="noopener"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-md ring-1 ring-black/10 dark:ring-white/10"
      />
      <motion.span
        aria-hidden="true"
        animate={shouldReduceMotion ? undefined : { "--border-angle": "360deg" }}
        className="pointer-events-none absolute inset-0 rounded-md p-px"
        style={
          {
            "--border-angle": "0deg",
            background: border.gradient,
            mask: border.mask,
            maskComposite: "exclude",
            WebkitMask: border.mask,
            WebkitMaskComposite: "xor",
          } as React.CSSProperties
        }
        transition={
          shouldReduceMotion
            ? undefined
            : {
                duration: border.duration,
                ease: "linear",
                repeat: Number.POSITIVE_INFINITY,
              }
        }
      />
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
