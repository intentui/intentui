"use client"
import { ChevronDownIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { GithubLink } from "@/components/github-link"
import { BrandIntentuiIcon } from "@/components/icons/brand-intentui-icon"
import { BrandXIcon } from "@/components/icons/brand-x-icon"
import { PageContainer } from "@/components/page-container"
import { ResponsiveNavigation } from "@/components/responsive-navigation"
import { Button, buttonStyles } from "@/components/ui/button"
import { Link } from "@/components/ui/link"
import { Menu, MenuContent, MenuItem } from "@/components/ui/menu"
import { siteConfig } from "@/config/site"
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
      <div className="xnw2 sticky top-0 z-40 hidden overflow-hidden lg:block">
        <nav className="border-fg/10 border-b bg-overlay py-1.5 dark:supports-backdrop-filter:bg-overlay/60 dark:supports-backdrop-filter:backdrop-blur-3xl">
          <PageContainer className="lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-6">
                <div className="flex items-center">
                  <Link
                    href="/"
                    className="mr-2 flex items-center gap-x-2"
                    aria-label="Goto homepage"
                  >
                    <BrandIntentuiIcon className="size-5 shrink-0" />
                    <span className="hidden min-w-0 sm:inline">
                      <span>Intent</span> <span className="text-muted-fg">UI</span>
                    </span>
                  </Link>
                  <span className="mx-2 text-muted-fg">/</span>
                  <Menu>
                    <Button intent="plain" size="xs">
                      3.x
                      <ChevronDownIcon />
                    </Button>
                    <MenuContent>
                      <MenuItem
                        href="https://intentui.com/docs/getting-started/introduction"
                        className="group"
                      >
                        3.x{" "}
                        <span className="-mr-1 ml-auto rounded-[calc(var(--radius-lg)-2px)] border border-fg/10 bg-fg/5 px-2 font-medium text-xs/5 tracking-tight group-focus:border-white/20 group-focus:bg-white/15 dark:bg-fg/10">
                          latest
                        </span>
                      </MenuItem>
                      <MenuItem href="https://2x.intentui.com/docs/getting-started/introduction">
                        2.x
                      </MenuItem>
                      <MenuItem
                        href="https://1x.intentui.com/docs/getting-started/introduction"
                        className="group"
                      >
                        1.x{" "}
                        <span className="-mr-1 ml-auto rounded-[calc(var(--radius-lg)-2px)] border border-fg/10 bg-fg/5 px-2 font-medium text-xs/5 tracking-tight group-focus:border-white/20 group-focus:bg-white/15 dark:bg-fg/10">
                          deprecated
                        </span>
                      </MenuItem>
                    </MenuContent>
                  </Menu>
                </div>
                <NavLink
                  isNextLink
                  isActive={
                    pathname?.startsWith("/docs") && !pathname?.includes("/docs/components")
                  }
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

                <NavLink isNextLink href="/themes">
                  Themes
                </NavLink>

                <NavLink href="/colors">Colors</NavLink>

                <NavLink href="/blocks">Blocks</NavLink>
              </div>
              <div className="flex items-center gap-x-2">
                <Button
                  onPress={() => setOpen((open: boolean) => !open)}
                  size="sq-sm"
                  isCircle
                  intent="plain"
                >
                  <MagnifyingGlassIcon />
                </Button>

                <Link
                  aria-label="Join Discord"
                  className={buttonStyles({
                    intent: "plain",
                    isCircle: true,
                    size: "sq-sm",
                  })}
                  target="_blank"
                  href={siteConfig.discord}
                >
                  <BrandDiscordIcon />
                </Link>
                <Link
                  aria-label="Follow Update on X"
                  className={buttonStyles({
                    intent: "plain",
                    isCircle: true,
                    size: "sq-sm",
                    className: "**:data-[slot=icon]:text-fg",
                  })}
                  target="_blank"
                  href="https://x.com/intent/follow?screen_name=irsyadadl"
                >
                  <BrandXIcon />
                </Link>

                <GithubLink />
                <ThemeSwitcher intent="plain" isCircle />
              </div>
            </div>
          </PageContainer>
        </nav>
      </div>
      {!isDesktop && <ResponsiveNavigation />}
    </>
  )
}
