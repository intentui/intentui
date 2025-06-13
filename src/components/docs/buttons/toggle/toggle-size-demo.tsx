"use client"

import { Toggle } from "@/components/ui/toggle"
import { IconAccessible, IconAccessibleFill } from "@intentui/icons"

export default function ToggleSizeDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <Toggle intent="secondary" size="sq-sm">
        {({ isSelected }) => <>{isSelected ? <IconAccessibleFill /> : <IconAccessible />}</>}
      </Toggle>
      <Toggle intent="secondary" size="sm">
        {({ isSelected }) => <>{isSelected ? "Unpin" : "Pin"}</>}
      </Toggle>
      <Toggle intent="secondary" size="md">
        {({ isSelected }) => <>{isSelected ? "Unpin" : "Pin"}</>}
      </Toggle>
      <Toggle intent="secondary" size="lg">
        {({ isSelected }) => <>{isSelected ? "Unpin" : "Pin"}</>}
      </Toggle>
    </div>
  )
}
