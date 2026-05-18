"use client"

import { BrandXIcon } from "@/components/icons/brand-x-icon"
import { buttonStyles } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

export default function TooltipDelayDemo() {
  return (
    <div className="flex gap-2">
      <Tooltip delay={0}>
        <TooltipTrigger
          aria-label="Follow me"
          className={buttonStyles({
            intent: "outline",
            size: "sq-sm",
          })}
        >
          <BrandXIcon />
        </TooltipTrigger>
        <TooltipContent>Follow me @intentui</TooltipContent>
      </Tooltip>
    </div>
  )
}
