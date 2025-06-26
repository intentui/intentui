"use client"

import { Toggle } from "@/components/ui/toggle"
import { IconSettings } from "@intentui/icons"

export default function Sink() {
  return (
    <div>
      <Toggle>
        <IconSettings />
        Settings
      </Toggle>
    </div>
  )
}
