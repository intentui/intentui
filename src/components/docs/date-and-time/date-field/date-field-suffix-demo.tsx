"use client"
import { DateField } from "@/components/ui/date-field"
import { IconCalendar2 } from "@intentui/icons"

export default function DateFieldSuffixDemo() {
  return (
    <>
      <DateField prefix={<IconCalendar2 />} isRequired label="Event date" />
      <DateField suffix={<IconCalendar2 />} isRequired label="Event date" className="mt-4" />
    </>
  )
}
