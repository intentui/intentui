"use client"
import { IconChevronsY } from "@intentui/icons"
import type {
  ListBoxProps,
  PopoverProps,
  SelectProps as SelectPrimitiveProps,
} from "react-aria-components"
import { Button, ListBox, Select as SelectPrimitive, SelectValue } from "react-aria-components"
import { twJoin } from "tailwind-merge"
import { cx } from "@/lib/primitive"
import {
  DropdownDescription,
  DropdownItem,
  DropdownLabel,
  DropdownSection,
  DropdownSeparator,
} from "./dropdown"
import type { FieldProps } from "./field"
import { Description, FieldError, Label } from "./field"
import { PopoverContent } from "./popover"

interface SelectProps<T extends object> extends SelectPrimitiveProps<T>, FieldProps {
  items?: Iterable<T>
}

const Select = <T extends object>({
  label,
  children,
  description,
  errorMessage,
  className,
  ...props
}: SelectProps<T>) => {
  return (
    <SelectPrimitive
      data-slot="select"
      {...props}
      className={cx(
        "group/select flex w-full flex-col gap-y-1 *:data-[slot=label]:font-medium",
        className,
      )}
    >
      {(values) => (
        <>
          {label && <Label>{label}</Label>}
          {typeof children === "function" ? children(values) : children}
          {description && <Description>{description}</Description>}
          <FieldError>{errorMessage}</FieldError>
        </>
      )}
    </SelectPrimitive>
  )
}

interface SelectContentProps<T extends object>
  extends Omit<ListBoxProps<T>, "layout" | "orientation"> {
  items?: Iterable<T>
  popover?: Omit<PopoverProps, "children">
}

const SelectContent = <T extends object>({
  items,
  className,
  popover,
  ...props
}: SelectContentProps<T>) => {
  return (
    <PopoverContent
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
      />
    </PopoverContent>
  )
}

interface SelectTriggerProps extends React.ComponentProps<typeof Button> {
  prefix?: React.ReactNode
  className?: string
}

const SelectTrigger = ({ children, className, ...props }: SelectTriggerProps) => {
  return (
    <Button
      className={cx(
        "inset-ring inset-ring-input flex w-full min-w-0 cursor-default items-center gap-x-2 rounded-lg px-3.5 py-2 text-start text-fg shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] outline-hidden transition duration-200 sm:py-1.5 sm:pr-2 sm:pl-3 sm:text-sm/6 sm:*:text-sm/6 dark:shadow-none",
        "group-open/select:inset-ring-ring/70 group-open/select:ring-3 group-open/select:ring-ring/20",
        className,
      )}
    >
      {(values) => (
        <>
          {props.prefix && <span className="text-muted-fg">{props.prefix}</span>}
          {typeof children === "function" ? children(values) : children}

          {!children && (
            <>
              <SelectValue
                data-slot="select-value"
                className={twJoin([
                  "grid flex-1 grid-cols-[auto_1fr] items-center truncate data-placeholder:text-muted-fg sm:text-sm/6 [&_[slot=description]]:hidden",
                  "has-data-[slot=avatar]:gap-x-2 has-data-[slot=icon]:gap-x-2",
                  "*:data-[slot=icon]:size-4.5 sm:*:data-[slot=icon]:size-4",
                  "*:data-[slot=avatar]:*:size-5 *:data-[slot=avatar]:size-5 sm:*:data-[slot=avatar]:*:size-4.5 sm:*:data-[slot=avatar]:size-4.5",
                ])}
              />
              <IconChevronsY
                data-slot="chevron"
                className="-mr-1 shrink-0 text-muted-fg group-open/select:text-fg group-disabled/select:opacity-50 sm:mr-0"
              />
            </>
          )}
        </>
      )}
    </Button>
  )
}

const SelectSection = DropdownSection
const SelectSeparator = DropdownSeparator
const SelectLabel = DropdownLabel
const SelectDescription = DropdownDescription
const SelectItem = DropdownItem

Select.Description = SelectDescription
Select.Item = SelectItem
Select.Label = SelectLabel
Select.Separator = SelectSeparator
Select.Section = SelectSection
Select.Trigger = SelectTrigger
Select.Content = SelectContent

export {
  Select,
  SelectDescription,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectSection,
  SelectTrigger,
  SelectContent,
}
export type { SelectProps, SelectTriggerProps }
