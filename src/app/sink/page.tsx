"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Description, Label } from "@/components/ui/field"

export default function Sink() {
  return (
    <div>
      <Checkbox value="read">
        <Label>Read</Label>
        <Description>Can view content but cannot make changes.</Description>
      </Checkbox>
    </div>
  )
}
