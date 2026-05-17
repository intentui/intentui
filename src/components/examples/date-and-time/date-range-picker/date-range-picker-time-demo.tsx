"use client"

import { getLocalTimeZone, now, parseZonedDateTime } from "@internationalized/date"
import { useState } from "react"

import { DateRangePicker, DateRangePickerTrigger } from "@/components/ui/date-range-picker"
import { Label } from "@/components/ui/field"

export default function DateRangePickerTimeDemo() {
  const today = parseZonedDateTime(now(getLocalTimeZone()).toString())
  const tomorrowWeek = today.add({ days: 12 })

  const [value, setValue] = useState({
    start: today,
    end: tomorrowWeek,
  })
  return (
    <DateRangePicker
      hideTimeZone
      value={value}
      onChange={(newValue) => setValue(newValue!)}
      hourCycle={24}
    >
      <Label>Date time range</Label>
      <DateRangePickerTrigger />
    </DateRangePicker>
  )
}
