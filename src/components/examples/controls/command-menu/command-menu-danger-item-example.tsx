'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  CommandMenu,
  CommandMenuItem,
  CommandMenuList,
  CommandMenuSearch,
  CommandMenuSection,
} from '@/components/ui/command-menu'

export default function CommandMenuDangerItemDemo() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Button intent="outline" onPress={() => setIsOpen(true)}>
        Open
      </Button>
      <CommandMenu isOpen={isOpen} onOpenChange={setIsOpen}>
        <CommandMenuSearch placeholder="Quick search..." />
        <CommandMenuList>
          <CommandMenuSection>
            <CommandMenuItem textValue="system shutdown">System Shutdown</CommandMenuItem>
            <CommandMenuItem intent="danger">Format Disk</CommandMenuItem>
            <CommandMenuItem textValue="restart service">Restart Service</CommandMenuItem>
            <CommandMenuItem textValue="empty trash">Empty Trash</CommandMenuItem>
            <CommandMenuItem textValue="overwrite file">Overwrite File</CommandMenuItem>
            <CommandMenuItem textValue="reset factory settings" intent="danger">
              Reset Factory Settings
            </CommandMenuItem>
            <CommandMenuItem textValue="disconnect network">Disconnect Network</CommandMenuItem>
          </CommandMenuSection>
        </CommandMenuList>
      </CommandMenu>
    </>
  )
}
