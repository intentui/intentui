"use client"

import { ColorSlider, ColorSliderOutput, ColorSliderTrack } from "@/components/ui/color-slider"
import { ColorThumb } from "@/components/ui/color-thumb"
import { Label } from "@/components/ui/field"

export default function ColorSliderWithLabelDemo() {
  return (
    <ColorSlider channel="hue" defaultValue="hsl(0, 100%, 50%)">
      <Label>Color Customizer</Label>
      <ColorSliderOutput />
      <ColorSliderTrack>
        <ColorThumb />
      </ColorSliderTrack>
    </ColorSlider>
  )
}
