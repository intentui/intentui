"use client"

import type {
  FieldErrorProps as FieldErrorPrimitiveProps,
  GroupProps,
  InputProps as InputPrimitiveProps,
  LabelProps,
  TextFieldProps as TextFieldPrimitiveProps,
  TextProps,
  ValidationResult,
} from "react-aria-components"
import {
  FieldError as FieldErrorPrimitive,
  Group,
  Input as InputPrimitive,
  Label as LabelPrimitive,
  Text,
  composeRenderProps,
} from "react-aria-components"
import { tv } from "tailwind-variants"

import { composeTailwindRenderProps, focusStyles } from "@/lib/primitive"

interface FieldProps {
  label?: string
  placeholder?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
  "aria-label"?: TextFieldPrimitiveProps["aria-label"]
  "aria-labelledby"?: TextFieldPrimitiveProps["aria-labelledby"]
}

const fieldStyles = tv({
  slots: {
    description: "text-pretty text-muted-fg text-sm/6",
    label: "w-fit cursor-default font-medium text-secondary-fg text-sm/6",
    fieldError: "text-danger text-sm/6 forced-colors:text-[Mark]",
  },
})

const { description, label, fieldError } = fieldStyles()

const Label = ({ className, ...props }: LabelProps) => {
  return <LabelPrimitive {...props} className={label({ className })} />
}

interface DescriptionProps extends TextProps {
  isWarning?: boolean
  ref?: React.RefObject<HTMLElement>
}

const Description = ({ ref, className, ...props }: DescriptionProps) => {
  const isWarning = props.isWarning ?? false
  return (
    <Text
      ref={ref}
      {...props}
      slot="description"
      className={description({ className: isWarning ? "text-warning" : className })}
    />
  )
}

interface FieldErrorProps extends FieldErrorPrimitiveProps {
  ref?: React.RefObject<HTMLElement>
}
const FieldError = ({ className, ref, ...props }: FieldErrorProps) => {
  return (
    <FieldErrorPrimitive
      ref={ref}
      {...props}
      className={composeTailwindRenderProps(className, fieldError())}
    />
  )
}

const fieldGroupStyles = tv({
  base: [
    "[--gutter-x:--spacing(2.5)] [--padding-inset:--spacing(6)]",
    "group flex h-10 items-center overflow-hidden rounded-lg border border-input shadow-xs transition duration-200 ease-out",
    "relative focus-within:ring-4 group-invalid:focus-within:border-danger group-invalid:focus-within:ring-danger/20",
    "[&>[role=progressbar]:first-child]:ml-(--gutter-x) [&>[role=progressbar]:last-child]:mr-(--gutter-x)",
    "*:data-[slot=icon]:z-10 **:data-[slot=icon]:size-4 **:data-[slot=icon]:shrink-0 **:[button]:shrink-0",
    "[&>button:has([data-slot=icon]):first-child]:left-0 [&>button:has([data-slot=icon]):last-child]:right-0 [&>button:has([data-slot=icon])]:absolute",
    "*:data-[slot=icon]:pointer-events-none *:data-[slot=icon]:absolute *:data-[slot=icon]:top-[calc(var(--spacing)*2.7)] *:data-[slot=icon]:text-muted-fg",
    "[&>[data-slot=icon]:first-child]:left-(--gutter-x) [&>[data-slot=icon]:last-child]:right-(--gutter-x)",
    "[&:has([data-slot=icon]+input)]:pl-(--padding-inset) [&:has(input+[data-slot=icon])]:pr-(--padding-inset)",
    "[&:has([data-slot=icon]+[role=group])]:pl-(--padding-inset) [&:has([role=group]+[data-slot=icon])]:pr-(--padding-inset)",
    "has-[[data-slot=icon]:last-child]:[&_input]:pr-[calc(var(--padding-inset)+1)]",
    "*:[button]:h-8 *:[button]:rounded-[calc(var(--radius-sm)-1px)] *:[button]:px-(--gutter-x)",
    "[&>button:first-child]:ml-[calc(var(--spacing)*0.7)] [&>button:last-child]:mr-[calc(var(--spacing)*0.7)]",
  ],
  variants: {
    isFocusWithin: focusStyles.variants.isFocused,
    isInvalid: focusStyles.variants.isInvalid,
    isDisabled: {
      true: "opacity-50 forced-colors:border-[GrayText]",
    },
  },
})

interface FieldGroupProps extends GroupProps {
  ref?: React.RefObject<HTMLDivElement>
}
const FieldGroup = ({ className, ref, ...props }: FieldGroupProps) => {
  return (
    <Group
      {...props}
      ref={ref}
      className={composeRenderProps(className, (className, renderProps) =>
        fieldGroupStyles({
          ...renderProps,
          className,
        }),
      )}
    />
  )
}

interface InputProps extends InputPrimitiveProps {
  ref?: React.RefObject<HTMLInputElement>
}

const Input = ({ className, ref, ...props }: InputProps) => {
  return (
    <InputPrimitive
      ref={ref}
      {...props}
      className={composeTailwindRenderProps(
        className,
        "w-full min-w-0 bg-transparent px-(--gutter-x) py-2 text-base text-fg placeholder-muted-fg outline-hidden focus:outline-hidden sm:text-sm/6 [&::-ms-reveal]:hidden [&::-webkit-search-cancel-button]:hidden",
      )}
    />
  )
}

export type { FieldProps, InputProps, DescriptionProps, FieldErrorProps }
export { Description, FieldError, FieldGroup, Input, Label, fieldStyles }
