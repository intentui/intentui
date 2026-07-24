'use client'

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
} from '@/components/ui/context-menu'
import { Pressable } from 'react-aria-components'

export default function ContextMenuDisabledDemo() {
  return (
    <ContextMenu>
      <Pressable>
        <div
          role="button"
          className="flex aspect-video  w-56 items-center justify-center rounded-xl border border-dashed text-sm"
        >
          <span className="hidden pointer-fine:inline-block">Right click here</span>
          <span className="hidden pointer-coarse:inline-block">Long press here</span>
        </div>
      </Pressable>
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
