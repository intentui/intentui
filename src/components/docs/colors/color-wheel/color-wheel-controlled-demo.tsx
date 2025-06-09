"use client"

import { useState } from "react"

import { ControlledValues } from "@/components/docs/colors/controlled-values"
import { ColorWheel } from "@/components/ui/color-wheel"
import { parseColor } from "@react-stately/color"

export default function ColorWheelControlledDemo() {
  const [color, setColor] = useState(parseColor("hsl(0, 100%, 50%)"))
  return (
    <div className="grid items-center justify-center gap-4 sm:grid-cols-2">
      <div className="grid shrink-0 place-content-center">
        <ColorWheel aria-label="Background color" value={color} onChange={setColor} />
      </div>
      <ControlledValues color={color} />
    </div>
  )
}
