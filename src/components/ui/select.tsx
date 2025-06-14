"use client"
import {
  DropdownDescription,
  DropdownItem,
  DropdownLabel,
  DropdownSection,
  DropdownSeparator,
} from "@/components/ui/dropdown"
import { Description, FieldError, Label } from "@/components/ui/field"
import { ListBox } from "@/components/ui/list-box"
import { PopoverContent, type PopoverContentProps } from "@/components/ui/popover"
import { composeTailwindRenderProps, focusStyles } from "@/lib/primitive"
import { IconChevronsY } from "@intentui/icons"
import type {
  ListBoxProps,
  PopoverProps,
  SelectProps as SelectPrimitiveProps,
  ValidationResult,
} from "react-aria-components"
import {
  Button,
  Select as SelectPrimitive,
  SelectValue,
  composeRenderProps,
} from "react-aria-components"
import { tv } from "tailwind-variants"

const selectTriggerStyles = tv({
  extend: focusStyles,
  base: [
    "relative isolate inline-flex w-full cursor-default items-center gap-x-2 rounded-lg border border-input text-start shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] transition hover:border-[color-mix(in_oklab,var(--color-secondary-fg)_10%,var(--color-border))] group-disabled:opacity-50 **:data-[slot=icon]:size-4 dark:shadow-none",
    "px-3.5 py-2.5 sm:py-1.5 sm:pr-2 sm:pl-3 sm:text-sm/6 sm:*:text-sm/6",
    "group-data-open:border-ring/70 group-data-open:ring-3 group-data-open:ring-ring/20",
    "text-fg group-invalid:border-danger group-invalid:ring-danger/20 forced-colors:group-invalid:border-[Mark]",
    "**:data-[slot=icon]:-mx-0.5 **:data-[slot=avatar]:-mx-0.5 **:data-[slot=avatar]:**:-mx-0.5 **:data-[slot=avatar]:**:mr-2 **:data-[slot=avatar]:mr-2 **:data-[slot=icon]:mr-2",
  ],
  variants: {
    isDisabled: {
      true: "opacity-50 forced-colors:border-[GrayText] forced-colors:text-[GrayText]",
    },
  },
})

interface SelectProps<T extends object> extends SelectPrimitiveProps<T> {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
  items?: Iterable<T>
  className?: string
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
  popoverClassName?: PopoverContentProps["className"]
}

const SelectList = <T extends object>({
  children,
  items,
  className,
  popoverClassName,
  ...props
}: SelectListProps<T>) => {
  return (
    <PopoverContent
      showArrow={false}
      respectScreen={false}
      className={popoverClassName}
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
    </PopoverContent>
  )
}

interface SelectTriggerProps extends React.ComponentProps<typeof Button> {
  prefix?: React.ReactNode
  className?: string
}

const SelectTrigger = ({ className, ...props }: SelectTriggerProps) => {
  return (
    <Button
      className={composeRenderProps(className, (className, renderProps) =>
        selectTriggerStyles({
          ...renderProps,
          className,
        }),
      )}
    >
      {props.prefix && <span className="-mr-1">{props.prefix}</span>}
      <SelectValue
        data-slot="select-value"
        className="grid flex-1 grid-cols-[auto_1fr] items-center data-placeholder:text-muted-fg sm:text-sm/6 [&_[slot=description]]:hidden"
      />
      <IconChevronsY
        data-slot="chevron"
        className="shrink-0 text-muted-fg group-disabled:opacity-50 group-data-open:text-fg forced-colors:text-[ButtonText] forced-colors:group-disabled:text-[GrayText]"
      />
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
