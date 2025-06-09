"use client"

import { useState } from "react"

import { ControlledValues } from "@/components/docs/colors/controlled-values"
import { ColorField } from "@/components/ui/color-field"
import { type Color, parseColor } from "@react-stately/color"

export default function ColorFieldControlledDemo() {
  const [color, setColor] = useState(parseColor("#FAFAFA"))
  return (
    <div className="flex flex-col gap-2 lg:flex-row lg:gap-4">
      <ColorField
        className="min-w-56"
        value={color}
        aria-label="Pick a color"
        onChange={(newColor: Color | null) => newColor && setColor(newColor)}
        placeholder="#FAFAFA"
      />
      <ControlledValues color={color} />
    </div>
  )
}
