"use client"

import { IconHashtag, IconHeadphones, IconLogout, IconPlus, IconSettings } from "@intentui/icons"
import { Avatar } from "@/components/ui/avatar"
import {
  Menu,
  MenuContent,
  MenuHeader,
  MenuItem,
  MenuKeyboard,
  MenuLabel,
  MenuSection,
  MenuSeparator,
  MenuTrigger,
} from "@/components/ui/menu"

export default function MenuWithArrowDemo() {
  return (
    <Menu>
      <MenuTrigger aria-label="Open Menu">
        <Avatar src="https://intentui.com/images/avatar/cobain.jpg" />
      </MenuTrigger>
      <MenuContent popover={{ showArrow: true, placement: "top" }} className="min-w-54">
        <MenuSection>
          <MenuHeader separator>
            <span className="block">Irsyad A. Panjaitan</span>
            <span className="font-normal text-muted-fg">@irsyadadl</span>
          </MenuHeader>
        </MenuSection>
        <MenuItem>
          <IconSettings />
          <MenuLabel>Settings</MenuLabel>
        </MenuItem>
        <MenuItem href="#">
          <IconPlus />
          <MenuLabel>Create Team</MenuLabel>
        </MenuItem>
        <MenuItem href="#">
          <IconHashtag />
          <MenuLabel>Command Menu</MenuLabel>
          <MenuKeyboard keys="⌘K" />
        </MenuItem>
        <MenuSeparator />
        <MenuItem href="#">
          <IconHeadphones />
          <MenuLabel>Contact Support</MenuLabel>
        </MenuItem>
        <MenuSeparator />
        <MenuItem>
          <IconLogout />
          <MenuLabel>Log out</MenuLabel>
        </MenuItem>
      </MenuContent>
    </Menu>
  )
}
