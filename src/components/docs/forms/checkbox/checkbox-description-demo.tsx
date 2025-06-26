"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Description, Label } from "@/components/ui/field"

export default function CheckboxDescriptionDemo() {
  return (
    <Checkbox>
      <Label>Postal mail</Label>
      <Description>Receive notifications via postal mail</Description>
    </Checkbox>
  )
}
