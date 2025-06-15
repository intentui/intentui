"use client"

import { createContext, use } from "react"
import {
  ToggleButton,
  ToggleButtonGroup,
  type ToggleButtonGroupProps,
  type ToggleButtonProps,
  composeRenderProps,
} from "react-aria-components"
import { twMerge } from "tailwind-merge"
import { tv } from "tailwind-variants"

type ToggleSize = "xs" | "sm" | "md" | "lg" | "sq-xs" | "sq-sm" | "sq-md" | "sq-lg"

interface ToggleGroupContextValue
  extends Pick<ToggleButtonGroupProps, "selectionMode" | "orientation"> {
  size?: ToggleSize
}

const ToggleGroupContext = createContext<ToggleGroupContextValue>({
  size: "md",
  selectionMode: "single",
  orientation: "horizontal",
})

const useToggleGroupContext = () => use(ToggleGroupContext)

interface ToggleGroupProps extends ToggleButtonGroupProps {
  size?: ToggleSize
}

const ToggleGroup = ({
  size = "md",
  orientation = "horizontal",
  selectionMode = "single",
  className,
  ...props
}: ToggleGroupProps) => {
  return (
    <ToggleGroupContext.Provider value={{ size, selectionMode, orientation }}>
      <ToggleButtonGroup
        selectionMode={selectionMode}
        className={composeRenderProps(className, (className, renderProps) =>
          twMerge(
            "inset-ring inset-ring-border inline-flex overflow-hidden rounded-lg",
            orientation === "horizontal" ? "flex-row" : "flex-col",
            className,
          ),
        )}
        {...props}
      />
    </ToggleGroupContext.Provider>
  )
}

interface ToggleGroupItemProps extends ToggleButtonProps {}

const toggleGroupItemStyles = tv({
  base: [
    "[--toggle-group-item-icon:color-mix(in_oklab,var(--secondary-fg)_50%,var(--secondary))]",
    "relative isolate inline-flex flex-row items-center font-medium",
    "*:data-[slot=icon]:-mx-0.5 *:data-[slot=icon]:my-0.5 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:self-center *:data-[slot=icon]:text-(--toggle-group-item-icon) sm:*:data-[slot=icon]:my-1",
    "inset-ring-transparent bg-transparent outline-primary-fg ring-primary-fg/25",
  ],
  variants: {
    orientation: {
      horizontal: "justify-center",
      vertical: "justify-start",
    },
    selectionMode: {
      single: "rounded-lg",
      multiple: "rounded-none",
    },
    size: {
      xs: [
        "gap-x-1 rounded-sm px-2.5 py-1.5 text-sm sm:px-2.5 sm:text-xs/4",
        "*:data-[slot=icon]:size-3.5 sm:*:data-[slot=icon]:size-3",
      ],
      sm: [
        "gap-x-1.5 px-3 py-1.5 sm:px-2.5 sm:text-sm/5",
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
      "sq-xs": "size-7 rounded-sm",
      "sq-sm": "size-8",
      "sq-md": "size-9",
      "sq-lg": "size-10",
    },
    isPressed: {
      true: "bg-primary/90 text-primary-fg",
    },
    isSelected: {
      true: "bg-primary text-primary-fg [--toggle-group-item-icon:var(--primary-fg)]",
    },
    isHovered: {
      true: "enabled:bg-primary/90 enabled:text-primary-fg enabled:[--toggle-group-item-icon:var(--primary-fg)]",
    },
    isFocusVisible: {
      true: "outline outline-offset-2 ring-2 ring-offset-3 ring-offset-bg",
    },
    isDisabled: {
      true: "inset-ring-0 opacity-50 forced-colors:text-[GrayText]",
    },
  },
  defaultVariants: {
    size: "md",
    isCircle: false,
  },
})

const ToggleGroupItem = ({ className, ...props }: ToggleGroupItemProps) => {
  const { size, selectionMode, orientation } = useToggleGroupContext()

  return (
    <ToggleButton
      className={composeRenderProps(className, (className, renderProps) =>
        twMerge(
          toggleGroupItemStyles({
            ...renderProps,
            size,
            orientation,
            selectionMode,
            className,
          }),
        ),
      )}
      {...props}
    />
  )
}

export type { ToggleGroupProps, ToggleGroupItemProps }
export { ToggleGroup, ToggleGroupItem }
