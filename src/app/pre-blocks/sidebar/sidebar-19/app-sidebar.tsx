"use client"

import { Avatar } from "@/components/ui/avatar"
import { Link } from "@/components/ui/link"
import {
  Sidebar,
  SidebarContent,
  SidebarDisclosure,
  SidebarDisclosurePanel,
  SidebarDisclosureTrigger,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
  SidebarRail,
  SidebarSection,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import {
  IconBrandYoutube,
  IconClock,
  IconHome,
  IconPeople,
  IconPlay,
  IconRotate2Left,
  IconVideoPlaylist,
  IconVideoRoll,
  IconYes,
} from "@intentui/icons"

export default function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <Link
          className="flex items-center gap-x-2 group-data-[collapsible=dock]:size-10 group-data-[collapsible=dock]:justify-center"
          href="/docs/2.x/components/layouts/sidebar"
        >
          <IconBrandYoutube className="size-6 text-red-500" />
          <SidebarLabel className="font-medium">Youtube</SidebarLabel>
        </Link>
      </SidebarHeader>
      <SidebarContent className="**:data-[slot=avatar]:*:size-5 **:data-[slot=avatar]:size-5 **:data-[slot=icon]:size-5">
        <SidebarSection>
          <SidebarItem>
            <IconHome />
            <SidebarLabel>Home</SidebarLabel>
          </SidebarItem>
          <SidebarItem>
            <IconPlay />
            <SidebarLabel>Shorts</SidebarLabel>
          </SidebarItem>
          <SidebarItem>
            <IconVideoPlaylist />
            <SidebarLabel>Subscriptions</SidebarLabel>
          </SidebarItem>
        </SidebarSection>
        <SidebarSeparator />
        <SidebarSection label="You">
          <SidebarItem>
            <IconRotate2Left /> <SidebarLabel>History</SidebarLabel>
          </SidebarItem>
          <SidebarItem>
            <IconVideoPlaylist /> <SidebarLabel>Playlists</SidebarLabel>
          </SidebarItem>
          <SidebarItem>
            <IconVideoRoll /> <SidebarLabel>Your videos</SidebarLabel>
          </SidebarItem>
          <SidebarItem>
            <IconClock /> <SidebarLabel>Watch later</SidebarLabel>
          </SidebarItem>
          <SidebarItem>
            <IconYes /> <SidebarLabel>Liked videos</SidebarLabel>
          </SidebarItem>
        </SidebarSection>
        <SidebarSeparator />
        <SidebarDisclosure defaultExpanded>
          <SidebarDisclosureTrigger>
            <IconPeople />
            <SidebarLabel>Your Subscriptions</SidebarLabel>
          </SidebarDisclosureTrigger>
          <SidebarDisclosurePanel>
            {users.map((user) => (
              <SidebarItem key={user.id} href="#">
                <Avatar src={user.image_url} />
                <SidebarLabel>{user.name}</SidebarLabel>
              </SidebarItem>
            ))}
          </SidebarDisclosurePanel>
        </SidebarDisclosure>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}

export const users = [
  { id: 1, name: "Robert Plant", image_url: "/images/avatar/robert.jpg" },
  { id: 2, name: "Jimmy Page", image_url: "/images/avatar/page.jpg" },
  { id: 5, name: "Irsyad", image_url: "/images/avatar/irsyad.jpg" },
  { id: 3, name: "Slash", image_url: "/images/avatar/slash.jpg" },
  { id: 4, name: "Kurt Cobain", image_url: "/images/avatar/cobain.jpg" },
]
