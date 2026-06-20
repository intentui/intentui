'use client'

import { parseColor } from '@react-stately/color'
import { useState } from 'react'
import { ControlledValues } from '@/components/examples/colors/controlled-values'
import { ColorSwatch } from '@/components/ui/color-swatch'
import { ColorSwatchPicker, ColorSwatchPickerItem } from '@/components/ui/color-swatch-picker'

export default function ColorSwatchPickerDemo() {
  const [value, setValue] = useState(parseColor('#0d6efd'))
  return (
    <div className="flex flex-col gap-4">
      <ColorSwatchPicker
        aria-label="Pick color"
        value={value}
        onChange={setValue}
        className="flex justify-center gap-2"
      >
        <ColorSwatchPickerItem isDisabled color="#f59e0b">
          <ColorSwatch />
        </ColorSwatchPickerItem>
        <ColorSwatchPickerItem color="#84cc16">
          <ColorSwatch />
        </ColorSwatchPickerItem>
        <ColorSwatchPickerItem color="#0d6efd">
          <ColorSwatch />
        </ColorSwatchPickerItem>
        <ColorSwatchPickerItem isDisabled color="#ec4899">
          <ColorSwatch />
        </ColorSwatchPickerItem>
        <ColorSwatchPickerItem isDisabled color="#f43f5e">
          <ColorSwatch />
        </ColorSwatchPickerItem>
      </ColorSwatchPicker>

      <ControlledValues color={value} />
    </div>
  )
}
