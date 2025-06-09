"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
export default function TextareaValidationDemo() {
  const [value, setValue] = useState("")
  return (
    <Form onSubmit={(e) => e.preventDefault()} className="space-y-4">
      <Textarea value={value} onChange={setValue} label="Address" isRequired />
      <Button type="submit">Submit</Button>
    </Form>
  )
}
