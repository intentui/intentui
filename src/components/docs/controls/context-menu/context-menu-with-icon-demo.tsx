"use client"

import {
  IconDuplicate,
  IconFile,
  IconFolder,
  IconHighlight,
  IconTrash,
  IconTrashPaper,
} from "@intentui/icons"

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuKeyboard,
  ContextMenuLabel,
  ContextMenuSeparator,
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
          <IconFolder />
          <ContextMenuLabel>Open Folder</ContextMenuLabel>
        </ContextMenuItem>
        <ContextMenuItem>
          <IconFile />
          <ContextMenuLabel>Open File</ContextMenuLabel>
        </ContextMenuItem>
        <ContextMenuItem>
          <ContextMenuLabel>Open with...</ContextMenuLabel>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>
          <IconHighlight />
          <ContextMenuLabel>Rename</ContextMenuLabel>
        </ContextMenuItem>
        <ContextMenuItem>
          <IconDuplicate />
          <ContextMenuLabel>Duplicate</ContextMenuLabel>
        </ContextMenuItem>
        <ContextMenuItem>
          <ContextMenuLabel>Share</ContextMenuLabel>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>
          <IconTrash />
          <ContextMenuLabel>Delete</ContextMenuLabel>
          <ContextMenuKeyboard keys="⌘←" />
        </ContextMenuItem>
        <ContextMenuItem>
          <IconTrashPaper />
          <ContextMenuLabel>Bin</ContextMenuLabel>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
