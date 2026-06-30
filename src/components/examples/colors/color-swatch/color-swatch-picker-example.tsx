'use client'

import { parseColor } from '@react-stately/color'
import { useState } from 'react'
import { ColorSwatch } from '@/components/ui/color-swatch'
import { ColorSwatchPicker, ColorSwatchPickerItem } from '@/components/ui/color-swatch-picker'

export default function ColorSwatchPickerDemo() {
  const [value, setValue] = useState(parseColor('#0d6efd'))
  return (
    <ColorSwatchPicker
      aria-label="Pick color"
      value={value}
      onChange={setValue}
      className="grid grid-cols-3 gap-2 lg:grid-cols-6"
    >
      <ColorSwatchPickerItem color="#f59e0b">
        <ColorSwatch />
      </ColorSwatchPickerItem>
      <ColorSwatchPickerItem color="#84cc16">
        <ColorSwatch />
      </ColorSwatchPickerItem>
      <ColorSwatchPickerItem color="#0d6efd">
        <ColorSwatch />
      </ColorSwatchPickerItem>
      <ColorSwatchPickerItem color="#ec4899">
        <ColorSwatch />
      </ColorSwatchPickerItem>
      <ColorSwatchPickerItem color="#f43f5e">
        <ColorSwatch />
      </ColorSwatchPickerItem>
    </ColorSwatchPicker>
  )
}
