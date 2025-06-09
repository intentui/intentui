"use client"

import { useState } from "react"

import { ListBox } from "@/components/ui/list-box"
import type { Selection } from "react-aria-components"

export default function ListBoxDescriptionDemo() {
  const [selected, setSelected] = useState<Selection>(new Set([1]))
  return (
    <ListBox
      selectedKeys={selected}
      onSelectionChange={setSelected}
      items={roles}
      aria-label="Bands"
      className="max-w-60"
    >
      {(item) => (
        <ListBox.Item id={item.id} textValue={item.name}>
          <ListBox.Label>{item.name}</ListBox.Label>
          <ListBox.Description>{item.description}</ListBox.Description>
        </ListBox.Item>
      )}
    </ListBox>
  )
}

const roles = [
  { id: 1, name: "Admin", description: "Has full access to all resources" },
  { id: 2, name: "Editor", description: "Can edit content but has limited access to settings" },
  { id: 3, name: "Viewer", description: "Can view content but cannot make changes" },
  { id: 4, name: "Contributor", description: "Can contribute content for review" },
  { id: 5, name: "Guest", description: "Limited access, mostly for viewing purposes" },
]
