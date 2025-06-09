"use client"

import { IconAccessible, IconAccessibleFill } from "@intentui/icons"
import { Toggle } from "ui"

export default function ToggleSizeDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <Toggle appearance="outline" size="square-petite">
        {({ isSelected }) => <>{isSelected ? <IconAccessibleFill /> : <IconAccessible />}</>}
      </Toggle>
      <Toggle appearance="outline" size="small">
        {({ isSelected }) => <>{isSelected ? "Unpin" : "Pin"}</>}
      </Toggle>
      <Toggle appearance="outline" size="medium">
        {({ isSelected }) => <>{isSelected ? "Unpin" : "Pin"}</>}
      </Toggle>
      <Toggle appearance="outline" size="large">
        {({ isSelected }) => <>{isSelected ? "Unpin" : "Pin"}</>}
      </Toggle>
    </div>
  )
}
