"use client"

import React from "react"

import { IconCube } from "@intentui/icons"
import { Button, CommandMenu } from "ui"

export default function CommandMenuDescriptionDemo() {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <>
      <Button appearance="outline" onPress={() => setIsOpen(true)}>
        Open
      </Button>
      <CommandMenu
        messageOnEmpty={false}
        hideCloseButton
        hideSearchIndicator
        isOpen={isOpen}
        onOpenChange={setIsOpen}
      >
        <CommandMenu.Input placeholder="Search for apps and commands..." />
        <CommandMenu.Empty className="grid place-content-center">
          <div className="text-center">
            <IconCube className="inline" />
            <p className="mt-2">No results found.</p>
          </div>
        </CommandMenu.Empty>

        <CommandMenu.List>
          <CommandMenu.Section separator heading="Suggestions">
            <CommandMenu.Item>
              PhpStorm
              <CommandMenu.Description>Application</CommandMenu.Description>
            </CommandMenu.Item>
            <CommandMenu.Item>
              WebStorm
              <CommandMenu.Description>Application</CommandMenu.Description>
            </CommandMenu.Item>
            <CommandMenu.Item>
              Warp
              <CommandMenu.Description>Application</CommandMenu.Description>
            </CommandMenu.Item>
          </CommandMenu.Section>

          <CommandMenu.Section separator heading="Applications">
            <CommandMenu.Item>
              Terminal
              <CommandMenu.Description>Application</CommandMenu.Description>
            </CommandMenu.Item>
            <CommandMenu.Item>
              Docker
              <CommandMenu.Description>Application</CommandMenu.Description>
            </CommandMenu.Item>
          </CommandMenu.Section>

          <CommandMenu.Section separator heading="Commands">
            <CommandMenu.Item>
              git status
              <CommandMenu.Description>Command</CommandMenu.Description>
            </CommandMenu.Item>
            <CommandMenu.Item>
              bun add
              <CommandMenu.Description>Command</CommandMenu.Description>
            </CommandMenu.Item>
            <CommandMenu.Item>
              composer require
              <CommandMenu.Description>Command</CommandMenu.Description>
            </CommandMenu.Item>
          </CommandMenu.Section>

          <CommandMenu.Section heading="System Settings">
            <CommandMenu.Item>
              Display Brightness
              <CommandMenu.Description>System Settings</CommandMenu.Description>
            </CommandMenu.Item>
            <CommandMenu.Item>
              Sound Output
              <CommandMenu.Description>System Settings</CommandMenu.Description>
            </CommandMenu.Item>
          </CommandMenu.Section>
        </CommandMenu.List>
      </CommandMenu>
    </>
  )
}
