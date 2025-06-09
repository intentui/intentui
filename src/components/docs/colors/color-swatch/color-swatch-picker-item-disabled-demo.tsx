"use client"

import { useState } from "react"

import { ControlledValues } from "@/components/docs/colors/controlled-values"
import { ColorSwatchPicker } from "@/components/ui/color-swatch-picker"
import { parseColor } from "@react-stately/color"

export default function ColorSwatchPickerDemo() {
  const [value, setValue] = useState(parseColor("#0d6efd"))
  return (
    <div className="flex flex-col gap-4">
      <ColorSwatchPicker
        aria-label="Pick color"
        value={value}
        onChange={setValue}
        className="flex justify-center gap-2"
      >
        <ColorSwatchPicker.Item isDisabled color="#f59e0b" />
        <ColorSwatchPicker.Item color="#84cc16" />
        <ColorSwatchPicker.Item color="#0d6efd" />
        <ColorSwatchPicker.Item isDisabled color="#ec4899" />
        <ColorSwatchPicker.Item isDisabled color="#f43f5e" />
      </ColorSwatchPicker>

      <ControlledValues color={value} />
    </div>
  )
}
