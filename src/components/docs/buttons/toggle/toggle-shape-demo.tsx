"use client"

import { Toggle } from "@/components/ui/toggle"

export default function ToggleShapeDemo() {
  return (
    <Toggle intent="outline" isCircle>
      {({ isSelected }) => <>{isSelected ? "Disabled" : "Enabled"}</>}
    </Toggle>
  )
}
