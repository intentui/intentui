"use client"

import { Button } from "@/components/ui/button"
import { DateRangePicker } from "@/components/ui/date-range-picker"
import { Form } from "@/components/ui/form"

export default function DateRangePickerValidationDemo() {
  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <DateRangePicker isRequired label="Event date" className="mb-2" />
      <Button type="submit">Submit</Button>
    </Form>
  )
}
