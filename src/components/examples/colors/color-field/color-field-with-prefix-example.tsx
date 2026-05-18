"use client"

import { SwatchIcon } from "@heroicons/react/24/outline"
import { ColorField } from "@/components/ui/color-field"
import { Label } from "@/components/ui/field"
import { Input, InputGroup } from "@/components/ui/input"

export default function ColorFieldWithPrefixDemo() {
  return (
    <ColorField name="color">
      <Label>Color</Label>
      <InputGroup>
        <SwatchIcon />
        <Input placeholder="#155DFC" />
      </InputGroup>
    </ColorField>
  )
}
