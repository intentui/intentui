'use client'

import { Badge } from '@/components/ui/badge'
import { Description } from '@/components/ui/field'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

export default function TooltipWithoutArrowDemo() {
  return (
    <Tooltip>
      <TooltipTrigger aria-label="Fresh drop alert">
        <Badge isCircle>New</Badge>
      </TooltipTrigger>
      <TooltipContent arrow={false}>
        <strong className="font-semibold">Fresh drop alert</strong> <br />
        <Description>Scope the newest addition to our stash.</Description>
      </TooltipContent>
    </Tooltip>
  )
}
