"use client"

import { IconBell } from "@intentui/icons"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent } from "@/components/ui/popover"

export default function PopoverArrowDemo() {
  return (
    <Popover>
      <Button intent="outline" size="sq-sm">
        <IconBell />
      </Button>
      <PopoverContent showArrow className="p-4 sm:min-w-72">
        You have 3 new notifications.
      </PopoverContent>
    </Popover>
  )
}
