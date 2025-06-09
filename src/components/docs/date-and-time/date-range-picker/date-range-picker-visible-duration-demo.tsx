"use client"

import { DateRangePicker } from "@/components/ui/date-range-picker"

export default function DateRangePickerVisibleDurationDemo() {
  return <DateRangePicker visibleDuration={{ months: 3 }} label="Event date" />
}
