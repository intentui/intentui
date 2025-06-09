"use client"

import { useState } from "react"

import { IconVolumeFull, IconVolumeOff } from "@intentui/icons"

import { Slider } from "@/components/ui/slider"

export default function SliderPrefixSuffixDemo() {
  const [volume, setVolume] = useState<number>(0.5)
  return (
    <div className="flex max-w-2xl items-center gap-4 *:data-[slot=icon]:size-4 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:translate-y-3.5">
      <IconVolumeOff />
      <Slider value={volume} onChange={(v) => setVolume(v as number)} label="Volume" />
      <IconVolumeFull />
    </div>
  )
}
