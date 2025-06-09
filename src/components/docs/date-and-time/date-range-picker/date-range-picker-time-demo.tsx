"use client"

import { useState } from "react"

import { getLocalTimeZone, now, parseZonedDateTime } from "@internationalized/date"

import { DateRangePicker } from "@/components/ui/date-range-picker"

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
      label="Date time range"
      value={value}
      onChange={(newValue) => setValue(newValue!)}
      hourCycle={24}
    />
  )
}
