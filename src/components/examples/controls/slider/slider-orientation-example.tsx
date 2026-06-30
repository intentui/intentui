'use client'

import { useState } from 'react'
import { Description, Label } from '@/components/ui/field'
import { Slider, SliderFill, SliderOutput, SliderThumb, SliderTrack } from '@/components/ui/slider'

const bands = [
  '32 Hz',
  '64 Hz',
  '125 Hz',
  '250 Hz',
  '500 Hz',
  '1 kHz',
  '2 kHz',
  '4 kHz',
  '8 kHz',
  '16 kHz',
]

export default function SliderOrientationDemo() {
  const [eq, setEq] = useState<number[]>([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
  return (
    <div className="grid grid-cols-5 justify-items-center gap-2 sm:grid-cols-10 sm:gap-6">
      {eq.map((v, i) => (
        <Slider
          key={i}
          orientation="vertical"
          value={v}
          onChange={(n) => setEq((prev) => prev.map((x, idx) => (idx === i ? (n as number) : x)))}
          minValue={-12}
          maxValue={12}
          step={1}
          formatOptions={{ maximumFractionDigits: 0 }}
        >
          <div className="mb-2 flex flex-col items-center justify-between">
            <SliderOutput />
            <Label className="sr-only">{bands[i]}</Label>
          </div>
          <div className="h-48">
            <SliderTrack className="h-full w-10">
              <SliderFill />
              <SliderThumb />
            </SliderTrack>
          </div>
          <Description>dB</Description>
        </Slider>
      ))}
    </div>
  )
}
