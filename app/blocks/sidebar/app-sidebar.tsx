"use client"

import * as React from "react"

import { useTheme } from "@/components/theme-provider"
import {
  IconArchive,
  IconBrandApple,
  IconChevronLgDown,
  IconCirclePerson,
  IconCreditCard,
  IconCube,
  IconDashboard,
  IconEnvelope,
  IconGlobe,
  IconLogout,
  IconMessage,
  IconMoon,
  IconPeople,
  IconPersonAdd,
  IconPlus,
  IconSettings,
  IconShield,
  IconSun,
  IconWindow
} from "@intentui/icons"
import { usePathname } from "next/navigation"
import { Avatar, Button, Link, Menu, Modal, Sidebar, useSidebar } from "ui"

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  const { theme, setTheme } = useTheme()
  const { state } = useSidebar()
  const collapsed = state === "collapsed"
  const pathname = usePathname()
  return (
    <Sidebar {...props}>
      <Sidebar.Header>
        <Link
          className="flex items-center group-data-[collapsible=dock]:size-10 group-data-[collapsible=dock]:justify-center gap-x-2"
          href="/docs/components/layouts/sidebar"
        >
          <IconBrandApple className="size-5" />
          <strong className="font-medium group-data-[collapsible=dock]:hidden">Apple</strong>
        </Link>
      </Sidebar.Header>
      <Sidebar.Content>
        <Sidebar.Section>
          <SidebarItem icon={IconDashboard} href="/blocks/sidebar/sidebar-01">
            Overview
          </SidebarItem>
          <SidebarItem icon={IconSettings} href="/blocks/sidebar/sidebar-02">
            Settings
          </SidebarItem>
          <SidebarItem icon={IconCreditCard} href="/blocks/sidebar/sidebar-03">
            Billing
          </SidebarItem>
          <SidebarItem icon={IconEnvelope} href="/blocks/sidebar/sidebar-04" badge="49.67K">
            Newsletter
          </SidebarItem>
          <SidebarItem icon={IconMessage} href="/blocks/sidebar/sidebar-05" badge={35}>
            Messages
          </SidebarItem>
        </Sidebar.Section>

        {pathname === "/blocks/sidebar/sidebar-06" && (
          <>
            <Sidebar.Section icon={IconGlobe} collapsible title="Sites">
              <Sidebar.Item isCurrent icon={IconPlus} href="#">
                New site
              </Sidebar.Item>
              <Sidebar.Item icon={IconWindow} href="#">
                List Sites
              </Sidebar.Item>
            </Sidebar.Section>

            <Sidebar.Section defaultExpanded={false} icon={IconPersonAdd} collapsible title="Team">
              <Sidebar.Item icon={IconPeople} href="#">
                Team Overview
              </Sidebar.Item>
              <Sidebar.Item icon={IconPersonAdd} href="#">
                Add New Member
              </Sidebar.Item>
              <Sidebar.Item icon={IconCirclePerson} href="#">
                Manage Roles
              </Sidebar.Item>
            </Sidebar.Section>
          </>
        )}
        {pathname !== "/blocks/sidebar/sidebar-06" && (
          <>
            <Sidebar.Section collapsible title="Projects">
              <Sidebar.Item icon={IconCube} href="#">
                All Projects
              </Sidebar.Item>
              {pathname === "/blocks/sidebar/sidebar-05" ? (
                <Modal>
                  <Sidebar.Item icon={IconPlus}>Create New Project</Sidebar.Item>
                  <Modal.Content>
                    <Modal.Header title="New Project" />
                    <Modal.Footer>
                      <Modal.Close>Close</Modal.Close>
                    </Modal.Footer>
                  </Modal.Content>
                </Modal>
              ) : (
                <Sidebar.Item icon={IconPlus} href="#">
                  Create New Project
                </Sidebar.Item>
              )}
              <Sidebar.Item icon={IconArchive} href="#">
                Archived Projects
              </Sidebar.Item>
            </Sidebar.Section>

            {pathname !== "/blocks/sidebar/sidebar-05" && (
              <Sidebar.Section collapsible title="Team">
                <Sidebar.Item icon={IconPeople} href="#">
                  Team Overview
                </Sidebar.Item>
                <Sidebar.Item icon={IconPersonAdd} href="#">
                  Add New Member
                </Sidebar.Item>
                <Sidebar.Item icon={IconCirclePerson} href="#">
                  Manage Roles
                </Sidebar.Item>
              </Sidebar.Section>
            )}
          </>
        )}
      </Sidebar.Content>
      <Sidebar.Footer className="lg:flex lg:flex-row hidden items-center">
        <Menu>
          <Button
            appearance="plain"
            aria-label="Profile"
            data-slot="menu-trigger"
            className="group"
          >
            <Avatar size="small" shape="square" src="/images/sidebar/profile-slash.jpg" />
            <span className="group-data-[collapsible=dock]:hidden flex items-center justify-center">
              Saul Hudson
              <IconChevronLgDown className="right-3 size-4 absolute group-pressed:rotate-180 transition-transform" />
            </span>
          </Button>
          <Menu.Content
            placement={collapsed ? "right" : "top"}
            className={collapsed ? "sm:min-w-56" : "min-w-[--trigger-width]"}
          >
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
            <Menu.Separator />
            <Menu.Item onAction={() => setTheme(theme === "light" ? "dark" : "light")}>
              {theme === "light" ? <IconMoon /> : <IconSun />}
              Preferences
            </Menu.Item>
            <Menu.Separator />
            <Menu.Item href="#">
              <IconLogout />
              Log out
            </Menu.Item>
          </Menu.Content>
        </Menu>
      </Sidebar.Footer>
      {pathname !== "/blocks/sidebar/sidebar-02" && <Sidebar.Rail />}
    </Sidebar>
  )
}

function SidebarItem({ icon: Icon, ...props }: React.ComponentProps<typeof Sidebar.Item>) {
  const pathname = usePathname()
  return <Sidebar.Item isCurrent={pathname === props.href} icon={Icon} {...props} />
}
