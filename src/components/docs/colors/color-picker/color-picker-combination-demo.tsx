"use client"

import { useState } from "react"
import { type ColorSpace, getColorChannels } from "react-aria-components"
import { ColorArea } from "@/components/ui/color-area"
import { ColorField } from "@/components/ui/color-field"
import { ColorPicker } from "@/components/ui/color-picker"
import { ColorSlider } from "@/components/ui/color-slider"
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select"

export default function ColorPickerCombinationDemo() {
  const [space, setSpace] = useState<ColorSpace>("rgb")
  return (
    <ColorPicker label="Color picker" defaultValue="#0d6efd">
      <ColorArea colorSpace={space} />
      {getColorChannels(space).map((channel) => (
        <ColorSlider showOutput={false} key={channel} colorSpace={space} channel={channel} />
      ))}
      <Select
        aria-label="Color space"
        selectedKey={space}
        onSelectionChange={(s) => setSpace(s as ColorSpace)}
      >
        <SelectTrigger />
        <SelectContent>
          {["rgb", "hsb", "hsl"].map((s) => (
            <SelectItem key={s} id={s} textValue={s}>
              {s}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div className="flex gap-2 sm:max-w-56">
        {getColorChannels(space).map((channel) => (
          <ColorField key={channel} colorSpace={space} channel={channel} className="w-full" />
        ))}
      </div>
    </ColorPicker>
  )
}
