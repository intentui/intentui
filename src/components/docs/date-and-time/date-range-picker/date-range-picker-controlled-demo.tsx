"use client"

import { getLocalTimeZone, today } from "@internationalized/date"
import { useDateFormatter } from "@react-aria/i18n"
import { useState } from "react"

import { DateRangePicker, DateRangePickerTrigger } from "@/components/ui/date-range-picker"
import { Label } from "@/components/ui/field"
import { Text } from "@/components/ui/text"

export default function DateRangePickerControlledDemo() {
  const now = today(getLocalTimeZone())
  const tomorrowWeek = today(getLocalTimeZone()).add({ days: 12 })
  const formatter = useDateFormatter({ dateStyle: "full" })

  const [value, setValue] = useState({
    start: now,
    end: tomorrowWeek,
  })

  return (
    <span data-slot="layout">
      <Text>
        {value
          ? `${formatter.format(value.start.toDate(getLocalTimeZone()))} to ${formatter.format(value.end.toDate(getLocalTimeZone()))}`
          : "-- to --"}
      </Text>
      <Text>{value ? `${value.start.toString()} to ${value.end.toString()}` : "-- to --"}</Text>
      <DateRangePicker value={value} onChange={(newValue) => setValue(newValue!)}>
        <Label>Event date</Label>
        <DateRangePickerTrigger />
      </DateRangePicker>
    </span>
  )
}
