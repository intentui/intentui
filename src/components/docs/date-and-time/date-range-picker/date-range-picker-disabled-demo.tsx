"use client"

import { DateRangePicker, DateRangePickerTrigger } from "@/components/ui/date-range-picker"
import { Description, Label } from "@/components/ui/field"

export default function DateRangePickerDisabledDemo() {
  return (
    <DateRangePicker isDisabled>
      <Label>Event date</Label>
      <DateRangePickerTrigger />
      <Description>Please select the start and end date for your event.</Description>
    </DateRangePicker>
  )
}
