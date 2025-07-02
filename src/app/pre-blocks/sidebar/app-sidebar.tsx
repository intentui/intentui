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
import { Menu } from "@/components/ui/menu"
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
        <Link
          className="flex items-center gap-x-2 group-data-[collapsible=dock]:size-10 group-data-[collapsible=dock]:justify-center"
          href="/docs/components/layouts/sidebar"
        >
          <IconBrandIntentui className="size-7" />
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
                      <Menu.Trigger data-slot="menu-trigger" aria-label="Manage">
                        <IconDotsHorizontal />
                      </Menu.Trigger>
                      <Menu.Content popover={{ offset: 0, placement: "right top" }}>
                        <Menu.Item href="#new-order">
                          <IconPlus />
                          Create New Order
                        </Menu.Item>
                        <Menu.Item href="#view-all">
                          <IconListBulletsFill />
                          View All Orders
                        </Menu.Item>
                        <Menu.Item href="#pending-orders">
                          <IconClockFill />
                          Pending Orders
                        </Menu.Item>
                        <Menu.Item href="#completed-orders">
                          <IconCircleCheckFill />
                          Completed Orders
                        </Menu.Item>
                        <Menu.Item href="#export-orders">
                          <IconArrowUpFill />
                          Export Orders
                        </Menu.Item>
                      </Menu.Content>
                    </Menu>
                  )}
                </>
              )}
            </SidebarItem>
            <SidebarItem tooltip="Products">
              {({ isCollapsed, isFocused }) => (
                <>
                  <SidebarLink href="#">
                    <SidebarLabel>Products</SidebarLabel>
                  </SidebarLink>
                  {(!isCollapsed || isFocused) && (
                    <Menu>
                      <Menu.Trigger aria-label="Manage">
                        <IconDotsHorizontal />
                      </Menu.Trigger>
                      <Menu.Content popover={{ offset: 0, placement: "right top" }}>
                        <Menu.Item href="#new-product">
                          <IconPlus />
                          Add New Product
                        </Menu.Item>
                        <Menu.Item href="#archive">
                          <IconArchiveFill />
                          Archive Product
                        </Menu.Item>
                        <Menu.Item href="#manage-categories">
                          <IconHashtagFill />
                          Manage Categories
                        </Menu.Item>
                        <Menu.Item href="#import">
                          <IconArrowDownFill />
                          Import Products
                        </Menu.Item>
                        <Menu.Item href="#export">
                          <IconArrowUpFill />
                          Export Products
                        </Menu.Item>
                      </Menu.Content>
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
          <Menu.Content className="min-w-(--trigger-width)" placement="bottom right">
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
      <SidebarRail />
    </Sidebar>
  )
}
