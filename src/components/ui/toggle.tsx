"use client"
import { ToggleButton, composeRenderProps } from "react-aria-components"
import type { ToggleButtonProps } from "react-aria-components"
import { twMerge } from "tailwind-merge"
import { type VariantProps, tv } from "tailwind-variants"

const toggleStyles = tv({
  base: [
    "relative inset-ring inset-ring-fg/15 isolate inline-flex items-center justify-center font-medium",
    "focus-visible:outline focus-visible:outline-offset-2 focus-visible:ring-2 focus-visible:ring-offset-3 focus-visible:ring-offset-bg",
    "*:data-[slot=icon]:-mx-0.5 *:data-[slot=icon]:my-0.5 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:self-center *:data-[slot=icon]:text-(--btn-icon) pressed:*:data-[slot=icon]:text-(--btn-icon-active) focus-visible:*:data-[slot=icon]:text-(--btn-icon-active)/80 hover:*:data-[slot=icon]:text-(--btn-icon-active)/90 sm:*:data-[slot=icon]:my-1 forced-colors:[--btn-icon:ButtonText] forced-colors:hover:[--btn-icon:ButtonText]",
    "*:data-[slot=loader]:-mx-0.5 *:data-[slot=loader]:my-0.5 *:data-[slot=loader]:shrink-0 *:data-[slot=loader]:self-center *:data-[slot=loader]:text-(--btn-icon) sm:*:data-[slot=loader]:my-1",
  ],
  variants: {
    intent: {
      outline: [
        "bg-transparent selected:bg-secondary outline-secondary-fg ring-secondary-fg/25 hover:bg-secondary",
        "[--toggle-icon:color-mix(in_oklab,var(--secondary-fg)_50%,var(--secondary))] pressed:[--toggle-icon:var(--secondary-fg)] selected:[--toggle-icon:var(--secondary-fg)] hover:[--toggle-icon:var(--secondary-fg)]",
      ],
      plain: [
        "inset-ring-transparent bg-transparent selected:bg-secondary outline-secondary-fg ring-secondary-fg/25 hover:bg-secondary",
        "[--toggle-icon:color-mix(in_oklab,var(--secondary-fg)_50%,var(--secondary))] pressed:[--toggle-icon:var(--secondary-fg)] selected:[--toggle-icon:var(--secondary-fg)] hover:[--toggle-icon:var(--secondary-fg)]",
      ],
    },
    size: {
      xs: [
        "gap-x-1 px-2.5 py-1.5 text-sm sm:px-2 sm:py-[--spacing(1.4)] sm:text-xs/4",
        "*:data-[slot=icon]:size-3.5 sm:*:data-[slot=icon]:size-3",
        "*:data-[slot=loader]:size-3.5 sm:*:data-[slot=loader]:size-3",
      ],
      sm: [
        "gap-x-1.5 px-3 py-2 sm:px-2.5 sm:py-1.5 sm:text-sm/5",
        "*:data-[slot=icon]:size-4.5 sm:*:data-[slot=icon]:size-4",
        "*:data-[slot=loader]:size-4.5 sm:*:data-[slot=loader]:size-4",
      ],
      md: [
        "gap-x-2 px-3.5 py-2 sm:px-3 sm:py-1.5 sm:text-sm/6",
        "*:data-[slot=icon]:size-5 sm:*:data-[slot=icon]:size-4",
        "*:data-[slot=loader]:size-5 sm:*:data-[slot=loader]:size-4",
      ],
      lg: [
        "gap-x-2 px-4 py-2.5 sm:px-3.5 sm:py-2 sm:text-sm/6",
        "*:data-[slot=icon]:size-5 sm:*:data-[slot=icon]:size-4.5",
        "*:data-[slot=loader]:size-5 sm:*:data-[slot=loader]:size-4.5",
      ],
      "sq-xs":
        "size-8 *:data-[slot=icon]:size-3.5 *:data-[slot=loader]:size-3.5 sm:size-7 sm:*:data-[slot=icon]:size-3 sm:*:data-[slot=loader]:size-3",
      "sq-sm":
        "size-9 *:data-[slot=icon]:size-4.5 *:data-[slot=loader]:size-4.5 sm:size-8 sm:*:data-[slot=icon]:size-4 sm:*:data-[slot=loader]:size-4",
      "sq-md":
        "size-10 *:data-[slot=icon]:size-5 *:data-[slot=loader]:size-5 sm:size-9 sm:*:data-[slot=icon]:size-4 sm:*:data-[slot=loader]:size-4",
      "sq-lg":
        "size-11 *:data-[slot=icon]:size-5 *:data-[slot=loader]:size-5 sm:size-10 sm:*:data-[slot=icon]:size-4.5 sm:*:data-[slot=loader]:size-4.5",
    },

    isCircle: {
      true: "rounded-full",
      false: "rounded-lg",
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
  compoundVariants: [
    {
      size: ["xs", "sq-xs"],
      className: "rounded-md *:data-[slot=icon]:size-3.5 sm:*:data-[slot=icon]:size-3",
    },
  ],
})

interface ToggleProps extends ToggleButtonProps, VariantProps<typeof toggleStyles> {
  ref?: React.Ref<HTMLButtonElement>
}
const Toggle = ({ className, size, intent, ref, ...props }: ToggleProps) => {
  return (
    <ToggleButton
      ref={ref}
      className={composeRenderProps(className, (className, renderProps) =>
        twMerge(
          toggleStyles({
            ...renderProps,
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
export type { ToggleProps }
export { Toggle }
