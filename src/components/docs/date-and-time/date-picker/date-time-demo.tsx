"use client"

import { useState } from "react"

import { getLocalTimeZone, now, parseZonedDateTime } from "@internationalized/date"

import { DatePicker } from "@/components/ui/date-picker"

export default function DateTimeDemo() {
  const today = parseZonedDateTime(now(getLocalTimeZone()).toString())
  const [value, setValue] = useState(today)

  return (
    <DatePicker
      hideTimeZone
      hourCycle={24}
      className="max-w-xs"
      value={value}
      onChange={(newValue) => setValue(newValue!)}
      label="Event date"
    />
  )
}
