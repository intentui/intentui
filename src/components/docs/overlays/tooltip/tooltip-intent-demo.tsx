"use client"

import { buttonStyles } from "@/components/ui/button"
import { Tooltip } from "@/components/ui/tooltip"
import { IconCircleInfo } from "@intentui/icons"

export default function TooltipIntentDemo() {
  return (
    <Tooltip>
      <Tooltip.Trigger
        aria-label="Follow My Twitter"
        className={buttonStyles({
          intent: "outline",
          size: "square-petite",
        })}
      >
        <IconCircleInfo />
      </Tooltip.Trigger>
      <Tooltip.Content intent="inverse">
        <div className="relative">
          <strong className="font-semibold">Attention</strong>
          <p>This is a warning message.</p>
        </div>
      </Tooltip.Content>
    </Tooltip>
  )
}
