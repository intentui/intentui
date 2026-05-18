"use client"

import { Input } from "@/components/ui/input"
import { TextField } from "@/components/ui/text-field"

export default function TextFieldDemo() {
  return (
    <TextField aria-label="Name" name="name">
      <Input placeholder="Florin Aurelie" />
    </TextField>
  )
}
