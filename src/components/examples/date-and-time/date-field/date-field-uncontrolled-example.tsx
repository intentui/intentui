"use client"

import { getLocalTimeZone, parseDate, today } from "@internationalized/date"

import { DateField, DateInput } from "@/components/ui/date-field"
import { Label } from "@/components/ui/field"

export default function DateFieldUncontrolledDemo() {
  const now = today(getLocalTimeZone())
  return (
    <DateField defaultValue={parseDate(now.toString())}>
      <Label>Event date</Label>
      <DateInput />
    </DateField>
  )
}
