"use client"

import { DateField, DateInput } from "@/components/ui/date-field"
import { Label } from "@/components/ui/field"

export default function DateFieldDisabledDemo() {
  return (
    <DateField isDisabled>
      <Label>Event date</Label>
      <DateInput />
    </DateField>
  )
}
