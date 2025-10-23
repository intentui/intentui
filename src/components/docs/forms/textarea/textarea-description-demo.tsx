"use client"

import { Description, Label } from "@/components/ui/field"
import { TextField } from "@/components/ui/text-field"
import { Textarea } from "@/components/ui/textarea"

export default function TextareaDescriptionDemo() {
  return (
    <TextField>
      <Label>Address</Label>
      <Textarea />
      <Description>Please enter your address</Description>
    </TextField>
  )
}
