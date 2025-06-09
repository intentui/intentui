"use client"

import { getLocalTimeZone, parseDate, today } from "@internationalized/date"

import { DateField } from "@/components/ui/date-field"

export default function DateFieldReadonlyDemo() {
  const now = today(getLocalTimeZone())
  return <DateField isReadOnly defaultValue={parseDate(now.toString())} label="Event date" />
}
