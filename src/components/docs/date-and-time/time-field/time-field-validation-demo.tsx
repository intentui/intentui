"use client"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { TimeField } from "@/components/ui/time-field"

export default function TimeFieldValidationDemo() {
  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <TimeField label="Event time" isRequired className="mb-2" />
      <Button type="submit">Submit</Button>
    </Form>
  )
}
