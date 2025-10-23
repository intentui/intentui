"use client"

import {
  BoldIcon,
  ClipboardDocumentIcon,
  DocumentDuplicateIcon,
  ItalicIcon,
  ScissorsIcon,
  UnderlineIcon,
} from "@heroicons/react/24/outline"
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
        <MenuSection label="Actions">
          <MenuItem textValue="Cut">
            <ScissorsIcon />
            <MenuLabel>Cut</MenuLabel>
          </MenuItem>
          <MenuItem textValue="Copy">
            <DocumentDuplicateIcon />
            <MenuLabel>Copy</MenuLabel>
          </MenuItem>
          <MenuItem textValue="Paste">
            <ClipboardDocumentIcon />
            <MenuLabel>Paste</MenuLabel>
          </MenuItem>
        </MenuSection>
        <MenuSection
          selectionMode="multiple"
          selectedKeys={style}
          onSelectionChange={setStyle}
          label="Text style"
        >
          <MenuItem id="bold" textValue="Bold">
            <BoldIcon />
            <MenuLabel>Bold</MenuLabel>
          </MenuItem>
          <MenuItem id="italic" textValue="Italic">
            <ItalicIcon />
            <MenuLabel>Italic</MenuLabel>
          </MenuItem>
          <MenuItem id="underline" textValue="Underline">
            <UnderlineIcon />
            <MenuLabel>Underline</MenuLabel>
          </MenuItem>
        </MenuSection>
        <MenuSection
          selectionMode="single"
          selectedKeys={align}
          onSelectionChange={setAlign}
          label="Text alignment"
        >
          <MenuItem id="left" textValue="Left">
            <MenuLabel>Left</MenuLabel>
          </MenuItem>
          <MenuItem id="center" textValue="Cente">
            <MenuLabel>Center</MenuLabel>
          </MenuItem>
          <MenuItem id="right" textValue="Right">
            <MenuLabel>Right</MenuLabel>
          </MenuItem>
        </MenuSection>
      </MenuContent>
    </Menu>
  )
}
