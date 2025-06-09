"use client"

import { IconClipboard, IconDuplicate, IconHighlight } from "@intentui/icons"

import { ContextMenu } from "@/components/ui/context-menu"

export default function ContextMenuDisabledDemo() {
  return (
    <ContextMenu>
      <ContextMenu.Trigger className="grid h-28 w-56 place-content-center rounded-lg border-2 border-dashed">
        Right click me
      </ContextMenu.Trigger>
      <ContextMenu.Content>
        <ContextMenu.Item>
          <IconDuplicate /> <ContextMenu.Label>Copy</ContextMenu.Label>
        </ContextMenu.Item>
        <ContextMenu.Item isDisabled>
          <IconClipboard /> <ContextMenu.Label>Paste</ContextMenu.Label>
        </ContextMenu.Item>
        <ContextMenu.Item>
          <ContextMenu.Label>Convert</ContextMenu.Label>
        </ContextMenu.Item>
        <ContextMenu.Separator />
        <ContextMenu.Item isDisabled>
          <IconHighlight /> <ContextMenu.Label>Rename</ContextMenu.Label>
        </ContextMenu.Item>
        <ContextMenu.Item>
          <ContextMenu.Label>Refactor</ContextMenu.Label>
        </ContextMenu.Item>
        <ContextMenu.Item>
          <ContextMenu.Label>Generate</ContextMenu.Label>
        </ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu>
  )
}
