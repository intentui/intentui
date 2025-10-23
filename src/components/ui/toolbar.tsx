"use client"

import { createContext, use, useContext } from "react"

import type {
  GroupProps,
  SeparatorProps,
  ToolbarProps as ToolbarPrimitiveProps,
} from "react-aria-components"
import { composeRenderProps, Group, Toolbar as ToolbarPrimitive } from "react-aria-components"
import { twMerge } from "tailwind-merge"
import { cx } from "@/lib/primitive"
import { Separator } from "./separator"
import { Toggle, type ToggleProps } from "./toggle"

const ToolbarContext = createContext<ToolbarProps>({
  orientation: "horizontal",
  isCircle: false,
})

interface ToolbarProps extends ToolbarPrimitiveProps {
  isCircle?: boolean
}

const Toolbar = ({ orientation = "horizontal", isCircle, className, ...props }: ToolbarProps) => {
  return (
    <ToolbarContext value={{ orientation, isCircle }}>
      <ToolbarPrimitive
        orientation={orientation}
        {...props}
        className={composeRenderProps(className, (className, { orientation }) =>
          twMerge(
            "group inset-ring inset-ring-border inline-flex flex-row gap-1.5 bg-overlay p-1.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
            isCircle ? "rounded-full" : "rounded-lg",
            orientation === "horizontal"
              ? "flex-row items-center [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              : "flex-col items-start",
            className,
          ),
        )}
      />
    </ToolbarContext>
  )
}

const ToolbarGroupContext = createContext<{ isDisabled?: boolean; isCircle?: boolean }>({})

interface ToolbarGroupProps extends GroupProps {}
const ToolbarGroup = ({ isDisabled, className, ...props }: ToolbarGroupProps) => {
  return (
    <ToolbarGroupContext value={{ isDisabled }}>
      <Group
        className={cx(
          "flex gap-1.5 group-orientation-vertical:flex-col group-orientation-vertical:items-start group-orientation-horizontal:items-center",
          className,
        )}
        {...props}
      >
        {props.children}
      </Group>
    </ToolbarGroupContext>
  )
}

interface ToggleItemProps extends ToggleProps {}

const ToolbarItem = ({
  isDisabled,
  isCircle,
  size = "sm",
  intent = "outline",
  ref,
  className,
  ...props
}: ToggleItemProps) => {
  const context = use(ToolbarGroupContext)
  const { isCircle: contextCircle } = use(ToolbarContext)
  const effectiveIsDisabled = isDisabled || context.isDisabled
  const effectiveIsCircle = isCircle || contextCircle
  return (
    <Toggle
      intent={intent}
      size={size}
      ref={ref}
      data-slot="toolbar-item"
      className={cx(
        effectiveIsCircle ? "rounded-full" : "rounded-[calc(var(--radius-lg)-1px)]",
        className,
      )}
      isDisabled={effectiveIsDisabled}
      {...props}
    />
  )
}
type ToolbarSeparatorProps = SeparatorProps
const ToolbarSeparator = ({ className, ...props }: ToolbarSeparatorProps) => {
  const { orientation } = useContext(ToolbarContext)
  const reverseOrientation = orientation === "vertical" ? "horizontal" : "vertical"
  return (
    <Separator
      orientation={reverseOrientation}
      className={twMerge(
        reverseOrientation === "vertical" ? "mx-0.5 h-6" : "my-0.5 w-8",
        className,
      )}
      {...props}
    />
  )
}

export type { ToolbarGroupProps, ToolbarProps, ToggleItemProps, ToolbarSeparatorProps }
export { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarItem }
