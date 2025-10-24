"use client"

import { Description, Label } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { TextField } from "@/components/ui/text-field"

export default function InputBasicDemo() {
  return (
    <TextField>
      <Label htmlFor="name">Name</Label>
      <Input id="name" aria-label="Name" placeholder="Your name" />
      <Description>Please enter your full name.</Description>
    </TextField>
  )
}
