"use client"

import { parseColor } from "@react-stately/color"
import { useState } from "react"
import { ColorPicker } from "@/components/ui/color-picker"

export default function ColorPickerDemo() {
  const [color, setColor] = useState(parseColor("#0d6efd"))
  return <ColorPicker label="Color Picker" value={color} onChange={setColor} />
}
