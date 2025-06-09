"use client"

import { ContextMenu } from "@/components/ui/context-menu"

export default function ContextMenuSeparatorDemo() {
  return (
    <ContextMenu>
      <ContextMenu.Trigger className="grid h-28 place-content-center rounded-lg border-2 border-dashed sm:min-w-60">
        Right click me
      </ContextMenu.Trigger>
      <ContextMenu.Content className="sm:min-w-60">
        <ContextMenu.Item>Go to Definition</ContextMenu.Item>
        <ContextMenu.Item>Go to Type Definition</ContextMenu.Item>
        <ContextMenu.Item>Go to Source Definition</ContextMenu.Item>
        <ContextMenu.Item>Go to Implementations</ContextMenu.Item>
        <ContextMenu.Item>
          Go to References
          <ContextMenu.Keyboard keys={["⌘F12"]} />
        </ContextMenu.Item>
        <ContextMenu.Item>
          Peek
          <ContextMenu.Keyboard keys={["⇧F12"]} />
        </ContextMenu.Item>
        <ContextMenu.Separator />
        <ContextMenu.Item>
          Find All References
          <ContextMenu.Keyboard keys={["⌘⇧F"]} />
        </ContextMenu.Item>
        <ContextMenu.Item>
          Find All Implementations
          <ContextMenu.Keyboard keys={["⌘⇧I"]} />
        </ContextMenu.Item>
        <ContextMenu.Item>Show Call Hierarchy</ContextMenu.Item>
        <ContextMenu.Separator />
        <ContextMenu.Item>Rename Symbol</ContextMenu.Item>
        <ContextMenu.Item>Change All Occurrences</ContextMenu.Item>
        <ContextMenu.Item>Format Document</ContextMenu.Item>
        <ContextMenu.Item>
          Refactor...
          <ContextMenu.Keyboard keys={["⌘⇧R"]} />
        </ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu>
  )
}
