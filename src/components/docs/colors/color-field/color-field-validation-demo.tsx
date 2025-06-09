"use client"

import { Button } from "@/components/ui/button"
import { ColorField } from "@/components/ui/color-field"
import { Form } from "@/components/ui/form"

export default function ColorFieldValidationDemo() {
  function submit(e: React.FormEvent) {
    e.preventDefault()
  }

  return (
    <Form onSubmit={submit} className="space-y-4">
      <ColorField label="Color" isRequired placeholder="#FAFAFA" />
      <Button type="submit">Save</Button>
    </Form>
  )
}
