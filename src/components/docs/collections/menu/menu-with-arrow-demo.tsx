"use client"

import {
  ArrowLeftStartOnRectangleIcon,
  Cog6ToothIcon,
  HashtagIcon,
  LifebuoyIcon,
  PlusIcon,
} from "@heroicons/react/24/outline"
import { Avatar } from "@/components/ui/avatar"
import {
  Menu,
  MenuContent,
  MenuHeader,
  MenuItem,
  MenuLabel,
  MenuSection,
  MenuSeparator,
  MenuShortcut,
  MenuTrigger,
} from "@/components/ui/menu"

export default function MenuWithArrowDemo() {
  return (
    <Menu>
      <MenuTrigger aria-label="Open Menu">
        <Avatar src="https://intentui.com/images/avatar/cobain.jpg" />
      </MenuTrigger>
      <MenuContent popover={{ arrow: true, placement: "top" }} className="min-w-54">
        <MenuSection>
          <MenuHeader separator>
            <span className="block">Irsyad A. Panjaitan</span>
            <span className="font-normal text-muted-fg">@irsyadadl</span>
          </MenuHeader>
        </MenuSection>
        <MenuItem>
          <Cog6ToothIcon className="size-6" aria-hidden="true" />
          <MenuLabel>Settings</MenuLabel>
        </MenuItem>
        <MenuItem href="#">
          <PlusIcon className="size-6" aria-hidden="true" />
          <MenuLabel>Create Team</MenuLabel>
        </MenuItem>
        <MenuItem href="#">
          <HashtagIcon className="size-6" aria-hidden="true" />
          <MenuLabel>Command Menu</MenuLabel>
          <MenuShortcut keys="⌘K" />
        </MenuItem>
        <MenuSeparator />
        <MenuItem href="#">
          <LifebuoyIcon className="size-6" aria-hidden="true" />
          <MenuLabel>Contact Support</MenuLabel>
        </MenuItem>
        <MenuSeparator />
        <MenuItem>
          <ArrowLeftStartOnRectangleIcon className="size-6" aria-hidden="true" />
          <MenuLabel>Log out</MenuLabel>
        </MenuItem>
      </MenuContent>
    </Menu>
  )
}
