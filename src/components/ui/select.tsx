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
import { PopoverContent } from "@/components/ui/popover"
import { composeTailwindRenderProps } from "@/lib/primitive"
import { IconChevronsY } from "@intentui/icons"
import type {
  ListBoxProps,
  PopoverProps,
  SelectProps as SelectPrimitiveProps,
} from "react-aria-components"
import { Button, ListBox, Select as SelectPrimitive, SelectValue } from "react-aria-components"
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
      className={composeTailwindRenderProps(className, "group/select flex w-full flex-col gap-y-1")}
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
  extends Omit<ListBoxProps<T>, "layout" | "orientation"> {
  items?: Iterable<T>
  popover?: Omit<PopoverProps, "children">
}

const SelectList = <T extends object>({
  items,
  className,
  popover,
  ...props
}: SelectListProps<T>) => {
  return (
    <PopoverContent
      className={composeTailwindRenderProps(
        popover?.className,
        "min-w-(--trigger-width) scroll-py-1 overflow-y-auto overscroll-contain",
      )}
      {...popover}
    >
      <ListBox
        layout="stack"
        orientation="vertical"
        className={composeTailwindRenderProps(
          className,
          "grid max-h-96 w-full grid-cols-[auto_1fr] flex-col gap-y-1 p-1 outline-hidden *:[[role='group']+[role=group]]:mt-4 *:[[role='group']+[role=separator]]:mt-1",
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
      className={composeTailwindRenderProps(
        className,
        twJoin([
          "inset-ring inset-ring-input flex w-full min-w-0 cursor-default items-center gap-x-2 rounded-lg px-3.5 py-2 text-start text-fg shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] outline-hidden transition duration-200 sm:py-1.5 sm:pr-2 sm:pl-3 sm:text-sm/6 sm:*:text-sm/6 dark:shadow-none",
          "group-open/select:inset-ring-ring/70 group-open/select:ring-3 group-open/select:ring-ring/20",
          "group-disabled/select:opacity-50 forced-colors:group-disabled/select:inset-ring-[GrayText] forced-colors:group-disabled/select/select:text-[GrayText]",
          "focus:inset-ring-ring/70 focus:ring-3 focus:ring-ring/20",
          "hover:inset-ring-[color-mix(in_oklab,var(--color-input)_50%,var(--color-muted-fg)_25%)]",
          "group-open/select:invalid:inset-ring-danger/70 group-open/select:invalid:ring-3 group-open/select:invalid:ring-danger/20 group-invalid/select:inset-ring-danger/70 group-invalid/select:ring-danger/20 group-focus/select:group-invalid/select:inset-ring-danger/70 group-focus/select:group-invalid/select:ring-danger/20",
          "*:data-[slot=icon]:-mx-0.5 *:data-[slot=icon]:my-0.5 *:data-[slot=icon]:size-5 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:self-center *:data-[slot=icon]:text-(--btn-icon) pressed:*:data-[slot=icon]:text-(--btn-icon-active) focus-visible:*:data-[slot=icon]:text-(--btn-icon-active)/80 hover:*:data-[slot=icon]:text-(--btn-icon-active)/90 sm:*:data-[slot=icon]:my-1 sm:*:data-[slot=icon]:size-4 forced-colors:[--btn-icon:ButtonText] forced-colors:hover:[--btn-icon:ButtonText]",
          "*:data-[slot=loader]:-mx-0.5 *:data-[slot=loader]:my-0.5 *:data-[slot=loader]:size-5 *:data-[slot=loader]:shrink-0 *:data-[slot=loader]:self-center *:data-[slot=loader]:text-(--btn-icon) sm:*:data-[slot=loader]:my-1 sm:*:data-[slot=loader]:size-4",
          "forced-colors:group-focus/select:inset-ring-[Highlight] forced-colors:group-invalid/select:inset-ring-[Mark] forced-colors:group-focus/select:group-invalid/select:inset-ring-[Mark]",
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
