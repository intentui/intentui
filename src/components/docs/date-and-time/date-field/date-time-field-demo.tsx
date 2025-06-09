"use client"

import { useState } from "react"

import { getLocalTimeZone, now, parseZonedDateTime } from "@internationalized/date"

import { DateField } from "@/components/ui/date-field"

export default function DateTimeFieldDemo() {
  const today = parseZonedDateTime(now(getLocalTimeZone()).toString())
  const [value, setValue] = useState(today)
  return (
    <DateField
      hideTimeZone
      hourCycle={24}
      value={value}
      onChange={(newValue) => setValue(newValue!)}
      label="Event date"
    />
  )
}
