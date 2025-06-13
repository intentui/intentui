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
        "[--btn-icon:color-mix(in_oklab,var(--primary-fg)_70%,var(--primary))] pressed:[--btn-icon:var(--primary-fg)] hover:[--btn-icon:var(--primary-fg)]",
      ],
      secondary: [
        "bg-secondary text-secondary-fg outline-secondary-fg ring-secondary-fg/20 hover:bg-secondary/85",
        "[--btn-icon:color-mix(in_oklab,var(--secondary-fg)_70%,var(--secondary))] pressed:[--btn-icon:var(--secondary-fg)] hover:[--btn-icon:var(--secondary-fg)]",
      ],
      warning: [
        "bg-warning text-warning-fg outline-warning ring-warning/20 hover:bg-warning/85",
        "[--btn-icon:color-mix(in_oklab,var(--warning-fg)_50%,var(--warning))] pressed:[--btn-icon:var(--warning-fg)] hover:[--btn-icon:var(--warning-fg)]",
      ],
      danger: [
        "bg-danger text-danger-fg outline-danger ring-danger/25 hover:bg-danger/85",
        "[--btn-icon:color-mix(in_oklab,var(--danger-fg)_70%,var(--danger))] pressed:[--btn-icon:var(--danger-fg)] hover:[--btn-icon:var(--danger-fg)]",
      ],
      outline: [
        "bg-transparent outline-secondary-fg ring-secondary-fg/25 hover:bg-secondary",
        "[--btn-icon:color-mix(in_oklab,var(--secondary-fg)_70%,var(--secondary))] pressed:[--btn-icon:var(--secondary-fg)] hover:[--btn-icon:var(--secondary-fg)]",
      ],
      plain: [
        "inset-ring-transparent bg-transparent outline-secondary-fg ring-secondary-fg/25 hover:bg-secondary",
        "[--btn-icon:color-mix(in_oklab,var(--secondary-fg)_70%,var(--secondary))] pressed:[--btn-icon:var(--secondary-fg)] hover:[--btn-icon:var(--secondary-fg)]",
      ],
    },
    size: {
      xs: [
        "gap-x-1 px-2.5 py-1.5 text-sm sm:px-2 sm:py-1 sm:text-xs/4",
        "*:data-[slot=icon]:size-3.5 sm:*:data-[slot=icon]:size-3",
      ],
      sm: [
        "gap-x-1.5 px-3 py-2 sm:px-2.5 sm:py-1.5 sm:text-sm/5",
        "*:data-[slot=icon]:size-4.5 sm:*:data-[slot=icon]:size-4",
      ],
      md: [
        "gap-x-2 px-3.5 py-2 sm:px-3 sm:py-1.5 sm:text-sm/6",
        "*:data-[slot=icon]:size-5 sm:*:data-[slot=icon]:size-4",
      ],
      lg: [
        "gap-x-2 px-4 py-2.5 sm:px-3.5 sm:py-2 sm:text-sm/6",
        "*:data-[slot=icon]:size-5 sm:*:data-[slot=icon]:size-4.5",
      ],
      "sq-xs": "size-6",
      "sq-sm": "size-8",
      "sq-md": "size-9",
      "sq-lg": "size-10",
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
      className: "rounded-sm *:data-[slot=icon]:size-3",
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
