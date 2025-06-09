"use client"

import * as React from "react"

import { AppSidebar } from "@/app/blocks/sidebar/app-sidebar"
import { CommandPalette } from "@/components/command-palette"
import {
  IconChevronLgDown,
  IconCirclePerson,
  IconLogout,
  IconSettings,
  IconShield
} from "@intentui/icons"
import { Avatar, Breadcrumbs, Menu, Separator, Sidebar } from "ui"

export default function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false)
  return (
    <>
      <CommandPalette setOpen={setOpen} openCmd={open} />

      <Sidebar.Provider>
        <AppSidebar collapsible="dock" intent="inset" />
        <Sidebar.Inset>
          <Sidebar.Nav isSticky>
            <Sidebar.Trigger className="-mx-2" />
            <Separator className="h-6 mx-2 sm:block hidden" orientation="vertical" />
            <Breadcrumbs>
              <Breadcrumbs.Item href="/docs/components/layouts/sidebar">Sidebar</Breadcrumbs.Item>
              <Breadcrumbs.Item href="/blocks/sidebar/sidebar-01">Demo</Breadcrumbs.Item>
              <Breadcrumbs.Item>Sidebar-01</Breadcrumbs.Item>
            </Breadcrumbs>
            <Menu>
              <Menu.Trigger
                aria-label="Profile"
                className="flex items-center gap-x-2 group ml-auto sm:hidden"
              >
                <Avatar size="small" shape="circle" src="/images/sidebar/profile-slash.jpg" />
                <IconChevronLgDown className="size-4 group-pressed:rotate-180 transition-transform" />
              </Menu.Trigger>
              <Menu.Content className="min-w-[--trigger-width]">
                <Menu.Item href="#">
                  <IconCirclePerson />
                  Profile
                </Menu.Item>
                <Menu.Item href="#">
                  <IconSettings />
                  Settings
                </Menu.Item>
                <Menu.Item href="#">
                  <IconShield />
                  Security
                </Menu.Item>
                <Menu.Item href="#">
                  <IconLogout />
                  Log out
                </Menu.Item>
              </Menu.Content>
            </Menu>
          </Sidebar.Nav>
          <div className="p-4 lg:p-6">{children}</div>
        </Sidebar.Inset>
      </Sidebar.Provider>
    </>
  )
}
