"use client"

import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { CommandMenu } from "@/components/ui/command-menu"
import { useState } from "react"

export default function CommandMenuControlledDemo() {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState("")
  const [isSearching, setIsSearching] = useState(false)
  const [results, setResults] = useState(users)

  const handleSearch = async (value: string) => {
    setIsSearching(true)
    setSearch(value)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    const filteredResults = users.filter((user) =>
      user.name.toLowerCase().includes(value.toLowerCase()),
    )
    setResults(filteredResults)
    setIsSearching(false)
  }

  return (
    <>
      <Button intent="outline" onPress={() => setIsOpen(true)}>
        Open
      </Button>
      <CommandMenu
        isPending={isSearching}
        onInputChange={handleSearch}
        inputValue={search}
        isOpen={isOpen}
        onOpenChange={setIsOpen}
      >
        <CommandMenu.Search placeholder="Quick search..." />
        <CommandMenu.List items={results}>
          {(user) => (
            <CommandMenu.Item textValue={user.name} key={user.name}>
              <Avatar src={user.image_url} />
              {user.name}
            </CommandMenu.Item>
          )}
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
