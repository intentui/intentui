"use client"

import {
  IconBrandApple,
  IconChevronLgDown,
  IconCommandRegular,
  IconDashboard,
  IconHeadphones,
  IconLogout,
  IconSearch,
  IconSettings,
  IconShoppingBag
} from "@intentui/icons"
import { Avatar, Button, Container, Heading, Menu, Navbar, Separator } from "ui"

export default function NavbarBasicDemo() {
  return (
    <Navbar>
      <Navbar.Nav>
        <Navbar.Logo href="#">
          <IconBrandApple className="size-5" />
        </Navbar.Logo>
        <Navbar.Section>
          <Navbar.Item href="#">Store</Navbar.Item>
          <Navbar.Item href="#">Mac</Navbar.Item>
          <Navbar.Item href="#">iPad</Navbar.Item>
          <Navbar.Item href="#">iPhone</Navbar.Item>
        </Navbar.Section>
        <Navbar.Section className="ml-auto hidden lg:flex">
          <div className="flex items-center gap-x-2">
            <Button appearance="plain" size="square-petite" aria-label="Search for products">
              <IconSearch />
            </Button>
            <Button appearance="plain" size="square-petite" aria-label="Your Bag">
              <IconShoppingBag />
            </Button>
          </div>
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
        </Navbar.Flex>
        <Navbar.Flex>
          <Navbar.Flex>
            <Button appearance="plain" size="square-petite" aria-label="Search for products">
              <IconSearch />
            </Button>
            <Button appearance="plain" size="square-petite" aria-label="Your Bag">
              <IconShoppingBag />
            </Button>
          </Navbar.Flex>
        </Navbar.Flex>
      </Navbar.Compact>

      <Navbar.Inset>
        <Container className="sm:py-12 py-6">
          <Heading>Home</Heading>
        </Container>
      </Navbar.Inset>
    </Navbar>
  )
}
