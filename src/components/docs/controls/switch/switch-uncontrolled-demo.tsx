"use client"

import { Switch } from "@/components/ui/switch"

export default function SwitchUncontrolledDemo() {
  return (
    <>
      <Switch defaultSelected>
        {({ isSelected }) => <>{isSelected ? "Enable Dark Mode" : "Disable Dark Mode"}</>}
      </Switch>
    </>
  )
}
