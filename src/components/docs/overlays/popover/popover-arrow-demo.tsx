"use client"

import { Button } from "@/components/ui/button"
import { Popover } from "@/components/ui/popover"
import { IconBell } from "@intentui/icons"

export default function PopoverArrowDemo() {
  return (
    <Popover>
      <Button intent="outline" size="square-petite">
        <IconBell />
      </Button>
      <Popover.Content showArrow={false} className="p-4 sm:min-w-72">
        You have 3 new notifications.
      </Popover.Content>
    </Popover>
  )
}
