'use client'

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
} from '@/components/ui/context-menu'
import { Pressable } from 'react-aria-components'

export default function ContextMenuDemo() {
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
      <ContextMenuContent className="min-w-56">
        <ContextMenuItem>Back</ContextMenuItem>
        <ContextMenuItem isDisabled>Forward</ContextMenuItem>
        <ContextMenuItem>Reload</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Bookmark</ContextMenuItem>
        <ContextMenuItem>Save as</ContextMenuItem>
        <ContextMenuItem>
          Select all
          <ContextMenuShortcut>⌘A</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>View source</ContextMenuItem>
        <ContextMenuItem>Inspect Accessibility</ContextMenuItem>
        <ContextMenuItem>Inspect</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
