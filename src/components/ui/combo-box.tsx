"use client"

import { ChevronUpDownIcon } from "@heroicons/react/20/solid"
import type {
  ComboBoxProps as ComboboxPrimitiveProps,
  InputProps,
  ListBoxProps,
  PopoverProps,
} from "react-aria-components"
import {
  Button,
  ComboBoxContext,
  ComboBox as ComboboxPrimitive,
  ListBox,
  useSlottedContext,
} from "react-aria-components"
import { fieldStyles } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { cx } from "@/lib/primitive"
import { DropdownDescription, DropdownItem, DropdownLabel, DropdownSection } from "./dropdown"
import { PopoverContent } from "./popover"

interface ComboBoxProps<T extends object> extends Omit<ComboboxPrimitiveProps<T>, "children"> {
  children: React.ReactNode
}

const ComboBox = <T extends object>({ className, ...props }: ComboBoxProps<T>) => {
  return (
    <ComboboxPrimitive data-slot="control" className={cx(fieldStyles(), className)} {...props} />
  )
}

interface ComboBoxListProps<T extends object>
  extends Omit<ListBoxProps<T>, "layout" | "orientation">,
    Pick<PopoverProps, "placement"> {
  popover?: Omit<PopoverProps, "children">
}

const ComboBoxContent = <T extends object>({
  children,
  items,
  className,
  popover,
  ...props
}: ComboBoxListProps<T>) => {
  return (
    <PopoverContent
      placement={popover?.placement ?? "bottom"}
      className={cx(
        "min-w-(--trigger-width) scroll-py-1 overflow-y-auto overscroll-contain",
        popover?.className,
      )}
      {...popover}
    >
      <ListBox
        layout="stack"
        orientation="vertical"
        className={cx(
          "grid max-h-96 w-full grid-cols-[auto_1fr] flex-col gap-y-1 p-1 outline-hidden *:[[role='group']+[role=group]]:mt-4 *:[[role='group']+[role=separator]]:mt-1",
          className,
        )}
        items={items}
        {...props}
      >
        {children}
      </ListBox>
    </PopoverContent>
  )
}

const ComboBoxInput = (props: InputProps) => {
  const context = useSlottedContext(ComboBoxContext)!
  return (
    <span
      data-slot="control"
      className="relative isolate block has-[[data-slot=icon]:last-child]:[&_input]:pr-10"
    >
      <Input {...props} placeholder={props?.placeholder} />
      <Button className="absolute top-0 right-0 grid h-full w-11 cursor-default place-content-center sm:w-9">
        {!context?.inputValue && (
          <ChevronUpDownIcon data-slot="chevron" className="-mr-1 size-5 text-muted-fg sm:size-4" />
        )}
      </Button>
    </span>
  )
}

const ComboBoxSection = DropdownSection
const ComboBoxItem = DropdownItem
const ComboBoxLabel = DropdownLabel
const ComboBoxDescription = DropdownDescription

export type { ComboBoxProps, ComboBoxListProps }
export {
  ComboBox,
  ComboBoxInput,
  ComboBoxContent,
  ComboBoxItem,
  ComboBoxLabel,
  ComboBoxDescription,
  ComboBoxSection,
}
