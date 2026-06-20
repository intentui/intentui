'use client'

import { DateRangePicker, DateRangePickerTrigger } from '@/components/ui/date-range-picker'
import { Label } from '@/components/ui/field'

export default function DateRangePickerDemo() {
  return (
    <DateRangePicker>
      <Label>Event date</Label>
      <DateRangePickerTrigger />
    </DateRangePicker>
  )
}
