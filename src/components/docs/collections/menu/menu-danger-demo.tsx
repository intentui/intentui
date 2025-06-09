"use client"

import { Menu } from "@/components/ui/menu"
import { IconHighlight, IconTrash } from "@intentui/icons"

export default function MenuDangerDemo() {
  return (
    <Menu>
      <Menu.Trigger>Open</Menu.Trigger>
      <Menu.Content placement="bottom">
        <Menu.Item>
          <Menu.Label>View</Menu.Label>
        </Menu.Item>
        <Menu.Item>
          <IconHighlight />
          <Menu.Label>Edit</Menu.Label>
        </Menu.Item>
        <Menu.Separator />
        <Menu.Item isDanger>
          <IconTrash />
          <Menu.Label>Delete</Menu.Label>
        </Menu.Item>
      </Menu.Content>
    </Menu>
  )
}
