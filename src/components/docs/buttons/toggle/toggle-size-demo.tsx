"use client"

import { IconAccessible, IconAccessibleFill } from "@intentui/icons"
import { Separator } from "@/components/ui/separator"
import { Toggle } from "@/components/ui/toggle"

export default function ToggleSizeDemo() {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex flex-wrap items-end gap-2">
        <Toggle intent="outline" size="sq-xs">
          {({ isSelected }) => <>{isSelected ? <IconAccessibleFill /> : <IconAccessible />}</>}
        </Toggle>
        <Toggle intent="outline" size="sq-sm">
          {({ isSelected }) => <>{isSelected ? <IconAccessibleFill /> : <IconAccessible />}</>}
        </Toggle>
        <Toggle intent="outline" size="sq-md">
          {({ isSelected }) => <>{isSelected ? <IconAccessibleFill /> : <IconAccessible />}</>}
        </Toggle>
        <Toggle intent="outline" size="sq-lg">
          {({ isSelected }) => <>{isSelected ? <IconAccessibleFill /> : <IconAccessible />}</>}
        </Toggle>
      </div>
      <Separator />
      <div className="flex flex-wrap items-end gap-2">
        <Toggle intent="outline" size="xs">
          {({ isSelected }) => <>{isSelected ? "Unpin" : "Pin"}</>}
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
    </div>
  )
}
