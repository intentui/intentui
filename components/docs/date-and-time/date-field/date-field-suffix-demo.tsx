"use client"

import { IconCalendar2 } from "@intentui/icons"
import { Button, DateField, Form } from "ui"

export default function DateFieldSuffixDemo() {
  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <DateField suffix={<IconCalendar2 />} isRequired label="Event date" className="mb-2" />
      <Button type="submit">Submit</Button>
    </Form>
  )
}
