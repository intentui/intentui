"use client"

import {
  IconArchiveFill,
  IconArrowDownFill,
  IconArrowUpFill,
  IconBrandIntentui,
  IconBuildingFill,
  IconChevronsY,
  IconCircleCheckFill,
  IconCircleQuestionmarkFill,
  IconClockFill,
  IconCreditCardFill,
  IconCube,
  IconDashboardFill,
  IconDotsHorizontal,
  IconHashtagFill,
  IconHeadphonesFill,
  IconListBulletsFill,
  IconLogout,
  IconMessageFill,
  IconNotesFill,
  IconPackageFill,
  IconPlus,
  IconSettingsFill,
  IconShieldFill,
  IconShoppingBagFill,
  IconTicketFill,
} from "@intentui/icons"
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
          <IconBrandIntentui className="size-8" />
          <SidebarLabel className="font-medium">
            Intent <span className="text-muted-fg">UI</span>
          </SidebarLabel>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarSectionGroup>
          <SidebarSection label="Overview">
            <SidebarItem tooltip="Overview" isCurrent href="#">
              <IconDashboardFill />
              <SidebarLabel>Overview</SidebarLabel>
            </SidebarItem>

            <SidebarItem tooltip="Orders">
              {({ isCollapsed, isFocused }) => (
                <>
                  <SidebarLink href="#">
                    <IconShoppingBagFill />
                    <SidebarLabel>Orders</SidebarLabel>
                  </SidebarLink>
                  {(!isCollapsed || isFocused) && (
                    <Menu>
                      <MenuTrigger data-slot="menu-action-trigger" aria-label="Manage">
                        <IconDotsHorizontal />
                      </MenuTrigger>
                      <MenuContent
                        popover={{
                          offset: 0,
                          placement: "right top",
                        }}
                      >
                        <MenuItem href="#new-order">
                          <IconPlus />
                          Create New Order
                        </MenuItem>
                        <MenuItem href="#view-all">
                          <IconListBulletsFill />
                          View All Orders
                        </MenuItem>
                        <MenuItem href="#pending-orders">
                          <IconClockFill />
                          Pending Orders
                        </MenuItem>
                        <MenuItem href="#completed-orders">
                          <IconCircleCheckFill />
                          Completed Orders
                        </MenuItem>
                        <MenuItem href="#export-orders">
                          <IconArrowUpFill />
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
                    <IconCube />
                    <SidebarLabel>Products</SidebarLabel>
                  </SidebarLink>
                  {(!isCollapsed || isFocused) && (
                    <Menu>
                      <MenuTrigger data-slot="menu-action-trigger" aria-label="Manage">
                        <IconDotsHorizontal />
                      </MenuTrigger>
                      <MenuContent
                        popover={{
                          offset: 0,
                          placement: "right top",
                        }}
                      >
                        <MenuItem href="#new-product">
                          <IconPlus />
                          Add New Product
                        </MenuItem>
                        <MenuItem href="#archive">
                          <IconArchiveFill />
                          Archive Product
                        </MenuItem>
                        <MenuItem href="#manage-categories">
                          <IconHashtagFill />
                          Manage Categories
                        </MenuItem>
                        <MenuItem href="#import">
                          <IconArrowDownFill />
                          Import Products
                        </MenuItem>
                        <MenuItem href="#export">
                          <IconArrowUpFill />
                          Export Products
                        </MenuItem>
                      </MenuContent>
                    </Menu>
                  )}
                </>
              )}
            </SidebarItem>
            <SidebarItem href="#" badge="4 Pending" tooltip="Payments">
              <IconCreditCardFill />
              <SidebarLabel>Payments</SidebarLabel>
            </SidebarItem>
          </SidebarSection>

          <SidebarDisclosureGroup defaultExpandedKeys={[1]}>
            <SidebarDisclosure id={1}>
              <SidebarDisclosureTrigger>
                <IconDotsHorizontal />
                <SidebarLabel>Support</SidebarLabel>
              </SidebarDisclosureTrigger>
              <SidebarDisclosurePanel>
                <SidebarItem href="#" tooltip="Tickets">
                  <IconTicketFill />
                  <SidebarLabel>Tickets</SidebarLabel>
                </SidebarItem>
                <SidebarItem href="#" tooltip="Chat Support">
                  <IconMessageFill />
                  <SidebarLabel>Chat Support</SidebarLabel>
                </SidebarItem>
                <SidebarItem href="#" tooltip="FAQ">
                  <IconCircleQuestionmarkFill />
                  <SidebarLabel>FAQ</SidebarLabel>
                </SidebarItem>
                <SidebarItem href="#" tooltip="Documentation">
                  <IconNotesFill />
                  <SidebarLabel>Documentation</SidebarLabel>
                </SidebarItem>
              </SidebarDisclosurePanel>
            </SidebarDisclosure>
            <SidebarDisclosure id={2}>
              <SidebarDisclosureTrigger>
                <IconPackageFill />
                <SidebarLabel>Inventory</SidebarLabel>
              </SidebarDisclosureTrigger>
              <SidebarDisclosurePanel>
                <SidebarItem href="#" tooltip="Warehouse">
                  <IconBuildingFill />
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
            <IconChevronsY data-slot="chevron" />
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
              <IconDashboardFill />
              Dashboard
            </MenuItem>
            <MenuItem href="#settings">
              <IconSettingsFill />
              Settings
            </MenuItem>
            <MenuItem href="#security">
              <IconShieldFill />
              Security
            </MenuItem>
            <MenuSeparator />

            <MenuItem href="#contact">
              <IconHeadphonesFill />
              Customer Support
            </MenuItem>
            <MenuSeparator />
            <MenuItem href="#logout">
              <IconLogout />
              Log out
            </MenuItem>
          </MenuContent>
        </Menu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
