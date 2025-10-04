"use client"

import { createContext, use } from "react"
import {
  composeRenderProps,
  SelectionIndicator,
  ToggleButton,
  ToggleButtonGroup,
  type ToggleButtonGroupProps,
  type ToggleButtonProps,
} from "react-aria-components"
import { twJoin, twMerge } from "tailwind-merge"
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
    "group relative isolate inline-flex flex-row items-center font-medium outline-hidden",
    "*:data-[slot=icon]:-mx-0.5 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:self-center",
  ],
  variants: {
    orientation: {
      horizontal: "justify-center",
      vertical: "justify-start",
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
    isDisabled: {
      true: "opacity-50 forced-colors:text-[GrayText]",
    },
  },
  defaultVariants: {
    size: "md",
    isCircle: false,
  },
})

const ToggleGroupItem = ({ className, children, ...props }: ToggleGroupItemProps) => {
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
            className,
          }),
        ),
      )}
      {...props}
    >
      {(values) => (
        <>
          {typeof children === "function" ? children(values) : children}
          <SelectionIndicator
            className={twJoin(
              "-z-1 absolute top-0 left-0 h-full w-full bg-primary text-primary-fg transition-[translate,width] duration-200",
              selectionMode === "multiple" &&
                orientation === "horizontal" &&
                "not-group-first:-ml-px group-first:rounded-l-[calc(var(--toggle-group-radius)-var(--toggle-padding))] group-last:rounded-r-[calc(var(--toggle-group-radius)-var(--toggle-padding))]",
              selectionMode === "multiple" &&
                orientation === "vertical" &&
                "not-first:-mt-px first:rounded-t-[calc(var(--toggle-group-radius)-var(--toggle-padding))] last:rounded-b-[calc(var(--toggle-group-radius)-var(--toggle-padding))]",
              selectionMode === "single"
                ? "rounded-[calc(var(--toggle-group-radius)-var(--toggle-padding))]"
                : "rounded-none",
            )}
          />
        </>
      )}
    </ToggleButton>
  )
}

export type { ToggleGroupProps, ToggleGroupItemProps }
export { ToggleGroup, ToggleGroupItem }
