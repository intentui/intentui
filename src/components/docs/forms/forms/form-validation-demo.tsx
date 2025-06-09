"use client"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { TextField } from "@/components/ui/text-field"

export default function FormValidationDemo() {
  return (
    <Form onSubmit={() => {}}>
      <TextField label="Name" isRequired className="mb-2" />
      <Button type="submit">Submit</Button>
    </Form>
  )
}
