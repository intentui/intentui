'use client'

import {
  ArrowUturnLeftIcon,
  ClockIcon,
  FilmIcon,
  HandThumbUpIcon,
  HomeIcon,
  PlayIcon,
  RectangleStackIcon,
  UsersIcon,
} from '@heroicons/react/24/solid'
import { Avatar } from '@/components/ui/avatar'
import { Link } from '@/components/ui/link'
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
} from '@/components/ui/sidebar'

export default function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <Link
          className="flex items-center gap-x-2 px-1.5 pt-1"
          href="/docs/components/layouts/sidebar"
        >
          <svg preserveAspectRatio="xMidYMid" viewBox="0 0 256 180" className="size-6">
            <path
              fill="red"
              d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134Z"
            />
            <path fill="#FFF" d="m102.421 128.06 66.328-38.418-66.328-38.418z" />
          </svg>
          <SidebarLabel className="font-medium">Youtube</SidebarLabel>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarSection>
          <SidebarItem>
            <HomeIcon />
            <SidebarLabel>Home</SidebarLabel>
          </SidebarItem>
          <SidebarItem>
            <PlayIcon />
            <SidebarLabel>Shorts</SidebarLabel>
          </SidebarItem>
          <SidebarItem>
            <RectangleStackIcon />
            <SidebarLabel>Subscriptions</SidebarLabel>
          </SidebarItem>
        </SidebarSection>
        <SidebarSeparator />
        <SidebarSection label="You">
          <SidebarItem>
            <ArrowUturnLeftIcon /> <SidebarLabel>History</SidebarLabel>
          </SidebarItem>
          <SidebarItem>
            <RectangleStackIcon /> <SidebarLabel>Playlists</SidebarLabel>
          </SidebarItem>
          <SidebarItem>
            <FilmIcon /> <SidebarLabel>Your videos</SidebarLabel>
          </SidebarItem>
          <SidebarItem>
            <ClockIcon /> <SidebarLabel>Watch later</SidebarLabel>
          </SidebarItem>
          <SidebarItem>
            <HandThumbUpIcon /> <SidebarLabel>Liked videos</SidebarLabel>
          </SidebarItem>
        </SidebarSection>
        <SidebarSeparator />
        <SidebarDisclosure className="mt-4" defaultExpanded>
          <SidebarDisclosureTrigger>
            <UsersIcon />
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
  { id: 1, name: 'Robert Plant', image_url: '/images/avatar/robert.jpg' },
  { id: 2, name: 'Jimmy Page', image_url: '/images/avatar/page.jpg' },
  { id: 5, name: 'Irsyad', image_url: '/images/avatar/irsyad.jpg' },
  { id: 3, name: 'Slash', image_url: '/images/avatar/slash.jpg' },
  {
    id: 4,
    name: 'Kurt Cobain',
    image_url: 'https://intentui.com/images/avatar/cobain.jpg',
  },
]
