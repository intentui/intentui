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
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  CommandMenu,
  CommandMenuItem,
  CommandMenuLabel,
  CommandMenuList,
  CommandMenuSearch,
  CommandMenuSection,
  CommandMenuShortcut,
} from "@/components/ui/command-menu"

export default function CommandMenuDemo() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Button intent="outline" onPress={() => setIsOpen(true)}>
        Open
      </Button>
      <CommandMenu isOpen={isOpen} onOpenChange={setIsOpen}>
        <CommandMenuSearch placeholder="Quick search..." />
        <CommandMenuList>
          <CommandMenuSection label="Pages">
            <CommandMenuItem textValue="Home" href="#">
              <HomeIcon />
              <CommandMenuLabel>Home</CommandMenuLabel>
            </CommandMenuItem>
            <CommandMenuItem textValue="Docs" href="#">
              <DocumentTextIcon />
              <CommandMenuLabel>Docs</CommandMenuLabel>
              <CommandMenuShortcut keys="⌘k" />
            </CommandMenuItem>
            <CommandMenuItem textValue="Components" href="#">
              <CubeIcon />
              <CommandMenuLabel>Components</CommandMenuLabel>
            </CommandMenuItem>
          </CommandMenuSection>
          <CommandMenuSection label="Dashboard">
            <CommandMenuItem textValue="billing" href="#">
              <CreditCardIcon />
              <CommandMenuLabel>Billing</CommandMenuLabel>
            </CommandMenuItem>
            <CommandMenuItem textValue="settings" href="#">
              <Cog6ToothIcon />
              <CommandMenuLabel>Settings</CommandMenuLabel>
              <CommandMenuShortcut keys="⌘s" />
            </CommandMenuItem>
            <CommandMenuItem textValue="security" href="#">
              <ShieldCheckIcon />
              <CommandMenuLabel>Security</CommandMenuLabel>
            </CommandMenuItem>
          </CommandMenuSection>
          <CommandMenuSection label="Team">
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
