"use client"

import { Label } from "@/components/ui/field"
import { NumberField, NumberInput } from "@/components/ui/number-field"

export default function NumberFieldDemo() {
  return (
    <NumberField name="cookies">
      <Label>Cookies</Label>
      <NumberInput />
    </NumberField>
  )
}
