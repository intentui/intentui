"use client"

import { useState } from "react"

import {
  IconCreditCard,
  IconCube,
  IconGear,
  IconHome2,
  IconNotes,
  IconShield,
} from "@intentui/icons"

import { CommandMenu } from "@/components/ui/command-menu"

export default function CommandMenuTriggerByKeyboardDemo() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      ⌘ /
      <CommandMenu shortcut="/" isOpen={isOpen} onOpenChange={setIsOpen}>
        <CommandMenu.Search placeholder="Quick search..." />
        <CommandMenu.List>
          <CommandMenu.Section className="mt-2" title="Pages">
            <CommandMenu.Item href="#" textValue="home">
              <IconHome2 /> Home
            </CommandMenu.Item>
            <CommandMenu.Item href="#" textValue="docs">
              <IconNotes /> Docs
              <CommandMenu.Keyboard keys="⌘k" />
            </CommandMenu.Item>
            <CommandMenu.Item href="#" textValue="components">
              <IconCube /> Components
            </CommandMenu.Item>
          </CommandMenu.Section>
          <CommandMenu.Section title="Dashboard">
            <CommandMenu.Item href="#" textValue="billing">
              <IconCreditCard /> Billing
            </CommandMenu.Item>
            <CommandMenu.Item href="#" textValue="settings">
              <IconGear /> Settings
              <CommandMenu.Keyboard keys="⌘s" />
            </CommandMenu.Item>
            <CommandMenu.Item href="#" textValue="security">
              <IconShield /> Security
            </CommandMenu.Item>
          </CommandMenu.Section>
        </CommandMenu.List>
      </CommandMenu>
    </>
  )
}
