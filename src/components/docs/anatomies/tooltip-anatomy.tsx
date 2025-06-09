import { Tooltip } from "@/components/ui/tooltip"
import { IconBrandX } from "@intentui/icons"

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
