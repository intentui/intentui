"use client"

import { useState } from "react"

import { ControlledValues } from "@/components/docs/colors/controlled-values"
import { ColorArea } from "@/components/ui/color-area"
import { ColorThumb } from "@/components/ui/color-thumb"
import { parseColor } from "@react-stately/color"

export default function ColorAreaControlledDemo() {
  const [value, setValue] = useState(parseColor("hsl(0, 100%, 50%)"))

  return (
    <div className="flex flex-col gap-2 lg:flex-row lg:gap-4">
      <ColorArea value={value} onChange={setValue}>
        <ColorThumb />
      </ColorArea>
      <ControlledValues color={value} />
    </div>
  )
}
