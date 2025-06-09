"use client"

import { useState } from "react"

import { Description } from "@/components/ui/field"
import { Switch } from "@/components/ui/switch"

export default function SwitchControlledDemo() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <>
      <Switch isSelected={darkMode} onChange={setDarkMode} value="dark_mode">
        Enable Dark Mode
      </Switch>

      <Description className="mt-2 block [&>strong]:text-fg">
        Dark Mode is <strong>{darkMode ? "enabled" : "disabled"}</strong>
      </Description>
    </>
  )
}
