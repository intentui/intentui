"use client"

import { Toggle } from "@/components/ui/toggle"
import { IconPin } from "@intentui/icons"

export default function ToggleDisabledDemo() {
  return (
    <Toggle size="square-petite" isDisabled>
      <IconPin />
    </Toggle>
  )
}
