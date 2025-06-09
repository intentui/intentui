"use client"

import { IconCalendar2 } from "@intentui/icons"

import { Button } from "@/components/ui/button"
import { DateField } from "@/components/ui/date-field"
import { Form } from "@/components/ui/form"

export default function DateFieldPrefixDemo() {
  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <DateField prefix={<IconCalendar2 />} isRequired label="Event date" className="mb-2" />
      <Button type="submit">Submit</Button>
    </Form>
  )
}
