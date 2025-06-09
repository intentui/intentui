"use client"

import { Button } from "@/components/ui/button"
import { Menu } from "@/components/ui/menu"

export default function MenuItemDescriptionDemo() {
  return (
    <Menu>
      <Button intent="outline">Open</Button>
      <Menu.Content className="sm:min-w-60 sm:max-w-min" placement="bottom" items={roles}>
        {(item) => (
          <Menu.Item id={item.id} textValue={item.name}>
            <Menu.Label>{item.name}</Menu.Label>
            <Menu.Description>{item.description}</Menu.Description>
          </Menu.Item>
        )}
      </Menu.Content>
    </Menu>
  )
}

const roles = [
  { id: 1, name: "Admin", description: "Has full access to all resources" },
  { id: 2, name: "Editor", description: "Can edit content but has limited access to settings" },
  { id: 3, name: "Viewer", description: "Can view content but cannot make changes" },
  { id: 4, name: "Contributor", description: "Can contribute content for review" },
  { id: 5, name: "Guest", description: "Limited access, mostly for viewing purposes" },
]
