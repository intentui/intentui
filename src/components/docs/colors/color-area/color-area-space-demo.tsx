"use client"

import { ColorArea } from "@/components/ui/color-area"
import { ColorThumb } from "@/components/ui/color-thumb"

export default function ColorAreaSpaceDemo() {
  return (
    <ColorArea colorSpace="rgb">
      <ColorThumb />
    </ColorArea>
  )
}
