"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  CommandMenu,
  CommandMenuItem,
  CommandMenuList,
  CommandMenuSearch,
  CommandMenuShortcut,
} from "@/components/ui/command-menu"

export default function CommandMenuShortcutDemo() {
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
            <CommandMenuShortcut keys="⌘A" />
          </CommandMenuItem>

          <CommandMenuItem textValue="profile">
            Profile
            <CommandMenuShortcut keys="⌘P" />
          </CommandMenuItem>

          <CommandMenuItem textValue="notifications">
            Notifications
            <CommandMenuShortcut keys="⌘N" />
          </CommandMenuItem>

          <CommandMenuItem textValue="privacy settings">
            Privacy Settings
            <CommandMenuShortcut keys="⌘S" />
          </CommandMenuItem>

          <CommandMenuItem textValue="billing information">
            Billing Information
            <CommandMenuShortcut keys="⌘B" />
          </CommandMenuItem>

          <CommandMenuItem textValue="logout">
            Logout
            <CommandMenuShortcut keys="⌘L" />
          </CommandMenuItem>
        </CommandMenuList>
      </CommandMenu>
    </>
  )
}
