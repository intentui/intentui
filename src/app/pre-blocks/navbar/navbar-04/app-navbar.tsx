"use client"

import { BrandIntentuiIcon } from "@/components/icons/brand-intentui-icon"
import { Link } from "@/components/ui/link"
import {
  Navbar,
  NavbarGap,
  NavbarItem,
  NavbarMobile,
  type NavbarProps,
  NavbarSection,
  NavbarSpacer,
  NavbarStart,
  NavbarTrigger,
} from "@/components/ui/navbar"

export default function AppNavbar(props: NavbarProps) {
  return (
    <>
      <Navbar {...props}>
        <NavbarStart>
          <Link aria-label="Goto documentation of Navbar" href="/docs/components/layouts/navbar">
            <BrandIntentuiIcon className="size-6 sm:size-5" />
          </Link>
        </NavbarStart>
        <NavbarGap />
        <NavbarSection>
          <NavbarItem href="#">Enabled</NavbarItem>
          <NavbarItem isDisabled href="#">
            Disabled
          </NavbarItem>
        </NavbarSection>
      </Navbar>

      <NavbarMobile>
        <NavbarTrigger />
        <NavbarSpacer />
        <Link aria-label="Goto documentation of Navbar" href="/docs/components/layouts/navbar">
          <BrandIntentuiIcon className="size-5" />
        </Link>
      </NavbarMobile>
    </>
  )
}
