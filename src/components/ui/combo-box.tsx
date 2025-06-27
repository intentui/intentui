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
import { PopoverContent } from "@/components/ui/popover"
import { composeTailwindRenderProps } from "@/lib/primitive"
import { IconChevronsY } from "@intentui/icons"
import {
  ComboBoxContext,
  ComboBox as ComboboxPrimitive,
  ListBox,
  useSlottedContext,
} from "react-aria-components"
import type {
  ComboBoxProps as ComboboxPrimitiveProps,
  InputProps,
  ListBoxProps,
  PopoverProps,
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
    Pick<PopoverProps, "placement"> {
  popover?: Omit<PopoverProps, "children">
}

const ComboBoxList = <T extends object>({
  children,
  items,
  className,
  popover,
  ...props
}: ComboBoxListProps<T>) => {
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
        size="sq-xs"
        intent="plain"
        className="rounded pressed:bg-transparent outline-offset-0 hover:bg-transparent active:bg-transparent **:data-[slot=icon]:pressed:text-fg **:data-[slot=icon]:text-muted-fg **:data-[slot=icon]:hover:text-fg forced-colors:group-disabled:border-[GrayText] forced-colors:group-disabled:text-[GrayText]"
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
