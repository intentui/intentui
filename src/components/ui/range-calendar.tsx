"use client"

import { getLocalTimeZone, today } from "@internationalized/date"
import type { DateValue, RangeCalendarProps } from "react-aria-components"
import {
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  RangeCalendar as RangeCalendarPrimitive,
} from "react-aria-components"
import { twMerge } from "tailwind-merge"
import { CalendarGridHeader, CalendarHeader } from "./calendar"

export function RangeCalendar<T extends DateValue>({
  className,
  visibleDuration = { months: 1 },
  ...props
}: RangeCalendarProps<T>) {
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
                      "shrink-0 [--cell-fg:var(--color-primary-subtle-fg)] [--cell:var(--color-primary-subtle)]",
                      "group/calendar-cell relative size-11 cursor-default outside-month:text-muted-fg leading-[2.286rem] outline-hidden selection-start:rounded-s-lg selection-end:rounded-e-lg sm:size-9 sm:text-sm",
                      "selected:bg-(--cell) selected:text-(--cell-fg)",
                      "selected:after:bg-primary-fg focus-visible:after:bg-primary-fg",
                      "invalid:selected:bg-danger-subtle",
                      "[td:first-child_&]:rounded-s-lg [td:last-child_&]:rounded-e-lg",
                      "forced-colors:selected:bg-[Highlight] forced-colors:selected:text-[HighlightText] forced-colors:invalid:selected:bg-[Mark]",
                      date.compare(now) === 0 &&
                        "after:pointer-events-none after:absolute after:start-1/2 after:bottom-1 after:z-10 after:size-0.75 after:-translate-x-1/2 after:rounded-full after:bg-primary selected:after:bg-primary-fg",
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
                                  // hover
                                  "group-hover/calendar-cell:bg-primary/15",
                                  // pressed
                                  "group-pressed/calendar-cell:bg-(--cell)",
                                  // invalid
                                  "group-invalid/calendar-cell:text-danger-subtle-fg group-invalid/calendar-cell:group-hover/calendar-cell:bg-danger/15 group-invalid/calendar-cell:group-pressed/calendar-cell:bg-danger/30",
                                  // forced-colors
                                  "forced-colors:text-[HighlightText] forced-colors:group-pressed/calendar-cell:bg-[Highlight] forced-colors:group-hover/calendar-cell:bg-[Highlight] forced-colors:group-invalid/calendar-cell:group-pressed/calendar-cell:bg-[Mark] forced-colors:group-invalid:group-hover/calendar-cell:bg-[Mark]",
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
    </RangeCalendarPrimitive>
  )
}
