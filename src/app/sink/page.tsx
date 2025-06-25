"use client"

import { UserMenu } from "@/app/pre-blocks/navbar/user-menu"
import { Button } from "@/components/ui/button"
import {
  Navbar,
  NavbarMobile,
  NavbarProvider,
  NavbarSeparator,
  NavbarSpacer,
  NavbarTrigger,
} from "@/components/ui/navbar"
import { IconSearch } from "@intentui/icons"

export default function Sink() {
  return (
    <div>
      <NavbarProvider>
        <Navbar>{/* your desktop items */}</Navbar>
        <NavbarMobile>
          <NavbarTrigger />
          <NavbarSpacer />
          <Button intent="plain" size="sq-sm" aria-label="Search for products">
            <IconSearch />
          </Button>
          <NavbarSeparator className="mr-2.5" />
          <UserMenu />
        </NavbarMobile>
      </NavbarProvider>
    </div>
  )
}
