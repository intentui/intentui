"use client"

import { useState } from "react"

import { ColorPicker } from "@/components/ui/color-picker"
import { defaultColor } from "@/components/ui/color-swatch"

export default function ColorPickerWithLabelDemo() {
  const [color, setColor] = useState(defaultColor)
  return <ColorPicker label="Theme Color" value={color} onChange={setColor} />
}
