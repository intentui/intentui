"use client"

import { Description, Label } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { TextField } from "@/components/ui/text-field"

export default function TextFieldDescriptionDemo() {
  return (
    <TextField name="name">
      <Label>Name</Label>
      <Input />
      <Description>Please enter your legal name.</Description>
    </TextField>
  )
}
