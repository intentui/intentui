"use client"

import {
  TextArea as TextAreaPrimitive,
  TextField as TextFieldPrimitive,
  type TextFieldProps as TextFieldPrimitiveProps,
  type ValidationResult,
  composeRenderProps,
} from "react-aria-components"

import { Description, FieldError, Label } from "@/components/ui/field"
import { composeTailwindRenderProps } from "@/lib/primitive"
import { twMerge } from "tailwind-merge"

interface TextareaProps extends TextFieldPrimitiveProps {
  autoSize?: boolean
  label?: string
  placeholder?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
  className?: string
}

const Textarea = ({
  className,
  placeholder,
  label,
  description,
  errorMessage,
  ...props
}: TextareaProps) => {
  return (
    <TextFieldPrimitive
      {...props}
      className={composeTailwindRenderProps(className, "group flex flex-col gap-y-1.5")}
    >
      {label && <Label>{label}</Label>}
      <TextAreaPrimitive
        placeholder={placeholder}
        className={composeRenderProps(className, (className, { isFocused, isInvalid }) =>
          twMerge([
            "field-sizing-content max-h-96 min-h-16 w-full min-w-0 rounded-lg border border-input px-2.5 py-2 text-base placeholder-muted-fg shadow-xs outline-hidden transition duration-200 hover:border-[color-mix(in_oklab,var(--color-secondary-fg)_10%,var(--color-border))] disabled:opacity-50 sm:text-sm",
            isFocused && "border-ring/70 forced-colors:border-[Highlight]",
            isInvalid && "border-danger/70 forced-colors:border-[Mark]",
            className,
          ]),
        )}
      />
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </TextFieldPrimitive>
  )
}

export type { TextareaProps }
export { Textarea }
