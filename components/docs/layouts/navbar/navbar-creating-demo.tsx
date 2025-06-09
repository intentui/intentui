"use client"

import { IconBrandGoogle, IconSearch, IconShoppingBag } from "@intentui/icons"
import { Button, Navbar } from "ui"

export default function AppNavbar(props: React.ComponentProps<typeof Navbar>) {
  return (
    <Navbar {...props}>
      <Navbar.Nav>
        <Navbar.Logo href="#">
          <IconBrandGoogle className="size-5" />
        </Navbar.Logo>
        <Navbar.Section>
          <Navbar.Item href="/docs/components/layouts/navbar">Documentation</Navbar.Item>
          <Navbar.Item href="#">Features</Navbar.Item>
          <Navbar.Item href="#">Support</Navbar.Item>
          <Navbar.Item href="#">Pricing</Navbar.Item>
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
      {/*<Navbar.Inset>*/}
      {/*  <Heading>Home</Heading>*/}
      {/*</Navbar.Inset>*/}
    </Navbar>
  )
}
