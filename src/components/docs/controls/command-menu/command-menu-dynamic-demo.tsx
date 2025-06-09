"use client"

import { useState } from "react"

import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { CommandMenu } from "@/components/ui/command-menu"

export default function CommandMenuDynamicDemo() {
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
              Home
            </CommandMenu.Item>
            <CommandMenu.Item textValue="Docs" href="#">
              Docs
            </CommandMenu.Item>
            <CommandMenu.Item textValue="Components" href="#">
              Components
            </CommandMenu.Item>
          </CommandMenu.Section>
          <CommandMenu.Separator />
          <CommandMenu.Section title="Users" items={users}>
            {(user) => (
              <CommandMenu.Item>
                <Avatar src={user.image_url} alt={user.name} initials={user.name.slice(0, 2)} />
                {user.name}
              </CommandMenu.Item>
            )}
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
  { id: 4, name: "Ms. Ettie Abshire DVM", image_url: "https://i.pravatar.cc/150?img=4" },
  { id: 5, name: "Bria Ziemann", image_url: "https://i.pravatar.cc/150?img=5" },
  { id: 6, name: "Heloise Borer Sr.", image_url: "https://i.pravatar.cc/150?img=6" },
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
  { id: 9, name: "Kevon Hackett MD", image_url: "https://i.pravatar.cc/150?img=9" },
  { id: 10, name: "Tom Ledner", image_url: "https://i.pravatar.cc/150?img=10" },
]
