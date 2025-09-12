"use client"

import type { TooltipProps } from "react-aria-components"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent } from "@/components/ui/popover"

type Placement = Pick<TooltipProps, "placement">["placement"]
const placements: Placement[] = ["bottom", "top", "left", "start", "right", "end"]
export default function PopoverPlacementDemo() {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
      {placements.map((placement, idx) => (
        <Popover key={idx}>
          <Button className="mx-auto" size="sm" intent="outline">
            {placement}
          </Button>
          <PopoverContent className="p-4" placement={placement}>
            Popover shown at {placement}.
          </PopoverContent>
        </Popover>
      ))}
    </div>
  )
}
