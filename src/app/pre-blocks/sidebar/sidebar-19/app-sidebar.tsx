"use client"

import {
  IconBrandYoutube,
  IconClockFill,
  IconHomeFill,
  IconPeopleFill,
  IconPlayFill,
  IconRotate2LeftFill,
  IconVideoPlaylistFill,
  IconVideoRollFill,
  IconYesFill,
} from "@intentui/icons"
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

export default function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <Link
          className="flex items-center gap-x-2 px-1.5 pt-1"
          href="/docs/components/layouts/sidebar"
        >
          <IconBrandYoutube className="size-5 text-red-500" />
          <SidebarLabel className="font-medium">Youtube</SidebarLabel>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarSection>
          <SidebarItem>
            <IconHomeFill />
            <SidebarLabel>Home</SidebarLabel>
          </SidebarItem>
          <SidebarItem>
            <IconPlayFill />
            <SidebarLabel>Shorts</SidebarLabel>
          </SidebarItem>
          <SidebarItem>
            <IconVideoPlaylistFill />
            <SidebarLabel>Subscriptions</SidebarLabel>
          </SidebarItem>
        </SidebarSection>
        <SidebarSeparator />
        <SidebarSection label="You">
          <SidebarItem>
            <IconRotate2LeftFill /> <SidebarLabel>History</SidebarLabel>
          </SidebarItem>
          <SidebarItem>
            <IconVideoPlaylistFill /> <SidebarLabel>Playlists</SidebarLabel>
          </SidebarItem>
          <SidebarItem>
            <IconVideoRollFill /> <SidebarLabel>Your videos</SidebarLabel>
          </SidebarItem>
          <SidebarItem>
            <IconClockFill /> <SidebarLabel>Watch later</SidebarLabel>
          </SidebarItem>
          <SidebarItem>
            <IconYesFill /> <SidebarLabel>Liked videos</SidebarLabel>
          </SidebarItem>
        </SidebarSection>
        <SidebarSeparator />
        <SidebarDisclosure defaultExpanded>
          <SidebarDisclosureTrigger>
            <IconPeopleFill />
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
  {
    id: 4,
    name: "Kurt Cobain",
    image_url: "https://intentui.com/images/avatar/cobain.jpg",
  },
]
