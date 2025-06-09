"use client"

import React from "react"

import { IconChevronLgDown, IconX } from "@intentui/icons"
import type { InputProps } from "react-aria-components"
import {
  ComboBox as ComboboxPrimitive,
  ComboBoxContext,
  type ComboBoxProps as ComboboxPrimitiveProps,
  ComboBoxStateContext,
  type PopoverProps as PopoverPrimitiveProps,
  useSlottedContext,
  type ValidationResult
} from "react-aria-components"
import { tv } from "tailwind-variants"

import { Button, ButtonPrimitive } from "./button"
import { DropdownItem, DropdownSection } from "./dropdown"
import { Description, FieldError, FieldGroup, Input, Label } from "./field"
import { ListBox } from "./list-box"
import { Popover } from "./popover"
import { ctr } from "./primitive"

const comboboxStyles = tv({
  slots: {
    base: "group w-full flex flex-col gap-y-1.5",
    chevronButton:
      "h-7 w-8 [&_[data-slot=icon]]:text-muted-fg hover:[&_[data-slot=icon]]:text-fg pressed:[&_[data-slot=icon]]:text-fg rounded outline-offset-0 active:bg-transparent hover:bg-transparent pressed:bg-transparent",
    chevronIcon: "transition shrink-0 size-4 duration-200 group-open:rotate-180 group-open:text-fg",
    clearButton:
      "focus:outline-none absolute inset-y-0 right-0 flex items-center pr-2 text-muted-fg hover:text-fg"
  }
})

const { base, chevronButton, chevronIcon, clearButton } = comboboxStyles()

interface ComboBoxProps<T extends object> extends Omit<ComboboxPrimitiveProps<T>, "children"> {
  label?: string
  placeholder?: string
  description?: string | null
  errorMessage?: string | ((validation: ValidationResult) => string)
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
    <ComboboxPrimitive {...props} className={ctr(className, base())}>
      {label && <Label>{label}</Label>}
      <>{children}</>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </ComboboxPrimitive>
  )
}

type ListBoxPickerProps<T extends object> = React.ComponentProps<typeof ListBox<T>>

interface ListProps<T extends object>
  extends ListBoxPickerProps<T>,
    Omit<PopoverPrimitiveProps, "children" | "className" | "style"> {}

const List = <T extends object>({ children, items, ...props }: ListProps<T>) => {
  return (
    <Popover.Picker trigger="ComboBox" isNonModal placement={props.placement}>
      <ListBox.Picker items={items} {...props}>
        {children}
      </ListBox.Picker>
    </Popover.Picker>
  )
}

const ComboBoxInput = (props: InputProps) => {
  const context = useSlottedContext(ComboBoxContext)!
  return (
    <FieldGroup className="pl-0 relative">
      <Input {...props} placeholder={props?.placeholder} />
      <Button size="square-petite" appearance="plain" className={chevronButton()}>
        {!context?.inputValue && <IconChevronLgDown className={chevronIcon()} />}
      </Button>
      {context?.inputValue && <ComboBoxClearButton />}
    </FieldGroup>
  )
}

const ComboBoxClearButton = () => {
  const state = React.useContext(ComboBoxStateContext)

  return (
    <ButtonPrimitive
      className={clearButton()}
      slot={null}
      aria-label="Clear"
      onPress={() => {
        state?.setSelectedKey(null)
        state?.open()
      }}
    >
      <IconX className="size-4 animate-in" />
    </ButtonPrimitive>
  )
}

ComboBox.Input = ComboBoxInput
ComboBox.List = List
ComboBox.Option = DropdownItem
ComboBox.Section = DropdownSection

export { ComboBox }
