"use client"

import {
  IconArchive2,
  IconBrandIntentui,
  IconChevronsY,
  IconCube,
  IconDashboard,
  IconDashboardFill,
  IconDotsHorizontal,
  IconHashtag,
  IconHeadphonesFill,
  IconHighlight,
  IconLogout,
  IconSettingsFill,
  IconShieldFill,
  IconTrash,
  IconUpload,
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
  SidebarFooter,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
  SidebarLink,
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
            <SidebarItem isCurrent href="#">
              <IconDashboard />
              <SidebarLabel>Overview</SidebarLabel>
            </SidebarItem>
            <SidebarItem href="#">
              <IconCube />
              <SidebarLabel>Blog</SidebarLabel>
            </SidebarItem>
          </SidebarSection>
          <SidebarSection label="Last 5 Articles">
            {articles.map((item) => (
              <SidebarItem key={item.href}>
                {({ isCollapsed }) => (
                  <>
                    <SidebarLink href="#">
                      <IconHashtag />
                      <SidebarLabel>{item.label}</SidebarLabel>
                    </SidebarLink>
                    {!isCollapsed && (
                      <Menu>
                        <MenuTrigger data-slot="menu-action-trigger" aria-label="Manage">
                          <IconDotsHorizontal />
                        </MenuTrigger>
                        <MenuContent popover={{ offset: 0, placement: "right top" }}>
                          <MenuItem href="#edit">
                            <IconHighlight />
                            Edit
                          </MenuItem>
                          <MenuItem href="#share">
                            <IconUpload />
                            Share
                          </MenuItem>
                          <MenuItem href="#archive">
                            <IconArchive2 />
                            Archive
                          </MenuItem>
                          <MenuItem isDanger={true} href="#delete">
                            <IconTrash />
                            Delete
                          </MenuItem>
                        </MenuContent>
                      </Menu>
                    )}
                  </>
                )}
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
    </Sidebar>
  )
}

const articles = [
  { href: "#article-1", label: "How to" },
  { href: "#article-2", label: "The Future of Remote Work" },
  { href: "#article-3", label: "Top 10 Design Tips" },
  { href: "#article-4", label: "Guide to Mental Health" },
  { href: "#article-5", label: "AI in Everyday Life" },
]
