'use client'

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from '@/components/ui/context-menu'

export default function ContextMenuSeparatorDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="grid h-28 place-content-center rounded-lg border-2 border-dashed sm:min-w-60">
        Right click me
      </ContextMenuTrigger>
      <ContextMenuContent className="min-w-60">
        <ContextMenuItem>Go to Definition</ContextMenuItem>
        <ContextMenuItem>Go to Type Definition</ContextMenuItem>
        <ContextMenuItem>Go to Source Definition</ContextMenuItem>
        <ContextMenuItem>Go to Implementations</ContextMenuItem>
        <ContextMenuItem>
          Go to References
          <ContextMenuShortcut>⌘F12</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          Peek
          <ContextMenuShortcut>⇧F12</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>
          Find All References
          <ContextMenuShortcut>⌘⇧F</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          Find All Implementations
          <ContextMenuShortcut>⌘⇧I</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>Show Call Hierarchy</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Rename Symbol</ContextMenuItem>
        <ContextMenuItem>Change All Occurrences</ContextMenuItem>
        <ContextMenuItem>Format Document</ContextMenuItem>
        <ContextMenuItem>
          Refactor...
          <ContextMenuShortcut>⌘⇧R</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
