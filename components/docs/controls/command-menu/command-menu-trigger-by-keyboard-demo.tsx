"use client"

import React from "react"

import {
  IconCreditCard,
  IconCube,
  IconGear,
  IconHome2,
  IconNotes,
  IconShield
} from "@intentui/icons"
import Link from "next/link"
import { CommandMenu } from "ui"

export default function CommandMenuTriggerByKeyboardDemo() {
  const [isOpen, setIsOpen] = React.useState(false)
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "/" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setIsOpen((open: boolean) => !open)
      }
    }

    document.addEventListener("keydown", down)

    return () => document.removeEventListener("keydown", down)
  }, [setIsOpen])
  return (
    <>
      ⌘ /
      <CommandMenu isOpen={isOpen} onOpenChange={setIsOpen}>
        <CommandMenu.Input placeholder="Quick search..." />
        <CommandMenu.List>
          <CommandMenu.Section separator heading="Pages">
            <CommandMenu.Item asChild>
              <Link href="#">
                <IconHome2 /> Home
              </Link>
            </CommandMenu.Item>
            <CommandMenu.Item asChild>
              <Link href="#">
                <IconNotes /> Docs
                <CommandMenu.Keyboard keys="⌘k" />
              </Link>
            </CommandMenu.Item>
            <CommandMenu.Item asChild>
              <Link href="#">
                <IconCube /> Components
              </Link>
            </CommandMenu.Item>
          </CommandMenu.Section>
          <CommandMenu.Section heading="Dashboard">
            <CommandMenu.Item asChild>
              <Link href="#">
                <IconCreditCard /> Billing
              </Link>
            </CommandMenu.Item>
            <CommandMenu.Item asChild>
              <Link href="#">
                <IconGear /> Settings
                <CommandMenu.Keyboard keys="⌘s" />
              </Link>
            </CommandMenu.Item>
            <CommandMenu.Item asChild>
              <Link href="#">
                <IconShield /> Security
              </Link>
            </CommandMenu.Item>
          </CommandMenu.Section>
        </CommandMenu.List>
      </CommandMenu>
    </>
  )
}
