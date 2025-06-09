"use client"

import {
  IconDuplicate,
  IconFile,
  IconFolder,
  IconHighlight,
  IconTrash,
  IconTrashPaper,
} from "@intentui/icons"

import { ContextMenu } from "@/components/ui/context-menu"

export default function ContextMenuWithIconDemo() {
  return (
    <ContextMenu>
      <ContextMenu.Trigger className="grid h-28 w-56 place-content-center rounded-lg border-2 border-dashed">
        Right click me
      </ContextMenu.Trigger>
      <ContextMenu.Content className="sm:min-w-52">
        <ContextMenu.Item>
          <IconFolder />
          <ContextMenu.Label>Open Folder</ContextMenu.Label>
        </ContextMenu.Item>
        <ContextMenu.Item>
          <IconFile />
          <ContextMenu.Label>Open File</ContextMenu.Label>
        </ContextMenu.Item>
        <ContextMenu.Item>
          <ContextMenu.Label>Open with...</ContextMenu.Label>
        </ContextMenu.Item>
        <ContextMenu.Separator />
        <ContextMenu.Item>
          <IconHighlight />
          <ContextMenu.Label>Rename</ContextMenu.Label>
        </ContextMenu.Item>
        <ContextMenu.Item>
          <IconDuplicate />
          <ContextMenu.Label>Duplicate</ContextMenu.Label>
        </ContextMenu.Item>
        <ContextMenu.Item>
          <ContextMenu.Label>Share</ContextMenu.Label>
        </ContextMenu.Item>
        <ContextMenu.Separator />
        <ContextMenu.Item>
          <IconTrash />
          <ContextMenu.Label>Delete</ContextMenu.Label>
          <ContextMenu.Keyboard keys="⌘←" />
        </ContextMenu.Item>
        <ContextMenu.Item>
          <IconTrashPaper />
          <ContextMenu.Label>Bin</ContextMenu.Label>
        </ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu>
  )
}
