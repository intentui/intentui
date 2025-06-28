"use client"

import { tv, type VariantProps } from "tailwind-variants"

const badgeIntents = {
  primary: [
    "[--badge-primary:color-mix(in_oklab,var(--color-primary)_10%,white_90%)] [--badge-primary-fg:color-mix(in_oklab,var(--color-primary)_60%,white_40%)] bg-(--badge-primary)",
    "dark:bg-primary/15 text-primary dark:text-(--badge-primary-fg) dark:group-hover:bg-primary/25",
    "group-hover:bg-[color-mix(in_oklab,var(--color-primary)_15%,white_85%)] dark:group-hover:bg-primary/20",
  ],
  secondary: [
    "bg-secondary group-hover:bg-muted dark:bg-secondary dark:group-hover:bg-muted text-secondary-fg",
  ],
  success: [
    "bg-emerald-500/15 text-emerald-700 group-hover:bg-emerald-500/25 dark:bg-emerald-500/10 dark:text-emerald-400 dark:group-hover:bg-emerald-500/20",
  ],
  info: "bg-sky-500/15 text-sky-700 group-hover:bg-sky-500/25 dark:bg-sky-500/10 dark:text-sky-300 dark:group-hover:bg-sky-500/20",
  warning:
    "bg-amber-400/20 text-amber-700 group-hover:bg-amber-400/30 dark:bg-amber-400/10 dark:text-amber-400 dark:group-hover:bg-amber-400/15",
  danger:
    "bg-red-500/15 text-red-700 group-hover:bg-red-500/25 dark:bg-red-500/10 dark:text-red-400 dark:group-hover:bg-red-500/20",
  outline: "inset-ring-border bg-transparent text-fg group-hover:bg-secondary",
}
const badgeStyles = tv({
  base: "inset-ring inset-ring-transparent inline-flex items-center gap-x-1.5 py-0.5 font-medium text-xs/5 **:data-[slot=icon]:size-3 forced-colors:outline",
  variants: {
    intent: { ...badgeIntents },
    isCircle: {
      true: "rounded-full px-2",
      false: "rounded-sm px-1.5",
    },
  },
  defaultVariants: {
    intent: "primary",
    isCircle: true,
  },
})

interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeStyles> {
  className?: string
  children: React.ReactNode
}

const Badge = ({ children, intent, isCircle = true, className, ...props }: BadgeProps) => {
  return (
    <span {...props} className={badgeStyles({ intent, isCircle, className })}>
      {children}
    </span>
  )
}

export type { BadgeProps }
export { Badge, badgeIntents, badgeStyles }
