"use client"

import { Label } from "@/components/ui/field"
import { Slider, SliderFill, SliderOutput, SliderThumb, SliderTrack } from "@/components/ui/slider"

export default function SliderRangeDemo() {
  return (
    <Slider defaultValue={[25, 75]}>
      <div className="flex items-center justify-between">
        <Label>Distance Range</Label>
        <SliderOutput className="text-muted-fg text-sm tabular-nums data-[orientation=vertical]:mx-auto data-[orientation=horizontal]:ml-auto">
          {({ state }) => state.values.map((_, i) => state.getThumbValueLabel(i)).join(" – ")}
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
    </Slider>
  )
}
