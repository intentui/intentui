"use client"

import { ColorArea } from "@/components/ui/color-area"
import { ColorThumb as Thumb } from "@/components/ui/color-thumb"

export default function ColorAreaDisabledDemo() {
  return (
    <ColorArea isDisabled>
      <Thumb />
    </ColorArea>
  )
}
