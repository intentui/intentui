"use client"

import { buttonStyles } from "@/components/ui/button"
import { Tooltip } from "@/components/ui/tooltip"
import {
  IconFullscreen,
  IconGrid4,
  IconLayoutAlignBottom,
  IconLayoutAlignLeft,
  IconLayoutAlignRight,
  IconLayoutAlignTop,
  IconLayoutColumnHorizontalHalf,
  IconLayoutColumnLeftside,
  IconLayoutColumnVerticalAdd,
} from "@intentui/icons"

export default function TooltipDemo() {
  return (
    <Tooltip>
      <Tooltip.Trigger
        aria-label="Manage Layout"
        className={buttonStyles({
          intent: "outline",
          size: "square-petite",
        })}
      >
        <IconLayoutColumnVerticalAdd />
      </Tooltip.Trigger>
      <Tooltip.Content placement="bottom">
        <div className="flex flex-col gap-y-6 **:data-[slot=icon]:size-5 **:data-[slot=icon]:text-fg/80 **:[h4]:mb-1 **:[h4]:font-medium **:[h4]:text-fg/60 **:[h4]:text-xs **:[div]:*:[div]:flex **:[div]:*:[div]:items-center **:[div]:*:[div]:gap-x-3">
          <div>
            <h4>Move & Resize</h4>
            <div>
              <IconLayoutAlignLeft />
              <IconLayoutAlignRight />
              <IconLayoutAlignTop />
              <IconLayoutAlignBottom />
            </div>
          </div>
          <div>
            <h4>Fill & Arrange</h4>
            <div>
              <IconFullscreen />
              <IconLayoutColumnLeftside />
              <IconGrid4 />
              <IconLayoutColumnHorizontalHalf />
            </div>
          </div>
        </div>
      </Tooltip.Content>
    </Tooltip>
  )
}
