"use client"

import React from "react"

import {
  IconAlignmentCenter,
  IconAlignmentLeft,
  IconAlignmentRight,
  IconBold,
  IconClipboard,
  IconCut,
  IconDuplicate,
  IconItalic,
  IconUnderline
} from "@intentui/icons"
import type { Selection } from "react-aria-components"
import { Menu } from "ui"

export default function MenuSectionLevelSelection() {
  const [style, setStyle] = React.useState<Selection>(new Set(["bold"]))
  const [align, setAlign] = React.useState<Selection>(new Set(["left"]))
  return (
    <Menu>
      <Menu.Trigger>Open</Menu.Trigger>
      <Menu.Content placement="bottom" className="sm:min-w-52">
        <Menu.Section title="Actions">
          <Menu.Item textValue="Cut">
            <IconCut />
            Cut
          </Menu.Item>
          <Menu.Item textValue="Copy">
            <IconDuplicate />
            Copy
          </Menu.Item>
          <Menu.Item textValue="Paste">
            <IconClipboard />
            Paste
          </Menu.Item>
        </Menu.Section>
        <Menu.Section
          selectionMode="multiple"
          selectedKeys={style}
          onSelectionChange={setStyle}
          title="Text style"
        >
          <Menu.Checkbox id="bold" textValue="Bold">
            <IconBold />
            Bold
          </Menu.Checkbox>
          <Menu.Checkbox id="italic" textValue="Italic">
            <IconItalic />
            Italic
          </Menu.Checkbox>
          <Menu.Checkbox id="underline" textValue="Underline">
            <IconUnderline />
            Underline
          </Menu.Checkbox>
        </Menu.Section>
        <Menu.Section
          selectionMode="single"
          selectedKeys={align}
          onSelectionChange={setAlign}
          title="Text alignment"
        >
          <Menu.Radio id="left" textValue="Left">
            <IconAlignmentLeft />
            Left
          </Menu.Radio>
          <Menu.Radio id="center" textValue="Cente">
            <IconAlignmentCenter />
            Center
          </Menu.Radio>
          <Menu.Radio id="right" textValue="Right">
            <IconAlignmentRight />
            Right
          </Menu.Radio>
        </Menu.Section>
      </Menu.Content>
    </Menu>
  )
}
