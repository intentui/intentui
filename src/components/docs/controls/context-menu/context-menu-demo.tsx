"use client"

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuKeyboard,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

export default function ContextMenuDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="grid h-28 w-56 place-content-center rounded-lg border-2 border-dashed">
        Right click me
      </ContextMenuTrigger>
      <ContextMenuContent className="min-w-56">
        <ContextMenuItem>Back</ContextMenuItem>
        <ContextMenuItem isDisabled>Forward</ContextMenuItem>
        <ContextMenuItem>Reload</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Bookmark</ContextMenuItem>
        <ContextMenuItem>Save as</ContextMenuItem>
        <ContextMenuItem>
          Select all
          <ContextMenuKeyboard keys="⌘A" />
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>View source</ContextMenuItem>
        <ContextMenuItem>Inspect Accessibility</ContextMenuItem>
        <ContextMenuItem>Inspect</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
