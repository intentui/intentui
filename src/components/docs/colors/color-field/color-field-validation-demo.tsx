"use client"

import { Form } from 'react-aria-components/Form';
import { Button } from "@/components/ui/button"
import { ColorField } from "@/components/ui/color-field"
import { FieldError, Label } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export default function ColorFieldValidationDemo() {
  function submit(e: React.FormEvent) {
    e.preventDefault()
  }

  return (
    <Form onSubmit={submit} className="space-y-4">
      <ColorField isRequired>
        <Label>Color</Label>
        <Input placeholder="#155DFC" />
        <FieldError />
      </ColorField>
      <Button type="submit">Save</Button>
    </Form>
  )
}
