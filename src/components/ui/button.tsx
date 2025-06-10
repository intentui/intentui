"use client"

import {
  Button as ButtonPrimitive,
  type ButtonProps as ButtonPrimitiveProps,
  composeRenderProps,
} from "react-aria-components"
import { type VariantProps, tv } from "tailwind-variants"

const buttonStyles = tv({
  base: [
    "relative inset-ring inset-ring-fg/15 isolate inline-flex items-center justify-center font-medium",
    "focus-visible:outline focus-visible:outline-offset-2 focus-visible:ring-2 focus-visible:ring-offset-3 focus-visible:ring-offset-bg",
    "*:data-[slot=icon]:-mx-0.5 *:data-[slot=icon]:my-0.5 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:self-center *:data-[slot=icon]:text-(--btn-icon) sm:*:data-[slot=icon]:my-1 forced-colors:[--btn-icon:ButtonText] forced-colors:hover:[--btn-icon:ButtonText]",
  ],
  variants: {
    intent: {
      primary: [
        "bg-primary text-primary-fg outline-primary ring-primary/50 hover:bg-primary/85",
        "[--btn-icon:color-mix(in_oklab,var(--primary-fg)_70%,var(--primary))] hover:[--btn-icon:var(--primary-fg)]",
      ],
      secondary: [
        "bg-secondary text-secondary-fg outline-secondary-fg ring-secondary-fg/20 hover:bg-secondary/85",
        "[--btn-icon:color-mix(in_oklab,var(--secondary-fg)_70%,var(--secondary))] hover:[--btn-icon:var(--secondary-fg)]",
      ],
      warning: [
        "bg-warning text-warning-fg outline-warning ring-warning/20 hover:bg-warning/85",
        "[--btn-icon:color-mix(in_oklab,var(--warning-fg)_50%,var(--warning))] hover:[--btn-icon:var(--warning-fg)]",
      ],
      danger: [
        "bg-danger text-danger-fg outline-danger ring-danger/25 hover:bg-danger/85",
        "[--btn-icon:color-mix(in_oklab,var(--danger-fg)_70%,var(--danger))] hover:[--btn-icon:var(--danger-fg)]",
      ],
      outline: [
        "bg-transparent outline-secondary-fg ring-secondary-fg/25 hover:bg-secondary",
        "[--btn-icon:color-mix(in_oklab,var(--secondary-fg)_70%,var(--secondary))] hover:[--btn-icon:var(--secondary-fg)]",
      ],
      plain: [
        "inset-ring-transparent bg-transparent outline-secondary-fg ring-secondary-fg/25 hover:bg-secondary",
        "[--btn-icon:color-mix(in_oklab,var(--secondary-fg)_70%,var(--secondary))] hover:[--btn-icon:var(--secondary-fg)]",
      ],
    },
    size: {
      xs: [
        "gap-x-1",
        "px-[calc(--spacing(2.5)-1px)] py-[calc(--spacing(1.5)-1px)] text-sm sm:px-[calc(--spacing(2.5)-1px)] sm:py-[calc(--spacing(1)-1px)] sm:text-xs/4",
        "*:data-[slot=icon]:size-3.5 sm:*:data-[slot=icon]:size-3",
      ],
      sm: [
        "gap-x-1.5",
        "px-[calc(--spacing(3)-1px)] py-[calc(--spacing(2)-1px)] sm:px-[calc(--spacing(2.5)-1px)] sm:py-[calc(--spacing(1)-1px)] sm:text-sm/5",
        "*:data-[slot=icon]:size-4.5 sm:*:data-[slot=icon]:size-4",
      ],
      md: [
        "gap-x-2",
        "px-[calc(--spacing(3.5)-1px)] py-[calc(--spacing(2.5)-1px)] sm:px-[calc(--spacing(3)-1px)] sm:py-[calc(--spacing(1.5)-1px)] sm:text-sm/6",
        "*:data-[slot=icon]:size-5 sm:*:data-[slot=icon]:size-4",
      ],
      lg: [
        "gap-x-2.5",
        "px-[calc(--spacing(4)-1px)] py-[calc(--spacing(3)-1px)] sm:px-[calc(--spacing(3.5)-1px)] sm:py-[calc(--spacing(2)-1px)] sm:text-base/4",
        "*:data-[slot=icon]:size-5 sm:*:data-[slot=icon]:size-4.5",
      ],
      "sq-xs": "size-8",
      "sq-sm": "size-9",
      "sq-md": "size-9.5",
      "sq-lg": "size-10",
    },

    isCircle: {
      true: "rounded-full",
      false: "rounded-[calc(var(--radius-lg)-1px)]",
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
