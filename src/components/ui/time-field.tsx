'use client'

import {
  TimeField as TimeFieldPrimitive,
  type TimeFieldProps,
  type TimeValue,
} from 'react-aria-components/TimeField'
import { DateInput } from '@/components/ui/date-field'
import { cx } from '@/lib/primitive'
import { fieldStyles } from './field'

export function TimeField<T extends TimeValue>({ className, ...props }: TimeFieldProps<T>) {
  return (
    <TimeFieldPrimitive
      {...props}
      data-slot="control"
      className={cx(fieldStyles({ className: 'w-fit' }), className)}
    />
  )
}

export const TimeInput = DateInput
