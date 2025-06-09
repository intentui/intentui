import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/ui/navbar"
import { Separator } from "@/components/ui/separator"
import { IconBrandApple, IconSearch, IconShoppingBag } from "@intentui/icons"

export default function NavbarAnatomy() {
  return (
    <Navbar>
      {/* Desktop */}
      <Navbar.Nav>
        <Navbar.Logo />
        <Navbar.Section>
          <Navbar.Item href="#" />
        </Navbar.Section>
      </Navbar.Nav>

      {/* Mobile */}
      <Navbar.Compact>
        <Navbar.Flex>
          <Navbar.Trigger className="-ml-2" />
          <Separator orientation="vertical" className="mx-2 h-6" />
          <Navbar.Logo href="/docs/2.x/components/navigation/navbar">
            <IconBrandApple className="size-5" />
          </Navbar.Logo>
        </Navbar.Flex>
        <Navbar.Flex>
          <Button intent="plain" size="square-petite" aria-label="Search for products">
            <IconSearch />
          </Button>
          <Button intent="plain" size="square-petite" aria-label="Your Bag">
            <IconShoppingBag />
          </Button>
        </Navbar.Flex>
      </Navbar.Compact>

      <Navbar.Inset />
    </Navbar>
  )
}
