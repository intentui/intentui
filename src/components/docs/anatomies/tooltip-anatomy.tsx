import { IconBrandX } from "@intentui/icons"
import { Tooltip } from "@/components/ui/tooltip"

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
