"use client"

import {
  ArrowRightOnRectangleIcon,
  ChartBarIcon,
  ChevronUpDownIcon,
  Cog6ToothIcon,
  CubeIcon,
  ShoppingCartIcon,
  Squares2X2Icon,
  UsersIcon,
} from "@heroicons/react/24/outline"
import {
  Cog6ToothIcon as Cog6ToothSolid,
  LifebuoyIcon as LifebuoySolid,
  ShieldCheckIcon as ShieldCheckSolid,
  Squares2X2Icon as Squares2X2Solid,
} from "@heroicons/react/24/solid"
import { Link } from "@/components/link"
import { Avatar } from "@/components/ui/avatar"
import {
  Menu,
  MenuContent,
  MenuHeader,
  MenuItem,
  MenuSection,
  MenuSeparator,
  MenuTrigger,
} from "@/components/ui/menu"
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
          <Avatar
            isSquare
            size="sm"
            className="outline-hidden"
            src="https://design.intentui.com/logo?color=155DFC"
          />
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
          <MenuTrigger className="flex w-full items-center justify-between" aria-label="Profile">
            <div className="flex items-center gap-x-2">
              <Avatar
                className="size-8 *:size-8 group-data-[state=collapsed]:size-6 group-data-[state=collapsed]:*:size-6"
                isSquare
                src="https://intentui.com/images/avatar/cobain.jpg"
              />
              <div className="in-data-[collapsible=dock]:hidden text-sm">
                <SidebarLabel>Kurt Cobain</SidebarLabel>
                <span className="-mt-0.5 block text-muted-fg">@kurtcobain</span>
              </div>
            </div>
            <ChevronUpDownIcon data-slot="chevron" />
          </MenuTrigger>
          <MenuContent
            className="in-data-[sidebar-collapsible=collapsed]:min-w-56 min-w-(--trigger-width)"
            placement="bottom right"
          >
            <MenuSection>
              <MenuHeader separator>
                <span className="block">Kurt Cobain</span>
                <span className="font-normal text-muted-fg">@cobain</span>
              </MenuHeader>
            </MenuSection>

            <MenuItem href="#dashboard">
              <Squares2X2Solid />
              Dashboard
            </MenuItem>
            <MenuItem href="#settings">
              <Cog6ToothSolid />
              Settings
            </MenuItem>
            <MenuItem href="#security">
              <ShieldCheckSolid />
              Security
            </MenuItem>
            <MenuSeparator />

            <MenuItem href="#contact">
              <LifebuoySolid />
              Customer Support
            </MenuItem>
            <MenuSeparator />
            <MenuItem href="#logout">
              <ArrowRightOnRectangleIcon />
              Log out
            </MenuItem>
          </MenuContent>
        </Menu>
      </SidebarFooter>
    </Sidebar>
  )
}

const navigation = [
  { label: "Overview", icon: <Squares2X2Icon />, isCurrent: true, badge: undefined },
  { label: "Orders", icon: <ShoppingCartIcon />, isCurrent: false, badge: 24 },
  { label: "Products", icon: <CubeIcon />, isCurrent: false, badge: "31.51K" },
  { label: "Customers", icon: <UsersIcon />, isCurrent: false, badge: "12K" },
  { label: "Reports", icon: <ChartBarIcon />, isCurrent: false, badge: 3 },
  { label: "Settings", icon: <Cog6ToothIcon />, isCurrent: false, badge: undefined },
]
