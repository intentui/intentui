"use client"

import { useState } from "react"

import { Description } from "@/components/ui/field"
import { Switch, SwitchLabel } from "@/components/ui/switch"

export default function SwitchControlledDemo() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <Switch isSelected={darkMode} onChange={setDarkMode} value="dark_mode" name="dark">
      {({ isSelected }) => (
        <>
          <SwitchLabel>Dark mode</SwitchLabel>
          <Description>Dark mode is {isSelected ? "enabled" : "disabled"}.</Description>
        </>
      )}
    </Switch>
  )
}
