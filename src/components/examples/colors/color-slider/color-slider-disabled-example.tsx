'use client'

import { ColorSlider, ColorSliderOutput, ColorSliderTrack } from '@/components/ui/color-slider'
import { ColorThumb } from '@/components/ui/color-thumb'

export default function ColorSliderDisabledDemo() {
  return (
    <ColorSlider isDisabled channel="hue" defaultValue="hsl(0, 100%, 50%)">
      <ColorSliderOutput />
      <ColorSliderTrack>
        <ColorThumb />
      </ColorSliderTrack>
    </ColorSlider>
  )
}
