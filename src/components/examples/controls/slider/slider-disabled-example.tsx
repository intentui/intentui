'use client'

import { Label } from '@/components/ui/field'
import { Slider, SliderFill, SliderOutput, SliderThumb, SliderTrack } from '@/components/ui/slider'

export default function SliderDisabledDemo() {
  return (
    <Slider isDisabled defaultValue={20}>
      <div className="flex items-center justify-between">
        <Label className="min-w-0 truncate tabular-nums sm:text-xs">Slide</Label>
        <SliderOutput />
      </div>
      <SliderTrack>
        <SliderFill />
        <SliderThumb />
      </SliderTrack>
    </Slider>
  )
}
