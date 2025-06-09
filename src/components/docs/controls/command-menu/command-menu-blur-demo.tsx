"use client"

import { useState } from "react"

import { IconBill, IconCube, IconGear, IconHome, IconNotes, IconShield } from "@intentui/icons"

import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { CommandMenu } from "@/components/ui/command-menu"

export default function CommandMenuBlurDemo() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Button intent="outline" onPress={() => setIsOpen(true)}>
        Open
      </Button>
      <CommandMenu isBlurred isOpen={isOpen} onOpenChange={setIsOpen}>
        <CommandMenu.Search placeholder="Quick search..." />
        <CommandMenu.List>
          <CommandMenu.Section title="Pages">
            <CommandMenu.Item href="#" textValue="home">
              <IconHome /> Home
            </CommandMenu.Item>
            <CommandMenu.Item href="#" textValue="docs">
              <IconNotes /> Docs
              <CommandMenu.Keyboard keys="⌘k" />
            </CommandMenu.Item>
            <CommandMenu.Item textValue="components" href="#">
              <IconCube /> Components
            </CommandMenu.Item>
          </CommandMenu.Section>
          <CommandMenu.Section title="Dashboard">
            <CommandMenu.Item href="#" textValue="billing">
              <IconBill /> Billing
            </CommandMenu.Item>
            <CommandMenu.Item href="#" textValue="settings">
              <IconGear /> Settings
              <CommandMenu.Keyboard keys="⌘s" />
            </CommandMenu.Item>
            <CommandMenu.Item href="#" textValue="security">
              <IconShield /> Security
            </CommandMenu.Item>
          </CommandMenu.Section>
          <CommandMenu.Section title="Team">
            {users.map((user) => (
              <CommandMenu.Item textValue={user.name} key={user.id}>
                <Avatar src={user.image_url} />
                {user.name}
              </CommandMenu.Item>
            ))}
          </CommandMenu.Section>
        </CommandMenu.List>
      </CommandMenu>
    </>
  )
}

const users = [
  { id: 1, name: "Barbara Kirlin Sr.", image_url: "https://i.pravatar.cc/150?img=1" },
  { id: 2, name: "Rosemarie Koch", image_url: "https://i.pravatar.cc/150?img=2" },
  { id: 3, name: "Mrs. Reva Heaney Jr.", image_url: "https://i.pravatar.cc/150?img=3" },
  { id: 5, name: "Bria Ziemann", image_url: "https://i.pravatar.cc/150?img=5" },
  { id: 6, name: "Heloise Borer Sr.", image_url: "https://i.pravatar.cc/150?img=6" },
]
