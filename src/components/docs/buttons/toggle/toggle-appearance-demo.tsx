"use client"

import { Toggle } from "@/components/ui/toggle"

export default function ToggleAppearanceDemo() {
  return (
    <div className="flex gap-2">
      <Toggle>{({ isSelected }) => <>{isSelected ? "Unpin" : "Pin"}</>}</Toggle>
      <Toggle intent="outline">{({ isSelected }) => <>{isSelected ? "Unpin" : "Pin"}</>}</Toggle>
      <Toggle intent="solid">{({ isSelected }) => <>{isSelected ? "Unpin" : "Pin"}</>}</Toggle>
    </div>
  )
}
