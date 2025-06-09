"use client"

import { Toggle } from "@/components/ui/toggle"
import { IconAccessible, IconAccessibleFill } from "@intentui/icons"

export default function ToggleSizeDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <Toggle intent="outline" size="square-petite">
        {({ isSelected }) => <>{isSelected ? <IconAccessibleFill /> : <IconAccessible />}</>}
      </Toggle>
      <Toggle intent="outline" size="small">
        {({ isSelected }) => <>{isSelected ? "Unpin" : "Pin"}</>}
      </Toggle>
      <Toggle intent="outline" size="medium">
        {({ isSelected }) => <>{isSelected ? "Unpin" : "Pin"}</>}
      </Toggle>
      <Toggle intent="outline" size="large">
        {({ isSelected }) => <>{isSelected ? "Unpin" : "Pin"}</>}
      </Toggle>
    </div>
  )
}
