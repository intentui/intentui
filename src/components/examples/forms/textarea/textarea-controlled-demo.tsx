"use client"

import { useState } from "react"

import { Description, Label } from "@/components/ui/field"
import { TextField } from "@/components/ui/text-field"
import { Textarea } from "@/components/ui/textarea"

export default function TextareaControlledDemo() {
  const [value, setValue] = useState("")
  return (
    <TextField value={value} onChange={setValue} name="address">
      <Label>Address</Label>
      <Textarea />
      <Description>
        You have typed: <strong className="text-fg">{value ?? "-"}</strong>
      </Description>
    </TextField>
  )
}
