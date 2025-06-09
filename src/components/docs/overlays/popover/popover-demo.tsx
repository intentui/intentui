"use client"

import { Button } from "@/components/ui/button"
import { Popover } from "@/components/ui/popover"

export default function PopoverDemo() {
  return (
    <Popover>
      <Button intent="outline">Forgot Password</Button>
      <Popover.Content className="sm:max-w-72">
        <Popover.Header>
          <Popover.Title>Email</Popover.Title>
          <Popover.Description>We'll send you an email to log in.</Popover.Description>
        </Popover.Header>
      </Popover.Content>
    </Popover>
  )
}
