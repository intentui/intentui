"use client"

import { Label } from "@/components/ui/field"
import { TextField } from "@/components/ui/text-field"
import { Textarea } from "@/components/ui/textarea"

export default function TextareaUncontrolledDemo() {
  return (
    <TextField defaultValue="Brooklyn New York, USA">
      <Label>Address</Label>
      <Textarea />
    </TextField>
  )
}
