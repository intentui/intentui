"use client"

import {
  IconCreditCard,
  IconCube,
  IconGear,
  IconHome2,
  IconNotes,
  IconShield,
} from "@intentui/icons"
import { useState } from "react"

import {
  CommandMenu,
  CommandMenuItem,
  CommandMenuKeyboard,
  CommandMenuList,
  CommandMenuSearch,
  CommandMenuSection,
} from "@/components/ui/command-menu"

export default function CommandMenuTriggerByKeyboardDemo() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      ⌘ /
      <CommandMenu shortcut="/" isOpen={isOpen} onOpenChange={setIsOpen}>
        <CommandMenuSearch placeholder="Quick search..." />
        <CommandMenuList>
          <CommandMenuSection className="mt-2" title="Pages">
            <CommandMenuItem href="#" textValue="home">
              <IconHome2 /> Home
            </CommandMenuItem>
            <CommandMenuItem href="#" textValue="docs">
              <IconNotes /> Docs
              <CommandMenuKeyboard keys="⌘k" />
            </CommandMenuItem>
            <CommandMenuItem href="#" textValue="components">
              <IconCube /> Components
            </CommandMenuItem>
          </CommandMenuSection>
          <CommandMenuSection title="Dashboard">
            <CommandMenuItem href="#" textValue="billing">
              <IconCreditCard /> Billing
            </CommandMenuItem>
            <CommandMenuItem href="#" textValue="settings">
              <IconGear /> Settings
              <CommandMenuKeyboard keys="⌘s" />
            </CommandMenuItem>
            <CommandMenuItem href="#" textValue="security">
              <IconShield /> Security
            </CommandMenuItem>
          </CommandMenuSection>
        </CommandMenuList>
      </CommandMenu>
    </>
  )
}
