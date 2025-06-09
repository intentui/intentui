"use client"

import type {
  ColorFieldProps as ColorFieldPrimitiveProps,
  ValidationResult,
} from "react-aria-components"
import { ColorField as ColorFieldPrimitive } from "react-aria-components"

import { ColorPicker } from "@/components/ui/color-picker"
import { ColorSwatch } from "@/components/ui/color-swatch"
import { Description, FieldError, FieldGroup, Input, Label } from "@/components/ui/field"
import { composeTailwindRenderProps } from "@/lib/primitive"
import { twJoin } from "tailwind-merge"

interface ColorFieldProps extends ColorFieldPrimitiveProps {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
  placeholder?: string
  prefix?: React.ReactNode
  suffix?: React.ReactNode
  isLoading?: boolean
  enableColorPicker?: boolean
}

const ColorField = ({
  label,
  description,
  errorMessage,
  placeholder,
  prefix,
  suffix,
  isLoading,
  enableColorPicker = true,
  className,
  ...props
}: ColorFieldProps) => {
  const value = props.value ?? props.defaultValue
  return (
    <ColorFieldPrimitive
      {...props}
      aria-label={props["aria-label"] ?? "Color field"}
      className={composeTailwindRenderProps(
        className,
        "**:data-[slot=color-swatch]:-ml-0.5 group flex w-full flex-col gap-y-1",
      )}
    >
      {label && <Label>{label}</Label>}
      <FieldGroup data-loading={isLoading ? "true" : undefined}>
        {prefix && typeof prefix === "string" ? (
          <span className="ml-2 text-muted-fg">{prefix}</span>
        ) : (
          prefix
        )}
        <div className={twJoin("flex w-full items-center", prefix && "ml-6")}>
          {value && (
            <span className="ml-1">
              {enableColorPicker ? (
                <ColorPicker
                  className="*:[button]:size-8 *:[button]:rounded-sm *:[button]:ring-0"
                  onChange={props.onChange}
                  defaultValue={value}
                />
              ) : (
                <ColorSwatch className="size-6" color={value.toString("hex")} />
              )}
            </span>
          )}

          <Input placeholder={placeholder} />
        </div>
        {suffix && typeof suffix === "string" ? (
          <span className="mr-2 text-muted-fg">{suffix}</span>
        ) : (
          suffix
        )}
      </FieldGroup>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </ColorFieldPrimitive>
  )
}

export type { ColorFieldProps }
export { ColorField }
