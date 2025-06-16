"use client"

import { Description, Label } from "@/components/ui/field"
import { Switch } from "@/components/ui/switch"

export default function SwitchUncontrolledDemo() {
  return (
    <Switch defaultSelected>
      {({ isSelected }) => (
        <>
          <Label>Dark mode</Label>
          <Description>Dark mode is {isSelected ? "enabled" : "disabled"}.</Description>
        </>
      )}
    </Switch>
  )
}
