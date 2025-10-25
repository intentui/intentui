"use client"

import type { ToggleButtonProps } from "react-aria-components"
import { composeRenderProps, ToggleButton } from "react-aria-components"
import { twMerge } from "tailwind-merge"
import { tv, type VariantProps } from "tailwind-variants"

export const toggleStyles = tv({
  base: [
    "[--toggle-icon-active:var(--secondary-fg)] [--toggle-icon:color-mix(in_oklab,var(--secondary-fg)_50%,var(--secondary))]",
    "relative inset-ring inset-ring-fg/15 isolate inline-flex items-center justify-center font-medium",
    "focus-visible:outline focus-visible:outline-offset-2 focus-visible:ring-2 focus-visible:ring-offset-3 focus-visible:ring-offset-bg",
    "*:data-[slot=icon]:-mx-0.5 *:data-[slot=icon]:my-0.5 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:self-center *:data-[slot=icon]:text-(--toggle-icon) sm:*:data-[slot=icon]:my-1",
    "focus-visible:*:data-[slot=icon]:text-(--toggle-icon-active)",
    "selected:*:data-[slot=icon]:text-(--toggle-icon-active)",
    "hover:*:data-[slot=icon]:text-(--toggle-icon-active)",
    "*:data-[slot=icon]:-mx-0.5 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:self-center *:data-[slot=icon]:text-(--toggle-icon) pressed:*:data-[slot=icon]:text-(--toggle-icon-active) focus-visible:*:data-[slot=icon]:text-(--toggle-icon-active)/80 hover:*:data-[slot=icon]:text-(--toggle-icon-active)/90 forced-colors:[--toggle-icon:ButtonText] forced-colors:hover:[--toggle-icon:ButtonText]",
    "forced-colors:[--toggle-icon:ButtonText] forced-colors:hover:[--toggle-icon:ButtonText]",
  ],
  variants: {
    intent: {
      outline: [
        "bg-transparent selected:bg-secondary outline-secondary-fg ring-secondary-fg/25 hover:bg-secondary",
      ],
      plain: [
        "inset-ring-transparent bg-transparent selected:bg-secondary outline-secondary-fg ring-secondary-fg/25 hover:bg-secondary",
      ],
    },
    size: {
      xs: [
        "min-h-8 gap-x-1.5 px-[calc(--spacing(3)-1px)] py-[calc(--spacing(1.5)-1px)] text-sm sm:min-h-7 sm:px-2 sm:py-[calc(--spacing(1.5)-1px)] sm:text-xs/4",
        "*:data-[slot=icon]:-mx-px *:data-[slot=icon]:size-3.5 sm:*:data-[slot=icon]:size-3",
      ],
      sm: [
        "min-h-9 gap-x-1.5 px-3 py-[calc(--spacing(2)-1px)] sm:min-h-8 sm:px-[calc(--spacing(3)-1px)] sm:py-[calc(--spacing(1.5)-1px)] sm:text-sm/5",
        "*:data-[slot=icon]:size-4.5 sm:*:data-[slot=icon]:size-4",
      ],
      md: [
        "min-h-10 gap-x-2 px-[calc(--spacing(3.5)-1px)] py-[calc(--spacing(2.5)-1px)] sm:min-h-9 sm:px-3 sm:py-[calc(--spacing(1.5)-1px)] sm:text-sm/6",
        "*:data-[slot=icon]:size-5 sm:*:data-[slot=icon]:size-4",
      ],
      lg: [
        "min-h-10 gap-x-2 px-[calc(--spacing(3.5)-1px)] py-[calc(--spacing(3)-1px)] sm:min-h-9 sm:px-3 sm:py-[calc(--spacing(1.5)-1px)] sm:text-sm/7",
        "*:data-[slot=icon]:size-5 sm:*:data-[slot=icon]:size-4.5",
      ],
      "sq-xs": [
        "touch-target size-8 sm:size-7",
        "*:data-[slot=icon]:size-3.5 sm:*:data-[slot=icon]:size-3",
      ],
      "sq-sm": [
        "touch-target size-10 sm:size-8",
        "*:data-[slot=icon]:size-4.5 sm:*:data-[slot=icon]:size-4",
      ],
      "sq-md": [
        "touch-target size-11 sm:size-9",
        "*:data-[slot=icon]:size-5 sm:*:data-[slot=icon]:size-4.5",
      ],
      "sq-lg": [
        "touch-target size-12 sm:size-10",
        "*:data-[slot=icon]:size-6 sm:*:data-[slot=icon]:size-5",
      ],
    },
    isCircle: {
      true: "rounded-full",
      false: "rounded-[calc(var(--radius-lg)-1px)]",
    },
    isDisabled: {
      true: "inset-ring-0 opacity-50 forced-colors:text-[GrayText]",
    },
  },
  defaultVariants: {
    intent: "plain",
    size: "md",
    isCircle: false,
  },
})

export interface ToggleProps extends ToggleButtonProps, VariantProps<typeof toggleStyles> {
  ref?: React.Ref<HTMLButtonElement>
}
export function Toggle({ className, size, intent, isCircle, ref, ...props }: ToggleProps) {
  return (
    <ToggleButton
      ref={ref}
      className={composeRenderProps(className, (className, renderProps) =>
        twMerge(
          toggleStyles({
            ...renderProps,
            isCircle,
            size,
            intent,
            className,
          }),
        ),
      )}
      {...props}
    />
  )
}
