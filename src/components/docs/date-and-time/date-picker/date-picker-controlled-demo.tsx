"use client"

import { getLocalTimeZone, parseDate, today } from "@internationalized/date"
import { useDateFormatter } from "@react-aria/i18n"
import { useState } from "react"

import { DatePicker, DatePickerTrigger } from "@/components/ui/date-picker"
import { Label } from "@/components/ui/field"

export default function DatePickerControlledDemo() {
  const now = today(getLocalTimeZone())

  const [value, setValue] = useState(parseDate(now.toString()))

  const formatter = useDateFormatter({ dateStyle: "full" })

  return (
    <div className="space-y-3">
      <div className="divide-y [&_p]:py-2">
        <p>{value ? formatter.format(value.toDate(getLocalTimeZone())) : "--"}</p>
        <p>{value ? value.toString() : "--"}</p>
      </div>
      <DatePicker value={value} onChange={(newValue) => setValue(newValue!)}>
        <Label>Event date</Label>
        <DatePickerTrigger />
      </DatePicker>
    </div>
  )
}
