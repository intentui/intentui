import { Button } from "@/components/ui/button"
import { Link } from "@/components/ui/link"
import {
  Navbar,
  NavbarInset,
  NavbarItem,
  NavbarMobile,
  NavbarProvider,
  NavbarSection,
  NavbarTrigger,
} from "@/components/ui/navbar"
import { Separator } from "@/components/ui/separator"
import { IconBrandApple, IconSearch, IconShoppingBag } from "@intentui/icons"

export default function NavbarAnatomy() {
  return (
    <NavbarProvider>
      {/* Desktop */}
      <Navbar>
        <Link />
        <NavbarSection>
          <NavbarItem href="#" />
        </NavbarSection>
      </Navbar>

      {/* Mobile */}
      <NavbarMobile>
        <NavbarTrigger />
        <Separator orientation="vertical" className="mx-2 h-6" />
        <Link href={"/docs/components/navigation/navbar"}>
          <IconBrandApple className="size-5" />
        </Link>
        <Button intent="plain" size="sq-sm" aria-label="Search for products">
          <IconSearch />
        </Button>
        <Button intent="plain" size="sq-sm" aria-label="Your Bag">
          <IconShoppingBag />
        </Button>
      </NavbarMobile>

      {/* Required when setting the navbar intent to 'inset' */}
      <NavbarInset />
    </NavbarProvider>
  )
}
