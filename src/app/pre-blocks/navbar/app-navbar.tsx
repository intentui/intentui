"use client"
import { Button } from "@/components/ui/button"
import { Link } from "@/components/ui/link"
import { Menu } from "@/components/ui/menu"
import { Navbar, NavbarItem, type NavbarProps, NavbarSection } from "@/components/ui/navbar"
import { Separator } from "@/components/ui/separator"
import { IconBrandIntentui, IconChevronLgDown, IconSearch, IconShoppingBag } from "@intentui/icons"
import { UserMenu } from "./user-menu"

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

export default function AppNavbar(props: NavbarProps) {
  return (
    <>
      <Navbar {...props}>
        <Link aria-label="Goto documentation of Navbar" href="/docs/components/layouts/navbar">
          <IconBrandIntentui className="size-6 sm:size-5" />
        </Link>
        <NavbarSection>
          <NavbarItem href="#" isCurrent>
            Home
          </NavbarItem>
          <NavbarItem href="#">Shop</NavbarItem>
          <NavbarItem href="#">Offers</NavbarItem>
          <NavbarItem href="#">Orders</NavbarItem>
          <Menu>
            <NavbarItem>
              Categories
              <IconChevronLgDown className="col-start-2" />
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
    </>
  )
}
