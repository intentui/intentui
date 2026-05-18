"use client"

import {
  Cog6ToothIcon,
  CreditCardIcon,
  CubeIcon,
  DocumentTextIcon,
  HomeIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline"
import { useState } from "react"

import {
  CommandMenu,
  CommandMenuItem,
  CommandMenuList,
  CommandMenuSearch,
  CommandMenuSection,
  CommandMenuShortcut,
} from "@/components/ui/command-menu"

export default function CommandMenuTriggerByKeyboardDemo() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      ⌘ /
      <CommandMenu shortcut="/" isOpen={isOpen} onOpenChange={setIsOpen}>
        <CommandMenuSearch placeholder="Quick search..." />
        <CommandMenuList>
          <CommandMenuSection className="mt-2" label="Pages">
            <CommandMenuItem href="#" textValue="home">
              <HomeIcon /> Home
            </CommandMenuItem>
            <CommandMenuItem href="#" textValue="docs">
              <DocumentTextIcon /> Docs
              <CommandMenuShortcut>⌘k</CommandMenuShortcut>
            </CommandMenuItem>
            <CommandMenuItem href="#" textValue="components">
              <CubeIcon /> Components
            </CommandMenuItem>
          </CommandMenuSection>
          <CommandMenuSection label="Dashboard">
            <CommandMenuItem href="#" textValue="billing">
              <CreditCardIcon /> Billing
            </CommandMenuItem>
            <CommandMenuItem href="#" textValue="settings">
              <Cog6ToothIcon /> Settings
              <CommandMenuShortcut>⌘s</CommandMenuShortcut>
            </CommandMenuItem>
            <CommandMenuItem href="#" textValue="security">
              <ShieldCheckIcon /> Security
            </CommandMenuItem>
          </CommandMenuSection>
        </CommandMenuList>
      </CommandMenu>
    </>
  )
}
