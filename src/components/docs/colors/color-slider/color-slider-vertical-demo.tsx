"use client"

import { ColorSlider } from "@/components/ui/color-slider"

export default function ColorSliderVerticalDemo() {
  return (
    <div className="flex items-center justify-center">
      <ColorSlider
        orientation="vertical"
        aria-label="Fill Color"
        channel="hue"
        defaultValue="hsl(0, 100%, 50%)"
      />
    </div>
  )
}
