'use client'

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
} from '@/components/ui/context-menu'
import { Pressable } from 'react-aria-components'

export default function ContextMenuSeparatorDemo() {
  return (
    <ContextMenu>
      <Pressable>
        <div
          role="button"
          className="flex aspect-video w-56 items-center justify-center rounded-xl border border-dashed text-sm"
        >
          <span className="hidden pointer-fine:inline-block">Right click here</span>
          <span className="hidden pointer-coarse:inline-block">Long press here</span>
        </div>
      </Pressable>
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
