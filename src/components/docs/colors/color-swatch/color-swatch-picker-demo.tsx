"use client"

import { parseColor } from "@react-stately/color"
import { useState } from "react"
import { ColorSwatchPicker } from "@/components/ui/color-swatch-picker"

export default function ColorSwatchPickerDemo() {
  const [value, setValue] = useState(parseColor("#0d6efd"))
  return (
    <ColorSwatchPicker
      aria-label="Pick color"
      value={value}
      onChange={setValue}
      className="grid grid-cols-3 gap-2 lg:grid-cols-6"
    >
      <ColorSwatchPicker.Item color="#f59e0b" />
      <ColorSwatchPicker.Item color="#84cc16" />
      <ColorSwatchPicker.Item color="#0d6efd" />
      <ColorSwatchPicker.Item color="#ec4899" />
      <ColorSwatchPicker.Item color="#f43f5e" />
    </ColorSwatchPicker>
  )
}
