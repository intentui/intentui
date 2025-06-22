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
import { composeTailwindRenderProps } from "@/lib/primitive"
import { IconChevronsY } from "@intentui/icons"
import {
  ComboBoxContext,
  ComboBox as ComboboxPrimitive,
  ListBox,
  Popover,
  useSlottedContext,
} from "react-aria-components"
import type {
  ComboBoxProps as ComboboxPrimitiveProps,
  InputProps,
  ListBoxProps,
  PopoverProps,
} from "react-aria-components"
import { twJoin } from "tailwind-merge"

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
  popoverClassName?: PopoverProps["className"]
}

const ComboBoxList = <T extends object>({
  children,
  items,
  className,
  popoverClassName,
  ...props
}: ComboBoxListProps<T>) => {
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
    </Popover>
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
