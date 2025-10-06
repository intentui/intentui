"use client"

import type {
  FieldErrorProps as FieldErrorPrimitiveProps,
  GroupProps,
  InputProps as InputPrimitiveProps,
  LabelProps,
  TextProps,
  ValidationResult,
} from "react-aria-components"
import {
  FieldError as FieldErrorPrimitive,
  Group,
  Input as InputPrimitive,
  Label as LabelPrimitive,
  Text,
} from "react-aria-components"
import { tv } from "tailwind-variants"

import { cx } from "@/lib/primitive"

interface FieldProps {
  label?: string
  placeholder?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
}

const fieldStyles = tv({
  slots: {
    description: "text-base/6 text-muted-fg group-disabled:opacity-50 sm:text-sm/6",
    label: "select-none text-base/6 text-fg group-disabled:opacity-50 sm:text-sm/6",
    fieldError:
      "text-base/6 text-danger group-disabled:opacity-50 sm:text-sm/6 forced-colors:text-[Mark]",
  },
})

const { description, label, fieldError } = fieldStyles()

const Label = ({ className, ...props }: LabelProps) => {
  return <LabelPrimitive data-slot="label" {...props} className={label({ className })} />
}

interface DescriptionProps extends TextProps {
  ref?: React.RefObject<HTMLElement>
}

const Description = ({ ref, className, ...props }: DescriptionProps) => {
  return <Text ref={ref} {...props} slot="description" className={description({ className })} />
}

interface FieldErrorProps extends FieldErrorPrimitiveProps {
  ref?: React.RefObject<HTMLElement>
}
const FieldError = ({ className, ref, ...props }: FieldErrorProps) => {
  return <FieldErrorPrimitive ref={ref} {...props} className={cx(fieldError(), className)} />
}

interface FieldGroupProps extends GroupProps {
  ref?: React.RefObject<HTMLDivElement>
}
const FieldGroup = ({ className, ref, ...props }: FieldGroupProps) => {
  return (
    <Group
      {...props}
      ref={ref}
      className={cx(
        "[--gutter-inset:--spacing(6)] [--gutter-x:--spacing(2.5)]",
        "*:text-base/6 *:sm:text-sm/6",
        "group relative inset-ring inset-ring-input flex items-center overflow-hidden rounded-lg shadow-xs transition duration-200 ease-out",
        "[&>[role=progressbar]:first-child]:ml-(--gutter-x) [&>[role=progressbar]:last-child]:mr-(--gutter-x)",
        "*:data-[slot=icon]:z-10 **:data-[slot=icon]:size-4 **:data-[slot=icon]:shrink-0 **:[button]:shrink-0",
        "[&>button:has([data-slot=icon]):first-child]:left-0 [&>button:has([data-slot=icon]):last-child]:right-0 [&>button:has([data-slot=icon])]:absolute",
        "*:data-[slot=icon]:-translate-y-1/2 *:data-[slot=icon]:pointer-events-none *:data-[slot=icon]:absolute *:data-[slot=icon]:top-1/2 *:data-[slot=icon]:text-muted-fg",
        "[&>[data-slot=icon]:first-child]:left-(--gutter-x) [&>[data-slot=icon]:last-child]:right-(--gutter-x)",
        "[&:has([data-slot=icon]+input)]:pl-(--gutter-inset) [&:has(input+[data-slot=icon])]:pr-(--gutter-inset)",
        "[&:has([data-slot=icon]+[role=group])]:pl-(--gutter-inset) [&:has([role=group]+[data-slot=icon])]:pr-(--gutter-inset)",
        "has-[[data-slot=icon]:last-child]:[&_input]:pr-[calc(var(--gutter-inset)+1)]",
        "*:[button]:rounded-[calc(var(--radius-lg)-2.5px)] *:[button]:px-(--gutter-x) *:[button]:py-[calc(--spacing(1)-1px)]",
        "*:[button]:first:ml-[--spacing(0.7)] *:[button]:last:mr-[--spacing(0.7)]",
        "hover:inset-ring-[color-mix(in_oklab,var(--color-input)_50%,var(--color-muted-fg)_25%)] focus-within:hover:inset-ring-ring/70 has-invalid:hover:inset-ring-danger/70",
        "invalid:inset-ring-danger/70 focus-within:invalid:inset-ring-danger/70 focus-within:invalid:ring-danger/20 group-invalid:inset-ring-danger/70 group-invalid:focus-within:inset-ring-danger/70 group-invalid:focus-within:ring-danger/20",
        "focus-within:inset-ring-ring/70 focus-within:ring-3 focus-within:ring-ring/20",
        className,
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
      className={cx(
        "relative block w-full px-3.5 py-2 placeholder-muted-fg outline-hidden sm:px-3 sm:py-1.5 sm:text-sm/6 [&::-ms-reveal]:hidden [&::-webkit-search-cancel-button]:hidden",
        className,
      )}
    />
  )
}

export type { FieldProps, InputProps, DescriptionProps, FieldErrorProps }
export { Description, FieldError, FieldGroup, Input, Label, fieldStyles }
