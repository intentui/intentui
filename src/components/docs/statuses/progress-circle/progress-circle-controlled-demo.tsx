"use client"

import { useState } from "react"
import { Label } from "@/components/ui/field"
import { ProgressCircle } from "@/components/ui/progress-circle"
import { Slider, SliderFill, SliderOutput, SliderThumb, SliderTrack } from "@/components/ui/slider"

export default function ProgressCircleControlledDemo() {
  const [value, setValue] = useState(10)

  return (
    <div className="flex min-w-56 flex-col items-center gap-y-6">
      <ProgressCircle className="size-10" value={value} />
      <Slider value={value} onChange={(v) => setValue(v as number)}>
        <div className="flex items-center justify-between">
          <Label>Track</Label>
          <SliderOutput />
        </div>
        <SliderTrack>
          <SliderFill />
          <SliderThumb />
        </SliderTrack>
      </Slider>
    </div>
  )
}
