"use client"

import {
  DateRangePicker as DateRangePickerPrimitive,
  type DateRangePickerProps as DateRangePickerPrimitiveProps,
  type DateValue,
  type ValidationResult,
} from "react-aria-components"

import { DateInput } from "@/components/ui/date-field"
import { DatePickerIcon, DatePickerOverlay } from "@/components/ui/date-picker"
import { Description, FieldError, FieldGroup, Label } from "@/components/ui/field"
import { composeTailwindRenderProps } from "@/lib/primitive"
import type { DateDuration } from "@internationalized/date"
import type { Placement } from "@react-types/overlays"

interface DateRangePickerProps<T extends DateValue> extends DateRangePickerPrimitiveProps<T> {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
  visibleDuration?: DateDuration
  pageBehavior?: "visible" | "single"
  contentPlacement?: Placement
}

const DateRangePicker = <T extends DateValue>({
  label,
  className,
  description,
  errorMessage,
  contentPlacement = "bottom",
  visibleDuration = { months: 1 },
  ...props
}: DateRangePickerProps<T>) => {
  return (
    <DateRangePickerPrimitive
      {...props}
      className={composeTailwindRenderProps(
        className,
        "group/date-range-picker flex flex-col gap-y-1",
      )}
    >
      {label && <Label>{label}</Label>}
      <FieldGroup className="w-auto min-w-40">
        <DateInput slot="start" />
        <span
          aria-hidden="true"
          className="text-fg group-disabled:text-muted-fg forced-colors:text-[ButtonText] forced-colors:group-disabled:text-[GrayText]"
        >
          –
        </span>
        <DateInput className="pr-8" slot="end" />
        <DatePickerIcon />
      </FieldGroup>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
      <DatePickerOverlay placement={contentPlacement} visibleDuration={visibleDuration} range />
    </DateRangePickerPrimitive>
  )
}
export type { DateRangePickerProps }
export { DateRangePicker }
