'use client'

import { type Color, parseColor } from '@react-stately/color'
import { useState } from 'react'
import { ControlledValues } from '@/components/examples/colors/controlled-values'
import { ColorField } from '@/components/ui/color-field'
import { Label } from '@/components/ui/field'
import { Input } from '@/components/ui/input'

export default function ColorFieldControlledDemo() {
  const [color, setColor] = useState(parseColor('#155DFC'))
  return (
    <div className="flex flex-col gap-2 lg:flex-row lg:gap-4">
      <ColorField
        name="color"
        className="min-w-56"
        value={color}
        onChange={(newColor: Color | null) => newColor && setColor(newColor)}
      >
        <Label>Pick a color</Label>
        <Input placeholder="#155DFC" />
      </ColorField>
      <ControlledValues color={color} />
    </div>
  )
}
