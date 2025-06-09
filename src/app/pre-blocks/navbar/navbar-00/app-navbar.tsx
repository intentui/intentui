"use client"

import { ThemeSwitcher } from "@/components/theme-switcher"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Menu } from "@/components/ui/menu"
import { Navbar } from "@/components/ui/navbar"
import { Separator } from "@/components/ui/separator"
import {
  IconBrandApple,
  IconChevronLgDown,
  IconCommandRegular,
  IconDashboard,
  IconHeadphones,
  IconLogout,
  IconSearch,
  IconSettings,
  IconShield,
  IconShoppingBag,
} from "@intentui/icons"

export default function AppNavbar(props: React.ComponentProps<typeof Navbar>) {
  return (
    <Navbar {...props}>
      <Navbar.Nav>
        <Navbar.Logo
          aria-label="Goto documenation of Navbar"
          href="/docs/2.x/components/layouts/navbar"
        >
          <IconBrandApple className="size-6 sm:size-5" />
        </Navbar.Logo>
        <Navbar.Section>
          <Navbar.Item href="#" isCurrent>
            Home
          </Navbar.Item>
          <Navbar.Item href="#">Shop</Navbar.Item>
          <Navbar.Item href="#">Offers</Navbar.Item>
          <Navbar.Item href="#">Orders</Navbar.Item>
          <Menu>
            <Navbar.Item>
              Categories <IconChevronLgDown data-slot="chevron" />
            </Navbar.Item>
            <Menu.Content items={categories}>
              {(item) => (
                <Menu.Item id={item.id} textValue={item.label} href={item.url}>
                  {item.label}
                </Menu.Item>
              )}
            </Menu.Content>
          </Menu>
        </Navbar.Section>

        <Navbar.Section className="ml-auto hidden md:flex">
          <Navbar.Flex className="sm:gap-x-1">
            <Button intent="plain" size="square-petite" aria-label="Search for products">
              <IconSearch />
            </Button>
            <Button intent="plain" size="square-petite" aria-label="Your Bag">
              <IconShoppingBag />
            </Button>
            <ThemeSwitcher intent="plain" />
          </Navbar.Flex>
          <Separator orientation="vertical" className="mr-3 ml-1 h-6" />
          <UserMenu />
        </Navbar.Section>
      </Navbar.Nav>

      <Navbar.Compact>
        <Navbar.Flex>
          <Navbar.Trigger className="-ml-2" />
          <Separator orientation="vertical" className="h-6 sm:mx-1" />
          <Navbar.Logo
            aria-label="Goto documenation of Navbar"
            href="/docs/2.x/components/layouts/navbar"
          >
            <IconBrandApple className="size-5" />
          </Navbar.Logo>
        </Navbar.Flex>
        <Navbar.Flex>
          <Navbar.Flex>
            <Button intent="plain" size="square-petite" aria-label="Search for products">
              <IconSearch />
            </Button>
            <Button intent="plain" size="square-petite" aria-label="Your Bag">
              <IconShoppingBag />
            </Button>
            <ThemeSwitcher intent="plain" />
          </Navbar.Flex>
          <Separator orientation="vertical" className="mr-3 ml-1 h-6" />
          <UserMenu />
        </Navbar.Flex>
      </Navbar.Compact>
    </Navbar>
  )
}

const categories = [
  {
    id: 1,
    label: "Electronics",
    url: "#",
  },
  {
    id: 2,
    label: "Fashion",
    url: "#",
  },
  {
    id: 3,
    label: "Home & Kitchen",
    url: "#",
  },
  {
    id: 4,
    label: "Sports",
    url: "#",
  },
  {
    id: 5,
    label: "Books",
    url: "#",
  },
  {
    id: 6,
    label: "Beauty & Personal Care",
    url: "#",
  },
  {
    id: 7,
    label: "Grocery",
    url: "#",
  },
  {
    id: 8,
    label: "Toys & Games",
    url: "#",
  },
  {
    id: 9,
    label: "Automotive",
    url: "#",
  },
  {
    id: 10,
    label: "Health & Wellness",
    url: "#",
  },
]

function UserMenu() {
  return (
    <Menu>
      <Menu.Trigger aria-label="Open Menu">
        <Avatar alt="cobain" size="small" shape="square" src="/images/avatar/cobain.jpg" />
      </Menu.Trigger>
      <Menu.Content placement="bottom right" className="sm:min-w-56">
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
        <Menu.Item>
          <IconCommandRegular />
          Command Menu
        </Menu.Item>

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
  )
}
