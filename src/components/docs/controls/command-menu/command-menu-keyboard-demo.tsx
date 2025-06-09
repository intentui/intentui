"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { CommandMenu } from "@/components/ui/command-menu"

export default function CommandMenuKeyboardDemo() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Button intent="outline" onPress={() => setIsOpen(true)}>
        Open
      </Button>
      <CommandMenu key="k" isOpen={isOpen} onOpenChange={setIsOpen}>
        <CommandMenu.Search placeholder="Quick search..." />
        <CommandMenu.List>
          <CommandMenu.Item textValue="account settings">
            Account Settings
            <CommandMenu.Keyboard keys="⌘A" />
          </CommandMenu.Item>

          <CommandMenu.Item textValue="profile">
            Profile
            <CommandMenu.Keyboard keys="⌘P" />
          </CommandMenu.Item>

          <CommandMenu.Item textValue="notifications">
            Notifications
            <CommandMenu.Keyboard keys="⌘N" />
          </CommandMenu.Item>

          <CommandMenu.Item textValue="privacy settings">
            Privacy Settings
            <CommandMenu.Keyboard keys="⌘S" />
          </CommandMenu.Item>

          <CommandMenu.Item textValue="billing information">
            Billing Information
            <CommandMenu.Keyboard keys="⌘B" />
          </CommandMenu.Item>

          <CommandMenu.Item textValue="logout">
            Logout
            <CommandMenu.Keyboard keys="⌘L" />
          </CommandMenu.Item>
        </CommandMenu.List>
      </CommandMenu>
    </>
  )
}
