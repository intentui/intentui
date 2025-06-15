"use client"

import { createContext, use } from "react"
import type { ToggleButtonGroupProps, ToggleButtonProps } from "react-aria-components"
import { ToggleButton, ToggleButtonGroup, composeRenderProps } from "react-aria-components"
import type { VariantProps } from "tailwind-variants"
import { tv } from "tailwind-variants"

type ToggleSize = "xs" | "sm" | "md" | "lg" | "sq-xs" | "sq-sm" | "sq-md" | "sq-lg"
type ToggleIntent = "plain" | "secondary" | "primary"
type ToggleOrientation = "horizontal" | "vertical"

type ToggleGroupContextProps = {
  isDisabled?: boolean
  intent?: ToggleIntent
  orientation?: ToggleOrientation
  size?: ToggleSize
}

const ToggleGroupContext = createContext<ToggleGroupContextProps>({
  intent: "primary",
  orientation: "horizontal",
  size: "md",
})

type ToggleGroupProps = ToggleButtonGroupProps & {
  ref?: React.RefObject<HTMLDivElement>
  intent?: ToggleIntent
  isDisabled?: boolean
  orientation?: ToggleOrientation
  size?: ToggleSize
}

const toggleGroupStyles = tv({
  base: "flex rounded-lg",
  variants: {
    orientation: {
      horizontal:
        "flex-row [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
      vertical: "flex-col items-start",
    },
    intent: {
      plain: " *:[button]:inset-ring-transparent *:[button]:rounded-none",
      primary: "*:[button]:inset-ring-1 *:[button]:rounded-none",
      secondary: "*:[button]:inset-ring-1 *:[button]:rounded-none",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
  compoundVariants: [
    {
      orientation: "vertical",
      className:
        "*:[button]:-mt-px *:[button]:first:rounded-t-[calc(var(--radius-lg)-1px)] *:[button]:last:rounded-b-[calc(var(--radius-lg)-1px)]",
    },
    {
      orientation: "horizontal",
      className:
        "*:[button]:-mr-px *:[button]:first:rounded-s-[calc(var(--radius-lg)-1px)] *:[button]:last:rounded-e-[calc(var(--radius-lg)-1px)]",
    },
  ],
})

const ToggleGroup = ({
  className,
  ref,
  intent = "primary",
  size = "md",
  orientation = "horizontal",
  ...props
}: ToggleGroupProps) => {
  return (
    <ToggleGroupContext.Provider
      value={{ intent, orientation, size, isDisabled: props.isDisabled }}
    >
      <ToggleButtonGroup
        ref={ref}
        orientation={orientation}
        className={composeRenderProps(className, (className, renderProps) =>
          toggleGroupStyles({
            ...renderProps,
            orientation,
            className,
          }),
        )}
        {...props}
      />
    </ToggleGroupContext.Provider>
  )
}

const toggleStyles = tv({
  base: [
    "inset-ring inset-ring-border cursor-default items-center gap-x-2 rounded-lg outline-hidden sm:text-sm",
    "forced-colors:[--button-icon:ButtonText] forced-colors:hover:[--button-icon:ButtonText]",
    "*:data-[slot=icon]:-mx-0.5 *:data-[slot=icon]:my-1 *:data-[slot=icon]:size-4 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:text-current/60 pressed:*:data-[slot=icon]:text-current hover:*:data-[slot=icon]:text-current/90",
  ],
  variants: {
    isDisabled: {
      true: "opacity-50 forced-colors:border-[GrayText]",
    },
    isFocusVisible: {
      true: "inset-ring-ring/70 z-20 ring-3 ring-ring/20",
    },
    intent: {
      plain: "inset-ring-0 selected:font-medium selected:text-fg text-muted-fg hover:text-fg",
      primary: "inset-ring selected:inset-ring-ring selected:bg-primary selected:text-primary-fg",
      secondary: [
        "pressed:border-secondary-fg/10 selected:border-secondary-fg/10 selected:bg-secondary selected:text-secondary-fg hover:border-secondary-fg/10 hover:bg-muted hover:text-secondary-fg",
      ],
    },
    orientation: {
      horizontal: "inline-flex justify-center",
      vertical: "flex w-full",
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
        "gap-x-2 px-3.5 py-2.5 sm:px-3 sm:py-1.5 sm:text-sm/6",
        "*:data-[slot=icon]:size-5 sm:*:data-[slot=icon]:size-4",
      ],
      lg: [
        "gap-x-2 px-[calc(--spacing(4)-1px)] py-3 sm:px-3.5 sm:py-2 sm:text-sm/6",
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
  },
  defaultVariants: {
    intent: "secondary",
    size: "sm",
    isCircle: false,
  },
  compoundVariants: [
    {
      orientation: "vertical",
      className: "w-full",
    },
  ],
})

interface ToggleProps extends ToggleButtonProps, VariantProps<typeof toggleStyles> {
  ref?: React.RefObject<HTMLButtonElement>
}

const Toggle = ({ className, intent, ref, ...props }: ToggleProps) => {
  const {
    intent: groupIntent,
    orientation,
    size,
    isDisabled: isGroupDisabled,
  } = use(ToggleGroupContext)
  return (
    <ToggleButton
      ref={ref}
      isDisabled={props.isDisabled ?? isGroupDisabled}
      className={composeRenderProps(className, (className, renderProps) =>
        toggleStyles({
          ...renderProps,
          intent: intent ?? groupIntent,
          size: props.size ?? size,
          orientation,
          isCircle: props.isCircle,
          className,
        }),
      )}
      {...props}
    />
  )
}

export type { ToggleGroupProps, ToggleProps }
export { ToggleGroup, Toggle }
