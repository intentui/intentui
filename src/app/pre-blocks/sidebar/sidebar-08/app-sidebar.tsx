"use client"

import { EllipsisHorizontalIcon } from "@heroicons/react/16/solid"
import {
  ArchiveBoxIcon,
  ArrowUpTrayIcon,
  ChevronUpDownIcon,
  CubeIcon,
  HashtagIcon,
  HomeIcon as HomeOutline,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline"
import {
  Cog6ToothIcon as Cog6ToothSolid,
  HomeIcon as HomeSolid,
  LifebuoyIcon as LifebuoySolid,
  ShieldCheckIcon as ShieldCheckSolid,
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
  SidebarFooter,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
  SidebarLink,
  SidebarMenuTrigger,
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
            <SidebarItem isCurrent href="#">
              <HomeOutline />
              <SidebarLabel>Overview</SidebarLabel>
            </SidebarItem>
            <SidebarItem href="#">
              <CubeIcon />
              <SidebarLabel>Blog</SidebarLabel>
            </SidebarItem>
          </SidebarSection>
          <SidebarSection label="Last 5 Articles">
            {articles.map((item) => (
              <SidebarItem key={item.href}>
                {({ isCollapsed }) => (
                  <>
                    <SidebarLink href="#">
                      <HashtagIcon />
                      <SidebarLabel>{item.label}</SidebarLabel>
                    </SidebarLink>
                    {!isCollapsed && (
                      <Menu>
                        <SidebarMenuTrigger aria-label="Manage">
                          <EllipsisHorizontalIcon />
                        </SidebarMenuTrigger>
                        <MenuContent popover={{ offset: 0, placement: "right top" }}>
                          <MenuItem href="#edit">
                            <PencilSquareIcon />
                            Edit
                          </MenuItem>
                          <MenuItem href="#share">
                            <ArrowUpTrayIcon />
                            Share
                          </MenuItem>
                          <MenuItem href="#archive">
                            <ArchiveBoxIcon />
                            Archive
                          </MenuItem>
                          <MenuItem intent="danger" href="#delete">
                            <TrashIcon />
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
              <ArrowUpTrayIcon />
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
  { href: "#article-2", label: "The future of remote work The future of remote work" },
  { href: "#article-3", label: "Top 10 design tips" },
  { href: "#article-4", label: "Guide to mental health" },
  { href: "#article-5", label: "Ai in everyday life" },
]
