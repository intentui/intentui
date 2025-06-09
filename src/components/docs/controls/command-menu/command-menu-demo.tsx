"use client"

import { useState } from "react"

import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { CommandMenu } from "@/components/ui/command-menu"
import { IconBill, IconCube, IconGear, IconHome, IconNotes, IconShield } from "@intentui/icons"

export default function CommandMenuDemo() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Button intent="outline" onPress={() => setIsOpen(true)}>
        Open
      </Button>
      <CommandMenu isOpen={isOpen} onOpenChange={setIsOpen}>
        <CommandMenu.Search placeholder="Quick search..." />
        <CommandMenu.List>
          <CommandMenu.Section title="Pages">
            <CommandMenu.Item textValue="Home" href="#">
              <IconHome />
              <CommandMenu.Label>Home</CommandMenu.Label>
            </CommandMenu.Item>
            <CommandMenu.Item textValue="Docs" href="#">
              <IconNotes />
              <CommandMenu.Label>Docs</CommandMenu.Label>
              <CommandMenu.Keyboard keys="⌘k" />
            </CommandMenu.Item>
            <CommandMenu.Item textValue="Components" href="#">
              <IconCube />
              <CommandMenu.Label>Components</CommandMenu.Label>
            </CommandMenu.Item>
          </CommandMenu.Section>
          <CommandMenu.Section title="Dashboard">
            <CommandMenu.Item textValue="billing" href="#">
              <IconBill />
              <CommandMenu.Label>Billing</CommandMenu.Label>
            </CommandMenu.Item>
            <CommandMenu.Item textValue="settings" href="#">
              <IconGear />
              <CommandMenu.Label>Settings</CommandMenu.Label>
              <CommandMenu.Keyboard keys="⌘s" />
            </CommandMenu.Item>
            <CommandMenu.Item textValue="security" href="#">
              <IconShield />
              <CommandMenu.Label>Security</CommandMenu.Label>
            </CommandMenu.Item>
          </CommandMenu.Section>
          <CommandMenu.Section title="Team">
            {users.map((user) => (
              <CommandMenu.Item textValue={user.name} key={user.id}>
                <Avatar src={user.image_url} />
                <CommandMenu.Label>{user.name}</CommandMenu.Label>
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
