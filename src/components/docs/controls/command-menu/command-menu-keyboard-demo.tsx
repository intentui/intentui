"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  CommandMenu,
  CommandMenuItem,
  CommandMenuKeyboard,
  CommandMenuList,
  CommandMenuSearch,
} from "@/components/ui/command-menu"

export default function CommandMenuKeyboardDemo() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Button intent="outline" onPress={() => setIsOpen(true)}>
        Open
      </Button>
      <CommandMenu key="k" isOpen={isOpen} onOpenChange={setIsOpen}>
        <CommandMenuSearch placeholder="Quick search..." />
        <CommandMenuList>
          <CommandMenuItem textValue="account settings">
            Account Settings
            <CommandMenuKeyboard keys="⌘A" />
          </CommandMenuItem>

          <CommandMenuItem textValue="profile">
            Profile
            <CommandMenuKeyboard keys="⌘P" />
          </CommandMenuItem>

          <CommandMenuItem textValue="notifications">
            Notifications
            <CommandMenuKeyboard keys="⌘N" />
          </CommandMenuItem>

          <CommandMenuItem textValue="privacy settings">
            Privacy Settings
            <CommandMenuKeyboard keys="⌘S" />
          </CommandMenuItem>

          <CommandMenuItem textValue="billing information">
            Billing Information
            <CommandMenuKeyboard keys="⌘B" />
          </CommandMenuItem>

          <CommandMenuItem textValue="logout">
            Logout
            <CommandMenuKeyboard keys="⌘L" />
          </CommandMenuItem>
        </CommandMenuList>
      </CommandMenu>
    </>
  )
}
