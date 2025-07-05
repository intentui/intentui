"use client"

import { getLocalTimeZone, today } from "@internationalized/date"
import type {
  DateValue,
  RangeCalendarProps as RangeCalendarPrimitiveProps,
} from "react-aria-components"
import {
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  RangeCalendar as RangeCalendarPrimitive,
  Text,
} from "react-aria-components"
import { twMerge } from "tailwind-merge"
import { CalendarGridHeader, CalendarHeader } from "./calendar"

interface RangeCalendarProps<T extends DateValue> extends RangeCalendarPrimitiveProps<T> {
  errorMessage?: string
}

const RangeCalendar = <T extends DateValue>({
  errorMessage,
  className,
  visibleDuration = { months: 1 },
  ...props
}: RangeCalendarProps<T>) => {
  const now = today(getLocalTimeZone())
  return (
    <RangeCalendarPrimitive data-slot="calendar" visibleDuration={visibleDuration} {...props}>
      <CalendarHeader isRange />
      <div className="flex snap-x items-start justify-stretch gap-6 overflow-auto sm:gap-10">
        {Array.from({ length: visibleDuration?.months ?? 1 }).map((_, index) => {
          const id = index + 1
          return (
            <CalendarGrid
              key={index}
              offset={id >= 2 ? { months: id - 1 } : undefined}
              className="[&_td]:border-collapse [&_td]:px-0 [&_td]:py-0.5"
            >
              <CalendarGridHeader />
              <CalendarGridBody className="snap-start">
                {(date) => (
                  <CalendarCell
                    date={date}
                    className={twMerge([
                      "shrink-0 [--cell-fg:var(--color-primary)] [--cell:color-mix(in_oklab,var(--color-primary)_15%,white_85%)]",
                      "dark:[--cell-fg:color-mix(in_oklab,var(--color-primary)_80%,white_20%)] dark:[--cell:color-mix(in_oklab,var(--color-primary)_30%,black_45%)]",
                      "group/calendar-cell relative size-12 cursor-default outline-hidden [line-height:2.286rem] selection-start:rounded-s-lg data-selection-end:rounded-e-lg data-outside-month:text-muted-fg sm:size-9 sm:text-sm",
                      "selected:bg-(--cell)/70 selected:text-(--cell-fg) dark:selected:bg-(--cell)",
                      "selected:after:bg-primary-fg invalid:selected:bg-danger/10 focus-visible:after:bg-primary-fg dark:invalid:selected:bg-danger/13",
                      "[td:first-child_&]:rounded-s-lg [td:last-child_&]:rounded-e-lg",
                      "forced-colors:selected:bg-[Highlight] forced-colors:selected:text-[HighlightText] forced-colors:invalid:selected:bg-[Mark]",
                      date.compare(now) === 0 &&
                        "after:-translate-x-1/2 after:pointer-events-none after:absolute after:start-1/2 after:bottom-1 after:z-10 after:size-[3px] after:rounded-full after:bg-primary selected:after:bg-primary-fg",
                    ])}
                  >
                    {({
                      formattedDate,
                      isSelected,
                      isSelectionStart,
                      isSelectionEnd,
                      isDisabled,
                    }) => (
                      <span
                        className={twMerge(
                          "flex size-full items-center justify-center rounded-lg tabular-nums forced-color-adjust-none",
                          isSelected && (isSelectionStart || isSelectionEnd)
                            ? "bg-primary text-primary-fg group-invalid/calendar-cell:bg-danger group-invalid/calendar-cell:text-danger-fg forced-colors:bg-[Highlight] forced-colors:text-[HighlightText] forced-colors:group-invalid/calendar-cell:bg-[Mark]"
                            : isSelected
                              ? [
                                  "group-hover/calendar-cell:bg-primary/15 dark:group-hover/calendar-cell:bg-primary/20 forced-colors:group-hover/calendar-cell:bg-[Highlight]",
                                  "group-pressed/calendar-cell:bg-(--cell) forced-colors:text-[HighlightText] forced-colors:group-pressed/calendar-cell:bg-[Highlight]",
                                  "group-invalid/calendar-cell:group-hover/calendar-cell:bg-danger/20 group-invalid/calendar-cell:group-pressed/calendar-cell:bg-danger/30 forced-colors:group-invalid/calendar-cell:group-pressed/calendar-cell:bg-[Mark]",
                                  "group-invalid/calendar-cell:text-danger forced-colors:group-invalid:group-hover/calendar-cell:bg-[Mark]",
                                ]
                              : "group-hover/calendar-cell:bg-secondary-fg/15 group-pressed/calendar-cell:bg-secondary-fg/20 forced-colors:group-pressed/calendar-cell:bg-[Highlight]",
                          isDisabled && "opacity-50 forced-colors:text-[GrayText]",
                        )}
                      >
                        {formattedDate}
                      </span>
                    )}
                  </CalendarCell>
                )}
              </CalendarGridBody>
            </CalendarGrid>
          )
        })}
      </div>

      {errorMessage && (
        <Text slot="errorMessage" className="text-danger text-sm">
          {errorMessage}
        </Text>
      )}
    </RangeCalendarPrimitive>
  )
}

export type { RangeCalendarProps }
export { RangeCalendar }
