"use client"
import { useState } from "react"

import { GithubLink } from "@/components/github-link"
import { PageContainer } from "@/components/page-container"
import { ResponsiveNavigation } from "@/components/responsive-navigation"
import { Button, buttonStyles } from "@/components/ui/button"
import { Link } from "@/components/ui/link"
import { Menu } from "@/components/ui/menu"
import { siteConfig } from "@/config/site"
import { useMediaQuery } from "@/hooks/use-media-query"
import {
  IconBrandAdobe,
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandIntentui,
  IconBrandTailwindcss,
  IconBrandX,
  IconChevronDown,
  IconColorPalette,
  IconColors,
  IconCube,
  IconHome,
  IconNotepad,
  IconSearch,
  IconWindowVisit,
} from "@intentui/icons"
import { usePathname } from "next/navigation"
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
                <NavbarDropdown />
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
                <NavLink href="https://blocks.intentui.com">Premium Blocks</NavLink>
              </div>
              <div className="flex items-center gap-x-2">
                <>
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
                </>
              </div>
            </div>
          </PageContainer>
        </nav>
      </div>
      {!isDesktop && <ResponsiveNavigation openCmd={open} setOpenCmd={setOpen} />}
    </>
  )
}

export function NavbarDropdown() {
  return (
    <div className="flex items-center">
      <Menu>
        <Button
          aria-label={siteConfig.name}
          intent="plain"
          size="sm"
          className="-ml-1 group flex items-center gap-x-2 pressed:bg-transparent p-2 font-medium hover:bg-transparent *:data-[slot=icon]:size-6 sm:*:data-[slot=icon]:size-6"
        >
          <IconBrandIntentui />
          <span>Intent</span> <span className="text-muted-fg">UI</span>
        </Button>
        <Menu.Content placement="bottom" className="sm:min-w-64">
          <Menu.Section title="Pages">
            <Menu.Item href="/">
              <IconHome />
              <Menu.Label>Home</Menu.Label>
            </Menu.Item>
            <Menu.Item href="/components">
              <IconCube />
              <Menu.Label>Components</Menu.Label>
            </Menu.Item>
            <Menu.Item href="/colors">
              <IconColors />
              <Menu.Label>Colors</Menu.Label>
            </Menu.Item>
            <Menu.Item href="/themes">
              <IconColorPalette />
              <Menu.Label>Themes</Menu.Label>
            </Menu.Item>
            <Menu.Item href="/blocks">
              <IconWindowVisit />
              <Menu.Label>Blocks</Menu.Label>
            </Menu.Item>
            <Menu.Item target="_blank" href="https://blocks.intentui.com">
              <IconBrandIntentui />
              <Menu.Label>Premium Blocks</Menu.Label>
            </Menu.Item>
            <Menu.Item href="/icons">
              <IconBrandIntentui />
              <Menu.Label>Icons</Menu.Label>
            </Menu.Item>
            <Menu.Item href="/blog">
              <IconNotepad />
              <Menu.Label>Blog</Menu.Label>
            </Menu.Item>
          </Menu.Section>
          <Menu.Section title="Refs">
            <Menu.Item href={siteConfig.discord} target="_blank">
              <IconBrandDiscord /> <Menu.Label>Discord</Menu.Label>
            </Menu.Item>
            <Menu.Item href="https://x.com/intent/follow?screen_name=irsyadadl" target="_blank">
              <IconBrandX /> <Menu.Label>X / Twitter</Menu.Label>
            </Menu.Item>
            <Menu.Item href={siteConfig.links.github} target="_blank">
              <IconBrandGithub />
              <Menu.Label>Github</Menu.Label>
            </Menu.Item>
            <Menu.Item
              href="https://react-spectrum.adobe.com/react-aria/components.html"
              target="_blank"
            >
              <IconBrandAdobe />
              <Menu.Label>RAC</Menu.Label>
            </Menu.Item>
            <Menu.Item href="https://tailwindcss.com" target="_blank">
              <IconBrandTailwindcss />
              <Menu.Label>Tailwind CSS</Menu.Label>
            </Menu.Item>
          </Menu.Section>
        </Menu.Content>
      </Menu>
      <span className="mx-2 text-muted-fg">/</span>
      <Menu>
        <Button intent="plain" size="xs">
          3.x
          <IconChevronDown />
        </Button>
        <Menu.Content>
          <Menu.Item href="https://intentui.com/docs/getting-started/introduction">
            3.x (latest)
          </Menu.Item>
          <Menu.Item href="https://2x.intentui.com/docs/getting-started/introduction">
            2.x
          </Menu.Item>
          <Menu.Item href="https://1x.intentui.com/docs/getting-started/introduction">
            1.x (deprecated)
          </Menu.Item>
        </Menu.Content>
      </Menu>
    </div>
  )
}
