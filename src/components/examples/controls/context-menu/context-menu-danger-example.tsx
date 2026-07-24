'use client'

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
} from '@/components/ui/context-menu'
import { Pressable } from 'react-aria-components'

export default function ContextMenuDangerDemo() {
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
      <ContextMenuContent>
        <ContextMenuItem>Open</ContextMenuItem>
        <ContextMenuItem>Rename</ContextMenuItem>
        <ContextMenuItem>Duplicate</ContextMenuItem>
        <ContextMenuItem>Share</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem intent="danger">Delete</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
