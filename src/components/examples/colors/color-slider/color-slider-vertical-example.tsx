'use client'

import { ColorSlider, ColorSliderOutput, ColorSliderTrack } from '@/components/ui/color-slider'
import { ColorThumb } from '@/components/ui/color-thumb'

export default function ColorSliderVerticalDemo() {
  return (
    <div className="flex items-center justify-center">
      <ColorSlider
        orientation="vertical"
        aria-label="Fill Color"
        channel="hue"
        defaultValue="hsl(0, 100%, 50%)"
      >
        <ColorSliderOutput />
        <ColorSliderTrack>
          <ColorThumb />
        </ColorSliderTrack>
      </ColorSlider>
    </div>
  )
}
