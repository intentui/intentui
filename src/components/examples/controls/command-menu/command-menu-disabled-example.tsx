'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  CommandMenu,
  CommandMenuDescription,
  CommandMenuItem,
  CommandMenuList,
  CommandMenuSearch,
  CommandMenuSection,
} from '@/components/ui/command-menu'

export default function CommandMenuDisabledDemo() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Button intent="outline" onPress={() => setIsOpen(true)}>
        Open
      </Button>
      <CommandMenu isOpen={isOpen} onOpenChange={setIsOpen}>
        <CommandMenuSearch placeholder="Quick search..." />
        <CommandMenuList>
          <CommandMenuSection label="Suggestions">
            <CommandMenuItem>
              PhpStorm
              <CommandMenuDescription>Application</CommandMenuDescription>
            </CommandMenuItem>
            <CommandMenuItem textValue="webstorm">
              WebStorm
              <CommandMenuDescription>Application</CommandMenuDescription>
            </CommandMenuItem>
            <CommandMenuItem textValue="disabled warp" isDisabled>
              Warp
              <CommandMenuDescription>Need to enable</CommandMenuDescription>
            </CommandMenuItem>
            <CommandMenuItem textValue="disabled sublime text" isDisabled>
              Sublime Text
              <CommandMenuDescription>Need to enable</CommandMenuDescription>
            </CommandMenuItem>
            <CommandMenuItem textValue="application vscode">
              VS Code
              <CommandMenuDescription>Application</CommandMenuDescription>
            </CommandMenuItem>
            <CommandMenuItem textValue="atom" isDisabled>
              Atom
              <CommandMenuDescription>Killed</CommandMenuDescription>
            </CommandMenuItem>
          </CommandMenuSection>
        </CommandMenuList>
      </CommandMenu>
    </>
  )
}
