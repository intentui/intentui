"use client"

import { parseColor } from "@react-stately/color"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ColorArea } from "@/components/ui/color-area"
import { ColorField } from "@/components/ui/color-field"
import { ColorPicker } from "@/components/ui/color-picker"
import { ColorSlider, ColorSliderTrack } from "@/components/ui/color-slider"
import { ColorSwatch } from "@/components/ui/color-swatch"
import { ColorThumb } from "@/components/ui/color-thumb"
import { Input } from "@/components/ui/input"
import { Popover, PopoverBody, PopoverContent } from "@/components/ui/popover"

export default function ColorPickerDemo() {
  const [color, setColor] = useState(parseColor("#0d6efd"))
  return (
    <ColorPicker value={color} onChange={setColor} defaultValue="rgb(120,140,200)">
      <Popover>
        <Button intent="plain" data-slot="control">
          <ColorSwatch />
          Select color
        </Button>
        <PopoverContent className="[--gutter:--spacing(1)]">
          <PopoverBody>
            <div className="space-y-(--gutter)">
              <ColorArea
                colorSpace="rgb"
                defaultValue="rgb(120,140,200)"
                xChannel="red"
                yChannel="green"
                xName="red"
                yName="green"
              />
              <ColorSlider colorSpace="hsb" channel="hue">
                <ColorSliderTrack>
                  <ColorThumb />
                </ColorSliderTrack>
              </ColorSlider>
              <ColorField aria-label="Color">
                <Input />
              </ColorField>
            </div>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </ColorPicker>
  )
}
