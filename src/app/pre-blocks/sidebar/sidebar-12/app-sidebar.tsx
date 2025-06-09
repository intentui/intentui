"use client"

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
import {
  IconBrandApple,
  IconCart,
  IconChartBar,
  IconChevronLgDown,
  IconCommandRegular,
  IconCube,
  IconDashboard,
  IconGear,
  IconHeadphones,
  IconLogout,
  IconPeople,
  IconSettings,
  IconShield,
} from "@intentui/icons"

export default function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <Link
          className="flex items-center gap-x-2 group-data-[collapsible=dock]:size-10 group-data-[collapsible=dock]:justify-center"
          href="/docs/2.x/components/layouts/sidebar"
        >
          <IconBrandApple className="size-5" />
          <SidebarLabel className="font-medium">Apple</SidebarLabel>
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

      <SidebarFooter>
        <Menu>
          <Menu.Trigger aria-label="Profile" data-slot="menu-trigger">
            <Avatar shape="square" src="/images/avatar/cobain.jpg" />
            <div className="text-sm group-data-[collapsible=dock]:hidden">
              Kurt Cobain
              <span className="-mt-0.5 block text-muted-fg">kurt@cobain.com</span>
            </div>
            <IconChevronLgDown className="absolute right-3 size-4 transition-transform group-pressed:rotate-180" />
          </Menu.Trigger>
          <Menu.Content placement="bottom right" className="sm:min-w-(--trigger-width)">
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
