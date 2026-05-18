"use client"

import { parseColor } from "@react-stately/color"
import { useState } from "react"
import { ControlledValues } from "@/components/examples/colors/controlled-values"
import { ColorSlider, ColorSliderOutput, ColorSliderTrack } from "@/components/ui/color-slider"
import { ColorThumb } from "@/components/ui/color-thumb"

export default function ColorSliderControlledDemo() {
  const [value, setValue] = useState(parseColor("hsl(216, 98%, 52%)"))
  return (
    <div className="flex flex-col gap-2">
      <ColorSlider channel="hue" value={value} onChange={setValue}>
        <ColorSliderOutput />
        <ColorSliderTrack>
          <ColorThumb />
        </ColorSliderTrack>
      </ColorSlider>
      <ControlledValues color={value} />
    </div>
  )
}
