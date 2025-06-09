"use client"

import { useState } from "react"

import { ColorArea } from "@/components/ui/color-area"
import { ColorField } from "@/components/ui/color-field"
import { ColorPicker } from "@/components/ui/color-picker"
import { ColorSlider } from "@/components/ui/color-slider"
import { Select } from "@/components/ui/select"
import { type ColorSpace, getColorChannels } from "react-aria-components"

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
        <Select.Trigger />
        <Select.List>
          {["rgb", "hsb", "hsl"].map((s) => (
            <Select.Option key={s} id={s} textValue={s}>
              {s}
            </Select.Option>
          ))}
        </Select.List>
      </Select>
      <div className="flex gap-2 sm:max-w-56">
        {getColorChannels(space).map((channel) => (
          <ColorField key={channel} colorSpace={space} channel={channel} className="w-full" />
        ))}
      </div>
    </ColorPicker>
  )
}
