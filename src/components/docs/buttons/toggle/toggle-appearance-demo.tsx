"use client"

import { Toggle } from "@/components/ui/toggle"

export default function ToggleAppearanceDemo() {
  return (
    <div className="flex gap-2">
      <Toggle>{({ isSelected }) => <>{isSelected ? "Unpin" : "Pin"}</>}</Toggle>
      <Toggle intent="secondary">{({ isSelected }) => <>{isSelected ? "Unpin" : "Pin"}</>}</Toggle>
      <Toggle intent="primary">{({ isSelected }) => <>{isSelected ? "Unpin" : "Pin"}</>}</Toggle>
    </div>
  )
}
