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
import {
  IconAsterisk,
  IconBrandIntentui,
  IconChevronsY,
  IconCube,
  IconHashtag,
  IconHome,
  IconShoppingBag,
} from "@intentui/icons"

const menus = [
  { label: "Home", href: "#", icon: IconHome },
  { label: "Shop", href: "#", icon: IconShoppingBag },
  { label: "Categories", href: "#", icon: IconHashtag },
  { label: "Collections", href: "#", icon: IconCube },
  { label: "New Arrivals", href: "#", icon: IconAsterisk },
]

export default function AppNavbar() {
  return (
    <NavbarProvider>
      <Navbar>
        <NavbarStart>
          <Link aria-label="Goto documentation of Navbar" href="/docs/components/layouts/navbar">
            <IconBrandIntentui className="-ml-2 size-6 sm:size-5" />
          </Link>
        </NavbarStart>
        <NavbarGap />
        <NavbarSection>
          {menus.map((item) => (
            <NavbarItem key={item.label} href={item.href} isCurrent={item.label === "Shop"}>
              {item.icon && <item.icon />}
              {item.label}
            </NavbarItem>
          ))}
        </NavbarSection>
        <NavbarSpacer />
        <NavbarSection className="hidden max-md:flex">
          <UserMenu />
        </NavbarSection>
      </Navbar>
      <NavbarMobile>
        <NavbarTrigger />
        <NavbarSpacer />
        <NavbarSection>
          <UserMenu />
        </NavbarSection>
      </NavbarMobile>
    </NavbarProvider>
  )
}

function UserMenu() {
  return (
    <Menu>
      <Button className="group" intent="plain">
        <Avatar
          src="https://intentui.com/images/avatar/cobain.jpg"
          alt="Kurt Cobain"
          size="sm"
          isSquare
        />
        Kurt Cobain
        <IconChevronsY />
      </Button>
      <Menu.Content popover={{ placement: "bottom end" }} className="w-56">
        <Menu.Item>Dashboard</Menu.Item>
        <Menu.Item>Account Settings</Menu.Item>
        <Menu.Separator />
        <Menu.Item>Orders</Menu.Item>
        <Menu.Item>Wishlist</Menu.Item>
        <Menu.Item>Messages</Menu.Item>
        <Menu.Item>Notifications</Menu.Item>
        <Menu.Separator />
        <Menu.Item>Addresses</Menu.Item>
        <Menu.Item>Payment Methods</Menu.Item>
        <Menu.Item>Help Center</Menu.Item>
        <Menu.Separator />
        <Menu.Item>Logout</Menu.Item>
      </Menu.Content>
    </Menu>
  )
}
