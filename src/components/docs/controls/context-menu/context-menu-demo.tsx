"use client"

import { ContextMenu } from "@/components/ui/context-menu"

export default function ContextMenuDemo() {
  return (
    <ContextMenu>
      <ContextMenu.Trigger className="grid h-28 w-56 place-content-center rounded-lg border-2 border-dashed">
        Right click me
      </ContextMenu.Trigger>
      <ContextMenu.Content className="sm:min-w-56">
        <ContextMenu.Item>Back</ContextMenu.Item>
        <ContextMenu.Item isDisabled>Forward</ContextMenu.Item>
        <ContextMenu.Item>Reload</ContextMenu.Item>
        <ContextMenu.Separator />
        <ContextMenu.Item>Bookmark</ContextMenu.Item>
        <ContextMenu.Item>Save as</ContextMenu.Item>
        <ContextMenu.Item>
          Select all
          <ContextMenu.Keyboard keys="⌘A" />
        </ContextMenu.Item>
        <ContextMenu.Separator />
        <ContextMenu.Item>View source</ContextMenu.Item>
        <ContextMenu.Item>Inspect Accessibility</ContextMenu.Item>
        <ContextMenu.Item>Inspect</ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu>
  )
}
