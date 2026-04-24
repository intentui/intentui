"use client"

import { MagnifyingGlassIcon, ShoppingBagIcon } from "@heroicons/react/24/outline"
import {
  HomeIcon as HomeSolid,
  ShoppingBagIcon as ShoppingBagSolid,
  TagIcon as TagSolid,
  TruckIcon as TruckSolid,
} from "@heroicons/react/24/solid"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Link } from "@/components/link"
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
            <Avatar
              isSquare
              size="sm"
              className="outline-hidden"
              src="https://design.intentui.com/logo?color=155DFC"
            />
            <span>
              Intent <span className="text-muted-fg">UI</span>
            </span>
          </Link>
        </NavbarStart>
        <NavbarGap />
        <NavbarSection>
          <NavbarItem href="#" isCurrent>
            <HomeSolid />
            <NavbarLabel>Home</NavbarLabel>
          </NavbarItem>
          <NavbarItem href="#">
            <ShoppingBagSolid />
            <NavbarLabel>Shop</NavbarLabel>
          </NavbarItem>
          <NavbarItem href="#">
            <TagSolid />
            <NavbarLabel>Offers</NavbarLabel>
          </NavbarItem>
          <NavbarItem href="#">
            <TruckSolid />
            <NavbarLabel>Orders</NavbarLabel>
          </NavbarItem>
        </NavbarSection>
        <NavbarSpacer />
        <NavbarSection className="max-md:hidden">
          <Button intent="plain" size="sq-sm" aria-label="Search for products">
            <MagnifyingGlassIcon />
          </Button>
          <Button intent="plain" size="sq-sm" aria-label="Your Bag">
            <ShoppingBagIcon />
          </Button>
          <Separator orientation="vertical" className="mr-3 ml-1 h-5" />
          <UserMenu />
        </NavbarSection>
      </Navbar>

      <NavbarMobile>
        <NavbarTrigger />
        <NavbarSpacer />
        <Button intent="plain" size="sq-sm" aria-label="Search for products">
          <MagnifyingGlassIcon />
        </Button>
        <Button intent="plain" size="sq-sm" aria-label="Your Bag">
          <ShoppingBagIcon />
        </Button>
        <NavbarSeparator className="mr-2.5" />
        <UserMenu />
      </NavbarMobile>
    </>
  )
}
