"use client"

import {
  IconArrowUpFill,
  IconArrowUpRight,
  IconBrandDiscord,
  IconBrandIntentui,
  IconBrandX,
  IconColorPaletteFill,
  IconColorsFill,
  IconHamburger,
  IconHome,
  IconNotesFill,
  IconPackageFill,
  IconSearch,
  IconWindowFill,
} from "@intentui/icons"
import { useState } from "react"
import { Button } from "react-aria-components"
import { CommandPalette } from "@/components/command-palette"
import { GithubLink } from "@/components/github-link"
import { PageContainer } from "@/components/page-container"
import { ResponsiveNavigation } from "@/components/responsive-navigation"
import { Link } from "@/components/ui/link"
import { Menu } from "@/components/ui/menu"
import { Separator } from "@/components/ui/separator"
import { siteConfig } from "@/config/site"
import { useMediaQuery } from "@/hooks/use-media-query"

export function Navbar() {
  const [open, setOpen] = useState(false)
  const isMobile = useMediaQuery("(max-width: 1023px)")
  return (
    <>
      <CommandPalette setOpen={setOpen} openCmd={open} />
      <PageContainer className="hidden items-center justify-between py-4 lg:flex">
        <div className="flex items-center">
          <Link
            href="/"
            className="-ml-3 mr-2 flex items-center gap-x-2 p-2 font-medium"
            aria-label="Goto homepage"
          >
            <IconBrandIntentui className="size-6 text-white" />
            <span className="hidden sm:inline">
              <span>Intent</span> <span className="text-muted-fg">UI</span>
            </span>
          </Link>
          <div className="flex items-center gap-x-1">
            {menus.map((menu) => (
              <NavLink
                key={menu.href}
                href={menu.href}
                target={menu.external ? "_blank" : undefined}
              >
                {menu.label}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-x-0.5 **:data-[slot=icon]:size-5">
          <Button
            onPress={() => setOpen(true)}
            aria-label="Search docs"
            className="p-2 text-muted-fg outline-hidden hover:text-fg focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <IconSearch />
          </Button>
          <Link
            className="p-2 text-muted-fg outline-hidden hover:text-fg focus-visible:ring-2 focus-visible:ring-blue-500"
            href={siteConfig.links.twitter}
            target="_blank"
          >
            <IconBrandX />
          </Link>
          <Link
            className="p-2 text-muted-fg outline-hidden hover:text-fg focus-visible:ring-2 focus-visible:ring-blue-500"
            href={siteConfig.discord}
            target="_blank"
          >
            <IconBrandDiscord />
          </Link>
          <GithubLink />

          <div className="flex items-center lg:hidden">
            <Separator orientation="vertical" className="mx-2.5 h-5 bg-white/20" />
            <Menu>
              <Button
                aria-label="Search docs"
                className="-ml-2 p-2 text-muted-fg outline-hidden hover:text-fg focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <IconHamburger className="size-5" />
              </Button>
              <Menu.Content placement="bottom" className="min-w-56">
                <Menu.Item href="/">
                  <IconHome />
                  <Menu.Label>Home</Menu.Label>
                </Menu.Item>
                {menus.map((menu) => (
                  <Menu.Item
                    key={menu.href}
                    href={menu.href}
                    target={menu.external ? "_blank" : undefined}
                  >
                    {menu.icon && <menu.icon />}
                    <Menu.Label>{menu.label}</Menu.Label>
                    {menu.external && <IconArrowUpRight />}
                  </Menu.Item>
                ))}
              </Menu.Content>
            </Menu>
          </div>
        </div>
      </PageContainer>
      {isMobile && (
        <ResponsiveNavigation
          className="bg-transparent"
          popover={{
            className: "from-blue-50 dark:from-[#161619]",
          }}
        />
      )}
    </>
  )
}

function NavLink({ ...props }: React.ComponentProps<typeof Link>) {
  return (
    <Link
      className="flex items-center gap-x-2 rounded-full px-2.5 py-1 text-muted-fg text-sm tracking-tight outline-hidden transition duration-200 hover:text-fg focus-visible:ring-2"
      {...props}
    />
  )
}

export const menus = [
  { href: "/docs/getting-started/introduction", label: "Docs", icon: IconNotesFill },
  { href: "/components", label: "Components", icon: IconPackageFill },
  { href: "/themes", label: "Themes", icon: IconColorsFill },
  { href: "/icons", label: "Icons", icon: IconArrowUpFill },
  { href: "/colors", label: "Colors", icon: IconColorPaletteFill },
  { href: "/blocks", label: "Blocks", icon: IconWindowFill },
  {
    href: "https://blocks.intentui.com",
    label: "Plus",
    icon: IconBrandIntentui,
    external: true,
  },
]
