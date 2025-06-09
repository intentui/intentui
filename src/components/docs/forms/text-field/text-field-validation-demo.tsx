"use client"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { TextField } from "@/components/ui/text-field"

export default function TextFieldValidationDemo() {
  return (
    <Form className="space-y-4">
      <TextField isRequired label="Name" />
      <Button type="submit">Submit</Button>
    </Form>
  )
}
