"use client"

import * as React from "react"

import { CommandPalette } from "@/components/command-palette"
import { ThemeSwitcher } from "@/components/theme-switcher"
import {
  IconBasket,
  IconBrandApple,
  IconChevronLgDown,
  IconCommandRegular,
  IconCube,
  IconDashboard,
  IconHeadphones,
  IconLogout,
  IconMacbook,
  IconSearch,
  IconSettings,
  IconShoppingBag
} from "@intentui/icons"
import { usePathname } from "next/navigation"
import { Avatar, Button, Menu, Navbar, Separator } from "ui"

export function AppNavbar({ children, ...props }: React.ComponentProps<typeof Navbar>) {
  const isUsingIcon = usePathname().includes("navbar-05")
  const [open, setOpen] = React.useState(false)
  return (
    <>
      <CommandPalette setOpen={setOpen} openCmd={open} />
      <Navbar {...props}>
        <Navbar.Nav>
          <Navbar.Logo href="/docs/components/layouts/navbar">
            <IconBrandApple className="size-6 lg:size-5" />
          </Navbar.Logo>
          <Navbar.Section>
            <NavbarItem isCurrent href="/blocks/navbar/navbar-01">
              {isUsingIcon && <IconBasket />}
              Store
            </NavbarItem>
            <NavbarItem href="/blocks/navbar/navbar-02">
              {isUsingIcon && <IconMacbook />}
              Mac
            </NavbarItem>
            <NavbarItem href="/blocks/navbar/navbar-03">
              {isUsingIcon && <IconCube />}
              iPad
            </NavbarItem>
            <NavbarItem href="/blocks/navbar/navbar-04">
              {isUsingIcon && <IconCube />}
              iPhone
            </NavbarItem>
            <NavbarItem href="/blocks/navbar/navbar-05">
              {isUsingIcon && <IconCube />}
              Watch
            </NavbarItem>
            <NavbarItem href="#">Vision</NavbarItem>
            <Navbar.Item href="#">Entertainment</Navbar.Item>
            <Navbar.Item href="#">Accessories</Navbar.Item>
            <Navbar.Item href="#">Support</Navbar.Item>
          </Navbar.Section>
          <Navbar.Section className="ml-auto hidden lg:flex">
            <Navbar.Flex>
              <Button
                onPress={() => setOpen(true)}
                appearance="plain"
                size="square-petite"
                aria-label="Search for products"
              >
                <IconSearch />
              </Button>
              <Button appearance="plain" size="square-petite" aria-label="Your Bag">
                <IconShoppingBag />
              </Button>
              <ThemeSwitcher appearance="plain" />
            </Navbar.Flex>
            <Separator orientation="vertical" className="h-6 ml-1 mr-3" />
            <Menu>
              <Menu.Trigger aria-label="Open Menu" className="group gap-x-2 flex items-center">
                <Avatar
                  alt="slash"
                  size="small"
                  shape="square"
                  src="/images/sidebar/profile-slash.jpg"
                />
                <IconChevronLgDown className="size-4 group-pressed:rotate-180 transition-transform" />
              </Menu.Trigger>
              <Menu.Content placement="bottom" showArrow className="sm:min-w-56">
                <Menu.Section>
                  <Menu.Header separator>
                    <span className="block">Irsyad A. Panjaitan</span>
                    <span className="font-normal text-muted-fg">@irsyadadl</span>
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
                <Menu.Separator />
                <Menu.Item>
                  <IconCommandRegular />
                  Command Menu
                </Menu.Item>
                <Menu.Separator />
                <Menu.Item href="#contact-s">
                  <IconHeadphones />
                  Contact Support
                </Menu.Item>
                <Menu.Separator />
                <Menu.Item href="#logout">
                  <IconLogout />
                  Log out
                </Menu.Item>
              </Menu.Content>
            </Menu>
          </Navbar.Section>
        </Navbar.Nav>

        <Navbar.Compact>
          <Navbar.Flex>
            <Navbar.Trigger className="-ml-2" />
            <Separator orientation="vertical" className="h-6 lg:mx-1" />
            <Navbar.Logo href="/docs/components/layouts/navbar">
              <IconBrandApple className="size-5" />
            </Navbar.Logo>
          </Navbar.Flex>
          <Navbar.Flex>
            <Navbar.Flex>
              <Button appearance="plain" size="square-petite" aria-label="Search for products">
                <IconSearch />
              </Button>
              <Button appearance="plain" size="square-petite" aria-label="Your Bag">
                <IconShoppingBag />
              </Button>
              <ThemeSwitcher appearance="plain" />
            </Navbar.Flex>
            <Separator orientation="vertical" className="h-6 ml-1 mr-3" />
            <Menu>
              <Menu.Trigger aria-label="Open Menu" className="group gap-x-2 flex items-center">
                <Avatar
                  alt="slash"
                  size="small"
                  shape="square"
                  src="/images/sidebar/profile-slash.jpg"
                />
                <IconChevronLgDown className="size-4 group-pressed:rotate-180 transition-transform" />
              </Menu.Trigger>
              <Menu.Content placement="bottom" showArrow className="sm:min-w-56">
                <Menu.Section>
                  <Menu.Header separator>
                    <span className="block">Irsyad A. Panjaitan</span>
                    <span className="font-normal text-muted-fg">@irsyadadl</span>
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
                <Menu.Separator />
                <Menu.Item>
                  <IconCommandRegular />
                  Command Menu
                </Menu.Item>
                <Menu.Separator />
                <Menu.Item href="#contact-s">
                  <IconHeadphones />
                  Contact Support
                </Menu.Item>
                <Menu.Separator />
                <Menu.Item href="#logout">
                  <IconLogout />
                  Log out
                </Menu.Item>
              </Menu.Content>
            </Menu>
          </Navbar.Flex>
        </Navbar.Compact>

        <Navbar.Inset>{children}</Navbar.Inset>
      </Navbar>
    </>
  )
}

function NavbarItem(props: React.ComponentProps<typeof Navbar.Item>) {
  const pathname = usePathname()
  return <Navbar.Item {...props} isCurrent={pathname === props.href} />
}
