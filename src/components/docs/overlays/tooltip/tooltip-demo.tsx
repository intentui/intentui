"use client"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent } from "@/components/ui/tooltip"

export default function TooltipDemo() {
  return (
    <Tooltip>
      <Button intent="outline">Duplicate</Button>
      <TooltipContent>
        <strong className="font-semibold">Duplicate project</strong>
        <p className="mt-1 max-w-2xs text-pretty text-muted-fg text-sm">
          This will create a copy of the current project including all files and settings.
        </p>
      </TooltipContent>
    </Tooltip>
  )
}
