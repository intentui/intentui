"use client"

import { IconBrandGithub } from "@intentui/icons"
import { buttonStyles, Tooltip } from "ui"

export default function TooltipDelayDemo() {
  return (
    <div className="flex gap-2">
      <Tooltip delay={0}>
        <Tooltip.Trigger
          aria-label="Follow My Twitter"
          className={buttonStyles({
            appearance: "outline",
            size: "square-petite"
          })}
        >
          <IconBrandGithub />
        </Tooltip.Trigger>
        <Tooltip.Content>Follow me on Github @irsyadadl</Tooltip.Content>
      </Tooltip>
    </div>
  )
}
