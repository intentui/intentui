"use client"

import { ColorPicker } from "@/components/ui/color-picker"

export default function ColorPickerAnatomy() {
  return (
    <ColorPicker
      label="Theme Color"
      description="Snag a color for the app theme"
      defaultValue="hsl(216, 98%, 52%)"
    />
  )
}
