"use client"

import type {
  TabListProps as TabListPrimitiveProps,
  TabPanelProps as TabPanelPrimitiveProps,
  TabProps as TabPrimitiveProps,
  TabsProps as TabsPrimitiveProps,
} from "react-aria-components"

import {
  composeRenderProps,
  SelectionIndicator,
  TabList as TabListPrimitive,
  TabPanel as TabPanelPrimitive,
  Tab as TabPrimitive,
  TabsContext,
  Tabs as TabsPrimitive,
  useSlottedContext,
} from "react-aria-components"
import { twMerge } from "tailwind-merge"
import { cx } from "@/lib/primitive"

interface TabsProps extends TabsPrimitiveProps {
  ref?: React.RefObject<HTMLDivElement>
}
const Tabs = ({ className, ref, orientation = "horizontal", ...props }: TabsProps) => {
  return (
    <TabsContext value={{ orientation: orientation }}>
      <TabsPrimitive
        orientation={orientation}
        className={cx(
          orientation === "vertical" ? "w-full flex-row" : "flex-col",
          "group/tabs flex gap-4 forced-color-adjust-none",
          className,
        )}
        ref={ref}
        {...props}
      />
    </TabsContext>
  )
}

interface TabListProps<T extends object> extends TabListPrimitiveProps<T> {
  ref?: React.RefObject<HTMLDivElement>
}
const TabList = <T extends object>({ className, ref, ...props }: TabListProps<T>) => {
  return (
    <TabListPrimitive
      ref={ref}
      data-slot="tab-list"
      {...props}
      className={composeRenderProps(className, (className, { orientation }) =>
        twMerge([
          "[--tab-list-gutter:--spacing(1)]",
          "relative flex forced-color-adjust-none",
          orientation === "horizontal" &&
            "flex-row gap-x-(--tab-list-gutter) rounded-(--tab-list-rounded) border-b py-(--tab-list-gutter)",
          orientation === "vertical" &&
            "min-w-56 shrink-0 flex-col items-start gap-y-(--tab-list-gutter) border-l px-(--tab-list-gutter) [--tab-list-gutter:--spacing(2)]",
          className,
        ]),
      )}
    />
  )
}

interface TabProps extends TabPrimitiveProps {
  ref?: React.RefObject<HTMLDivElement>
}
const Tab = ({ children, className, ref, ...props }: TabProps) => {
  const { orientation } = useSlottedContext(TabsContext)!
  return (
    <TabPrimitive
      {...props}
      data-slot="tab"
      ref={ref}
      className={cx(
        "group/tab rounded-lg [--tab-gutter:var(--tab-gutter-x)]",
        orientation === "horizontal"
          ? "[--tab-gutter-x:--spacing(2.5)] [--tab-gutter-y:--spacing(1)] first:-ml-(--tab-gutter) last:-mr-(--tab-gutter)"
          : "w-full justify-start [--tab-gutter-x:--spacing(4)] [--tab-gutter-y:--spacing(1.5)]",
        "relative isolate flex cursor-default items-center whitespace-nowrap font-medium text-sm/6 outline-hidden transition",
        "px-(--tab-gutter-x) py-(--tab-gutter-y)",
        "*:data-[slot=icon]:mr-2 *:data-[slot=icon]:-ml-0.5 *:data-[slot=icon]:size-4 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:self-center *:data-[slot=icon]:text-muted-fg selected:*:data-[slot=icon]:text-primary-subtle-fg",
        "selected:text-primary-subtle-fg text-muted-fg hover:bg-secondary selected:hover:bg-primary-subtle hover:text-fg selected:hover:text-primary-subtle-fg focus:ring-0",
        "disabled:opacity-50",
        "href" in props ? "cursor-pointer" : "cursor-default",
        className,
      )}
    >
      {(values) => (
        <>
          {typeof children === "function" ? children(values) : children}
          <SelectionIndicator
            data-slot="selected-indicator"
            className={twMerge(
              "absolute bg-primary-subtle-fg transition-[translate,width,height] duration-200",
              orientation === "horizontal"
                ? "right-(--tab-gutter-x) -bottom-[calc(var(--tab-gutter-y)+1px)] left-(--tab-gutter-x) h-0.5"
                : "top-(--tab-gutter-y) bottom-(--tab-gutter-y) -left-[calc(var(--tab-gutter-x)-var(--tab-list-gutter)+1px)] w-0.5",
            )}
          />
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
      data-slot="tab-panel"
      className={cx("flex-1 text-fg text-sm/6 focus-visible:outline-hidden", className)}
    />
  )
}

export type { TabsProps, TabListProps, TabProps, TabPanelProps }
export { Tabs, TabList, Tab, TabPanel }
