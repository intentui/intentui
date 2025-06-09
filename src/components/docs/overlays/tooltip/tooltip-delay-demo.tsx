"use client"

import { buttonStyles } from "@/components/ui/button"
import { Tooltip } from "@/components/ui/tooltip"
import { IconBrandX } from "@intentui/icons"

export default function TooltipDelayDemo() {
  return (
    <div className="flex gap-2">
      <Tooltip delay={0}>
        <Tooltip.Trigger
          aria-label="Follow me"
          className={buttonStyles({
            intent: "outline",
            size: "square-petite",
          })}
        >
          <IconBrandX />
        </Tooltip.Trigger>
        <Tooltip.Content>Follow me @intentui</Tooltip.Content>
      </Tooltip>
    </div>
  )
}
