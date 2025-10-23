"use client"

import { useState } from "react"

import { Description, Label } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { TextField } from "@/components/ui/text-field"

export default function TextFieldControlledDemo() {
  const [value, setValue] = useState("")
  return (
    <div className="fle flex-col">
      <TextField value={value} onChange={setValue}>
        <Label>Name</Label>
        <Input />
        <Description>
          You have typed: <strong>{value ?? "-"}</strong>
        </Description>
      </TextField>
    </div>
  )
}
