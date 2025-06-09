"use client"

import { getLocalTimeZone, today } from "@internationalized/date"

import { RangeCalendar } from "@/components/ui/range-calendar"

export default function RangeCalendarUncontrolledDemo() {
  return (
    <RangeCalendar
      className="**:data-[slot=calendar-header]:items-center"
      aria-label="Date range (uncontrolled)"
      defaultValue={{
        start: today(getLocalTimeZone()),
        end: today(getLocalTimeZone()).add({ days: 12 }),
      }}
    />
  )
}
