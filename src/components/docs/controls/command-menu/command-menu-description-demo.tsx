"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  CommandMenu,
  CommandMenuDescription,
  CommandMenuItem,
  CommandMenuList,
  CommandMenuSearch,
  CommandMenuSection,
} from "@/components/ui/command-menu"

export default function CommandMenuDescriptionDemo() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Button intent="outline" onPress={() => setIsOpen(true)}>
        Open
      </Button>
      <CommandMenu escapeButton={false} isOpen={isOpen} onOpenChange={setIsOpen}>
        <CommandMenuSearch
          className="*:data-[slot=command-menu-search-icon]:hidden"
          placeholder="Search for apps and commands..."
        />
        <CommandMenuList>
          <CommandMenuSection className="mt-2" title="Suggestions">
            <CommandMenuItem textValue="phpstorm">
              PhpStorm
              <CommandMenuDescription>Application</CommandMenuDescription>
            </CommandMenuItem>
            <CommandMenuItem textValue="webstorm">
              WebStorm
              <CommandMenuDescription>Application</CommandMenuDescription>
            </CommandMenuItem>
            <CommandMenuItem textValue="warp">
              Warp
              <CommandMenuDescription>Application</CommandMenuDescription>
            </CommandMenuItem>
          </CommandMenuSection>

          <CommandMenuSection title="Applications">
            <CommandMenuItem textValue="terminal">
              Terminal
              <CommandMenuDescription>Application</CommandMenuDescription>
            </CommandMenuItem>
            <CommandMenuItem textValue="docker">
              Docker
              <CommandMenuDescription>Application</CommandMenuDescription>
            </CommandMenuItem>
          </CommandMenuSection>

          <CommandMenuSection title="Commands">
            <CommandMenuItem textValue="git status">
              Git status
              <CommandMenuDescription>Command</CommandMenuDescription>
            </CommandMenuItem>
            <CommandMenuItem textValue="bun add">
              Bun add
              <CommandMenuDescription>Command</CommandMenuDescription>
            </CommandMenuItem>
            <CommandMenuItem textValue="composer require">
              Composer require
              <CommandMenuDescription>Command</CommandMenuDescription>
            </CommandMenuItem>
          </CommandMenuSection>

          <CommandMenuSection title="System Settings">
            <CommandMenuItem textValue="display brightness">
              Display Brightness
              <CommandMenuDescription>System Settings</CommandMenuDescription>
            </CommandMenuItem>
            <CommandMenuItem textValue="sound output">
              Sound Output
              <CommandMenuDescription>System Settings</CommandMenuDescription>
            </CommandMenuItem>
          </CommandMenuSection>
        </CommandMenuList>
      </CommandMenu>
    </>
  )
}
