"use client"

import React from "react"

import { IconPin, IconUnpin } from "@intentui/icons"
import { Toggle } from "ui"

export default function ToggleControlledDemo() {
  const [isSelected, setSelected] = React.useState(false)
  return (
    <Toggle size="square-petite" isSelected={isSelected} onChange={setSelected}>
      {({ isSelected }) => <>{isSelected ? <IconUnpin /> : <IconPin />}</>}
    </Toggle>
  )
}
