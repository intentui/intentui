"use client"

import {
  IconBill,
  IconCube,
  IconGear,
  IconHome,
  IconNotes,
  IconShield,
} from "@intentui/icons"
import { useState } from "react"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  CommandMenu,
  CommandMenuItem,
  CommandMenuKeyboard,
  CommandMenuLabel,
  CommandMenuList,
  CommandMenuSearch,
  CommandMenuSection,
} from "@/components/ui/command-menu"

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Button intent="outline" onPress={() => setIsOpen(true)}>
        Open
      </Button>
      <CommandMenu isOpen={isOpen} onOpenChange={setIsOpen}>
        <CommandMenuSearch placeholder="Quick search..." />
        <CommandMenuList>
          <CommandMenuSection title="Pages">
            <CommandMenuItem textValue="Home" href="#">
              <IconHome />
              <CommandMenuLabel>Home</CommandMenuLabel>
            </CommandMenuItem>
            <CommandMenuItem textValue="Docs" href="#">
              <IconNotes />
              <CommandMenuLabel>Docs</CommandMenuLabel>
              <CommandMenuKeyboard keys="⌘k" />
            </CommandMenuItem>
            <CommandMenuItem textValue="Components" href="#">
              <IconCube />
              <CommandMenuLabel>Components</CommandMenuLabel>
            </CommandMenuItem>
          </CommandMenuSection>
          <CommandMenuSection title="Dashboard">
            <CommandMenuItem textValue="billing" href="#">
              <IconBill />
              <CommandMenuLabel>Billing</CommandMenuLabel>
            </CommandMenuItem>
            <CommandMenuItem textValue="settings" href="#">
              <IconGear />
              <CommandMenuLabel>Settings</CommandMenuLabel>
              <CommandMenuKeyboard keys="⌘s" />
            </CommandMenuItem>
            <CommandMenuItem textValue="security" href="#">
              <IconShield />
              <CommandMenuLabel>Security</CommandMenuLabel>
            </CommandMenuItem>
          </CommandMenuSection>
          <CommandMenuSection title="Team">
            {users.map((user) => (
              <CommandMenuItem textValue={user.name} key={user.id}>
                <Avatar src={user.image_url} />
                <CommandMenuLabel>{user.name}</CommandMenuLabel>
              </CommandMenuItem>
            ))}
          </CommandMenuSection>
        </CommandMenuList>
      </CommandMenu>
    </>
  )
}

const users = [
  {
    id: 1,
    name: "Barbara Kirlin Sr.",
    image_url: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Rosemarie Koch",
    image_url: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "Mrs. Reva Heaney Jr.",
    image_url: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 5,
    name: "Bria Ziemann",
    image_url: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 6,
    name: "Heloise Borer Sr.",
    image_url: "https://i.pravatar.cc/150?img=6",
  },
]
