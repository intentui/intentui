"use client"

import { getLocalTimeZone, parseDate, startOfYear, today } from "@internationalized/date"
import { useState } from "react"
import { Form } from "react-aria-components"
import { Button } from "@/components/ui/button"
import { DatePicker, DatePickerTrigger } from "@/components/ui/date-picker"
import { FieldError, Label } from "@/components/ui/field"

export default function DatePickerInvalidDemo() {
  const ly = startOfYear(today(getLocalTimeZone()))
  const now = today(getLocalTimeZone())
  const [value, setValue] = useState(parseDate(ly.toString()))
  return (
    <Form onSubmit={(e) => e.preventDefault()} className="space-y-2">
      <DatePicker
        validate={(date) => (date < now ? "Select a future date, please." : null)}
        value={value}
        onChange={(newValue) => setValue(newValue!)}
      >
        <Label>Delivery date</Label>
        <DatePickerTrigger />
        <FieldError />
      </DatePicker>

      <Button type="submit">Submit</Button>
    </Form>
  )
}
