"use client"

import { useState } from "react"

import { Menu } from "@/components/ui/menu"
import {
  IconAlignmentCenter,
  IconAlignmentLeft,
  IconAlignmentRight,
  IconBold,
  IconClipboard,
  IconCut,
  IconDuplicate,
  IconItalic,
  IconUnderline,
} from "@intentui/icons"
import type { Selection } from "react-aria-components"

export default function MenuSectionLevelSelection() {
  const [style, setStyle] = useState<Selection>(new Set(["bold"]))
  const [align, setAlign] = useState<Selection>(new Set(["left"]))
  return (
    <Menu>
      <Menu.Trigger>Open</Menu.Trigger>
      <Menu.Content placement="bottom" className="sm:min-w-52">
        <Menu.Section title="Actions">
          <Menu.Item textValue="Cut">
            <IconCut />
            <Menu.Label>Cut</Menu.Label>
          </Menu.Item>
          <Menu.Item textValue="Copy">
            <IconDuplicate />
            <Menu.Label>Copy</Menu.Label>
          </Menu.Item>
          <Menu.Item textValue="Paste">
            <IconClipboard />
            <Menu.Label>Paste</Menu.Label>
          </Menu.Item>
        </Menu.Section>
        <Menu.Section
          selectionMode="multiple"
          selectedKeys={style}
          onSelectionChange={setStyle}
          title="Text style"
        >
          <Menu.Item id="bold" textValue="Bold">
            <IconBold />
            <Menu.Label>Bold</Menu.Label>
          </Menu.Item>
          <Menu.Item id="italic" textValue="Italic">
            <IconItalic />
            <Menu.Label>Italic</Menu.Label>
          </Menu.Item>
          <Menu.Item id="underline" textValue="Underline">
            <IconUnderline />
            <Menu.Label>Underline</Menu.Label>
          </Menu.Item>
        </Menu.Section>
        <Menu.Section
          selectionMode="single"
          selectedKeys={align}
          onSelectionChange={setAlign}
          title="Text alignment"
        >
          <Menu.Item id="left" textValue="Left">
            <IconAlignmentLeft />
            <Menu.Label>Left</Menu.Label>
          </Menu.Item>
          <Menu.Item id="center" textValue="Cente">
            <IconAlignmentCenter />
            <Menu.Label>Center</Menu.Label>
          </Menu.Item>
          <Menu.Item id="right" textValue="Right">
            <IconAlignmentRight />
            <Menu.Label>Right</Menu.Label>
          </Menu.Item>
        </Menu.Section>
      </Menu.Content>
    </Menu>
  )
}
