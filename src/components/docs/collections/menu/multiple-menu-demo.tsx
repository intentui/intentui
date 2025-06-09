"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Menu } from "@/components/ui/menu"
import type { Selection } from "react-aria-components"

export default function MultipleMenuDemo() {
  const [selected, setSelected] = useState<Selection>(new Set(["autoPlay"]))
  return (
    <Menu>
      <Button intent="outline">Open</Button>
      <Menu.Content
        placement="bottom"
        selectionMode="multiple"
        selectedKeys={selected}
        onSelectionChange={setSelected}
        items={items}
      >
        {(item) => (
          <Menu.Item id={item.slug} textValue={item.name}>
            <Menu.Label>{item.name}</Menu.Label>
          </Menu.Item>
        )}
      </Menu.Content>
    </Menu>
  )
}

const items = [
  {
    name: "Auto-Play Videos",
    slug: "autoPlay",
  },
  {
    name: "High-Quality Streaming",
    slug: "highQuality",
  },
  {
    name: "Exclusive Releases",
    slug: "exclusiveContent",
  },
  {
    name: "Default Subtitles",
    slug: "subtitles",
  },
  {
    name: "Personalized Recommendations",
    slug: "recommendations",
  },
  {
    name: "Background Play",
    slug: "backgroundPlay",
  },
  {
    name: "Allow Downloads",
    slug: "download",
  },
]
