import { useState } from "react"

import { CommandMenu } from "@/components/ui/command-menu"
import { IconHome } from "@intentui/icons"

export default function CommandMenuAnatomy() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <CommandMenu isOpen={isOpen} onOpenChange={setIsOpen}>
      <CommandMenu.Search placeholder="Quick search..." />
      <CommandMenu.List>
        <CommandMenu.Section title="Pages">
          <CommandMenu.Item textValue="home" href="#">
            <IconHome /> Home
          </CommandMenu.Item>
        </CommandMenu.Section>
      </CommandMenu.List>
    </CommandMenu>
  )
}
