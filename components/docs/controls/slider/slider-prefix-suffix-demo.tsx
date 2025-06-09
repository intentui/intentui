"use client"

import React from "react"

import { IconVolumeFull, IconVolumeOff } from "@intentui/icons"
import { Slider } from "ui"

export default function SliderPrefixSuffixDemo() {
  const [volume, setVolume] = React.useState<number>(0.5)
  return (
    <div className="max-w-2xl items-center flex gap-4 [&>[data-slot=icon]]:translate-y-3.5 [&>[data-slot=icon]]:size-4 [&>[data-slot=icon]]:shrink-0">
      <IconVolumeOff />
      <Slider value={volume} onChange={(v) => setVolume(v as number)} label="Volume" />
      <IconVolumeFull />
    </div>
  )
}
