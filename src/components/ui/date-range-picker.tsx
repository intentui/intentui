"use client"

import type { DateDuration } from "@internationalized/date"
import type { Placement } from "@react-types/overlays"
import {
  DateRangePicker as DateRangePickerPrimitive,
  type DateRangePickerProps as DateRangePickerPrimitiveProps,
  type DateValue,
  type ValidationResult,
} from "react-aria-components"
import { composeTailwindRenderProps } from "@/lib/primitive"
import { DateInput } from "./date-field"
import { DatePickerIcon, DatePickerOverlay } from "./date-picker"
import { Description, FieldError, FieldGroup, Label } from "./field"

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
        "group flex flex-col gap-y-1 *:data-[slot=label]:font-medium",
      )}
    >
      {label && <Label>{label}</Label>}
      <FieldGroup className="min-w-40 *:[button]:last:mr-1.5 sm:*:[button]:last:mr-0.5">
        <DateInput slot="start" className="pl-2" />
        <span
          aria-hidden="true"
          className="-mx-2 text-fg group-disabled:text-muted-fg forced-colors:text-[ButtonText] forced-colors:group-disabled:text-[GrayText]"
        >
          –
        </span>
        <DateInput className="pr-10 sm:pr-8" slot="end" />
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
