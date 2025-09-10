"use client"

import { createContext, use } from "react"
import {
  composeRenderProps,
  ToggleButton,
  ToggleButtonGroup,
  type ToggleButtonGroupProps,
  type ToggleButtonProps,
} from "react-aria-components"
import { twMerge } from "tailwind-merge"
import { tv } from "tailwind-variants"
import { cx } from "@/lib/primitive"

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
        className={cx([
          "[--toggle-group-radius:var(--radius-lg)] [--toggle-padding:--spacing(0.5)]",
          "group/toggle-group inset-ring inset-ring-border inline-flex overflow-hidden rounded-(--toggle-group-radius) p-(--toggle-padding)",
          orientation === "horizontal" ? "flex-row" : "flex-col",
          selectionMode === "single" ? "gap-0.5" : "gap-0",
          className,
        ])}
        {...props}
      />
    </ToggleGroupContext.Provider>
  )
}

interface ToggleGroupItemProps extends ToggleButtonProps {}

const toggleGroupItemStyles = tv({
  base: [
    "[--toggle-group-item-icon:color-mix(in_oklab,var(--secondary-fg)_50%,var(--secondary))]",
    "relative isolate inline-flex flex-row items-center font-medium outline-hidden",
    "*:data-[slot=icon]:-mx-0.5 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:self-center *:data-[slot=icon]:text-(--toggle-group-item-icon)",
  ],
  variants: {
    orientation: {
      horizontal: "justify-center",
      vertical: "justify-start",
    },
    selectionMode: {
      single: "rounded-[calc(var(--radius-lg)-2px)]",
      multiple: "rounded-none",
    },
    size: {
      xs: [
        "min-h-8 gap-x-1.5 px-2.5 py-1.5 text-sm sm:min-h-7 sm:px-2 sm:py-1.5 sm:text-xs/4",
        "*:data-[slot=icon]:-mx-px *:data-[slot=icon]:size-3.5 sm:*:data-[slot=icon]:size-3",
        "*:data-[slot=loader]:-mx-px *:data-[slot=loader]:size-3.5 sm:*:data-[slot=loader]:size-3",
      ],
      sm: [
        "min-h-9 gap-x-1.5 px-3 py-1.5 sm:min-h-8 sm:px-2.5 sm:py-1.5 sm:text-sm/5",
        "*:data-[slot=icon]:size-4.5 sm:*:data-[slot=icon]:size-4",
        "*:data-[slot=loader]:size-4.5 sm:*:data-[slot=loader]:size-4",
      ],
      md: [
        "min-h-10 gap-x-2 px-3.5 py-2 sm:min-h-9 sm:px-3 sm:py-1.5 sm:text-sm/6",
        "*:data-[slot=icon]:size-5 sm:*:data-[slot=icon]:size-4",
        "*:data-[slot=loader]:size-5 sm:*:data-[slot=loader]:size-4",
      ],
      lg: [
        "min-h-11 gap-x-2 px-4 py-2.5 sm:min-h-10 sm:px-3.5 sm:py-2 sm:text-sm/6",
        "*:data-[slot=icon]:size-5 sm:*:data-[slot=icon]:size-4.5",
        "*:data-[slot=loader]:size-5 sm:*:data-[slot=loader]:size-4.5",
      ],
      "sq-xs":
        "touch-target size-8 *:data-[slot=icon]:size-3.5 *:data-[slot=loader]:size-3.5 sm:size-7 sm:*:data-[slot=icon]:size-3 sm:*:data-[slot=loader]:size-3",
      "sq-sm":
        "touch-target size-9 *:data-[slot=icon]:size-4.5 *:data-[slot=loader]:size-4.5 sm:size-8 sm:*:data-[slot=icon]:size-4 sm:*:data-[slot=loader]:size-4",
      "sq-md":
        "touch-target size-10 *:data-[slot=icon]:size-5 *:data-[slot=loader]:size-5 sm:size-9 sm:*:data-[slot=icon]:size-4.5 sm:*:data-[slot=loader]:size-4.5",
      "sq-lg":
        "touch-target size-11 *:data-[slot=icon]:size-5 *:data-[slot=loader]:size-5 sm:size-10 sm:*:data-[slot=icon]:size-5 sm:*:data-[slot=loader]:size-5",
    },
    isPressed: {
      true: "bg-primary/90 text-primary-fg",
    },
    isSelected: {
      true: "bg-primary text-primary-fg [--toggle-group-item-icon:var(--primary-fg)] hover:bg-primary/90",
    },
    isFocused: {
      true: "not-selected:bg-secondary not-selected:text-secondary-fg not-selected:[--toggle-group-item-icon:var(--secondary-fg)]",
    },
    isHovered: {
      true: "enabled:not-selected:bg-secondary enabled:not-selected:text-secondary-fg enabled:not-selected:[--toggle-group-item-icon:var(--secondary-fg)]",
    },
    isDisabled: {
      true: "opacity-50 forced-colors:text-[GrayText]",
    },
  },
  defaultVariants: {
    size: "md",
    isCircle: false,
  },
  compoundVariants: [
    {
      selectionMode: "multiple",
      orientation: "horizontal",
      className:
        "not-first:-ml-px first:rounded-l-[calc(var(--toggle-group-radius)-var(--toggle-padding))] last:rounded-r-[calc(var(--toggle-group-radius)-var(--toggle-padding))]",
    },
    {
      selectionMode: "multiple",
      orientation: "vertical",
      className:
        "not-first:-mt-px first:rounded-t-[calc(var(--toggle-group-radius)-var(--toggle-padding))] last:rounded-b-[calc(var(--toggle-group-radius)-var(--toggle-padding))]",
    },
  ],
})

const ToggleGroupItem = ({ className, ...props }: ToggleGroupItemProps) => {
  const { size, selectionMode, orientation } = useToggleGroupContext()

  return (
    <ToggleButton
      data-slot="toggle-group-item"
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
