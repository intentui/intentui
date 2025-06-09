"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { CommandMenu } from "@/components/ui/command-menu"

export default function CommandMenuDescriptionDemo() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Button intent="outline" onPress={() => setIsOpen(true)}>
        Open
      </Button>
      <CommandMenu escapeButton={false} isOpen={isOpen} onOpenChange={setIsOpen}>
        <CommandMenu.Search
          className="*:data-[slot=command-menu-search-icon]:hidden"
          placeholder="Search for apps and commands..."
        />
        <CommandMenu.List>
          <CommandMenu.Section className="mt-2" title="Suggestions">
            <CommandMenu.Item textValue="phpstorm">
              PhpStorm
              <CommandMenu.Description>Application</CommandMenu.Description>
            </CommandMenu.Item>
            <CommandMenu.Item textValue="webstorm">
              WebStorm
              <CommandMenu.Description>Application</CommandMenu.Description>
            </CommandMenu.Item>
            <CommandMenu.Item textValue="warp">
              Warp
              <CommandMenu.Description>Application</CommandMenu.Description>
            </CommandMenu.Item>
          </CommandMenu.Section>

          <CommandMenu.Section title="Applications">
            <CommandMenu.Item textValue="terminal">
              Terminal
              <CommandMenu.Description>Application</CommandMenu.Description>
            </CommandMenu.Item>
            <CommandMenu.Item textValue="docker">
              Docker
              <CommandMenu.Description>Application</CommandMenu.Description>
            </CommandMenu.Item>
          </CommandMenu.Section>

          <CommandMenu.Section title="Commands">
            <CommandMenu.Item textValue="git status">
              Git status
              <CommandMenu.Description>Command</CommandMenu.Description>
            </CommandMenu.Item>
            <CommandMenu.Item textValue="bun add">
              Bun add
              <CommandMenu.Description>Command</CommandMenu.Description>
            </CommandMenu.Item>
            <CommandMenu.Item textValue="composer require">
              Composer require
              <CommandMenu.Description>Command</CommandMenu.Description>
            </CommandMenu.Item>
          </CommandMenu.Section>

          <CommandMenu.Section title="System Settings">
            <CommandMenu.Item textValue="display brightness">
              Display Brightness
              <CommandMenu.Description>System Settings</CommandMenu.Description>
            </CommandMenu.Item>
            <CommandMenu.Item textValue="sound output">
              Sound Output
              <CommandMenu.Description>System Settings</CommandMenu.Description>
            </CommandMenu.Item>
          </CommandMenu.Section>
        </CommandMenu.List>
      </CommandMenu>
    </>
  )
}
