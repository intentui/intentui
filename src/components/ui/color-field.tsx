"use client"

import type { ColorFieldProps as ColorFieldPrimitiveProps } from "react-aria-components"
import { ColorField as ColorFieldPrimitive } from "react-aria-components"
import { twJoin } from "tailwind-merge"
import { cx } from "@/lib/primitive"
import { ColorPicker } from "./color-picker"
import { ColorSwatch } from "./color-swatch"
import { Description, FieldError, FieldGroup, type FieldProps, Input, Label } from "./field"

interface ColorFieldProps extends ColorFieldPrimitiveProps, FieldProps {
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
      className={cx(
        "**:data-[slot=color-swatch]:-ml-0.5 group flex w-full flex-col gap-y-1 *:data-[slot=label]:font-medium",
        className,
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
