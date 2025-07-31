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
          "[--tree-active-bg:var(--color-secondary)] [--tree-active-fg:var(--color-secondary-fg)]",
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
        "shrink-0 rounded-lg px-2 py-1.5 pr-2",
        "group/tree-item relative flex select-none rounded-lg focus:outline-hidden",
        "focus:bg-(--tree-active-bg) focus:text-(--tree-active-fg) focus:**:[.text-muted-fg]:text-(--tree-active-fg)",
        "**:data-[slot=avatar]:*:mr-1.5 **:data-[slot=avatar]:*:size-6 **:data-[slot=avatar]:mr-(--mr-icon) **:data-[slot=avatar]:size-6 sm:**:data-[slot=avatar]:*:size-5 sm:**:data-[slot=avatar]:size-5",
        "*:data-[slot=icon]:mr-(--mr-icon) **:data-[slot=icon]:size-5 **:data-[slot=icon]:shrink-0 sm:**:data-[slot=icon]:size-4",
        "href" in props ? "cursor-pointer" : "cursor-default",
      ])}
      {...props}
    />
  )
}

interface TreeContentProps extends TreeItemContentProps {
  className?: string
}

const TreeContent = ({ className, children, ...props }: TreeContentProps) => {
  return (
    <TreeItemContent {...props}>
      {(values) => (
        <div
          className={twMerge(
            "relative flex w-full min-w-0 items-center truncate text-sm/6",
            className,
          )}
        >
          {values.selectionMode === "multiple" && values.selectionBehavior === "toggle" && (
            <Checkbox className="mr-2" slot="selection" />
          )}
          <div
            className={twJoin(
              "relative w-[calc(calc(var(--tree-item-level)-1)*calc(var(--spacing)*5.5))] shrink-0",
              "before:-ms-1 before:absolute before:inset-0 before:bg-[repeating-linear-gradient(to_right,transparent_0,transparent_calc(var(--tree-item-level)-1px),var(--border)_calc(var(--tree-item-level)-1px),var(--border)_calc(var(--tree-item-level)))]",
            )}
          />
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
      isDisabled={values.isDisabled}
      className={twJoin(
        "size-5 shrink-0 content-center text-muted-fg hover:text-fg",
        values.isExpanded && "text-fg",
      )}
    >
      <IconChevronRight
        className={twJoin(
          "size-4 transition-transform duration-200 ease-in-out",
          values.isExpanded && "rotate-90",
        )}
      />
    </Button>
  )
}

export type { TreeProps, TreeItemProps }
export { Tree, TreeItem, TreeIndicator, TreeContent }
