"use client"

import { IconBell } from "@intentui/icons"
import { Button, Popover } from "ui"

export default function PopoverArrowDemo() {
  return (
    <Popover>
      <Button appearance="outline" size="square-petite">
        <IconBell />
      </Button>
      <Popover.Content showArrow={false} className="min-w-72">
        You have 3 new notifications.
      </Popover.Content>
    </Popover>
  )
}
