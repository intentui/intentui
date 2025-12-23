"use client"

import { CalendarDaysIcon } from "@heroicons/react/24/outline"
import type { DateDuration } from "@internationalized/date"
import type {
  DatePickerProps as DatePickerPrimitiveProps,
  DateValue,
  GroupProps,
  PopoverProps,
} from "react-aria-components"
import { Button, DatePicker as DatePickerPrimitive } from "react-aria-components"
import { twJoin } from "tailwind-merge"
import { DateInput } from "@/components/ui/date-field"
import { fieldStyles } from "@/components/ui/field"
import { InputGroup } from "@/components/ui/input"
import { useIsMobile } from "@/hooks/use-mobile"
import { cx } from "@/lib/primitive"
import { Calendar } from "./calendar"
import { ModalContent } from "./modal"
import { PopoverContent } from "./popover"
import { RangeCalendar } from "./range-calendar"

export interface DatePickerProps<T extends DateValue> extends DatePickerPrimitiveProps<T> {
  popover?: Omit<PopoverProps, "children">
}

export function DatePicker<T extends DateValue>({
  className,
  children,
  popover,
  ...props
}: DatePickerProps<T>) {
  return (
    <DatePickerPrimitive data-slot="control" className={cx(fieldStyles(), className)} {...props}>
      {(values) => (
        <>
          {typeof children === "function" ? children(values) : children}
          <DatePickerOverlay {...popover} />
        </>
      )}
    </DatePickerPrimitive>
  )
}

export interface DatePickerOverlayProps extends Omit<PopoverProps, "children"> {
  range?: boolean
  visibleDuration?: DateDuration
  pageBehavior?: "visible" | "single"
}

export function DatePickerOverlay({
  visibleDuration = { months: 1 },
  pageBehavior = "visible",
  placement = "bottom",
  range,
  ...props
}: DatePickerOverlayProps) {
  const isMobile = useIsMobile()

  return isMobile ? (
    <ModalContent aria-label="Date picker" closeButton={false}>
      <div className="flex justify-center p-6">
        {range ? (
          <RangeCalendar pageBehavior={pageBehavior} visibleDuration={visibleDuration} />
        ) : (
          <Calendar />
        )}
      </div>
    </ModalContent>
  ) : (
    <PopoverContent
      placement={placement}
      arrow={false}
      className={twJoin(
        "flex min-w-auto max-w-none snap-x justify-center p-4 sm:min-w-66 sm:p-2 sm:pt-3",
        visibleDuration?.months === 1 ? "sm:max-w-2xs" : "sm:max-w-none",
      )}
      {...props}
    >
      {range ? (
        <RangeCalendar pageBehavior={pageBehavior} visibleDuration={visibleDuration} />
      ) : (
        <Calendar />
      )}
    </PopoverContent>
  )
}

export function DatePickerTrigger({ className, ...props }: GroupProps) {
  return (
    <InputGroup className={cx("*:data-[slot=control]:w-full", className)} {...props}>
      <DateInput />
      <Button
        data-slot="date-picker-trigger"
        className={twJoin(
          "touch-target grid place-content-center outline-hidden",
          "pressed:text-fg text-muted-fg hover:text-fg focus-visible:text-fg",
          "px-[calc(--spacing(3.5)-1px)] py-[calc(--spacing(2.5)-1px)] sm:px-[calc(--spacing(3)-1px)] sm:py-[calc(--spacing(1.5)-1px)] sm:text-sm/6",
          "*:data-[slot=icon]:size-4.5 sm:*:data-[slot=icon]:size-4",
        )}
      >
        <CalendarDaysIcon />
      </Button>
    </InputGroup>
  )
}
