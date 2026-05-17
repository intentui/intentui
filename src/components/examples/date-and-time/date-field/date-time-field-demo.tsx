"use client"

import { getLocalTimeZone, now, parseZonedDateTime } from "@internationalized/date"
import { useState } from "react"

import { DateField, DateInput } from "@/components/ui/date-field"
import { Label } from "@/components/ui/field"

export default function DateTimeFieldDemo() {
  const today = parseZonedDateTime(now(getLocalTimeZone()).toString())
  const [value, setValue] = useState(today)
  return (
    <DateField
      hideTimeZone
      hourCycle={24}
      value={value}
      onChange={(newValue) => setValue(newValue!)}
    >
      <Label>Event date</Label>
      <DateInput />
    </DateField>
  )
}
