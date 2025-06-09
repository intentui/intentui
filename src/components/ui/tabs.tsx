"use client"

import { useId } from "react"

import { LayoutGroup, motion } from "motion/react"
import type {
  TabListProps as TabListPrimitiveProps,
  TabPanelProps as TabPanelPrimitiveProps,
  TabProps as TabPrimitiveProps,
  TabsProps as TabsPrimitiveProps,
} from "react-aria-components"
import {
  TabList as TabListPrimitive,
  TabPanel as TabPanelPrimitive,
  Tab as TabPrimitive,
  Tabs as TabsPrimitive,
  composeRenderProps,
} from "react-aria-components"
import { twJoin, twMerge } from "tailwind-merge"
import { tv } from "tailwind-variants"

import { composeTailwindRenderProps } from "@/lib/primitive"

const tabsStyles = tv({
  base: "group/tabs flex gap-4 forced-color-adjust-none",
  variants: {
    orientation: {
      horizontal: "flex-col",
      vertical: "w-[800px] flex-row",
    },
  },
})

interface TabsProps extends TabsPrimitiveProps {
  ref?: React.RefObject<HTMLDivElement>
}
const Tabs = ({ className, ref, ...props }: TabsProps) => {
  return (
    <TabsPrimitive
      className={composeRenderProps(className, (className, renderProps) =>
        tabsStyles({
          ...renderProps,
          className,
        }),
      )}
      ref={ref}
      {...props}
    />
  )
}

const tabListStyles = tv({
  base: "flex forced-color-adjust-none",
  variants: {
    orientation: {
      horizontal: "flex-row gap-x-5 border-border border-b",
      vertical: "flex-col items-start gap-y-4 border-l",
    },
  },
})

interface TabListProps<T extends object> extends TabListPrimitiveProps<T> {
  ref?: React.RefObject<HTMLDivElement>
}
const TabList = <T extends object>({ className, ref, ...props }: TabListProps<T>) => {
  const id = useId()
  return (
    <LayoutGroup id={id}>
      <TabListPrimitive
        ref={ref}
        {...props}
        className={composeRenderProps(className, (className, renderProps) =>
          tabListStyles({ ...renderProps, className }),
        )}
      />
    </LayoutGroup>
  )
}

const tabStyles = tv({
  base: [
    "relative flex cursor-default items-center whitespace-nowrap rounded-full font-medium text-sm outline-hidden transition hover:text-fg *:data-[slot=icon]:mr-2 *:data-[slot=icon]:size-4",
    "group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:py-0 group-data-[orientation=vertical]/tabs:pr-2 group-data-[orientation=vertical]/tabs:pl-4",
    "group-data-[orientation=horizontal]/tabs:pb-3",
  ],
  variants: {
    isSelected: {
      false: "text-muted-fg",
      true: "text-fg",
    },
    isFocused: { false: "ring-0", true: "text-fg" },
    isDisabled: {
      true: "text-muted-fg/50",
    },
  },
})

interface TabProps extends TabPrimitiveProps {
  ref?: React.RefObject<HTMLButtonElement>
}
const Tab = ({ children, ref, ...props }: TabProps) => {
  return (
    <TabPrimitive
      ref={ref}
      {...props}
      className={composeRenderProps(props.className, (_className, renderProps) =>
        tabStyles({
          ...renderProps,
          className: twJoin("href" in props && "cursor-pointer", _className),
        }),
      )}
    >
      {({ isSelected }) => (
        <>
          {children as React.ReactNode}
          {isSelected && (
            <motion.span
              data-slot="selected-indicator"
              className={twMerge(
                "absolute rounded bg-fg",
                // horizontal
                "group-data-[orientation=horizontal]/tabs:-bottom-px group-data-[orientation=horizontal]/tabs:inset-x-0 group-data-[orientation=horizontal]/tabs:h-0.5 group-data-[orientation=horizontal]/tabs:w-full",
                // vertical
                "group-data-[orientation=vertical]/tabs:left-0 group-data-[orientation=vertical]/tabs:h-[calc(100%-10%)] group-data-[orientation=vertical]/tabs:w-0.5 group-data-[orientation=vertical]/tabs:transform",
              )}
              layoutId="current-selected"
              transition={{ type: "spring", stiffness: 500, damping: 40 }}
            />
          )}
        </>
      )}
    </TabPrimitive>
  )
}

interface TabPanelProps extends TabPanelPrimitiveProps {
  ref?: React.RefObject<HTMLDivElement>
}
const TabPanel = ({ className, ref, ...props }: TabPanelProps) => {
  return (
    <TabPanelPrimitive
      {...props}
      ref={ref}
      className={composeTailwindRenderProps(
        className,
        "flex-1 text-fg text-sm focus-visible:outline-hidden",
      )}
    />
  )
}

Tabs.List = TabList
Tabs.Tab = Tab
Tabs.Panel = TabPanel

export type { TabsProps, TabListProps, TabProps, TabPanelProps }
export { Tabs }
