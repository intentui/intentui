"use client"

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
  useSidebar,
} from "@/components/ui/sidebar"
import {
  IconArchive,
  IconArrowDown,
  IconArrowUp,
  IconBrandApple,
  IconBuilding,
  IconCheck,
  IconChevronLgDown,
  IconCircleQuestionmark,
  IconClock,
  IconCreditCard,
  IconDashboard,
  IconDotsHorizontal,
  IconHashtag,
  IconHeadphones,
  IconListBullets,
  IconLogout,
  IconMessage,
  IconNotes,
  IconPackage,
  IconPlus,
  IconSettings,
  IconShield,
  IconShoppingBag,
  IconTicket,
} from "@intentui/icons"
import { useTheme } from "next-themes"
import { twMerge } from "tailwind-merge"

export default function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  const { theme, setTheme } = useTheme()
  const { state } = useSidebar()
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
          <SidebarSection label="Overview">
            <SidebarItem tooltip="Overview" isCurrent href="#">
              <IconDashboard />
              <SidebarLabel>Overview</SidebarLabel>
            </SidebarItem>

            <SidebarItem tooltip="Orders">
              {({ isCollapsed, isFocused }) => (
                <>
                  <SidebarLink href="#">
                    <IconShoppingBag />
                    <SidebarLabel>Orders</SidebarLabel>
                  </SidebarLink>
                  {(!isCollapsed || isFocused) && (
                    <Menu>
                      <Menu.Trigger data-slot="menu-trigger" aria-label="Manage">
                        <IconDotsHorizontal />
                      </Menu.Trigger>
                      <Menu.Content offset={0} placement="right top">
                        <Menu.Item href="#new-order">
                          <IconPlus />
                          Create New Order
                        </Menu.Item>
                        <Menu.Item href="#view-all">
                          <IconListBullets />
                          View All Orders
                        </Menu.Item>
                        <Menu.Item href="#pending-orders">
                          <IconClock />
                          Pending Orders
                        </Menu.Item>
                        <Menu.Item href="#completed-orders">
                          <IconCheck />
                          Completed Orders
                        </Menu.Item>
                        <Menu.Item href="#export-orders">
                          <IconArrowUp />
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
                      <Menu.Content offset={0} placement="right top">
                        <Menu.Item href="#new-product">
                          <IconPlus />
                          Add New Product
                        </Menu.Item>
                        <Menu.Item href="#archive">
                          <IconArchive />
                          Archive Product
                        </Menu.Item>
                        <Menu.Item href="#manage-categories">
                          <IconHashtag />
                          Manage Categories
                        </Menu.Item>
                        <Menu.Item href="#import">
                          <IconArrowDown />
                          Import Products
                        </Menu.Item>
                        <Menu.Item href="#export">
                          <IconArrowUp />
                          Export Products
                        </Menu.Item>
                      </Menu.Content>
                    </Menu>
                  )}
                </>
              )}
            </SidebarItem>
            <SidebarItem href="#" badge="4 Pending" tooltip="Payments">
              <IconCreditCard />
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
                  <IconTicket />
                  <SidebarLabel>Tickets</SidebarLabel>
                </SidebarItem>
                <SidebarItem href="#" tooltip="Chat Support">
                  <IconMessage />
                  <SidebarLabel>Chat Support</SidebarLabel>
                </SidebarItem>
                <SidebarItem href="#" tooltip="FAQ">
                  <IconCircleQuestionmark />
                  <SidebarLabel>FAQ</SidebarLabel>
                </SidebarItem>
                <SidebarItem href="#" tooltip="Documentation">
                  <IconNotes />
                  <SidebarLabel>Documentation</SidebarLabel>
                </SidebarItem>
              </SidebarDisclosurePanel>
            </SidebarDisclosure>
            <SidebarDisclosure id={2}>
              <SidebarDisclosureTrigger>
                <IconPackage />
                <SidebarLabel>Inventory</SidebarLabel>
              </SidebarDisclosureTrigger>
              <SidebarDisclosurePanel>
                <SidebarItem href="#" tooltip="Warehouse">
                  <IconBuilding />
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
            <Avatar shape="square" src="/images/avatar/cobain.jpg" />
            <div className="in-data-[sidebar-collapsible=dock]:hidden text-sm">
              <SidebarLabel>Kurt Cobain</SidebarLabel>
              <span className="-mt-0.5 block text-muted-fg">kurt@cobain.com</span>
            </div>
            <IconChevronLgDown
              data-slot="chevron"
              className="absolute right-3 size-4 transition-transform group-pressed:rotate-180"
            />
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
      <SidebarRail />
    </Sidebar>
  )
}
