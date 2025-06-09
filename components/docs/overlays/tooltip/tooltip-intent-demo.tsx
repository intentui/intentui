"use client"

import { IconCircleInfo } from "@intentui/icons"
import { buttonStyles, Tooltip } from "ui"

export default function TooltipIntentDemo() {
  return (
    <Tooltip>
      <Tooltip.Trigger
        aria-label="Follow My Twitter"
        className={buttonStyles({
          appearance: "outline",
          size: "square-petite"
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
