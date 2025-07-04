"use client"
import {
  IconBrandDiscord,
  IconBrandIntentui,
  IconBrandX,
  IconChevronDown,
  IconSearch,
} from "@intentui/icons"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { GithubLink } from "@/components/github-link"
import { PageContainer } from "@/components/page-container"
import { ResponsiveNavigation } from "@/components/responsive-navigation"
import { Button, buttonStyles } from "@/components/ui/button"
import { Link } from "@/components/ui/link"
import { Menu } from "@/components/ui/menu"
import { siteConfig } from "@/config/site"
import { useMediaQuery } from "@/hooks/use-media-query"
import { CommandPalette } from "./command-palette"
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
                    className="-ml-3 mr-2 flex items-center gap-x-2 p-2 font-medium"
                    aria-label="Goto homepage"
                  >
                    <IconBrandIntentui className="size-6 text-white" />
                    <span className="hidden sm:inline">
                      <span>Intent</span> <span className="text-muted-fg">UI</span>
                    </span>
                  </Link>
                  <span className="mx-2 text-muted-fg">/</span>
                  <Menu>
                    <Button intent="plain" size="xs">
                      3.x
                      <IconChevronDown />
                    </Button>
                    <Menu.Content>
                      <Menu.Item
                        href="https://intentui.com/docs/getting-started/introduction"
                        className="group"
                      >
                        3.x{" "}
                        <span className="-mr-1 ml-auto rounded-[calc(var(--radius-lg)-2px)] border border-fg/10 bg-fg/5 px-2 font-medium text-xs/5 tracking-tight group-focus:border-white/20 group-focus:bg-white/15 dark:bg-fg/10">
                          latest
                        </span>
                      </Menu.Item>
                      <Menu.Item href="https://2x.intentui.com/docs/getting-started/introduction">
                        2.x
                      </Menu.Item>
                      <Menu.Item
                        href="https://1x.intentui.com/docs/getting-started/introduction"
                        className="group"
                      >
                        1.x{" "}
                        <span className="-mr-1 ml-auto rounded-[calc(var(--radius-lg)-2px)] border border-fg/10 bg-fg/5 px-2 font-medium text-xs/5 tracking-tight group-focus:border-white/20 group-focus:bg-white/15 dark:bg-fg/10">
                          deprecated
                        </span>
                      </Menu.Item>
                    </Menu.Content>
                  </Menu>
                </div>
                <NavLink isNextLink isActive={pathname === "/"} href="/">
                  Home
                </NavLink>
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

                <NavLink href="/icons">Icons</NavLink>

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
                  <IconSearch />
                </Button>

                <Link
                  aria-label="Join Discord"
                  className={buttonStyles({
                    intent: "plain",
                    isCircle: true,
                    size: "sq-sm",
                    className:
                      "**:data-[slot=icon]:text-indigo-500 hover:**:data-[slot=icon]:text-indigo-600",
                  })}
                  target="_blank"
                  href={siteConfig.discord}
                >
                  <IconBrandDiscord />
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
                  <IconBrandX />
                </Link>
                <Link
                  aria-label="Follow Update on X"
                  className={buttonStyles({
                    intent: "plain",
                    size: "sq-sm",
                    isCircle: true,
                    className: "hover:border-blue-500/20**:data-[slot=icon]:text-fg",
                  })}
                  target="_blank"
                  href="https://dub.sh/NfSXJrL"
                >
                  <IconBrandIntentui />
                </Link>

                <ThemeSwitcher intent="plain" isCircle />
                <GithubLink />
              </div>
            </div>
          </PageContainer>
        </nav>
      </div>
      {!isDesktop && <ResponsiveNavigation />}
    </>
  )
}
