"use client"

import { useState } from "react"
import { Form } from "react-aria-components"
import { Button } from "@/components/ui/button"
import { FieldError, Label } from "@/components/ui/field"
import { TextField } from "@/components/ui/text-field"
import { Textarea } from "@/components/ui/textarea"
export default function TextareaValidationDemo() {
  const [value, setValue] = useState("")
  return (
    <Form onSubmit={(e) => e.preventDefault()} className="space-y-4">
      <TextField value={value} onChange={setValue} isRequired>
        <Label>Adresss</Label>
        <Textarea />
        <FieldError />
      </TextField>
      <Button type="submit">Submit</Button>
    </Form>
  )
}
