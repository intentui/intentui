"use client"

import { Form } from "react-aria-components"
import { Button } from "@/components/ui/button"
import { DateInput } from "@/components/ui/date-field"
import { FieldError, Label } from "@/components/ui/field"
import { TimeField } from "@/components/ui/time-field"

export default function TimeFieldValidationDemo() {
  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <TimeField isRequired className="mb-2">
        <Label>Event time</Label>
        <DateInput />
        <FieldError />
      </TimeField>
      <Button type="submit">Submit</Button>
    </Form>
  )
}
