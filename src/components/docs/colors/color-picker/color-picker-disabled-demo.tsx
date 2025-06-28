"use client"

import { parseColor } from "@react-stately/color"
import { useState } from "react"
import { ColorPicker } from "@/components/ui/color-picker"

export default function ColorPickerDisabledDemo() {
  const [color, setColor] = useState(parseColor("hsl(216, 98%, 52%)"))
  return <ColorPicker isDisabled label="Color Picker" value={color} onChange={setColor} />
}
