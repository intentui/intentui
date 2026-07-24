'use client'

import {
  ArchiveBoxIcon,
  DocumentIcon,
  FolderOpenIcon,
  PencilSquareIcon,
  Square2StackIcon,
  TrashIcon,
} from '@heroicons/react/24/outline'

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
} from '@/components/ui/context-menu'
import { Pressable } from 'react-aria-components'

export default function ContextMenuWithIconDemo() {
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
      <ContextMenuContent className="min-w-52">
        <ContextMenuItem>
          <FolderOpenIcon />
          <ContextMenuLabel>Open Folder</ContextMenuLabel>
        </ContextMenuItem>
        <ContextMenuItem>
          <DocumentIcon />
          <ContextMenuLabel>Open File</ContextMenuLabel>
        </ContextMenuItem>
        <ContextMenuItem>
          <ContextMenuLabel>Open with...</ContextMenuLabel>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>
          <PencilSquareIcon />
          <ContextMenuLabel>Rename</ContextMenuLabel>
        </ContextMenuItem>
        <ContextMenuItem>
          <Square2StackIcon />
          <ContextMenuLabel>Duplicate</ContextMenuLabel>
        </ContextMenuItem>
        <ContextMenuItem>
          <ContextMenuLabel>Share</ContextMenuLabel>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>
          <TrashIcon />
          <ContextMenuLabel>Delete</ContextMenuLabel>
          <ContextMenuShortcut>⌘←</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          <ArchiveBoxIcon />
          <ContextMenuLabel>Bin</ContextMenuLabel>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
