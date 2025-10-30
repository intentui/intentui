"use client"

import {
  ChevronUpDownIcon,
  CubeIcon,
  EllipsisHorizontalIcon,
  HashtagIcon,
  PlusIcon,
} from "@heroicons/react/24/outline"
import {
  ArchiveBoxIcon as ArchiveBoxSolid,
  ArrowDownTrayIcon as ArrowDownTraySolid,
  ArrowLeftStartOnRectangleIcon as ArrowRightOnRectangleSolid,
  ArrowUpTrayIcon as ArrowUpTraySolid,
  BuildingOfficeIcon as BuildingOfficeSolid,
  ChatBubbleLeftRightIcon as ChatBubbleLeftRightSolid,
  CheckCircleIcon as CheckCircleSolid,
  ClockIcon as ClockSolid,
  Cog6ToothIcon as Cog6ToothSolid,
  CreditCardIcon as CreditCardSolid,
  DocumentTextIcon as DocumentTextSolid,
  HomeIcon as HomeSolid,
  LifebuoyIcon as LifebuoySolid,
  ListBulletIcon as ListBulletSolid,
  CubeIcon as PackageSolid,
  QuestionMarkCircleIcon as QuestionMarkCircleSolid,
  ShieldCheckIcon as ShieldCheckSolid,
  ShoppingBagIcon as ShoppingBagSolid,
  TicketIcon as TicketSolid,
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
              <HomeSolid />
              <SidebarLabel>Overview</SidebarLabel>
            </SidebarItem>

            <SidebarItem tooltip="Orders">
              {({ isCollapsed, isFocused }) => (
                <>
                  <SidebarLink href="#">
                    <ShoppingBagSolid />
                    <SidebarLabel>Orders</SidebarLabel>
                  </SidebarLink>
                  {(!isCollapsed || isFocused) && (
                    <Menu>
                      <MenuTrigger aria-label="Manage">
                        <EllipsisHorizontalIcon />
                      </MenuTrigger>
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
                          <ListBulletSolid />
                          View All Orders
                        </MenuItem>
                        <MenuItem href="#pending-orders">
                          <ClockSolid />
                          Pending Orders
                        </MenuItem>
                        <MenuItem href="#completed-orders">
                          <CheckCircleSolid />
                          Completed Orders
                        </MenuItem>
                        <MenuItem href="#export-orders">
                          <ArrowUpTraySolid />
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
                      <MenuTrigger aria-label="Manage">
                        <EllipsisHorizontalIcon />
                      </MenuTrigger>
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
                          <ArchiveBoxSolid />
                          Archive Product
                        </MenuItem>
                        <MenuItem href="#manage-categories">
                          <HashtagIcon />
                          Manage Categories
                        </MenuItem>
                        <MenuItem href="#import">
                          <ArrowDownTraySolid />
                          Import Products
                        </MenuItem>
                        <MenuItem href="#export">
                          <ArrowUpTraySolid />
                          Export Products
                        </MenuItem>
                      </MenuContent>
                    </Menu>
                  )}
                </>
              )}
            </SidebarItem>
            <SidebarItem href="#" badge="4 Pending" tooltip="Payments">
              <CreditCardSolid />
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
                  <TicketSolid />
                  <SidebarLabel>Tickets</SidebarLabel>
                </SidebarItem>
                <SidebarItem href="#" tooltip="Chat Support">
                  <ChatBubbleLeftRightSolid />
                  <SidebarLabel>Chat Support</SidebarLabel>
                </SidebarItem>
                <SidebarItem href="#" tooltip="FAQ">
                  <QuestionMarkCircleSolid />
                  <SidebarLabel>FAQ</SidebarLabel>
                </SidebarItem>
                <SidebarItem href="#" tooltip="Documentation">
                  <DocumentTextSolid />
                  <SidebarLabel>Documentation</SidebarLabel>
                </SidebarItem>
              </SidebarDisclosurePanel>
            </SidebarDisclosure>
            <SidebarDisclosure id={2}>
              <SidebarDisclosureTrigger>
                <PackageSolid />
                <SidebarLabel>Inventory</SidebarLabel>
              </SidebarDisclosureTrigger>
              <SidebarDisclosurePanel>
                <SidebarItem href="#" tooltip="Warehouse">
                  <BuildingOfficeSolid />
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
              <HomeSolid />
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
              <ArrowRightOnRectangleSolid />
              Log out
            </MenuItem>
          </MenuContent>
        </Menu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
