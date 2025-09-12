"use client"

import { useState } from "react"

import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  CommandMenu,
  CommandMenuItem,
  CommandMenuList,
  CommandMenuSearch,
  CommandMenuSection,
  CommandMenuSeparator,
} from "@/components/ui/command-menu"

export default function CommandMenuDynamicDemo() {
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
              Home
            </CommandMenuItem>
            <CommandMenuItem textValue="Docs" href="#">
              Docs
            </CommandMenuItem>
            <CommandMenuItem textValue="Components" href="#">
              Components
            </CommandMenuItem>
          </CommandMenuSection>
          <CommandMenuSeparator />
          <CommandMenuSection title="Users" items={users}>
            {(user) => (
              <CommandMenuItem>
                <Avatar src={user.image_url} alt={user.name} initials={user.name.slice(0, 2)} />
                {user.name}
              </CommandMenuItem>
            )}
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
    id: 4,
    name: "Ms. Ettie Abshire DVM",
    image_url: "https://i.pravatar.cc/150?img=4",
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
  {
    id: 7,
    name: "Miss Jacinthe Gerlach DVM",
    image_url: "https://i.pravatar.cc/150?img=7",
  },
  {
    id: 8,
    name: "Miss Stephania Schaefer Sr.",
    image_url: "https://i.pravatar.cc/150?img=8",
  },
  {
    id: 9,
    name: "Kevon Hackett MD",
    image_url: "https://i.pravatar.cc/150?img=9",
  },
  {
    id: 10,
    name: "Tom Ledner",
    image_url: "https://i.pravatar.cc/150?img=10",
  },
]
