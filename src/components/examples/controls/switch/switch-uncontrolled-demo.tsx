"use client"

import { Description } from "@/components/ui/field"
import { Switch, SwitchLabel } from "@/components/ui/switch"

export default function SwitchUncontrolledDemo() {
  return (
    <Switch defaultSelected name="d">
      {({ isSelected }) => (
        <>
          <SwitchLabel>Dark mode</SwitchLabel>
          <Description>Dark mode is {isSelected ? "enabled" : "disabled"}.</Description>
        </>
      )}
    </Switch>
  )
}
