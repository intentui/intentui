"use client"

import { Toggle } from "@/components/ui/toggle"

export default function ToggleIntentDemo() {
  return (
    <div className="flex gap-2">
      <Toggle intent="outline">{({ isSelected }) => <>{isSelected ? "Unpin" : "Pin"}</>}</Toggle>
      <Toggle intent="plain">{({ isSelected }) => <>{isSelected ? "Unpin" : "Pin"}</>}</Toggle>
    </div>
  )
}
