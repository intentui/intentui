'use client'

import { CalendarDaysIcon } from '@heroicons/react/24/outline'
import type { DateDuration } from '@internationalized/date'
import { Button } from 'react-aria-components/Button'
import type { DateValue } from 'react-aria-components/DateField'
import {
  DatePicker as DatePickerPrimitive,
  type DatePickerProps as DatePickerPrimitiveProps,
} from 'react-aria-components/DatePicker'
import type { GroupProps } from 'react-aria-components/Group'
import type { PopoverProps } from 'react-aria-components/Popover'
import { twJoin } from 'tailwind-merge'
import { useIsMobile } from '@/hooks/use-mobile'
import { cx } from '@/lib/primitive'
import { Calendar } from './calendar'
import { DateInput } from './date-field'
import { fieldStyles } from './field'
import { InputGroup } from './input'
import { ModalContent } from './modal'
import { PopoverContent } from './popover'
import { RangeCalendar } from './range-calendar'

export interface DatePickerProps<T extends DateValue> extends DatePickerPrimitiveProps<T> {
  popover?: Omit<PopoverProps, 'children'>
}

export function DatePicker<T extends DateValue>({
  className,
  children,
  popover,
  ...props
}: DatePickerProps<T>) {
  return (
    <DatePickerPrimitive
      data-slot="control"
      className={cx(fieldStyles({ className: 'group' }), className)}
      {...props}
    >
      {(values) => (
        <>
          {typeof children === 'function' ? children(values) : children}
          <DatePickerOverlay {...popover} />
        </>
      )}
    </DatePickerPrimitive>
  )
}

export interface DatePickerOverlayProps extends Omit<PopoverProps, 'children'> {
  range?: boolean
  visibleDuration?: DateDuration
  pageBehavior?: 'visible' | 'single'
}

export function DatePickerOverlay({
  visibleDuration = { months: 1 },
  pageBehavior = 'visible',
  placement = 'bottom',
  range,
  ...props
}: DatePickerOverlayProps) {
  const isMobile = useIsMobile()

  return isMobile ? (
    <ModalContent closeButton={false}>
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
        'flex min-w-auto max-w-none snap-x justify-center p-4 sm:min-w-[16.5rem] sm:p-2 sm:pt-3',
        visibleDuration?.months === 1 ? 'sm:max-w-2xs' : 'sm:max-w-none'
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
    <InputGroup className={cx('*:data-[slot=control]:w-full', className)} {...props}>
      <DateInput />
      <Button
        data-slot="date-picker-trigger"
        className={twJoin(
          'touch-target grid place-content-center outline-hidden',
          'pressed:text-fg text-muted-fg hover:text-fg focus-visible:text-fg',
          'px-[calc(--spacing(3.5)-1px)] py-[calc(--spacing(2.5)-1px)] sm:px-[calc(--spacing(3)-1px)] sm:py-[calc(--spacing(1.5)-1px)]',
          '*:size-5 sm:*:size-4'
        )}
      >
        <CalendarDaysIcon />
      </Button>
    </InputGroup>
  )
}
