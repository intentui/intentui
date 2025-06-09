import React from "react"

import { IconHome } from "@intentui/icons"
import { CommandMenu, Link } from "ui"

export default function CommandMenuAnatomy() {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <CommandMenu isOpen={isOpen} onOpenChange={setIsOpen}>
      <CommandMenu.Input placeholder="Quick search..." />
      <CommandMenu.List>
        <CommandMenu.Section separator heading="Pages">
          <CommandMenu.Item asChild>
            <Link href="#">
              <IconHome /> Home
            </Link>
          </CommandMenu.Item>
        </CommandMenu.Section>
      </CommandMenu.List>
    </CommandMenu>
  )
}
