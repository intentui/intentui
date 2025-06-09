"use client"

import React from "react"

import { IconBill, IconCube, IconGear, IconHome, IconNotes, IconShield } from "@intentui/icons"
// Replace with your router link component
import Link from "next/link"
import { Avatar, Button, CommandMenu } from "ui"

export default function CommandMenuDemo() {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <>
      <Button appearance="outline" onPress={() => setIsOpen(true)}>
        Open
      </Button>
      <CommandMenu isOpen={isOpen} onOpenChange={setIsOpen}>
        <CommandMenu.Input placeholder="Quick search..." />
        <CommandMenu.List>
          <CommandMenu.Section separator heading="Pages">
            <CommandMenu.Item asChild>
              <Link href="#">
                <IconHome /> Home
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
          <CommandMenu.Section separator heading="Dashboard">
            <CommandMenu.Item asChild>
              <Link href="#">
                <IconBill /> Billing
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
          <CommandMenu.Section heading="Team">
            {users.map((user) => (
              <CommandMenu.Item key={user.id}>
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
  { id: 6, name: "Heloise Borer Sr.", image_url: "https://i.pravatar.cc/150?img=6" }
]
