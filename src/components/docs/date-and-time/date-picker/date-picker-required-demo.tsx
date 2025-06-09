"use client"

import { Button } from "@/components/ui/button"
import { DatePicker } from "@/components/ui/date-picker"
import { Form } from "@/components/ui/form"

export default function DatePickerRequiredDemo() {
  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <DatePicker label="Delivery date" name="deliveryDate" isRequired className="mb-2" />

      <Button type="submit">Submit</Button>
    </Form>
  )
}
