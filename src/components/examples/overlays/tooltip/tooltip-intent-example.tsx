"use client"

import { InformationCircleIcon } from "@heroicons/react/24/outline"
import { buttonStyles } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

export default function TooltipIntentDemo() {
  return (
    <Tooltip>
      <TooltipTrigger
        aria-label="Follow My Twitter"
        className={buttonStyles({
          intent: "outline",
          size: "sq-sm",
        })}
      >
        <InformationCircleIcon />
      </TooltipTrigger>
      <TooltipContent inverse>
        <div className="relative">
          <strong className="font-semibold">Attention</strong>
          <p>This is a warning message.</p>
        </div>
      </TooltipContent>
    </Tooltip>
  )
}
