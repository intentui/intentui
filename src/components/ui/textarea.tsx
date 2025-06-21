"use client"

import { Description, FieldError, type FieldProps, Label } from "@/components/ui/field"
import { composeTailwindRenderProps } from "@/lib/primitive"
import { TextArea, TextField, type TextFieldProps } from "react-aria-components"
import { twJoin } from "tailwind-merge"

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
      className={composeTailwindRenderProps(
        className,
        "group flex flex-col gap-y-1 *:data-[slot=label]:font-medium",
      )}
    >
      {label && <Label>{label}</Label>}
      <TextArea
        placeholder={placeholder}
        className={composeTailwindRenderProps(
          className,
          twJoin([
            "field-sizing-content max-h-96 min-h-16 w-full min-w-0 rounded-lg border border-input px-2.5 py-2 text-base placeholder-muted-fg shadow-xs outline-hidden transition duration-200 sm:text-sm/6",
            "focus:border-ring/70 focus:ring-3 focus:ring-ring/20",
            "focus:invalid:border-danger/70 focus:invalid:ring-3 focus:invalid:ring-danger/20",
            "invalid:border-danger/70",
            "disabled:opacity-50 disabled:forced-colors:border-[GrayText]",
            "hover:border-current/20 invalid:hover:border-danger/70",
          ]),
        )}
      />
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </TextField>
  )
}

export type { TextareaProps }
export { Textarea }
