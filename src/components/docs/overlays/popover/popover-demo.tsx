"use client"

import { Button } from "@/components/ui/button"
import { Popover } from "@/components/ui/popover"

export default function PopoverDemo() {
  return (
    <Popover>
      <Button intent="outline">What’s this?</Button>
      <Popover.Content className="sm:max-w-72">
        <Popover.Header>
          <Popover.Title>Invite link</Popover.Title>
          <Popover.Description>
            Anyone with this link can join your team without approval.
          </Popover.Description>
        </Popover.Header>
      </Popover.Content>
    </Popover>
  )
}
