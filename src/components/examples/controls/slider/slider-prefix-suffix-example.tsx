'use client'

import { SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { Label } from '@/components/ui/field'
import { Slider, SliderFill, SliderGroup, SliderThumb, SliderTrack } from '@/components/ui/slider'

export default function SliderPrefixSuffixDemo() {
  const [volume, setVolume] = useState<number>(0.5)
  return (
    <div className="flex max-w-2xl items-center gap-4 *:data-[slot=icon]:size-4 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:translate-y-3.5">
      <Slider value={volume} onChange={(v) => setVolume(v as number)}>
        <Label>Volume</Label>
        <SliderGroup>
          <SpeakerXMarkIcon />
          <SliderTrack>
            <SliderFill />
            <SliderThumb />
          </SliderTrack>
          <SpeakerWaveIcon />
        </SliderGroup>
      </Slider>
    </div>
  )
}
