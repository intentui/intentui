'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  CommandMenu,
  CommandMenuItem,
  CommandMenuList,
  CommandMenuSearch,
  CommandMenuShortcut,
} from '@/components/ui/command-menu'

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
            <CommandMenuShortcut>⌘A</CommandMenuShortcut>
          </CommandMenuItem>

          <CommandMenuItem textValue="profile">
            Profile
            <CommandMenuShortcut>⌘P</CommandMenuShortcut>
          </CommandMenuItem>

          <CommandMenuItem textValue="notifications">
            Notifications
            <CommandMenuShortcut>⌘N</CommandMenuShortcut>
          </CommandMenuItem>

          <CommandMenuItem textValue="privacy settings">
            Privacy Settings
            <CommandMenuShortcut>⌘S</CommandMenuShortcut>
          </CommandMenuItem>

          <CommandMenuItem textValue="billing information">
            Billing Information
            <CommandMenuShortcut>⌘B</CommandMenuShortcut>
          </CommandMenuItem>

          <CommandMenuItem textValue="logout">
            Logout
            <CommandMenuShortcut>⌘L</CommandMenuShortcut>
          </CommandMenuItem>
        </CommandMenuList>
      </CommandMenu>
    </>
  )
}
