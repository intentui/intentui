"use client"

import { Button } from "@/components/ui/button"
import { Tooltip } from "@/components/ui/tooltip"
import type { TooltipProps } from "react-aria-components"

type Placement = Pick<TooltipProps, "placement">["placement"]
const placements: Placement[] = ["bottom", "top", "left", "start", "right", "end"]
export default function TooltipPlacementDemo() {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6 **:[button]:w-full">
      {placements.map((placement, idx) => (
        <Tooltip key={idx}>
          <Button className="mx-auto" size="small" intent="outline">
            {placement}
          </Button>
          <Tooltip.Content placement={placement}>
            Tooltip shown at <strong>{placement}</strong>.
          </Tooltip.Content>
        </Tooltip>
      ))}
    </div>
  )
}
