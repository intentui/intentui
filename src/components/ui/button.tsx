"use client"

import {
  Button as ButtonPrimitive,
  type ButtonProps as ButtonPrimitiveProps,
  composeRenderProps,
} from "react-aria-components"
import { tv, type VariantProps } from "tailwind-variants"

const buttonStyles = tv({
  base: [
    "[--btn-icon-active:var(--btn-fg)] [--btn-outline:var(--btn-bg)] [--btn-ring:var(--btn-bg)]/20",
    "bg-(--btn-bg) pressed:bg-(--btn-overlay) text-(--btn-fg) outline-(--btn-outline) ring-(--btn-ring) hover:bg-(--btn-overlay)",
    "relative inset-ring inset-ring-fg/15 isolate inline-flex items-center justify-center font-medium",
    "focus:outline-0 focus-visible:outline focus-visible:outline-offset-2 focus-visible:ring-2 focus-visible:ring-offset-3 focus-visible:ring-offset-bg",
    "*:data-[slot=icon]:-mx-0.5 *:data-[slot=icon]:my-0.5 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:self-center *:data-[slot=icon]:text-(--btn-icon) pressed:*:data-[slot=icon]:text-(--btn-icon-active) focus-visible:*:data-[slot=icon]:text-(--btn-icon-active)/80 hover:*:data-[slot=icon]:text-(--btn-icon-active)/90 sm:*:data-[slot=icon]:my-1 forced-colors:[--btn-icon:ButtonText] forced-colors:hover:[--btn-icon:ButtonText]",
    "*:data-[slot=loader]:-mx-0.5 *:data-[slot=loader]:my-0.5 *:data-[slot=loader]:shrink-0 *:data-[slot=loader]:self-center *:data-[slot=loader]:text-(--btn-icon) sm:*:data-[slot=loader]:my-1",
  ],
  variants: {
    intent: {
      primary:
        "[--btn-bg:var(--color-primary)] [--btn-fg:var(--color-primary-fg)] [--btn-icon:color-mix(in_oklab,var(--primary-fg)_60%,var(--primary))] [--btn-overlay:var(--color-primary)]/85",
      secondary:
        "[--btn-bg:var(--color-secondary)] [--btn-fg:var(--color-secondary-fg)] [--btn-icon:var(--color-muted-fg)] [--btn-outline:var(--color-secondary-fg)] [--btn-overlay:var(--color-secondary)]/85 [--btn-ring:var(--color-muted-fg)]/20",
      warning:
        "[--btn-bg:var(--color-warning)] [--btn-fg:var(--color-warning-fg)] [--btn-icon:color-mix(in_oklab,var(--warning-fg)_60%,var(--warning))] [--btn-overlay:var(--color-warning)]/85",
      danger:
        "[--btn-bg:var(--color-danger)] [--btn-fg:var(--color-danger-fg)] [--btn-icon:color-mix(in_oklab,var(--danger-fg)_60%,var(--danger))] [--btn-overlay:var(--color-danger)]/85",
      outline:
        "inset-ring-border [--btn-bg:transparent] [--btn-icon:var(--color-muted-fg)] [--btn-outline:var(--color-ring)] [--btn-overlay:var(--color-muted)] [--btn-ring:var(--color-ring)]/20",
      plain:
        "inset-ring-transparent [--btn-bg:transparent] [--btn-icon:var(--color-muted-fg)] [--btn-outline:var(--color-ring)] [--btn-overlay:var(--color-muted)] [--btn-ring:var(--color-ring)]/20",
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
    isPending: {
      true: "opacity-50",
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "md",
    isCircle: false,
  },
  compoundVariants: [
    {
      size: ["xs", "sq-xs"],
      className: "rounded-md *:data-[slot=icon]:size-3.5",
    },
  ],
})

interface ButtonProps extends ButtonPrimitiveProps, VariantProps<typeof buttonStyles> {
  ref?: React.Ref<HTMLButtonElement>
}

const Button = ({ className, intent, size, isCircle, ref, ...props }: ButtonProps) => {
  return (
    <ButtonPrimitive
      ref={ref}
      {...props}
      className={composeRenderProps(className, (className, renderProps) =>
        buttonStyles({
          ...renderProps,
          intent,
          size,
          isCircle,
          className,
        }),
      )}
    >
      {(values) => (
        <>{typeof props.children === "function" ? props.children(values) : props.children}</>
      )}
    </ButtonPrimitive>
  )
}

export type { ButtonProps }
export { Button, buttonStyles }
