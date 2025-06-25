"use client"

import { useState } from "react"

import { Description, Label } from "@/components/ui/field"
import { Switch } from "@/components/ui/switch"

export default function SwitchControlledDemo() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <>
      <Switch isSelected={darkMode} onChange={setDarkMode} value="dark_mode">
        {({ isSelected }) => (
          <>
            <Label>Dark mode</Label>
            <Description>Dark mode is {isSelected ? "enabled" : "disabled"}.</Description>
          </>
        )}
      </Switch>
    </>
  )
}
