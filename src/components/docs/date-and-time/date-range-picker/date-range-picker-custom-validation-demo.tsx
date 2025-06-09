"use client"

import { Button } from "@/components/ui/button"
import { DateRangePicker } from "@/components/ui/date-range-picker"
import { Form } from "@/components/ui/form"
import { getLocalTimeZone, today } from "@internationalized/date"

export default function DateRangePickerCustomValidationDemo() {
  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <DateRangePicker
        label="Room Booking Dates"
        validate={(range) =>
          range?.end.compare(range.start) > 7 ? "Maximum booking duration is 1 week." : null
        }
        defaultValue={{
          start: today(getLocalTimeZone()),
          end: today(getLocalTimeZone()).add({ weeks: 2 }),
        }}
        className="mb-2"
      />
      <Button type="submit">Book Room</Button>
    </Form>
  )
}
