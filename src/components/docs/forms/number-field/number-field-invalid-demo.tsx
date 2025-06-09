"use client"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { NumberField } from "@/components/ui/number-field"

export default function NumberFieldInvalidDemo() {
  return (
    <Form onSubmit={(e) => e.preventDefault()} className="space-y-4">
      <NumberField isRequired label="Cookies" />
      <Button type="submit">Submit</Button>
    </Form>
  )
}
