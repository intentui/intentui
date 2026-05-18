"use client"

import { DateRangePicker, DateRangePickerTrigger } from "@/components/ui/date-range-picker"
import { Label } from "@/components/ui/field"

export default function DateRangePickerVisibleDurationDemo() {
  return (
    <DateRangePicker visibleDuration={{ months: 3 }}>
      <Label>Event date</Label>
      <DateRangePickerTrigger />
    </DateRangePicker>
  )
}
