"use client"

import { IconPin, IconUnpin } from "@intentui/icons"
import { useState } from "react"
import { Toggle } from "@/components/ui/toggle"

export default function ToggleControlledDemo() {
  const [isSelected, setSelected] = useState(false)
  return (
    <Toggle size="sq-sm" isSelected={isSelected} onChange={setSelected}>
      {({ isSelected }) => <>{isSelected ? <IconUnpin /> : <IconPin />}</>}
    </Toggle>
  )
}
