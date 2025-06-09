"use client"

import { useState } from "react"

import { ControlledValues } from "@/components/docs/colors/controlled-values"
import { ColorSlider } from "@/components/ui/color-slider"
import { defaultColor } from "@/components/ui/color-swatch"

export default function ColorSliderControlledDemo() {
  const [value, setValue] = useState(defaultColor)
  return (
    <div className="flex flex-col gap-2">
      <ColorSlider channel="hue" value={value} onChange={setValue} />
      <ControlledValues color={value} />
    </div>
  )
}
