"use client"
import { Button } from "@/components/ui/button"
import { Link } from "@/components/ui/link"
import {
  Navbar,
  NavbarGap,
  NavbarItem,
  NavbarLabel,
  NavbarMobile,
  type NavbarProps,
  NavbarSection,
  NavbarSeparator,
  NavbarSpacer,
  NavbarStart,
  NavbarTrigger,
} from "@/components/ui/navbar"
import { Separator } from "@/components/ui/separator"
import {
  IconBrandIntentui,
  IconHomeFill,
  IconPercentBadgeFill,
  IconSearch,
  IconShippingBagFill,
  IconShoppingBag,
  IconShoppingBagFill,
} from "@intentui/icons"
import { UserMenu } from "../user-menu"

export default function AppNavbar(props: NavbarProps) {
  return (
    <>
      <Navbar {...props}>
        <NavbarStart>
          <Link
            className="flex items-center gap-x-2 font-medium"
            aria-label="Goto documentation of Navbar"
            href="/docs/components/layouts/navbar"
          >
            <IconBrandIntentui className="size-6 sm:size-5" />
            <span>
              Intent <span className="text-muted-fg">UI</span>
            </span>
          </Link>
        </NavbarStart>
        <NavbarGap />
        <NavbarSection>
          <NavbarItem href="#" isCurrent>
            <IconHomeFill />
            <NavbarLabel>Home</NavbarLabel>
          </NavbarItem>
          <NavbarItem href="#">
            <IconShoppingBagFill />
            <NavbarLabel>Shop</NavbarLabel>
          </NavbarItem>
          <NavbarItem href="#">
            <IconPercentBadgeFill />
            <NavbarLabel>Offers</NavbarLabel>
          </NavbarItem>
          <NavbarItem href="#">
            <IconShippingBagFill />
            <NavbarLabel>Orders</NavbarLabel>
          </NavbarItem>
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
        <NavbarSeparator className="mr-2.5" />
        <UserMenu />
      </NavbarMobile>
    </>
  )
}
