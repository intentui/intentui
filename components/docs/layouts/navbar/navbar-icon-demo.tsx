import {
  IconBrandApple,
  IconBrandIntentui,
  IconChartBar,
  IconChevronLgDown,
  IconColors,
  IconCommandRegular,
  IconDashboard,
  IconHeadphones,
  IconLogout,
  IconNotes,
  IconSearch,
  IconSettings,
  IconShoppingBag,
  IconSidebar
} from "@intentui/icons"
import { Avatar, Button, Menu, Navbar, Separator } from "ui"

export default function NavbarIconDemo() {
  return (
    <Navbar>
      <Navbar.Nav>
        <Navbar.Logo href="/docs/components/layouts/navbar">
          <IconBrandIntentui className="size-5" />
          <strong className="font-semibold">Justd</strong>
        </Navbar.Logo>
        <Navbar.Section>
          <Navbar.Item href="/docs/components/layouts/navbar">
            <IconNotes />
            Documentation
          </Navbar.Item>
          <Navbar.Item href="https://intentui.com/docs/components/layouts/sidebar">
            <IconSidebar /> Sidebar
          </Navbar.Item>
          <Navbar.Item href="https://intentui.com/themes">
            <IconColors /> Themes
          </Navbar.Item>
          <Navbar.Item href="https://intentui.com/charts">
            <IconChartBar /> Charts
          </Navbar.Item>
        </Navbar.Section>
      </Navbar.Nav>
      <Navbar.Compact>
        <Navbar.Flex>
          <Navbar.Trigger className="-ml-2" />
          <Separator orientation="vertical" className="h-6 mx-2" />
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
    </Navbar>
  )
}
