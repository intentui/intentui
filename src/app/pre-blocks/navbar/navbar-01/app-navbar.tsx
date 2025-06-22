"use client"

import { ThemeSwitcher } from "@/components/theme-switcher"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Link } from "@/components/ui/link"
import { Menu } from "@/components/ui/menu"
import {
  Navbar,
  NavbarGap,
  NavbarItem,
  NavbarMobile,
  NavbarProvider,
  NavbarSection,
  NavbarSpacer,
  NavbarStart,
  NavbarTrigger,
} from "@/components/ui/navbar"
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
    <NavbarProvider>
      <Navbar>
        <NavbarStart>
          <Link aria-label="Goto documenation of Navbar" href="/docs/components/layouts/navbar">
            <IconBrandApple className="size-6 sm:size-5" />
          </Link>
        </NavbarStart>
        <NavbarGap />
        <NavbarSection>
          <NavbarItem isCurrent href="#">
            Home
          </NavbarItem>
          <NavbarItem href="#">Mac</NavbarItem>
          <NavbarItem href="#">iPad</NavbarItem>
        </NavbarSection>
        <NavbarSpacer />
        <NavbarSection className="max-md:hidden">
          <Button intent="plain" size="sq-sm" aria-label="Search for products">
            <IconSearch />
          </Button>
          <Button intent="plain" size="sq-sm" aria-label="Your Bag">
            <IconShoppingBag />
          </Button>
          <ThemeSwitcher intent="plain" />
          <Separator orientation="vertical" className="mr-3 ml-1 h-6" />
          <UserMenu />
        </NavbarSection>
      </Navbar>

      <NavbarMobile>
        <NavbarTrigger />
        <NavbarSpacer />
        <Button intent="plain" size="sq-sm" aria-label="Search for products">
          <IconSearch />
        </Button>
        <Button intent="plain" size="sq-sm" aria-label="Your Bag">
          <IconShoppingBag />
        </Button>
        <ThemeSwitcher intent="plain" />
        <Separator orientation="vertical" className="mr-3 ml-1 h-6" />
        <UserMenu />
      </NavbarMobile>
    </NavbarProvider>
  )
}

function UserMenu() {
  return (
    <Menu>
      <Menu.Trigger aria-label="Open Menu">
        <Avatar
          alt="cobain"
          size="sm"
          isSquare
          src="https://intentui.com/images/avatar/cobain.jpg"
        />
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
