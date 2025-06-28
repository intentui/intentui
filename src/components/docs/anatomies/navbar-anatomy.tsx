import { IconChevronsY } from "@intentui/icons"
import { Button } from "@/components/ui/button"
import { Menu } from "@/components/ui/menu"
import {
  Navbar,
  NavbarGap,
  NavbarInset,
  NavbarItem,
  NavbarMobile,
  NavbarProvider,
  NavbarSection,
  NavbarSeparator,
  NavbarSpacer,
  NavbarStart,
  NavbarTrigger,
} from "@/components/ui/navbar"

export default function NavbarAnatomy() {
  return (
    <NavbarProvider>
      {/* Desktop */}
      <Navbar>
        <NavbarStart />
        <NavbarSection>
          <NavbarItem href="#" />
          <NavbarSpacer />
          <NavbarGap />
          <NavbarSeparator />
          <Menu>
            <NavbarItem>
              Account
              <IconChevronsY className="col-start-3" />
            </NavbarItem>
            <Menu.Content>
              <Menu.Item />
            </Menu.Content>
          </Menu>
        </NavbarSection>
      </Navbar>

      {/* Mobile */}
      <NavbarMobile>
        <NavbarTrigger />
        <NavbarSpacer />
        <Button />
        <Menu>
          <NavbarItem>
            Account
            <IconChevronsY className="col-start-3" />
          </NavbarItem>
          <Menu.Content>
            <Menu.Item />
          </Menu.Content>
        </Menu>
      </NavbarMobile>

      {/* Required when setting the navbar intent to 'inset' */}
      <NavbarInset />
    </NavbarProvider>
  )
}
