"use client"

import { TextArea, TextField, type TextFieldProps } from "react-aria-components"
import { twJoin } from "tailwind-merge"
import { cx } from "@/lib/primitive"
import { Description, FieldError, type FieldProps, Label } from "./field"

interface TextareaProps extends Omit<TextFieldProps, "className">, FieldProps {
  className?: string | ((v: TextFieldProps) => string)
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
    <TextField
      {...props}
      className={cx("group flex flex-col gap-y-1 *:data-[slot=label]:font-medium", className)}
    >
      {label && <Label>{label}</Label>}
      <TextArea
        placeholder={placeholder}
        className={cx(
          twJoin([
            "field-sizing-content max-h-96 min-h-16 w-full min-w-0 rounded-lg border border-input px-2.5 py-2 text-base placeholder-muted-fg shadow-xs outline-hidden transition duration-200 sm:text-sm/6",
            "focus:border-ring/70 focus:ring-3 focus:ring-ring/20",
            "focus:invalid:border-danger/70 focus:invalid:ring-3 focus:invalid:ring-danger/20",
          ]),
          className,
        )}
      />
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </TextField>
  )
}

export type { TextareaProps }
export { Textarea }
