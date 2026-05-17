"use client"

import { Toggle } from "@/components/ui/toggle"

export default function ToggleDemo() {
  return <Toggle>{({ isSelected }) => <>{isSelected ? "Unpin" : "Pin"}</>}</Toggle>
}
