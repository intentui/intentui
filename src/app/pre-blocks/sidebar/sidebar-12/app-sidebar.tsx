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
  useSidebar,
} from "@/components/ui/sidebar"
import {
  IconBrandApple,
  IconCart,
  IconChartBar,
  IconChevronsY,
  IconCube,
  IconDashboard,
  IconGear,
  IconHeadphones,
  IconLogout,
  IconPeople,
  IconSettings,
  IconShield,
} from "@intentui/icons"
import { twMerge } from "tailwind-merge"

export default function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  const { state } = useSidebar()
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <Link
          className="flex items-center gap-x-2 group-data-[collapsible=dock]:size-10 group-data-[collapsible=dock]:justify-center"
          href="/docs/components/layouts/sidebar"
        >
          <IconBrandApple className="size-5" />
          <SidebarLabel className="font-medium">Intent UI</SidebarLabel>
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
          <Menu.Trigger className="group" aria-label="Profile">
            <Avatar isSquare src="https://intentui.com/images/avatar/cobain.jpg" />
            <div className="in-data-[sidebar-collapsible=dock]:hidden text-sm">
              <SidebarLabel>Kurt Cobain</SidebarLabel>
              <span className="-mt-0.5 block text-muted-fg">kurt@cobain.com</span>
            </div>
            <IconChevronsY data-slot="chevron" className="right-3" />
          </Menu.Trigger>
          <Menu.Content
            placement="bottom right"
            className={twMerge(state === "expanded" ? "sm:min-w-(--trigger-width)" : "sm:min-w-60")}
          >
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
