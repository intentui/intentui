"use client"

import { Avatar } from "@/components/ui/avatar"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { Menu } from "@/components/ui/menu"
import { SidebarNav, SidebarTrigger } from "@/components/ui/sidebar"
import { IconCommandRegular, IconDashboard, IconLogout, IconSettings } from "@intentui/icons"

export default function AppSidebarNav() {
  return (
    <SidebarNav>
      <span className="flex items-center gap-x-4">
        <SidebarTrigger className="-ml-2" />
        <Breadcrumbs className="hidden md:flex">
          <Breadcrumbs.Item href="/blocks/sidebar/sidebar-01">Dashboard</Breadcrumbs.Item>
          <Breadcrumbs.Item>Newsletter</Breadcrumbs.Item>
        </Breadcrumbs>
      </span>
      <UserMenu />
    </SidebarNav>
  )
}

function UserMenu() {
  return (
    <Menu>
      <Menu.Trigger className="ml-auto md:hidden" aria-label="Open Menu">
        <Avatar isSquare alt="kurt cobain" src="https://intentui.com/images/avatar/cobain.jpg" />
      </Menu.Trigger>
      <Menu.Content popover={{ placement: "bottom end" }} className="min-w-64">
        <Menu.Section>
          <Menu.Header separator>
            <span className="block">Kurt Cobain</span>
            <span className="font-normal text-muted-fg">@cobain</span>
          </Menu.Header>
        </Menu.Section>
        <Menu.Item href="#dashboard">
          <IconDashboard />
          <Menu.Label>Dashboard</Menu.Label>
        </Menu.Item>
        <Menu.Item href="#settings">
          <IconSettings />
          <Menu.Label>Settings</Menu.Label>
        </Menu.Item>
        <Menu.Separator />
        <Menu.Item>
          <IconCommandRegular />
          <Menu.Label>Command Menu</Menu.Label>
        </Menu.Item>
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
