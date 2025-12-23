"use client"

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"
import { type CalendarDate, getLocalTimeZone, today } from "@internationalized/date"
import { useDateFormatter } from "@react-aria/i18n"
import { use } from "react"
import type {
  CalendarProps as CalendarPrimitiveProps,
  CalendarState,
  DateValue,
} from "react-aria-components"
import {
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader as CalendarGridHeaderPrimitive,
  CalendarHeaderCell,
  Calendar as CalendarPrimitive,
  CalendarStateContext,
  composeRenderProps,
  Heading,
  useLocale,
} from "react-aria-components"
import { twMerge } from "tailwind-merge"
import { Button } from "./button"
import { Select, SelectContent, SelectItem, SelectLabel, SelectTrigger } from "./select"

interface CalendarProps<T extends DateValue>
  extends Omit<CalendarPrimitiveProps<T>, "visibleDuration"> {
  className?: string
}

const Calendar = <T extends DateValue>({ className, ...props }: CalendarProps<T>) => {
  const now = today(getLocalTimeZone())

  return (
    <CalendarPrimitive data-slot="calendar" {...props}>
      <CalendarHeader />
      <CalendarGrid>
        <CalendarGridHeader />
        <CalendarGridBody>
          {(date) => (
            <CalendarCell
              date={date}
              className={composeRenderProps(className, (className, { isSelected, isDisabled }) =>
                twMerge(
                  "relative flex size-11 cursor-default items-center justify-center rounded-lg text-fg tabular-nums outline-hidden hover:bg-secondary-fg/15 sm:size-9 sm:text-sm/6 forced-colors:text-[ButtonText] forced-colors:outline-0",
                  isSelected &&
                    "bg-primary pressed:bg-primary text-primary-fg hover:bg-primary/90 data-invalid:bg-danger data-invalid:text-danger-fg forced-colors:bg-[Highlight] forced-colors:text-[Highlight] forced-colors:data-invalid:bg-[Mark]",
                  isDisabled && "text-muted-fg forced-colors:text-[GrayText]",
                  date.compare(now) === 0 &&
                    "after:pointer-events-none after:absolute after:start-1/2 after:bottom-1 after:z-10 after:size-0.75 after:-translate-x-1/2 after:rounded-full after:bg-primary selected:after:bg-primary-fg focus-visible:after:bg-primary-fg",
                  className,
                ),
              )}
            />
          )}
        </CalendarGridBody>
      </CalendarGrid>
    </CalendarPrimitive>
  )
}

const CalendarHeader = ({
  isRange,
  className,
  ...props
}: React.ComponentProps<"header"> & { isRange?: boolean }) => {
  const { direction } = useLocale()
  const state = use(CalendarStateContext)!

  return (
    <header
      data-slot="calendar-header"
      className={twMerge(
        "flex w-full justify-between gap-1.5 pt-1 pr-1 pb-5 pl-1.5 sm:pb-4",
        className,
      )}
      {...props}
    >
      {!isRange && (
        <div className="flex items-center gap-1.5">
          <SelectMonth state={state} />
          <SelectYear state={state} />
        </div>
      )}
      <Heading
        className={twMerge(
          "mr-2 flex-1 text-left font-medium text-muted-fg sm:text-sm",
          !isRange && "sr-only",
          className,
        )}
      />
      <div className="flex items-center gap-1">
        <Button
          size="sq-sm"
          className="size-8 **:data-[slot=icon]:text-fg sm:size-7"
          isCircle
          intent="plain"
          slot="previous"
        >
          {direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </Button>
        <Button
          size="sq-sm"
          className="size-8 **:data-[slot=icon]:text-fg sm:size-7"
          isCircle
          intent="plain"
          slot="next"
        >
          {direction === "rtl" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </Button>
      </div>
    </header>
  )
}

const SelectMonth = ({ state }: { state: CalendarState }) => {
  const months = []

  const formatter = useDateFormatter({
    month: "long",
    timeZone: state.timeZone,
  })

  const numMonths = state.focusedDate.calendar.getMonthsInYear(state.focusedDate)
  for (let i = 1; i <= numMonths; i++) {
    const date = state.focusedDate.set({ month: i })
    months.push(formatter.format(date.toDate(state.timeZone)))
  }
  return (
    <Select
      className="[popover-width:8rem]"
      aria-label="Select month"
      value={state.focusedDate.month.toString() ?? (new Date().getMonth() + 1).toString()}
      onChange={(value) => {
        state.setFocusedDate(state.focusedDate.set({ month: Number(value) }))
      }}
    >
      <SelectTrigger className="w-22 text-sm/5 **:data-[slot=select-value]:inline-block **:data-[slot=select-value]:truncate sm:px-2.5 sm:py-1.5 sm:*:text-sm/5" />
      <SelectContent className="min-w-0">
        {months.map((month, index) => (
          <SelectItem key={index} id={(index + 1).toString()} textValue={month}>
            <SelectLabel>{month}</SelectLabel>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

const SelectYear = ({ state }: { state: CalendarState }) => {
  const years: { value: CalendarDate; formatted: string }[] = []
  const formatter = useDateFormatter({
    year: "numeric",
    timeZone: state.timeZone,
  })

  for (let i = -20; i <= 20; i++) {
    const date = state.focusedDate.add({ years: i })
    years.push({
      value: date,
      formatted: formatter.format(date.toDate(state.timeZone)),
    })
  }
  return (
    <Select
      aria-label="Select year"
      value={20}
      onChange={(value) => {
        state.setFocusedDate(years[Number(value)]?.value as CalendarDate)
      }}
    >
      <SelectTrigger className="text-sm/5 sm:px-2.5 sm:py-1.5 sm:*:text-sm/5" />
      <SelectContent>
        {years.map((year, i) => (
          <SelectItem key={i} id={i} textValue={year.formatted}>
            <SelectLabel>{year.formatted}</SelectLabel>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

const CalendarGridHeader = () => {
  return (
    <CalendarGridHeaderPrimitive>
      {(day) => (
        <CalendarHeaderCell className="pb-2 text-center font-semibold text-muted-fg text-sm/6 sm:px-0 sm:py-0.5 lg:text-xs">
          {day}
        </CalendarHeaderCell>
      )}
    </CalendarGridHeaderPrimitive>
  )
}

export type { CalendarProps }
export { Calendar, SelectMonth, SelectYear, CalendarHeader, CalendarGridHeader }
