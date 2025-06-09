"use client"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { DateInput } from "@/components/ui/date-field"
import { Description, FieldError, FieldGroup, Label } from "@/components/ui/field"
import { Popover } from "@/components/ui/popover"
import { RangeCalendar } from "@/components/ui/range-calendar"
import { composeTailwindRenderProps } from "@/lib/primitive"
import { IconCalendarDays } from "@intentui/icons"
import type { DateDuration } from "@internationalized/date"
import {
  DatePicker as DatePickerPrimitive,
  type DatePickerProps as DatePickerPrimitiveProps,
  type DateValue,
  type DialogProps,
  type PopoverProps,
  type ValidationResult,
} from "react-aria-components"
import { twJoin } from "tailwind-merge"

interface DatePickerOverlayProps
  extends Omit<DialogProps, "children" | "className" | "style">,
    Omit<PopoverProps, "children" | "className" | "style"> {
  className?: string | ((values: { defaultClassName?: string }) => string)
  children?: React.ReactNode
  closeButton?: boolean
  range?: boolean
  visibleDuration?: DateDuration
  pageBehavior?: "visible" | "single"
}

const DatePickerOverlay = ({
  visibleDuration = { months: 1 },
  closeButton = true,
  pageBehavior = "visible",
  placement = "bottom",
  range,
  ...props
}: DatePickerOverlayProps) => {
  return (
    <Popover.Content
      placement={placement}
      isDismissable={false}
      showArrow={false}
      className={twJoin(
        "flex min-w-auto max-w-none snap-x justify-center p-4 sm:min-w-[16.5rem] sm:p-2 sm:pt-3",
        visibleDuration?.months === 1 ? "sm:max-w-2xs" : "sm:max-w-none",
      )}
      {...props}
    >
      {range ? (
        <RangeCalendar pageBehavior={pageBehavior} visibleDuration={visibleDuration} />
      ) : (
        <Calendar />
      )}
      {closeButton && (
        <div className="mx-auto flex w-full max-w-[inherit] justify-center py-2.5 sm:hidden">
          <Popover.Close shape="circle" className="w-full">
            Close
          </Popover.Close>
        </div>
      )}
    </Popover.Content>
  )
}

const DatePickerIcon = () => (
  <Button
    size="square-petite"
    intent="plain"
    className="mr-1 h-7 w-8 rounded outline-offset-0hover:bg-transparent pressed:bg-transparent **:data-[slot=icon]:text-muted-fg"
  >
    <IconCalendarDays aria-hidden className="ml-2 group-open:text-fg" />
  </Button>
)

interface DatePickerProps<T extends DateValue>
  extends DatePickerPrimitiveProps<T>,
    Pick<DatePickerOverlayProps, "placement"> {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
}

const DatePicker = <T extends DateValue>({
  label,
  className,
  description,
  errorMessage,
  placement,
  ...props
}: DatePickerProps<T>) => {
  return (
    <DatePickerPrimitive
      {...props}
      className={composeTailwindRenderProps(className, "group/date-picker flex flex-col gap-y-1")}
    >
      {label && <Label>{label}</Label>}
      <FieldGroup className="min-w-40">
        <DateInput className="w-full px-2 text-base sm:text-sm" />
        <DatePickerIcon />
      </FieldGroup>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
      <DatePickerOverlay placement={placement} />
    </DatePickerPrimitive>
  )
}
export type { DatePickerProps, DateValue, ValidationResult }
export { DatePicker, DatePickerIcon, DatePickerOverlay }
