"use client"

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
import { useState } from "react"
import type { Selection } from "react-aria-components"
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuLabel,
  MenuSection,
  MenuTrigger,
} from "@/components/ui/menu"

export default function MenuSectionLevelSelection() {
  const [style, setStyle] = useState<Selection>(new Set(["bold"]))
  const [align, setAlign] = useState<Selection>(new Set(["left"]))
  return (
    <Menu>
      <MenuTrigger>Open</MenuTrigger>
      <MenuContent popover={{ placement: "bottom" }} className="min-w-52">
        <MenuSection title="Actions">
          <MenuItem textValue="Cut">
            <IconCut />
            <MenuLabel>Cut</MenuLabel>
          </MenuItem>
          <MenuItem textValue="Copy">
            <IconDuplicate />
            <MenuLabel>Copy</MenuLabel>
          </MenuItem>
          <MenuItem textValue="Paste">
            <IconClipboard />
            <MenuLabel>Paste</MenuLabel>
          </MenuItem>
        </MenuSection>
        <MenuSection
          selectionMode="multiple"
          selectedKeys={style}
          onSelectionChange={setStyle}
          title="Text style"
        >
          <MenuItem id="bold" textValue="Bold">
            <IconBold />
            <MenuLabel>Bold</MenuLabel>
          </MenuItem>
          <MenuItem id="italic" textValue="Italic">
            <IconItalic />
            <MenuLabel>Italic</MenuLabel>
          </MenuItem>
          <MenuItem id="underline" textValue="Underline">
            <IconUnderline />
            <MenuLabel>Underline</MenuLabel>
          </MenuItem>
        </MenuSection>
        <MenuSection
          selectionMode="single"
          selectedKeys={align}
          onSelectionChange={setAlign}
          title="Text alignment"
        >
          <MenuItem id="left" textValue="Left">
            <IconAlignmentLeft />
            <MenuLabel>Left</MenuLabel>
          </MenuItem>
          <MenuItem id="center" textValue="Cente">
            <IconAlignmentCenter />
            <MenuLabel>Center</MenuLabel>
          </MenuItem>
          <MenuItem id="right" textValue="Right">
            <IconAlignmentRight />
            <MenuLabel>Right</MenuLabel>
          </MenuItem>
        </MenuSection>
      </MenuContent>
    </Menu>
  )
}
