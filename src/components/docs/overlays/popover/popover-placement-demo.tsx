"use client"

import { Button } from "@/components/ui/button"
import { Popover } from "@/components/ui/popover"
import type { TooltipProps } from "react-aria-components"

type Placement = Pick<TooltipProps, "placement">["placement"]
const placements: Placement[] = ["bottom", "top", "left", "start", "right", "end"]
export default function PopoverPlacementDemo() {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
      {placements.map((placement, idx) => (
        <Popover key={idx}>
          <Button className="mx-auto" size="small" intent="outline">
            {placement}
          </Button>
          <Popover.Content className="p-4" placement={placement}>
            Popover shown at {placement}.
          </Popover.Content>
        </Popover>
      ))}
    </div>
  )
}
