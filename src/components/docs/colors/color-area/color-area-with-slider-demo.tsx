"use client"

import { parseColor } from "@react-stately/color"
import { useState } from "react"

import { ColorArea } from "@/components/ui/color-area"
import { ColorField } from "@/components/ui/color-field"
import { ColorSlider } from "@/components/ui/color-slider"
import { Label } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { SliderOutput } from "@/components/ui/slider"

export default function ColorAreaWithSliderDemo() {
  const [color, setColor] = useState(parseColor("hsl(50, 100%, 50%)"))
  return (
    <div className="flex min-w-56 flex-col gap-y-2">
      <ColorArea
        className="w-full shrink-0"
        value={color}
        onChange={setColor}
        xChannel="saturation"
        yChannel="lightness"
      />
      <ColorSlider
        className="orientation-horizontal:w-full"
        channel="hue"
        value={color}
        onChange={setColor}
      >
        <Label>Fill color</Label>
        <SliderOutput />
      </ColorSlider>

      <ColorField value={color.toString("hex")}>
        <Label>CurrentColor</Label>
        <Input />
      </ColorField>
    </div>
  )
}
