"use client"

import { Toolbar, ToolbarGroup, ToolbarItem, ToolbarSeparator } from "@/components/ui/toolbar"

export default function ToolbarDemo() {
  return (
    <Toolbar>
      <ToolbarGroup>
        <ToolbarItem />
        <ToolbarItem />
        <ToolbarItem />
      </ToolbarGroup>
      <ToolbarSeparator />
      <ToolbarGroup>
        <ToolbarItem />
      </ToolbarGroup>
    </Toolbar>
  )
}
