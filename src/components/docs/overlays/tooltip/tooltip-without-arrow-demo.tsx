"use client"

import { Badge } from "@/components/ui/badge"
import { Description } from "@/components/ui/field"
import { Tooltip } from "@/components/ui/tooltip"

export default function TooltipWithoutArrowDemo() {
  return (
    <Tooltip>
      <Tooltip.Trigger aria-label="Fresh drop alert">
        <Badge shape="circle">New</Badge>
      </Tooltip.Trigger>
      <Tooltip.Content showArrow={false}>
        <strong className="font-semibold">Fresh drop alert</strong> <br />
        <Description>Scope the newest addition to our stash.</Description>
      </Tooltip.Content>
    </Tooltip>
  )
}
