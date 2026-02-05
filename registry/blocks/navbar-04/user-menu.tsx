"use client"

import {
  ArrowRightOnRectangleIcon,
  Cog6ToothIcon,
  CommandLineIcon,
  LifebuoyIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline"
import { Avatar } from "@/components/ui/avatar"
import {
  Menu,
  MenuContent,
  MenuHeader,
  MenuItem,
  MenuSection,
  MenuSeparator,
  MenuTrigger,
} from "@/components/ui/menu"

export function UserMenu() {
  return (
    <Menu>
      <MenuTrigger aria-label="Open Menu">
        <Avatar
          alt="cobain"
          size="md"
          isSquare
          src="https://intentui.com/images/avatar/cobain.jpg"
        />
      </MenuTrigger>
      <MenuContent placement="bottom right" className="min-w-60 sm:min-w-56">
        <MenuSection>
          <MenuHeader separator>
            <span className="block">Kurt Cobain</span>
            <span className="font-normal text-muted-fg">@cobain</span>
          </MenuHeader>
        </MenuSection>

        <MenuItem href="#dashboard">
          <Squares2X2Icon />
          Dashboard
        </MenuItem>
        <MenuItem href="#settings">
          <Cog6ToothIcon />
          Settings
        </MenuItem>
        <MenuItem href="#security">
          <ShieldCheckIcon />
          Security
        </MenuItem>
        <MenuSeparator />
        <MenuItem>
          <CommandLineIcon />
          Command Menu
        </MenuItem>

        <MenuItem href="#contact">
          <LifebuoyIcon />
          Customer Support
        </MenuItem>
        <MenuSeparator />
        <MenuItem href="#logout">
          <ArrowRightOnRectangleIcon />
          Log out
        </MenuItem>
      </MenuContent>
    </Menu>
  )
}
