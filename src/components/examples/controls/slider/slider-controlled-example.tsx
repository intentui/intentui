'use client'

import { useState } from 'react'
import { Description, Label } from '@/components/ui/field'
import { Slider, SliderFill, SliderOutput, SliderThumb, SliderTrack } from '@/components/ui/slider'

export default function SliderControlledDemo() {
  const [temperature, setTemperature] = useState<number>(31)
  const [saturation, setSaturation] = useState([21, 86])
  return (
    <div className="space-y-6">
      <div>
        <Slider value={temperature} onChange={(v) => setTemperature(v as number)} defaultValue={20}>
          <div className="flex items-center justify-between">
            <Label>Temperature</Label>
            <SliderOutput />
          </div>
          <SliderTrack>
            <SliderFill />
            <SliderThumb />
          </SliderTrack>
          <Description>Current temperature: {temperature ?? '-'}</Description>
        </Slider>
      </div>
      <div>
        <Slider value={saturation} onChange={(v) => setSaturation(v as number[])}>
          <div className="flex items-center justify-between">
            <Label>Saturation</Label>
            <SliderOutput className="text-muted-fg text-sm tabular-nums data-[orientation=vertical]:mx-auto data-[orientation=horizontal]:ml-auto">
              {({ state }) => state.values.map((_, i) => state.getThumbValueLabel(i)).join(' – ')}
            </SliderOutput>
          </div>
          <SliderTrack>
            {({ state }) => (
              <>
                <SliderFill />
                {state.values.map((_, i) => (
                  <SliderThumb index={i} key={i} />
                ))}
              </>
            )}
          </SliderTrack>
          <Description>Current saturation: {saturation ?? '-'}</Description>
        </Slider>
      </div>
    </div>
  )
}
