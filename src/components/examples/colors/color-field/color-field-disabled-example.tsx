"use client"

import { ColorField } from "@/components/ui/color-field"
import { Label } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export default function ColorFieldDisabledDemo() {
  return (
    <ColorField isDisabled name="color">
      <Label>Color</Label>
      <Input placeholder="#155DFC" />
    </ColorField>
  )
}
