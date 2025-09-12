"use client"

import {
  IconCommandRegular,
  IconDashboard,
  IconDeviceDesktop,
  IconLogout,
  IconMoon,
  IconSettings,
  IconSun,
} from "@intentui/icons"
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
  MenuSubmenu,
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
            <IconDashboard />
            <MenuLabel>Dashboard</MenuLabel>
          </MenuItem>
          <MenuItem href="#settings">
            <IconSettings />
            <MenuLabel>Settings</MenuLabel>
          </MenuItem>
        </MenuSection>
        <MenuSeparator />
        <MenuItem>
          <IconCommandRegular />
          <MenuLabel>Command Menu</MenuLabel>
        </MenuItem>
        <MenuSubmenu>
          <MenuItem>
            {resolvedTheme === "light" ? (
              <IconSun />
            ) : resolvedTheme === "dark" ? (
              <IconMoon />
            ) : (
              <IconDeviceDesktop />
            )}
            <MenuLabel>Switch theme</MenuLabel>
          </MenuItem>
          <MenuContent>
            <MenuItem onAction={() => setTheme("system")}>
              <IconDeviceDesktop /> System
            </MenuItem>
            <MenuItem onAction={() => setTheme("dark")}>
              <IconMoon /> Dark
            </MenuItem>
            <MenuItem onAction={() => setTheme("light")}>
              <IconSun /> Light
            </MenuItem>
          </MenuContent>
        </MenuSubmenu>
        <MenuSeparator />
        <MenuItem href="#contact-s">
          <MenuLabel>Contact Support</MenuLabel>
        </MenuItem>
        <MenuSeparator />
        <MenuItem href="#logout">
          <IconLogout />
          <MenuLabel>Log out</MenuLabel>
        </MenuItem>
      </MenuContent>
    </Menu>
  )
}
