"use client"

import { ContextMenu } from "@/components/ui/context-menu"

export default function ContextMenuDangerDemo() {
  return (
    <ContextMenu>
      <ContextMenu.Trigger className="grid h-28 w-56 place-content-center rounded-lg border-2 border-dashed">
        Right click me
      </ContextMenu.Trigger>
      <ContextMenu.Content>
        <ContextMenu.Item>Open</ContextMenu.Item>
        <ContextMenu.Item>Rename</ContextMenu.Item>
        <ContextMenu.Item>Duplicate</ContextMenu.Item>
        <ContextMenu.Item>Share</ContextMenu.Item>
        <ContextMenu.Separator />
        <ContextMenu.Item isDanger>Delete</ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu>
  )
}
