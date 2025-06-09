"use client"

import { useState } from "react"

import { ControlledValues } from "@/components/docs/colors/controlled-values"
import { ColorPicker } from "@/components/ui/color-picker"
import { defaultColor } from "@/components/ui/color-swatch"

export default function ColorPickerControlledDemo() {
  const [color, setColor] = useState(defaultColor)

  return (
    <div className="flex flex-col gap-2 lg:flex-row lg:gap-4">
      <ColorPicker value={color} onChange={setColor} />
      <ControlledValues color={color} />
    </div>
  )
}
