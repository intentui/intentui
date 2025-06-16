"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownDescription,
  DropdownItem,
  DropdownLabel,
  DropdownSection,
} from "@/components/ui/dropdown"
import {
  Description,
  FieldError,
  FieldGroup,
  type FieldProps,
  Input,
  Label,
} from "@/components/ui/field"
import { ListBox } from "@/components/ui/list-box"
import { PopoverContent, type PopoverContentProps } from "@/components/ui/popover"
import { composeTailwindRenderProps } from "@/lib/primitive"
import { IconChevronsY } from "@intentui/icons"
import type {
  ComboBoxProps as ComboboxPrimitiveProps,
  InputProps,
  ListBoxProps,
} from "react-aria-components"
import {
  ComboBoxContext,
  ComboBox as ComboboxPrimitive,
  useSlottedContext,
} from "react-aria-components"

interface ComboBoxProps<T extends object>
  extends Omit<ComboboxPrimitiveProps<T>, "children">,
    FieldProps {
  children: React.ReactNode
}

const ComboBox = <T extends object>({
  label,
  description,
  errorMessage,
  children,
  className,
  ...props
}: ComboBoxProps<T>) => {
  return (
    <ComboboxPrimitive
      data-slot="combo-box"
      {...props}
      className={composeTailwindRenderProps(className, "group flex w-full flex-col gap-y-1")}
    >
      {label && <Label>{label}</Label>}
      {children}
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </ComboboxPrimitive>
  )
}

interface ComboBoxListProps<T extends object>
  extends Omit<ListBoxProps<T>, "layout" | "orientation">,
    Pick<PopoverContentProps, "placement"> {
  popoverClassName?: PopoverContentProps["className"]
}

const ComboBoxList = <T extends object>({
  children,
  items,
  className,
  popoverClassName,
  ...props
}: ComboBoxListProps<T>) => {
  return (
    <PopoverContent
      showArrow={false}
      respectScreen={false}
      isNonModal
      className={popoverClassName}
      placement={props.placement}
    >
      <ListBox
        className={composeTailwindRenderProps(
          className,
          "max-h-[inherit] min-w-[inherit] border-0 shadow-none",
        )}
        layout="stack"
        orientation="vertical"
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
    <FieldGroup>
      <Input {...props} placeholder={props?.placeholder} />
      <Button
        size="sq-sm"
        intent="plain"
        className="-mr-1 h-7 w-8 rounded pressed:bg-transparent outline-offset-0 hover:bg-transparent active:bg-transparent **:data-[slot=icon]:pressed:text-fg **:data-[slot=icon]:text-muted-fg **:data-[slot=icon]:hover:text-fg forced-colors:group-disabled:border-[GrayText] forced-colors:group-disabled:text-[GrayText]"
      >
        {!context?.inputValue && (
          <IconChevronsY
            data-slot="chevron"
            className="size-4 shrink-0 text-muted-fg group-open:text-fg"
          />
        )}
      </Button>
    </FieldGroup>
  )
}

const ComboBoxSection = DropdownSection
const ComboBoxOption = DropdownItem
const ComboBoxLabel = DropdownLabel
const ComboBoxDescription = DropdownDescription

ComboBox.Input = ComboBoxInput
ComboBox.List = ComboBoxList
ComboBox.Option = ComboBoxOption
ComboBox.Label = ComboBoxLabel
ComboBox.Description = ComboBoxDescription
ComboBox.Section = ComboBoxSection

export type { ComboBoxProps, ComboBoxListProps }
export { ComboBox }
