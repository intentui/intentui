"use client"

import {
  IconBrandIntentui,
  IconCart,
  IconChartBar,
  IconChevronsY,
  IconCube,
  IconDashboard,
  IconDashboardFill,
  IconGear,
  IconHeadphonesFill,
  IconLogout,
  IconPeople,
  IconSettingsFill,
  IconShieldFill,
} from "@intentui/icons"
import { Avatar } from "@/components/ui/avatar"
import { Link } from "@/components/ui/link"
import { Menu } from "@/components/ui/menu"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
  SidebarSectionGroup,
} from "@/components/ui/sidebar"

export default function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <Link
          className="flex items-center gap-x-2 group-data-[collapsible=dock]:size-10 group-data-[collapsible=dock]:justify-center"
          href="/docs/components/layouts/sidebar"
        >
          <IconBrandIntentui className="size-6" />
          <SidebarLabel className="font-medium">
            Intent <span className="text-muted-fg">UI</span>
          </SidebarLabel>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarSectionGroup>
          <SidebarSection>
            {navigation.map((item, index) => (
              <SidebarItem
                tooltip={item.label}
                key={index}
                isCurrent={item.isCurrent}
                href="#"
                badge={item?.badge}
              >
                {item.icon}
                <SidebarLabel>{item.label}</SidebarLabel>
              </SidebarItem>
            ))}
          </SidebarSection>
        </SidebarSectionGroup>
      </SidebarContent>

      <SidebarFooter className="flex flex-row justify-between gap-4 group-data-[state=collapsed]:flex-col">
        <Menu>
          <Menu.Trigger className="flex w-full items-center justify-between" aria-label="Profile">
            <div className="flex items-center gap-x-2">
              <Avatar
                className="size-8 *:size-8 group-data-[state=collapsed]:size-6 group-data-[state=collapsed]:*:size-6"
                isSquare
                src="https://intentui.com/images/avatar/cobain.jpg"
              />

              <div className="in-data-[collapsible=dock]:hidden text-sm">
                <SidebarLabel>Kurt Cobain</SidebarLabel>
                <span className="-mt-0.5 block text-muted-fg">kurt@domain.com</span>
              </div>
            </div>
            <IconChevronsY data-slot="chevron" />
          </Menu.Trigger>
          <Menu.Content
            className="in-data-[sidebar-collapsible=collapsed]:min-w-56 min-w-(--trigger-width)"
            placement="bottom right"
          >
            <Menu.Section>
              <Menu.Header separator>
                <span className="block">Kurt Cobain</span>
                <span className="font-normal text-muted-fg">@cobain</span>
              </Menu.Header>
            </Menu.Section>

            <Menu.Item href="#dashboard">
              <IconDashboardFill />
              Dashboard
            </Menu.Item>
            <Menu.Item href="#settings">
              <IconSettingsFill />
              Settings
            </Menu.Item>
            <Menu.Item href="#security">
              <IconShieldFill />
              Security
            </Menu.Item>
            <Menu.Separator />

            <Menu.Item href="#contact">
              <IconHeadphonesFill />
              Customer Support
            </Menu.Item>
            <Menu.Separator />
            <Menu.Item href="#logout">
              <IconLogout />
              Log out
            </Menu.Item>
          </Menu.Content>
        </Menu>
      </SidebarFooter>
    </Sidebar>
  )
}

const navigation = [
  { label: "Overview", icon: <IconDashboard />, isCurrent: true, badge: undefined },
  { label: "Orders", icon: <IconCart />, isCurrent: false, badge: 24 },
  { label: "Products", icon: <IconCube />, isCurrent: false, badge: "31.51K" },
  { label: "Customers", icon: <IconPeople />, isCurrent: false, badge: "12K" },
  { label: "Reports", icon: <IconChartBar />, isCurrent: false, badge: 3 },
  { label: "Settings", icon: <IconGear />, isCurrent: false, badge: undefined },
]
