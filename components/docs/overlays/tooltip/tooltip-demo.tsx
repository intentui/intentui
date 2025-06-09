"use client"

import { IconBrandX } from "@intentui/icons"
import { buttonStyles, Tooltip } from "ui"

export default function TooltipDemo() {
  return (
    <Tooltip>
      <Tooltip.Trigger
        aria-label="Follow My Twitter"
        className={buttonStyles({
          appearance: "outline",
          size: "square-petite"
        })}
      >
        <IconBrandX />
      </Tooltip.Trigger>
      <Tooltip.Content>Follow me on X @irsyadadl</Tooltip.Content>
    </Tooltip>
  )
}
