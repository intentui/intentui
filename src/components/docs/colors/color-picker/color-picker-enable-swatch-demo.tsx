"use client"

import { useState } from "react"

import { ColorArea } from "@/components/ui/color-area"
import { ColorField } from "@/components/ui/color-field"
import { ColorPicker } from "@/components/ui/color-picker"
import { ColorSlider } from "@/components/ui/color-slider"
import { defaultColor } from "@/components/ui/color-swatch"
import { ColorSwatchPicker } from "@/components/ui/color-swatch-picker"
import type { Color } from "react-aria-components"

export default function ColorPickerEnableSwatchDemo() {
  const [color, setColor] = useState(defaultColor)
  const colorChangeHandler = (v: Color) => {
    setColor(v)
  }
  return (
    <ColorPicker value={color} onChange={(v) => colorChangeHandler(v)}>
      <ColorArea colorSpace="hsb" xChannel="saturation" yChannel="brightness" />
      <ColorSlider colorSpace="hsb" channel="hue" />
      <ColorField aria-label="Hex color" />
      <ColorSwatchPicker
        aria-label="Color swatch picker"
        layout="grid"
        className="flex flex-wrap gap-2"
      >
        {colors.map((color) => (
          <ColorSwatchPicker.Item key={color} color={color} />
        ))}
      </ColorSwatchPicker>
    </ColorPicker>
  )
}

const colors = [
  "#f59e0b",
  "#84cc16",
  "#0d6efd",
  "#ec4899",
  "#f43f5e",
  "#d4b990",
  "#b19f73",
  "#9370db",
  "#7d60df",
]
