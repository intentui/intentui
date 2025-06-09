"use client"

import { ThemeSwitcher } from "@/components/theme-switcher"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Menu } from "@/components/ui/menu"
import { Navbar } from "@/components/ui/navbar"
import { Separator } from "@/components/ui/separator"
import {
  IconBrandApple,
  IconCommandRegular,
  IconDashboard,
  IconHeadphones,
  IconLogout,
  IconSearch,
  IconSettings,
  IconShield,
  IconShoppingBag,
} from "@intentui/icons"

export default function AppNavbar() {
  return (
    <Navbar intent="float">
      <Navbar.Nav>
        <Navbar.Logo
          aria-label="Goto documenation of Navbar"
          href="/docs/2.x/components/layouts/navbar"
        >
          <IconBrandApple className="size-6 sm:size-5" />
        </Navbar.Logo>
        <Navbar.Section>
          <Navbar.Item isCurrent href="#">
            Store
          </Navbar.Item>
          <Navbar.Item href="#">Mac</Navbar.Item>
          <Navbar.Item href="#">iPad</Navbar.Item>
        </Navbar.Section>
        <Navbar.Section className="ml-auto hidden sm:flex">
          <Navbar.Flex>
            <Button intent="plain" size="square-petite" aria-label="Search for products">
              <IconSearch />
            </Button>
            <Button intent="plain" size="square-petite" aria-label="Your Bag">
              <IconShoppingBag />
            </Button>
          </Navbar.Flex>
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
