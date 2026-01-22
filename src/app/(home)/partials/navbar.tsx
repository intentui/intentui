"use client"

import {
  ArrowTopRightOnSquareIcon,
  Bars3Icon,
  BookOpenIcon,
  CubeIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  Squares2X2Icon,
  SwatchIcon,
} from "@heroicons/react/24/outline"
import { useState } from "react"
import { Button } from "react-aria-components"
import { BrandLogoLink } from "@/components/brand-logo-link"
import { CommandPalette } from "@/components/command-palette"
import { GithubLink } from "@/components/github-link"
import { BrandDiscordIcon } from "@/components/icons/brand-discord-icon"
import { BrandXIcon } from "@/components/icons/brand-x-icon"
import { PageContainer } from "@/components/page-container"
import { ResponsiveNavigation } from "@/components/responsive-navigation"
import { SponsorButton } from "@/components/sponsor-button"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { buttonStyles } from "@/components/ui/button"
import { Link } from "@/components/ui/link"
import { Menu, MenuContent, MenuItem, MenuLabel } from "@/components/ui/menu"
import { Separator } from "@/components/ui/separator"
import { app } from "@/config/app"
import { useMediaQuery } from "@/hooks/use-media-query"

export function Navbar() {
  const [open, setOpen] = useState(false)
  const isMobile = useMediaQuery("(max-width: 1023px)")
  return (
    <>
      <CommandPalette setOpen={setOpen} openCmd={open} />
      <PageContainer className="hidden items-center justify-between py-4 lg:flex">
        <div className="flex items-center">
          <BrandLogoLink />
          <div className="flex items-center gap-x-1">
            {menus.map((menu) => (
              <NavLink key={menu.href} href={menu.href}>
                {menu.label}
                {menu.on && <menu.icon className="size-4" />}
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
            href={app.links.twitter}
            target="_blank"
          >
            <BrandXIcon />
          </Link>
          <Link
            className={buttonStyles({ intent: "plain", size: "sq-md", isCircle: true })}
            href={app.links.discord}
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
          <SponsorButton className="ml-3" />
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
  { href: "/colors", label: "Colors", icon: SwatchIcon },
  { href: "/blocks", label: "Blocks", icon: Squares2X2Icon },
  {
    href: "https://design.intentui.com/themes",
    label: "Themes",
    icon: ArrowTopRightOnSquareIcon,
    on: true,
  },
]
