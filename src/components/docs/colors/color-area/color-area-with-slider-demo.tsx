"use client"

import { useState } from "react"

import { parseColor } from "@react-stately/color"

import { ColorArea } from "@/components/ui/color-area"
import { ColorField } from "@/components/ui/color-field"
import { ColorSlider } from "@/components/ui/color-slider"

export default function ColorAreaWithSliderDemo() {
  const [color, setColor] = useState(parseColor("hsl(50, 100%, 50%)"))
  return (
    <div className="flex max-w-60 flex-col gap-y-2">
      <ColorArea
        className="w-full shrink-0"
        value={color}
        onChange={setColor}
        xChannel="saturation"
        yChannel="lightness"
      />
      <ColorSlider
        label="Fill Color"
        className="orientation-horizontal:w-full"
        channel="hue"
        value={color}
        onChange={setColor}
      />

      <ColorField label="Current Color" enableColorPicker={false} value={color.toString("hex")} />
    </div>
  )
}
