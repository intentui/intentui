"use client"

import { IconChevronRight, IconDotGrid2X3 } from "@intentui/icons"
import type {
  TreeItemContentProps,
  TreeItemContentRenderProps,
  TreeItemProps,
  TreeProps,
} from "react-aria-components"
import {
  TreeItemContent,
  TreeItem as TreeItemPrimitive,
  Tree as TreePrimitive,
} from "react-aria-components"
import { twJoin, twMerge } from "tailwind-merge"
import { composeTailwindRenderProps } from "@/lib/primitive"
import { Button } from "./button"
import { Checkbox } from "./checkbox"

const Tree = <T extends object>({ className, ...props }: TreeProps<T>) => {
  return (
    <TreePrimitive
      className={composeTailwindRenderProps(
        className,
        twJoin(
          "flex cursor-default flex-col gap-y-2 overflow-auto outline-hidden forced-color-adjust-none",
        ),
      )}
      {...props}
    />
  )
}

const TreeItem = <T extends object>({ className, ...props }: TreeItemProps<T>) => {
  return (
    <TreeItemPrimitive
      className={composeTailwindRenderProps(className, [
        "group -mb-px -outline-offset-2 relative flex cursor-default select-none gap-3 border-transparent border-y text-sm first:border-t-0 last:mb-0 last:border-b-0",
      ])}
      {...props}
    >
      {props.children}
    </TreeItemPrimitive>
  )
}

interface TreeContentProps extends TreeItemContentProps {
  className?: string
}

const TreeContent = ({ className, children, ...props }: TreeContentProps) => {
  return (
    <TreeItemContent {...props}>
      {(values) => (
        <div className={twMerge("flex items-center text-sm/6", className)}>
          {values.allowsDragging && (
            <Button intent="plain" size="sq-sm" slot="drag">
              <IconDotGrid2X3 />
            </Button>
          )}
          {values.selectionMode === "multiple" && values.selectionBehavior === "toggle" && (
            <Checkbox slot="selection" />
          )}
          <div className="w-[calc(calc(var(--tree-item-level)-1)*calc(var(--spacing)*3))] shrink-0" />
          {values.hasChildItems ? (
            <TreeIndicator
              values={{
                isDisabled: values.isDisabled,
                isExpanded: values.isExpanded,
              }}
            />
          ) : (
            <span className="block size-5 shrink-0" />
          )}
          {typeof children === "function" ? children(values) : children}
        </div>
      )}
    </TreeItemContent>
  )
}

const TreeIndicator = ({
  values,
}: {
  values: Pick<TreeItemContentRenderProps, "isDisabled" | "isExpanded">
}) => {
  return (
    <Button
      slot="chevron"
      size="sq-sm"
      intent="plain"
      isDisabled={values.isDisabled}
      className="shrink-0 **:data-[slot=icon]:size-5 sm:**:data-[slot=icon]:size-5"
    >
      <IconChevronRight
        aria-hidden
        className={twJoin(
          "size-5 text-muted-fg transition-transform duration-200 ease-in-out",
          values.isExpanded && "rotate-90 text-fg",
        )}
      />
    </Button>
  )
}

export type { TreeProps, TreeItemProps }
export { Tree, TreeItem, TreeIndicator, TreeContent }
