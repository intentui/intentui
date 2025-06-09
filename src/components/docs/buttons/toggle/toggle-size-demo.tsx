"use client"

import { Toggle } from "@/components/ui/toggle"
import { IconAccessible, IconAccessibleFill } from "@intentui/icons"

export default function ToggleSizeDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <Toggle intent="outline" size="sq-sm">
        {({ isSelected }) => <>{isSelected ? <IconAccessibleFill /> : <IconAccessible />}</>}
      </Toggle>
      <Toggle intent="outline" size="sm">
        {({ isSelected }) => <>{isSelected ? "Unpin" : "Pin"}</>}
      </Toggle>
      <Toggle intent="outline" size="md">
        {({ isSelected }) => <>{isSelected ? "Unpin" : "Pin"}</>}
      </Toggle>
      <Toggle intent="outline" size="lg">
        {({ isSelected }) => <>{isSelected ? "Unpin" : "Pin"}</>}
      </Toggle>
    </div>
  )
}
