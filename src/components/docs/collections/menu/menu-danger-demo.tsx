"use client"

import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline"
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
          <PencilSquareIcon />
          <MenuLabel>Edit</MenuLabel>
        </MenuItem>
        <MenuSeparator />
        <MenuItem intent="danger">
          <TrashIcon />
          <MenuLabel>Delete</MenuLabel>
        </MenuItem>
      </MenuContent>
    </Menu>
  )
}
