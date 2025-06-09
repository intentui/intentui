"use client"

import { useState } from "react"

import { getLocalTimeZone, today } from "@internationalized/date"
import { useDateFormatter } from "@react-aria/i18n"

import { DateRangePicker } from "@/components/ui/date-range-picker"

export default function DateRangePickerControlledDemo() {
  const now = today(getLocalTimeZone())
  const tomorrowWeek = today(getLocalTimeZone()).add({ days: 12 })
  const formatter = useDateFormatter({ dateStyle: "full" })

  const [value, setValue] = useState({
    start: now,
    end: tomorrowWeek,
  })

  return (
    <div className="space-y-3">
      <div className="divide-y [&_p]:py-2">
        <p>
          {value
            ? `${formatter.format(value.start.toDate(getLocalTimeZone()))} to ${formatter.format(value.end.toDate(getLocalTimeZone()))}`
            : "-- to --"}
        </p>
        <p>{value ? `${value.start.toString()} to ${value.end.toString()}` : "-- to --"}</p>
      </div>
      <DateRangePicker
        value={value}
        onChange={(newValue) => setValue(newValue!)}
        label="Event date"
      />
    </div>
  )
}
