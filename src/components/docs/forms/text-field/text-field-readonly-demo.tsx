"use client"

import { Label } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { TextField } from "@/components/ui/text-field"

export default function TextFieldReadonlyDemo() {
  return (
    <TextField isReadOnly name="name">
      <Label>Name</Label>
      <Input />
    </TextField>
  )
}
