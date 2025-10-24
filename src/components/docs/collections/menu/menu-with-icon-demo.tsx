"use client"

import {
  ArrowLeftOnRectangleIcon,
  Cog6ToothIcon,
  CommandLineIcon,
  ComputerDesktopIcon,
  MoonIcon,
  Squares2X2Icon,
  SunIcon,
} from "@heroicons/react/24/outline"
import { useTheme } from "next-themes"
import { Avatar } from "@/components/ui/avatar"
import {
  Menu,
  MenuContent,
  MenuHeader,
  MenuItem,
  MenuLabel,
  MenuSection,
  MenuSeparator,
  MenuSubMenu,
  MenuTrigger,
} from "@/components/ui/menu"

export default function MenuWithIconDemo() {
  const { resolvedTheme, setTheme } = useTheme()
  return (
    <Menu>
      <MenuTrigger aria-label="Open Menu">
        <Avatar alt="kurt cobain" size="lg" src="https://intentui.com/images/avatar/cobain.jpg" />
      </MenuTrigger>
      <MenuContent popover={{ placement: "bottom" }} className="min-w-64">
        <MenuHeader separator>
          <span className="block">Kurt Cobain</span>
          <span className="font-normal text-muted-fg">@cobain</span>
        </MenuHeader>

        <MenuSection>
          <MenuItem href="#dashboard">
            <Squares2X2Icon className="size-6" aria-hidden="true" />
            <MenuLabel>Dashboard</MenuLabel>
          </MenuItem>
          <MenuItem href="#settings">
            <Cog6ToothIcon className="size-6" aria-hidden="true" />
            <MenuLabel>Settings</MenuLabel>
          </MenuItem>
        </MenuSection>
        <MenuSeparator />
        <MenuItem>
          <CommandLineIcon className="size-6" aria-hidden="true" />
          <MenuLabel>Command Menu</MenuLabel>
        </MenuItem>
        <MenuSubMenu>
          <MenuItem>
            {resolvedTheme === "light" ? (
              <SunIcon className="size-6" aria-hidden="true" />
            ) : resolvedTheme === "dark" ? (
              <MoonIcon className="size-6" aria-hidden="true" />
            ) : (
              <ComputerDesktopIcon className="size-6" aria-hidden="true" />
            )}
            <MenuLabel>Switch theme</MenuLabel>
          </MenuItem>
          <MenuContent>
            <MenuItem onAction={() => setTheme("system")}>
              <ComputerDesktopIcon className="size-6" aria-hidden="true" /> System
            </MenuItem>
            <MenuItem onAction={() => setTheme("dark")}>
              <MoonIcon className="size-6" aria-hidden="true" /> Dark
            </MenuItem>
            <MenuItem onAction={() => setTheme("light")}>
              <SunIcon className="size-6" aria-hidden="true" /> Light
            </MenuItem>
          </MenuContent>
        </MenuSubMenu>
        <MenuSeparator />
        <MenuItem href="#contact-s">
          <MenuLabel>Contact Support</MenuLabel>
        </MenuItem>
        <MenuSeparator />
        <MenuItem href="#logout">
          <ArrowLeftOnRectangleIcon className="size-6" aria-hidden="true" />
          <MenuLabel>Log out</MenuLabel>
        </MenuItem>
      </MenuContent>
    </Menu>
  )
}
