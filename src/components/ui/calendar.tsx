'use client'

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import {
  Calendar as CalendarPrimitive,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader as CalendarGridHeaderPrimitive,
  CalendarHeaderCell,
  CalendarMonthPicker,
  type CalendarProps as CalendarPrimitiveProps,
  CalendarYearPicker,
  type DateValue,
} from 'react-aria-components/Calendar'
import { composeRenderProps } from 'react-aria-components/composeRenderProps'
import { Heading } from 'react-aria-components/Heading'
import { useLocale } from 'react-aria-components/I18nProvider'
import { twMerge } from 'tailwind-merge'
import { Button } from './button'
import { Select, SelectContent, SelectItem, SelectLabel, SelectTrigger } from './select'

interface CalendarProps<T extends DateValue> extends CalendarPrimitiveProps<T> {
  className?: string
}

const Calendar = <T extends DateValue>({ className, ...props }: CalendarProps<T>) => {
  return (
    <CalendarPrimitive data-slot="calendar" {...props}>
      <CalendarHeader />
      <CalendarGrid>
        <CalendarGridHeader />
        <CalendarGridBody>
          {(date) => (
            <CalendarCell
              date={date}
              className={composeRenderProps(
                className,
                (className, { isSelected, isToday, isDisabled }) =>
                  twMerge(
                    'relative flex size-11 cursor-default items-center justify-center rounded-lg text-fg tabular-nums outline-hidden hover:bg-secondary-fg/15 sm:size-9 sm:text-sm/6 forced-colors:text-[ButtonText] forced-colors:outline-0',
                    isSelected &&
                      'bg-primary pressed:bg-primary text-primary-fg hover:bg-primary/90 data-invalid:bg-danger data-invalid:text-danger-fg forced-colors:bg-[Highlight] forced-colors:text-[Highlight] forced-colors:data-invalid:bg-[Mark]',
                    isDisabled && 'text-muted-fg forced-colors:text-[GrayText]',
                    isToday &&
                      'after:pointer-events-none after:absolute after:bottom-1 after:left-1/2 after:z-10 after:size-0.75 after:-translate-x-1/2 after:rounded-full after:bg-primary selected:after:bg-primary-fg focus-visible:after:bg-primary-fg',
                    className
                  )
              )}
            />
          )}
        </CalendarGridBody>
      </CalendarGrid>
    </CalendarPrimitive>
  )
}

const CalendarHeader = ({ className, ...props }: React.ComponentProps<'header'>) => {
  const { direction } = useLocale()
  return (
    <header
      data-slot="calendar-header"
      className={twMerge(
        'flex w-full justify-between gap-1.5 ps-1.5 pe-1 pt-1 pb-5 sm:pb-4',
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-1.5">
        <CalendarMonthPicker>
          {({ items, ...props }) => (
            <Select {...props}>
              <SelectTrigger />
              <SelectContent items={items}>
                {(item) => (
                  <SelectItem textValue={item.formatted}>
                    <SelectLabel>{item.formatted}</SelectLabel>
                  </SelectItem>
                )}
              </SelectContent>
            </Select>
          )}
        </CalendarMonthPicker>
        <CalendarYearPicker>
          {({ items, ...props }) => (
            <Select {...props}>
              <SelectTrigger />
              <SelectContent items={items}>
                {(item) => (
                  <SelectItem textValue={item.formatted}>
                    <SelectLabel>{item.formatted}</SelectLabel>
                  </SelectItem>
                )}
              </SelectContent>
            </Select>
          )}
        </CalendarYearPicker>
      </div>
      <Heading className="sr-only" />
      <div className="flex items-center gap-1">
        <Button
          size="sq-sm"
          className="size-8 sm:size-7 **:[svg]:text-fg"
          isCircle
          intent="plain"
          slot="previous"
        >
          {direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </Button>
        <Button
          size="sq-sm"
          className="size-8 sm:size-7 **:[svg]:text-fg"
          isCircle
          intent="plain"
          slot="next"
        >
          {direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </Button>
      </div>
    </header>
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
export { Calendar, CalendarGridHeader, CalendarHeader }
