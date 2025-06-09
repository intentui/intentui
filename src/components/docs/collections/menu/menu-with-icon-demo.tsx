"use client"

import { Avatar } from "@/components/ui/avatar"
import { Menu } from "@/components/ui/menu"
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

export default function MenuWithIconDemo() {
  const { resolvedTheme, setTheme } = useTheme()
  return (
    <Menu>
      <Menu.Trigger aria-label="Open Menu">
        <Avatar alt="kurt cobain" size="large" src="/images/avatar/cobain.jpg" />
      </Menu.Trigger>
      <Menu.Content placement="bottom" showArrow className="sm:min-w-64">
        <Menu.Header separator>
          <span className="block">Kurt Cobain</span>
          <span className="font-normal text-muted-fg">@cobain</span>
        </Menu.Header>

        <Menu.Section>
          <Menu.Item href="#dashboard">
            <IconDashboard />
            <Menu.Label>Dashboard</Menu.Label>
          </Menu.Item>
          <Menu.Item href="#settings">
            <IconSettings />
            <Menu.Label>Settings</Menu.Label>
          </Menu.Item>
        </Menu.Section>
        <Menu.Separator />
        <Menu.Item>
          <IconCommandRegular />
          <Menu.Label>Command Menu</Menu.Label>
        </Menu.Item>
        <Menu.Submenu>
          <Menu.Item>
            {resolvedTheme === "light" ? (
              <IconSun />
            ) : resolvedTheme === "dark" ? (
              <IconMoon />
            ) : (
              <IconDeviceDesktop />
            )}
            <Menu.Label>Switch theme</Menu.Label>
          </Menu.Item>
          <Menu.Content>
            <Menu.Item onAction={() => setTheme("system")}>
              <IconDeviceDesktop /> System
            </Menu.Item>
            <Menu.Item onAction={() => setTheme("dark")}>
              <IconMoon /> Dark
            </Menu.Item>
            <Menu.Item onAction={() => setTheme("light")}>
              <IconSun /> Light
            </Menu.Item>
          </Menu.Content>
        </Menu.Submenu>
        <Menu.Separator />
        <Menu.Item href="#contact-s">
          <Menu.Label>Contact Support</Menu.Label>
        </Menu.Item>
        <Menu.Separator />
        <Menu.Item href="#logout">
          <IconLogout />
          <Menu.Label>Log out</Menu.Label>
        </Menu.Item>
      </Menu.Content>
    </Menu>
  )
}
