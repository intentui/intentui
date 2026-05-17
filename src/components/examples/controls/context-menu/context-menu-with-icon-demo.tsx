"use client"

import {
  ArchiveBoxIcon,
  DocumentIcon,
  FolderOpenIcon,
  PencilSquareIcon,
  Square2StackIcon,
  TrashIcon,
} from "@heroicons/react/24/outline"

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

export default function ContextMenuWithIconDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="grid h-28 w-56 place-content-center rounded-lg border-2 border-dashed">
        Right click me
      </ContextMenuTrigger>
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
