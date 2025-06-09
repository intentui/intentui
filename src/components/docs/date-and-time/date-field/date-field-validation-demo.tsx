"use client"

import { Button } from "@/components/ui/button"
import { DateField } from "@/components/ui/date-field"
import { Form } from "@/components/ui/form"

export default function DateFieldValidationDemo() {
  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <DateField isRequired label="Event date" className="mb-2" />
      <Button type="submit">Submit</Button>
    </Form>
  )
}
