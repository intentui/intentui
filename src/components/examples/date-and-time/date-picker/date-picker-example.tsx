"use client"

import { DatePicker, DatePickerTrigger } from "@/components/ui/date-picker"
import { Label } from "@/components/ui/field"

export default function DatePickerDemo() {
  return (
    <DatePicker>
      <Label>Event date</Label>
      <DatePickerTrigger />
    </DatePicker>
  )
}
