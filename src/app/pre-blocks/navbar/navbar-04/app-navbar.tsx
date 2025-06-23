"use client"
import { Link } from "@/components/ui/link"
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
import { IconBrandApple } from "@intentui/icons"

export default function AppNavbar() {
  return (
    <NavbarProvider>
      <Navbar>
        <NavbarStart>
          <Link aria-label="Goto documentation of Navbar" href="/docs/components/layouts/navbar">
            <IconBrandApple className="size-6 sm:size-5" />
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
          <IconBrandApple className="size-5" />
        </Link>
      </NavbarMobile>
    </NavbarProvider>
  )
}
