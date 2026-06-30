'use client'

import { Description, Label } from '@/components/ui/field'
import { Slider, SliderFill, SliderOutput, SliderThumb, SliderTrack } from '@/components/ui/slider'

export default function SliderDescriptionDemo() {
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
      <Description>Brightness of the image</Description>
    </Slider>
  )
}
