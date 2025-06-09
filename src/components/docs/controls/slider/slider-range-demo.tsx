"use client"

import { Slider } from "@/components/ui/slider"

export default function SliderRangeDemo() {
  return <Slider defaultValue={[25, 75]} label="Distance Range" />
}
