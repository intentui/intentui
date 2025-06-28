"use client"

import { IconPin } from "@intentui/icons"
import { Toggle } from "@/components/ui/toggle"

export default function ToggleDisabledDemo() {
  return (
    <Toggle size="sq-sm" isDisabled>
      <IconPin />
    </Toggle>
  )
}
