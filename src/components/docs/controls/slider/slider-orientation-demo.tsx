"use client"

import { useState } from "react"

import { Card } from "@/components/ui/card"
import { Description } from "@/components/ui/field"
import { Slider } from "@/components/ui/slider"

export default function SliderOrientationDemo() {
  const [equalizer, setEqualizer] = useState({
    subBass: 40,
    bass: 50,
    lowMid: 60,
    mid: 70,
    highMid: 65,
    presence: 75,
    brilliance: 80,
  })

  const handleSliderChange = (name: string, value: number) => {
    setEqualizer((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <Card className="p-4">
      <div className="flex justify-center gap-4 *:w-6">
        <Slider
          output="tooltip"
          aria-label="Sub Bass"
          value={equalizer.subBass}
          onChange={(newValue) => handleSliderChange("subBass", newValue as number)}
          orientation="vertical"
        />
        <Slider
          output="tooltip"
          aria-label="Bass"
          value={equalizer.bass}
          onChange={(newValue) => handleSliderChange("bass", newValue as number)}
          orientation="vertical"
        />
        <Slider
          output="tooltip"
          aria-label="Low Mid"
          value={equalizer.lowMid}
          onChange={(newValue) => handleSliderChange("lowMid", newValue as number)}
          orientation="vertical"
        />
        <Slider
          output="tooltip"
          aria-label="Mid"
          value={equalizer.mid}
          onChange={(newValue) => handleSliderChange("mid", newValue as number)}
          orientation="vertical"
        />
        <Slider
          output="tooltip"
          aria-label="High Mid"
          value={equalizer.highMid}
          onChange={(newValue) => handleSliderChange("highMid", newValue as number)}
          orientation="vertical"
        />
        <Slider
          output="tooltip"
          aria-label="Presence"
          value={equalizer.presence}
          onChange={(newValue) => handleSliderChange("presence", newValue as number)}
          orientation="vertical"
        />
        <Slider
          output="tooltip"
          aria-label="Brilliance"
          value={equalizer.brilliance}
          onChange={(newValue) => handleSliderChange("brilliance", newValue as number)}
          orientation="vertical"
        />
      </div>
      <Description className="mt-6 block text-center">Equilizer</Description>
    </Card>
  )
}
