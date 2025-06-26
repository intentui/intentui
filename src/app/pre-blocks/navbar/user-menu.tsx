"use client"

import { Avatar } from "@/components/ui/avatar"
import { Menu } from "@/components/ui/menu"
import {
  IconCommandRegular,
  IconDashboard,
  IconHeadphones,
  IconLogout,
  IconSettings,
  IconShield,
} from "@intentui/icons"

export function UserMenu() {
  return (
    <Menu>
      <Menu.Trigger aria-label="Open Menu">
        <Avatar
          alt="cobain"
          size="md"
          isSquare
          src="https://intentui.com/images/avatar/cobain.jpg"
        />
      </Menu.Trigger>
      <Menu.Content placement="bottom right" className="min-w-60 sm:min-w-56">
        <Menu.Section>
          <Menu.Header separator>
            <span className="block">Kurt Cobain</span>
            <span className="font-normal text-muted-fg">@cobain</span>
          </Menu.Header>
        </Menu.Section>

        <Menu.Item href="#dashboard">
          <IconDashboard />
          Dashboard
        </Menu.Item>
        <Menu.Item href="#settings">
          <IconSettings />
          Settings
        </Menu.Item>
        <Menu.Item href="#security">
          <IconShield />
          Security
        </Menu.Item>
        <Menu.Separator />
        <Menu.Item>
          <IconCommandRegular />
          Command Menu
        </Menu.Item>

        <Menu.Item href="#contact">
          <IconHeadphones />
          Customer Support
        </Menu.Item>
        <Menu.Separator />
        <Menu.Item href="#logout">
          <IconLogout />
          Log out
        </Menu.Item>
      </Menu.Content>
    </Menu>
  )
}
