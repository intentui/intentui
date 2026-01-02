"use client"

import {
  Bars3Icon,
  BookOpenIcon,
  CubeIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  PaintBrushIcon,
  Squares2X2Icon,
  SwatchIcon,
} from "@heroicons/react/24/outline"
import { useState } from "react"
import { Button } from "react-aria-components"
import { CommandPalette } from "@/components/command-palette"
import { GithubLink } from "@/components/github-link"
import { BrandDiscordIcon } from "@/components/icons/brand-discord-icon"
import { BrandIntentuiIcon } from "@/components/icons/brand-intentui-icon"
import { BrandXIcon } from "@/components/icons/brand-x-icon"
import { PageContainer } from "@/components/page-container"
import { ResponsiveNavigation } from "@/components/responsive-navigation"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { buttonStyles } from "@/components/ui/button"
import { Link } from "@/components/ui/link"
import { Menu, MenuContent, MenuItem, MenuLabel } from "@/components/ui/menu"
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
          <Link href="/" className="mr-2 flex items-center gap-x-2" aria-label="Goto homepage">
            <BrandIntentuiIcon className="size-5 shrink-0" />
            <span className="hidden min-w-0 sm:inline">
              <span>Intent</span> <span className="text-muted-fg">UI</span>
            </span>
          </Link>
          <div className="flex items-center gap-x-1">
            {menus.map((menu) => (
              <NavLink key={menu.href} href={menu.href}>
                {menu.label}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-x-0.5 **:data-[slot=icon]:size-5">
          <Button
            onPress={() => setOpen(true)}
            aria-label="Search docs"
            className={buttonStyles({ intent: "plain", size: "sq-md", isCircle: true })}
          >
            <MagnifyingGlassIcon className="size-5" />
          </Button>
          <Link
            className={buttonStyles({ intent: "plain", size: "sq-md", isCircle: true })}
            href={siteConfig.links.twitter}
            target="_blank"
          >
            <BrandXIcon />
          </Link>
          <Link
            className={buttonStyles({ intent: "plain", size: "sq-md", isCircle: true })}
            href={siteConfig.discord}
            target="_blank"
          >
            <BrandDiscordIcon />
          </Link>
          <GithubLink />
          <ThemeSwitcher intent="plain" isCircle />
          <div className="flex items-center lg:hidden">
            <Separator orientation="vertical" className="mx-2.5 h-5 bg-white/20" />
            <Menu>
              <Button
                aria-label="Open menu"
                className="-ml-2 p-2 text-muted-fg outline-hidden hover:text-fg focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <Bars3Icon className="size-5" />
              </Button>
              <MenuContent placement="bottom" className="min-w-56">
                <MenuItem href="/">
                  <HomeIcon className="size-5" />
                  <MenuLabel>Home</MenuLabel>
                </MenuItem>
                {menus.map((menu) => (
                  <MenuItem key={menu.href} href={menu.href}>
                    {menu.icon && <menu.icon className="size-5" />}
                    <MenuLabel>{menu.label}</MenuLabel>
                  </MenuItem>
                ))}
              </MenuContent>
            </Menu>
          </div>
        </div>
      </PageContainer>
      {isMobile && <ResponsiveNavigation />}
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
  {
    href: "/docs/getting-started/introduction",
    label: "Docs",
    icon: BookOpenIcon,
  },
  { href: "/components", label: "Components", icon: CubeIcon },
  { href: "/themes", label: "Themes", icon: PaintBrushIcon },
  { href: "/colors", label: "Colors", icon: SwatchIcon },
  { href: "/blocks", label: "Blocks", icon: Squares2X2Icon },
]
