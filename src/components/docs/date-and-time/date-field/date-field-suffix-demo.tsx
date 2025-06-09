"use client"

import { Button } from "@/components/ui/button"
import { DateField } from "@/components/ui/date-field"
import { Form } from "@/components/ui/form"
import { IconCalendar2 } from "@intentui/icons"

export default function DateFieldSuffixDemo() {
  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <DateField suffix={<IconCalendar2 />} isRequired label="Event date" className="mb-2" />
      <Button type="submit">Submit</Button>
    </Form>
  )
}
