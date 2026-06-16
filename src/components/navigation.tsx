"use client"

import { ChevronDownIcon } from "@heroicons/react/20/solid"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { BrandLogoLink } from "@/components/brand-logo-link"
import { GithubLink } from "@/components/github-link"
import { BrandXIcon } from "@/components/icons/brand-x-icon"
import { PageContainer } from "@/components/page-container"
import { ResponsiveNavigation } from "@/components/responsive-navigation"
import { Badge } from "@/components/ui/badge"
import { Button, buttonStyles } from "@/components/ui/button"
import { Link } from "@/components/ui/link"
import { Menu, MenuContent, MenuItem } from "@/components/ui/menu"
import { app } from "@/config/app"
import { useMediaQuery } from "@/hooks/use-media-query"
import { CommandPalette } from "./command-palette"
import { BrandDiscordIcon } from "./icons/brand-discord-icon"
import { NavLink } from "./nav-item"
import { ThemeSwitcher } from "./theme-switcher"

export function Navigation() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const isDesktop = useMediaQuery("(min-width: 1024px)")
  return (
    <>
      <CommandPalette setOpen={setOpen} openCmd={open} />
      <div className="xnw2 sticky top-0 z-40 hidden overflow-hidden border-page border-b bg-navbar/50 backdrop-blur-3xl lg:block">
        <PageContainer>
          <div className="relative flex items-center justify-between border-page border-x px-3 py-1">
            <div className="flex items-center gap-x-1.5">
              <div className="mx-auto flex items-center">
                <BrandLogoLink />
              </div>
              <NavLink
                isNextLink
                isActive={pathname?.startsWith("/docs") && !pathname?.includes("/docs/components")}
                href="/docs/getting-started/introduction"
              >
                Docs
              </NavLink>
              <NavLink
                isNextLink
                isActive={pathname?.startsWith("/docs/components") || pathname === "/components"}
                href="/components"
              >
                Components
              </NavLink>

              <NavLink isNextLink isActive={pathname.startsWith("/blocks")} href="/blocks">
                Blocks
              </NavLink>
              <NavLink isNextLink href="/colors">
                Colors
              </NavLink>
              <NavLink isNextLink href="/sponsor">
                Sponsor
              </NavLink>

              <NavLink target="_blank" href="https://design.intentui.com/themes">
                Themes
              </NavLink>
            </div>
            <div className="flex items-center gap-x-1.5">
              <Button onPress={() => setOpen((open: boolean) => !open)} size="sq-sm" intent="plain">
                <MagnifyingGlassIcon />
              </Button>

              <Link
                aria-label="Join Discord"
                className={buttonStyles({
                  intent: "plain",
                  size: "sq-sm",
                })}
                target="_blank"
                href={app.links.discord}
              >
                <BrandDiscordIcon />
              </Link>
              <Link
                aria-label="Follow Update on X"
                className={buttonStyles({
                  intent: "plain",
                  size: "sq-sm",
                  className: "**:data-[slot=icon]:text-fg",
                })}
                target="_blank"
                href="https://x.com/intent/follow?screen_name=intentui"
              >
                <BrandXIcon />
              </Link>

              <GithubLink />
              <ThemeSwitcher intent="plain" />
              <Menu>
                <Button intent="plain" size="sm">
                  3.x
                  <ChevronDownIcon />
                </Button>
                <MenuContent>
                  <MenuItem href={`${app.url}/docs/getting-started/introduction`} className="group">
                    3.x{" "}
                    <Badge intent="primary" isCircle={false} className="ml-auto">
                      latest
                    </Badge>
                  </MenuItem>
                  <MenuItem href="https://2x.intentui.com/docs/getting-started/introduction">
                    2.x
                  </MenuItem>
                  <MenuItem
                    href="https://1x.intentui.com/docs/getting-started/introduction"
                    className="group"
                  >
                    1.x{" "}
                    <Badge intent="warning" className="ml-2" isCircle={false}>
                      deprecated
                    </Badge>
                  </MenuItem>
                </MenuContent>
              </Menu>
            </div>
          </div>
        </PageContainer>
      </div>
      {!isDesktop && <ResponsiveNavigation />}
    </>
  )
}
