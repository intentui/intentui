import { IconBrandX } from "@intentui/icons"
import { Tooltip } from "ui"

export default function TooltipAnatomy() {
  return (
    <Tooltip>
      <Tooltip.Trigger aria-label="Follow My Twitter">
        <IconBrandX />
      </Tooltip.Trigger>
      <Tooltip.Content>Follow me on X @irsyadadl</Tooltip.Content>
    </Tooltip>
  )
}
