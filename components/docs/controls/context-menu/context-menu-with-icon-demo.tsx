"use client"

import React from "react"

import { IconDuplicate, IconFolder, IconHighlight, IconTrash, IconUpload } from "@intentui/icons"
import { ContextMenu } from "ui"

export default function ContextMenuWithIconDemo() {
  return (
    <ContextMenu>
      <ContextMenu.Trigger className="h-28 w-56 border-2 border-dashed rounded-lg grid place-content-center">
        Right click me
      </ContextMenu.Trigger>
      <ContextMenu.Content>
        <ContextMenu.Item>
          <IconFolder />
          Open
        </ContextMenu.Item>
        <ContextMenu.Item>
          <IconHighlight />
          Rename
        </ContextMenu.Item>
        <ContextMenu.Item>
          <IconDuplicate />
          Duplicate
        </ContextMenu.Item>
        <ContextMenu.Item>
          <IconUpload />
          Share
        </ContextMenu.Item>
        <ContextMenu.Separator />
        <ContextMenu.Item isDanger>
          <IconTrash />
          Delete
        </ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu>
  )
}
