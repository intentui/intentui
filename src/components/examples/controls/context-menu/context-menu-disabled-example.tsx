'use client'

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from '@/components/ui/context-menu'

export default function ContextMenuDisabledDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="grid h-28 w-56 place-content-center rounded-lg border-2 border-dashed">
        Right click me
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>
          <ContextMenuLabel>Copy</ContextMenuLabel>
        </ContextMenuItem>
        <ContextMenuItem isDisabled>
          <ContextMenuLabel>Paste</ContextMenuLabel>
        </ContextMenuItem>
        <ContextMenuItem>
          <ContextMenuLabel>Convert</ContextMenuLabel>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem isDisabled>
          <ContextMenuLabel>Rename</ContextMenuLabel>
        </ContextMenuItem>
        <ContextMenuItem>
          <ContextMenuLabel>Refactor</ContextMenuLabel>
        </ContextMenuItem>
        <ContextMenuItem>
          <ContextMenuLabel>Generate</ContextMenuLabel>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
