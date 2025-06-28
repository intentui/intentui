"use client"

import { IconBrandX } from "@intentui/icons"
import { buttonStyles } from "@/components/ui/button"
import { Tooltip } from "@/components/ui/tooltip"

export default function TooltipDelayDemo() {
  return (
    <div className="flex gap-2">
      <Tooltip delay={0}>
        <Tooltip.Trigger
          aria-label="Follow me"
          className={buttonStyles({
            intent: "outline",
            size: "sq-sm",
          })}
        >
          <IconBrandX />
        </Tooltip.Trigger>
        <Tooltip.Content>Follow me @intentui</Tooltip.Content>
      </Tooltip>
    </div>
  )
}
