"use client"

import { ColorSlider } from "@/components/ui/color-slider"

export default function ColorSliderDisabledDemo() {
  return <ColorSlider isDisabled channel="hue" defaultValue="hsl(0, 100%, 50%)" />
}
