"use client"

import { IconChevronRight } from "@intentui/icons"
import type {
  TreeItemContentProps,
  TreeItemContentRenderProps,
  TreeItemProps,
  TreeProps,
} from "react-aria-components"
import {
  Button,
  TreeItemContent,
  TreeItem as TreeItemPrimitive,
  Tree as TreePrimitive,
} from "react-aria-components"
import { twJoin, twMerge } from "tailwind-merge"
import { composeTailwindRenderProps } from "@/lib/primitive"
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
          {values.selectionMode === "multiple" && values.selectionBehavior === "toggle" && (
            <Checkbox className="mr-2" slot="selection" />
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
            <span className="block size-6 shrink-0" />
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
      isDisabled={values.isDisabled}
      className={twJoin(
        "size-6 shrink-0 content-center text-muted-fg hover:text-fg",
        values.isExpanded && "text-fg",
      )}
    >
      <IconChevronRight
        aria-hidden
        className={twJoin(
          "size-5 transition-transform duration-200 ease-in-out",
          values.isExpanded && "rotate-90",
        )}
      />
    </Button>
  )
}

export type { TreeProps, TreeItemProps }
export { Tree, TreeItem, TreeIndicator, TreeContent }
