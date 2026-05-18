"use client"

import { Label } from "@/components/ui/field"
import { Slider, SliderFill, SliderOutput, SliderThumb, SliderTrack } from "@/components/ui/slider"

export default function SliderDemo() {
  return (
    <Slider defaultValue={20}>
      <div className="flex items-center justify-between">
        <Label>Opacity</Label>
        <SliderOutput />
      </div>
      <SliderTrack>
        <SliderFill />
        <SliderThumb />
      </SliderTrack>
    </Slider>
  )
}
