"use client"

import { useState } from "react"

import { Toggle } from "@/components/ui/toggle"
import { IconPin, IconUnpin } from "@intentui/icons"

export default function ToggleControlledDemo() {
  const [isSelected, setSelected] = useState(false)
  return (
    <Toggle size="square-petite" isSelected={isSelected} onChange={setSelected}>
      {({ isSelected }) => <>{isSelected ? <IconUnpin /> : <IconPin />}</>}
    </Toggle>
  )
}
