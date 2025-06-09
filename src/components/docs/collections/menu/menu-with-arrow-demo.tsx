"use client"

import { Avatar } from "@/components/ui/avatar"
import { Menu } from "@/components/ui/menu"
import { IconHashtag, IconHeadphones, IconLogout, IconPlus, IconSettings } from "@intentui/icons"

export default function MenuWithArrowDemo() {
  return (
    <>
      <Menu>
        <Menu.Trigger aria-label="Open Menu">
          <Avatar src="/images/avatar/cobain.jpg" />
        </Menu.Trigger>
        <Menu.Content placement="bottom" showArrow className="sm:min-w-54">
          <Menu.Section>
            <Menu.Header separator>
              <span className="block">Irsyad A. Panjaitan</span>
              <span className="font-normal text-muted-fg">@irsyadadl</span>
            </Menu.Header>
          </Menu.Section>
          <Menu.Item>
            <IconSettings />
            <Menu.Label>Settings</Menu.Label>
          </Menu.Item>
          <Menu.Item href="#">
            <IconPlus />
            <Menu.Label>Create Team</Menu.Label>
          </Menu.Item>
          <Menu.Item href="#">
            <IconHashtag />
            <Menu.Label>Command Menu</Menu.Label>
            <Menu.Keyboard keys="⌘K" />
          </Menu.Item>
          <Menu.Separator />
          <Menu.Item href="#">
            <IconHeadphones />
            <Menu.Label>Contact Support</Menu.Label>
          </Menu.Item>
          <Menu.Separator />
          <Menu.Item>
            <IconLogout />
            <Menu.Label>Log out</Menu.Label>
          </Menu.Item>
        </Menu.Content>
      </Menu>
    </>
  )
}
