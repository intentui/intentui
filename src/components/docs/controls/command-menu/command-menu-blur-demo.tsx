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
  CommandMenuList,
  CommandMenuSearch,
  CommandMenuSection,
  CommandMenuShortcut,
} from "@/components/ui/command-menu"

export default function CommandMenuBlurDemo() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Button intent="outline" onPress={() => setIsOpen(true)}>
        Open
      </Button>
      <CommandMenu isBlurred isOpen={isOpen} onOpenChange={setIsOpen}>
        <CommandMenuSearch placeholder="Quick search..." />
        <CommandMenuList>
          <CommandMenuSection label="Pages">
            <CommandMenuItem href="#" textValue="home">
              <HomeIcon /> Home
            </CommandMenuItem>
            <CommandMenuItem href="#" textValue="docs">
              <DocumentTextIcon /> Docs
              <CommandMenuShortcut>⌘k</CommandMenuShortcut>
            </CommandMenuItem>
            <CommandMenuItem textValue="components" href="#">
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
          <CommandMenuSection label="Team">
            {users.map((user) => (
              <CommandMenuItem textValue={user.name} key={user.id}>
                <Avatar src={user.image_url} />
                {user.name}
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
