"use client"
import {
  DropdownDescription,
  DropdownItem,
  DropdownLabel,
  DropdownSection,
  DropdownSeparator,
} from "@/components/ui/dropdown"
import { Description, FieldError, Label } from "@/components/ui/field"
import type { FieldProps } from "@/components/ui/field"
import { ListBox } from "@/components/ui/list-box"
import { composeTailwindRenderProps } from "@/lib/primitive"
import { IconChevronsY } from "@intentui/icons"
import type {
  ListBoxProps,
  PopoverProps,
  SelectProps as SelectPrimitiveProps,
} from "react-aria-components"
import { Button, Popover, Select as SelectPrimitive, SelectValue } from "react-aria-components"
import { twJoin } from "tailwind-merge"

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
      className={composeTailwindRenderProps(className, "group flex w-full flex-col gap-y-1")}
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

interface SelectListProps<T extends object>
  extends Omit<ListBoxProps<T>, "layout" | "orientation">,
    Pick<PopoverProps, "placement"> {
  items?: Iterable<T>
  popoverClassName?: PopoverProps["className"]
}

const SelectList = <T extends object>({
  children,
  items,
  className,
  popoverClassName,
  ...props
}: SelectListProps<T>) => {
  return (
    <Popover
      className={composeTailwindRenderProps(
        popoverClassName,
        twJoin([
          "min-w-(--trigger-width) max-w-xs rounded-xl border bg-overlay bg-clip-padding text-overlay-fg shadow-xs transition-transform sm:max-w-3xl sm:text-sm dark:backdrop-saturate-200",
          "entering:fade-in exiting:fade-out entering:animate-in exiting:animate-out",
          "placement-left:entering:slide-in-from-right-1 placement-right:entering:slide-in-from-left-1 placement-top:entering:slide-in-from-bottom-1 placement-bottom:entering:slide-in-from-top-1",
          "placement-left:exiting:slide-out-to-right-1 placement-right:exiting:slide-out-to-left-1 placement-top:exiting:slide-out-to-bottom-1 placement-bottom:exiting:slide-out-to-top-1",
          "forced-colors:bg-[Canvas]",
        ]),
      )}
      placement={props.placement}
    >
      <ListBox
        layout="stack"
        orientation="vertical"
        className={composeTailwindRenderProps(
          className,
          "max-h-[inherit] min-w-[inherit] border-0 shadow-none",
        )}
        items={items}
        {...props}
      >
        {children}
      </ListBox>
    </Popover>
  )
}

interface SelectTriggerProps extends React.ComponentProps<typeof Button> {
  prefix?: React.ReactNode
  className?: string
}

const SelectTrigger = ({ children, className, ...props }: SelectTriggerProps) => {
  return (
    <Button
      className={composeTailwindRenderProps(
        className,
        twJoin([
          "flex w-full min-w-0 cursor-default items-center gap-x-2 rounded-lg border border-input px-3.5 py-2 text-start text-fg shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] outline-hidden transition sm:py-1.5 sm:pr-2 sm:pl-3 sm:text-sm/6 sm:*:text-sm/6 dark:shadow-none",
          "**:data-[slot=icon]:size-5 sm:**:data-[slot=icon]:size-4",
          "group-open:border-ring/70 group-open:ring-3 group-open:ring-ring/20",
          "group-disabled:opacity-50 forced-colors:group-disabled:border-[GrayText] forced-colors:group-disabled:text-[GrayText]",
          "focus:border-ring/70 focus:ring-3 focus:ring-ring/20",
          "group-open:invalid:border-danger/70 group-open:invalid:ring-3 group-open:invalid:ring-danger/20 group-invalid:border-danger/70 group-invalid:ring-danger/20 group-focus:group-invalid:border-danger/70 group-focus:group-invalid:ring-danger/20",
          "forced-colors:group-focus:border-[Highlight] forced-colors:group-invalid:border-[Mark] forced-colors:group-focus:group-invalid:border-[Mark]",
          className,
        ]),
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
                className="-mr-1 shrink-0 text-muted-fg group-open:text-fg group-disabled:opacity-50 sm:mr-0"
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
const SelectOption = DropdownItem

Select.Description = SelectDescription
Select.Option = SelectOption
Select.Label = SelectLabel
Select.Separator = SelectSeparator
Select.Section = SelectSection
Select.Trigger = SelectTrigger
Select.List = SelectList

export { Select }
export type { SelectProps, SelectTriggerProps }
