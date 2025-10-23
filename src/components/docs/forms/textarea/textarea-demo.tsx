"use client"

import { Label } from "@/components/ui/field"
import { TextField } from "@/components/ui/text-field"
import { Textarea } from "@/components/ui/textarea"

export default function TextareaDemo() {
  return (
    <TextField>
      <Label>Bio</Label>
      <Textarea />
    </TextField>
  )
}
