"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { CommandMenu } from "@/components/ui/command-menu"

export default function CommandMenuDisabledDemo() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Button intent="outline" onPress={() => setIsOpen(true)}>
        Open
      </Button>
      <CommandMenu isOpen={isOpen} onOpenChange={setIsOpen}>
        <CommandMenu.Search placeholder="Quick search..." />
        <CommandMenu.List>
          <CommandMenu.Section title="Suggestions">
            <CommandMenu.Item>
              PhpStorm
              <CommandMenu.Description>Application</CommandMenu.Description>
            </CommandMenu.Item>
            <CommandMenu.Item textValue="webstorm">
              WebStorm
              <CommandMenu.Description>Application</CommandMenu.Description>
            </CommandMenu.Item>
            <CommandMenu.Item textValue="disabled warp" isDisabled>
              Warp
              <CommandMenu.Description>Need to enable</CommandMenu.Description>
            </CommandMenu.Item>
            <CommandMenu.Item textValue="disabled sublime text" isDisabled>
              Sublime Text
              <CommandMenu.Description>Need to enable</CommandMenu.Description>
            </CommandMenu.Item>
            <CommandMenu.Item textValue="application vscode">
              VS Code
              <CommandMenu.Description>Application</CommandMenu.Description>
            </CommandMenu.Item>
            <CommandMenu.Item textValue="atom" isDisabled>
              Atom
              <CommandMenu.Description>Killed</CommandMenu.Description>
            </CommandMenu.Item>
          </CommandMenu.Section>
        </CommandMenu.List>
      </CommandMenu>
    </>
  )
}
