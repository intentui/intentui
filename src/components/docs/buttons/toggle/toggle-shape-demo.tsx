"use client"

import { Toggle } from "@/components/ui/toggle"

export default function ToggleShapeDemo() {
  return (
    <Toggle intent="secondary">
      {({ isSelected }) => <>{isSelected ? "Disabled" : "Enabled"}</>}
    </Toggle>
  )
}
