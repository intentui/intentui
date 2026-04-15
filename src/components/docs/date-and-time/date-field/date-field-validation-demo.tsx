"use client"

import { Form } from 'react-aria-components/Form';
import { Button } from "@/components/ui/button"
import { DateField, DateInput } from "@/components/ui/date-field"
import { FieldError, Label } from "@/components/ui/field"

export default function DateFieldValidationDemo() {
  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <DateField isRequired className="mb-2">
        <Label>Event date</Label>
        <DateInput />
        <FieldError />
      </DateField>
      <Button type="submit">Submit</Button>
    </Form>
  )
}
