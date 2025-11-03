"use client"

import { EllipsisHorizontalIcon } from "@heroicons/react/16/solid"
import { ChevronUpDownIcon, CubeIcon, HashtagIcon, PlusIcon } from "@heroicons/react/24/outline"
import {
  ArchiveBoxIcon,
  ArrowDownTrayIcon,
  ArrowRightStartOnRectangleIcon,
  ArrowUpTrayIcon,
  BuildingOfficeIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  ClockIcon,
  Cog6ToothIcon,
  CreditCardIcon,
  DocumentTextIcon,
  HomeIcon,
  LifebuoyIcon,
  ListBulletIcon,
  QuestionMarkCircleIcon,
  ShieldCheckIcon,
  ShoppingBagIcon,
  TicketIcon,
} from "@heroicons/react/24/solid"
import { Avatar } from "@/components/ui/avatar"
import { Link } from "@/components/ui/link"
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
  SidebarDisclosure,
  SidebarDisclosureGroup,
  SidebarDisclosurePanel,
  SidebarDisclosureTrigger,
  SidebarFooter,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
  SidebarLink,
  SidebarMenuTrigger,
  SidebarRail,
  SidebarSection,
  SidebarSectionGroup,
} from "@/components/ui/sidebar"

export default function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <Link href="/docs/components/layouts/sidebar" className="flex items-center gap-x-2">
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
          <SidebarSection label="Overview">
            <SidebarItem tooltip="Overview" isCurrent href="#">
              <HomeIcon />
              <SidebarLabel>Overview</SidebarLabel>
            </SidebarItem>

            <SidebarItem tooltip="Orders">
              {({ isCollapsed, isFocused }) => (
                <>
                  <SidebarLink href="#">
                    <ShoppingBagIcon />
                    <SidebarLabel>Orders</SidebarLabel>
                  </SidebarLink>
                  {(!isCollapsed || isFocused) && (
                    <Menu>
                      <SidebarMenuTrigger aria-label="Manage">
                        <EllipsisHorizontalIcon />
                      </SidebarMenuTrigger>
                      <MenuContent
                        popover={{
                          offset: 0,
                          placement: "right top",
                        }}
                      >
                        <MenuItem href="#new-order">
                          <PlusIcon />
                          Create New Order
                        </MenuItem>
                        <MenuItem href="#view-all">
                          <ListBulletIcon />
                          View All Orders
                        </MenuItem>
                        <MenuItem href="#pending-orders">
                          <ClockIcon />
                          Pending Orders
                        </MenuItem>
                        <MenuItem href="#completed-orders">
                          <CheckCircleIcon />
                          Completed Orders
                        </MenuItem>
                        <MenuItem href="#export-orders">
                          <ArrowUpTrayIcon />
                          Export Orders
                        </MenuItem>
                      </MenuContent>
                    </Menu>
                  )}
                </>
              )}
            </SidebarItem>

            <SidebarItem tooltip="Products">
              {({ isCollapsed, isFocused }) => (
                <>
                  <SidebarLink href="#">
                    <CubeIcon />
                    <SidebarLabel>Products</SidebarLabel>
                  </SidebarLink>
                  {(!isCollapsed || isFocused) && (
                    <Menu>
                      <SidebarMenuTrigger aria-label="Manage">
                        <EllipsisHorizontalIcon />
                      </SidebarMenuTrigger>
                      <MenuContent
                        popover={{
                          offset: 0,
                          placement: "right top",
                        }}
                      >
                        <MenuItem href="#new-product">
                          <PlusIcon />
                          Add New Product
                        </MenuItem>
                        <MenuItem href="#archive">
                          <ArchiveBoxIcon />
                          Archive Product
                        </MenuItem>
                        <MenuItem href="#manage-categories">
                          <HashtagIcon />
                          Manage Categories
                        </MenuItem>
                        <MenuItem href="#import">
                          <ArrowDownTrayIcon />
                          Import Products
                        </MenuItem>
                        <MenuItem href="#export">
                          <ArrowUpTrayIcon />
                          Export Products
                        </MenuItem>
                      </MenuContent>
                    </Menu>
                  )}
                </>
              )}
            </SidebarItem>

            <SidebarItem href="#" badge="4 Pending" tooltip="Payments">
              <CreditCardIcon />
              <SidebarLabel>Payments</SidebarLabel>
            </SidebarItem>
          </SidebarSection>

          <SidebarDisclosureGroup defaultExpandedKeys={[1]}>
            <SidebarDisclosure id={1}>
              <SidebarDisclosureTrigger>
                <EllipsisHorizontalIcon />
                <SidebarLabel>Support</SidebarLabel>
              </SidebarDisclosureTrigger>
              <SidebarDisclosurePanel>
                <SidebarItem href="#" tooltip="Tickets">
                  <TicketIcon />
                  <SidebarLabel>Tickets</SidebarLabel>
                </SidebarItem>
                <SidebarItem href="#" tooltip="Chat Support">
                  <ChatBubbleLeftRightIcon />
                  <SidebarLabel>Chat Support</SidebarLabel>
                </SidebarItem>
                <SidebarItem href="#" tooltip="FAQ">
                  <QuestionMarkCircleIcon />
                  <SidebarLabel>FAQ</SidebarLabel>
                </SidebarItem>
                <SidebarItem href="#" tooltip="Documentation">
                  <DocumentTextIcon />
                  <SidebarLabel>Documentation</SidebarLabel>
                </SidebarItem>
              </SidebarDisclosurePanel>
            </SidebarDisclosure>
            <SidebarDisclosure id={2}>
              <SidebarDisclosureTrigger>
                <ArchiveBoxIcon />
                <SidebarLabel>Inventory</SidebarLabel>
              </SidebarDisclosureTrigger>
              <SidebarDisclosurePanel>
                <SidebarItem href="#" tooltip="Warehouse">
                  <BuildingOfficeIcon />
                  <SidebarLabel>Warehouse</SidebarLabel>
                </SidebarItem>
                <SidebarItem href="#" tooltip="Stock Levels">
                  <SidebarLabel>Stock Levels</SidebarLabel>
                </SidebarItem>
                <SidebarItem href="#" tooltip="Shipping">
                  <SidebarLabel>Shipping</SidebarLabel>
                </SidebarItem>
              </SidebarDisclosurePanel>
            </SidebarDisclosure>
          </SidebarDisclosureGroup>
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
                <span className="-mt-0.5 block text-muted-fg">kurt@domain.com</span>
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
              <HomeIcon />
              Dashboard
            </MenuItem>
            <MenuItem href="#settings">
              <Cog6ToothIcon />
              Settings
            </MenuItem>
            <MenuItem href="#security">
              <ShieldCheckIcon />
              Security
            </MenuItem>
            <MenuSeparator />
            <MenuItem href="#contact">
              <LifebuoyIcon />
              Customer Support
            </MenuItem>
            <MenuSeparator />
            <MenuItem href="#logout">
              <ArrowRightStartOnRectangleIcon />
              Log out
            </MenuItem>
          </MenuContent>
        </Menu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
