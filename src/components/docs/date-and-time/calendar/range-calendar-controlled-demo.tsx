"use client"

import { useState } from "react"

import { getLocalTimeZone, today } from "@internationalized/date"

import { RangeCalendar } from "@/components/ui/range-calendar"

export default function RangeCalendarControlledDemo() {
  const now = today(getLocalTimeZone())
  const tomorrowWeek = today(getLocalTimeZone()).add({ days: 20 })
  const [value, setValue] = useState({
    start: now,
    end: tomorrowWeek,
  })
  return (
    <RangeCalendar
      className="**:data-[slot=calendar-header]:items-center"
      aria-label="Date range (controlled)"
      value={value}
      onChange={setValue}
    />
  )
}
