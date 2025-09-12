"use client"

import { IconHighlight, IconTrash } from "@intentui/icons"
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuLabel,
  MenuSeparator,
  MenuTrigger,
} from "@/components/ui/menu"

export default function MenuDangerDemo() {
  return (
    <Menu>
      <MenuTrigger>Open</MenuTrigger>
      <MenuContent popover={{ placement: "bottom" }}>
        <MenuItem>
          <MenuLabel>View</MenuLabel>
        </MenuItem>
        <MenuItem>
          <IconHighlight />
          <MenuLabel>Edit</MenuLabel>
        </MenuItem>
        <MenuSeparator />
        <MenuItem isDanger>
          <IconTrash />
          <MenuLabel>Delete</MenuLabel>
        </MenuItem>
      </MenuContent>
    </Menu>
  )
}
