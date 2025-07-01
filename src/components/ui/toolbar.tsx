"use client"

import { createContext, useContext } from "react"

import type { GroupProps, SeparatorProps, ToolbarProps } from "react-aria-components"
import { composeRenderProps, Group, Toolbar as ToolbarPrimitive } from "react-aria-components"
import { twMerge } from "tailwind-merge"
import { composeTailwindRenderProps } from "@/lib/primitive"
import { Separator } from "./separator"
import { Toggle, type ToggleProps } from "./toggle"

const ToolbarContext = createContext<{ orientation?: ToolbarProps["orientation"] }>({
  orientation: "horizontal",
})

const Toolbar = ({ orientation = "horizontal", className, ...props }: ToolbarProps) => {
  return (
    <ToolbarContext.Provider value={{ orientation }}>
      <ToolbarPrimitive
        orientation={orientation}
        {...props}
        className={composeRenderProps(className, (className, { orientation }) =>
          twMerge(
            "group flex flex-row gap-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
            orientation === "horizontal"
              ? "flex-row items-center [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              : "flex-col items-start",
            className,
          ),
        )}
      />
    </ToolbarContext.Provider>
  )
}

const ToolbarGroupContext = createContext<{ isDisabled?: boolean }>({})

type ToolbarGroupProps = GroupProps
const ToolbarGroup = ({ isDisabled, className, ...props }: ToolbarGroupProps) => {
  return (
    <ToolbarGroupContext.Provider value={{ isDisabled }}>
      <Group
        className={composeTailwindRenderProps(
          className,
          "flex gap-2 group-orientation-vertical:flex-col group-orientation-vertical:items-start group-orientation-horizontal:items-center",
        )}
        {...props}
      >
        {props.children}
      </Group>
    </ToolbarGroupContext.Provider>
  )
}

type ToggleItemProps = ToggleProps
const ToolbarItem = ({
  isDisabled,
  size = "sm",
  intent = "outline",
  ref,
  ...props
}: ToggleItemProps) => {
  const context = useContext(ToolbarGroupContext)
  const effectiveIsDisabled = isDisabled || context.isDisabled

  return (
    <Toggle intent={intent} size={size} ref={ref} isDisabled={effectiveIsDisabled} {...props} />
  )
}
type ToolbarSeparatorProps = SeparatorProps
const ToolbarSeparator = ({ className, ...props }: ToolbarSeparatorProps) => {
  const { orientation } = useContext(ToolbarContext)
  const effectiveOrientation = orientation === "vertical" ? "horizontal" : "vertical"
  return (
    <Separator
      orientation={effectiveOrientation}
      className={twMerge(effectiveOrientation === "vertical" ? "mx-1.5" : "my-1.5 w-8", className)}
      {...props}
    />
  )
}

Toolbar.Group = ToolbarGroup
Toolbar.Separator = ToolbarSeparator
Toolbar.Item = ToolbarItem

export type { ToolbarGroupProps, ToolbarProps, ToggleItemProps, ToolbarSeparatorProps }
export { Toolbar }
