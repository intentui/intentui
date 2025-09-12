"use client"

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuKeyboard,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

export default function ContextMenuSeparatorDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="grid h-28 place-content-center rounded-lg border-2 border-dashed sm:min-w-60">
        Right click me
      </ContextMenuTrigger>
      <ContextMenuContent className="min-w-60">
        <ContextMenuItem>Go to Definition</ContextMenuItem>
        <ContextMenuItem>Go to Type Definition</ContextMenuItem>
        <ContextMenuItem>Go to Source Definition</ContextMenuItem>
        <ContextMenuItem>Go to Implementations</ContextMenuItem>
        <ContextMenuItem>
          Go to References
          <ContextMenuKeyboard keys={["⌘F12"]} />
        </ContextMenuItem>
        <ContextMenuItem>
          Peek
          <ContextMenuKeyboard keys={["⇧F12"]} />
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>
          Find All References
          <ContextMenuKeyboard keys={["⌘⇧F"]} />
        </ContextMenuItem>
        <ContextMenuItem>
          Find All Implementations
          <ContextMenuKeyboard keys={["⌘⇧I"]} />
        </ContextMenuItem>
        <ContextMenuItem>Show Call Hierarchy</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Rename Symbol</ContextMenuItem>
        <ContextMenuItem>Change All Occurrences</ContextMenuItem>
        <ContextMenuItem>Format Document</ContextMenuItem>
        <ContextMenuItem>
          Refactor...
          <ContextMenuKeyboard keys={["⌘⇧R"]} />
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
