"use client"

import * as React from "react"

import { IconChevronRight } from "@intentui/icons"
import type { TreeItemProps as TreeItemPrimitiveProps, TreeProps } from "react-aria-components"
import {
  Button,
  composeRenderProps,
  UNSTABLE_Tree as TreePrimitive,
  UNSTABLE_TreeItem as TreeItemPrimitive,
  UNSTABLE_TreeItemContent as TreeItemContent
} from "react-aria-components"
import { tv } from "tailwind-variants"

import { Checkbox } from "./checkbox"

const treeStyles = tv({
  base: "flex border max-h-96 min-w-72 [&::-webkit-scrollbar]:size-0.5 [scrollbar-width:thin] py-2 rounded-lg bg-bg cursor-default lg:text-sm flex-col overflow-auto forced-color-adjust-none outline-none",
  variants: {
    isFocusVisible: {
      true: "outline-offset-[-1px] outline-2 outline-primary"
    }
  }
})

const Tree = <T extends object>({ className, ...props }: TreeProps<T>) => {
  return (
    <TreePrimitive
      className={composeRenderProps(className, (className, renderProps) =>
        treeStyles({
          ...renderProps,
          className
        })
      )}
      {...props}
    >
      {props.children}
    </TreePrimitive>
  )
}

const itemStyles = tv({
  base: [
    "[&_[data-expanded]_[slot=chevron]_[data-slot=icon]]:rotate-90 outline-none [--padding:20px] p-[0.286rem_0.286rem_0.286rem_0.571rem] pl-[calc((var(--tree-item-level)-1)*20px+0.571rem+var(--padding))]",
    "[&_[slot=chevron]]:outline-none [&_[slot=chevron]_[data-slot=icon]]:text-muted-fg",
    "data-[has-child-rows]:[--padding:0px]"
  ],
  variants: {
    isExpanded: {
      true: "[&_[slot=chevron]_[data-slot=icon]]:text-fg [&_[slot=chevron]_[data-slot=icon]]:rotate-90 [&_[slot=chevron]_[data-slot=icon]]:transition [&_[slot=chevron]_[data-slot=icon]]:duration-200"
    },
    isFocusVisible: {
      true: "[&_[slot=chevron]_[data-slot=icon]]:text-fg focus:outline-none focus-visible:ring-1 focus-visible:ring-primary"
    },
    isDisabled: {
      true: "opacity-50 forced-colors:text-[GrayText]"
    }
  }
})

const TreeItem = <T extends object>({ className, ...props }: TreeItemPrimitiveProps<T>) => {
  return (
    <TreeItemPrimitive
      className={composeRenderProps(className, (className, renderProps) =>
        itemStyles({
          ...renderProps,
          className
        })
      )}
      {...props}
    >
      {props.children}
    </TreeItemPrimitive>
  )
}

const ItemContent = (props: React.ComponentProps<typeof TreeItemContent>) => {
  return (
    <TreeItemContent {...props}>
      <div className="flex items-center">
        <>{props.children as React.ReactNode}</>
      </div>
    </TreeItemContent>
  )
}

const Indicator = () => {
  return (
    <Button className="shrink-0 relative" slot="chevron">
      <>
        <IconChevronRight className="size-5" />
      </>
    </Button>
  )
}

const ItemCheckbox = () => {
  return <Checkbox slot="selection" />
}

const ItemLabel = (props: React.HtmlHTMLAttributes<HTMLSpanElement>) => {
  return <span {...props} />
}

TreeItem.Label = ItemLabel
TreeItem.Indicator = Indicator
TreeItem.Checkbox = ItemCheckbox
TreeItem.Content = ItemContent

export { Tree, TreeItem }
