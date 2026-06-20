'use client'

import { parseColor } from '@react-stately/color'
import { useState } from 'react'
import { ControlledValues } from '@/components/examples/colors/controlled-values'
import { ColorWheel } from '@/components/ui/color-wheel'

export default function ColorWheelControlledDemo() {
  const [color, setColor] = useState(parseColor('hsl(0, 100%, 50%)'))
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <ColorWheel aria-label="Background color" value={color} onChange={setColor} />
      <ControlledValues color={color} />
    </div>
  )
}
