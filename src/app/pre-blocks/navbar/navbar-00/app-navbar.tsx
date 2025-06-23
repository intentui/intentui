"use client"
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
    <NavbarProvider {...props}>
      <Navbar>
        <NavbarStart>
          <Link aria-label="Goto documentation of Navbar" href="/docs/components/layouts/navbar">
            <IconBrandApple className="size-6 sm:size-5" />
          </Link>
        </NavbarStart>
        <NavbarGap />
        <NavbarSection>
          <NavbarItem href="#" isCurrent>
            Home
          </NavbarItem>
          <NavbarItem href="#">Shop</NavbarItem>
          <NavbarItem href="#">Offers</NavbarItem>
          <NavbarItem href="#">Orders</NavbarItem>
          <Menu>
            <NavbarItem>
              Categories <IconChevronLgDown data-slot="chevron" />
            </NavbarItem>
            <Menu.Content items={categories}>
              {(item) => (
                <Menu.Item id={item.id} textValue={item.label} href={item.url}>
                  {item.label}
                </Menu.Item>
              )}
            </Menu.Content>
          </Menu>
        </NavbarSection>
        <NavbarSpacer />
        <NavbarSection className="max-md:hidden">
          <Button intent="plain" size="sq-sm" aria-label="Search for products">
            <IconSearch />
          </Button>
          <Button intent="plain" size="sq-sm" aria-label="Your Bag">
            <IconShoppingBag />
          </Button>
          <Separator orientation="vertical" className="mr-3 ml-1 h-5" />
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
        <Separator orientation="vertical" className="mr-3 ml-1 h-5" />
        <UserMenu />
      </NavbarMobile>
    </NavbarProvider>
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
