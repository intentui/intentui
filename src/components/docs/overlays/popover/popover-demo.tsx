"use client"

import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
} from "@/components/ui/popover"

export default function PopoverDemo() {
  return (
    <Popover>
      <Button intent="outline">What’s this?</Button>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>Invite link</PopoverTitle>
          <PopoverDescription>
            Anyone with this link can join your team without approval.
          </PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  )
}
