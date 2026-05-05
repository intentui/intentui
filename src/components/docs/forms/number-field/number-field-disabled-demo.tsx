"use client"

import { Label } from "@/components/ui/field"
import { NumberField, NumberInput } from "@/components/ui/number-field"

export default function NumberFieldDisabledDemo() {
  return (
    <NumberField isDisabled name="cookies">
      <Label>Cookies</Label>
      <NumberInput />
    </NumberField>
  )
}
