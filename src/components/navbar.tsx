"use client"
import { useId, useState } from "react"

import { GithubLink } from "@/components/github-link"
import { PageContainer } from "@/components/page-container"
import { ResponsiveAside } from "@/components/responsive-aside"
import { Button, buttonStyles } from "@/components/ui/button"
import { Link } from "@/components/ui/link"
import { Menu } from "@/components/ui/menu"
import { Separator } from "@/components/ui/separator"
import { siteConfig } from "@/config/site"
import { useMediaQuery } from "@/hooks/use-media-query"
import {
  IconBrandAdobe,
  IconBrandDiscord,
  IconBrandFigma,
  IconBrandGithub,
  IconBrandIntentui,
  IconBrandTailwindcss,
  IconBrandX,
  IconChevronDown,
  IconChevronLgDown,
  IconColorPalette,
  IconColors,
  IconCube,
  IconHome,
  IconNotepad,
  IconSearch,
  IconWindowVisit,
  IconWindowVisitFill,
} from "@intentui/icons"
import { LayoutGroup } from "motion/react"
import { usePathname } from "next/navigation"
import { CommandPalette } from "./command-palette"
import { NavLink } from "./nav-item"
import { ThemeSwitcher } from "./theme-switcher"

export function Navbar() {
  const id = useId()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const isDesktop = useMediaQuery("(min-width: 1024px)")
  return (
    <>
      <CommandPalette setOpen={setOpen} openCmd={open} />
      <LayoutGroup id={`navigation-${id}`}>
        <div className="xnw2 sticky top-0 z-40 hidden overflow-hidden lg:block">
          <nav className="border-fg/10 border-b bg-overlay py-1.5 dark:supports-backdrop-filter:bg-overlay/60 dark:supports-backdrop-filter:backdrop-blur-3xl">
            <PageContainer className="lg:px-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-6">
                  <NavbarDropdown />
                  <Separator orientation="vertical" className="-ml-4 mr-1 h-6" />
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
                    isActive={
                      pathname?.startsWith("/docs/components") || pathname === "/components"
                    }
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
                  <Menu>
                    <Menu.Trigger className="group flex cursor-default items-center gap-x-2 py-3 text-muted-fg text-sm tracking-tight outline-hidden focus-visible:text-fg">
                      Premium
                      <IconChevronLgDown className="size-3 duration-200 group-pressed:rotate-180" />
                    </Menu.Trigger>
                    <Menu.Content
                      offset={4}
                      className="sm:min-w-xs sm:max-w-min"
                      placement="bottom"
                      items={premium}
                    >
                      {(item) => (
                        <Menu.Item href={item.href}>
                          <Menu.Label>{item.label}</Menu.Label>
                          <Menu.Description>{item.description}</Menu.Description>
                        </Menu.Item>
                      )}
                    </Menu.Content>
                  </Menu>
                </div>
                <div className="flex items-center gap-x-1">
                  <>
                    <Button
                      onPress={() => setOpen((open: boolean) => !open)}
                      size="square-petite"
                      shape="circle"
                      intent="plain"
                    >
                      <IconSearch />
                    </Button>
                    <ThemeSwitcher intent="plain" shape="circle" />

                    <Link
                      aria-label="Join Discord"
                      className={buttonStyles({
                        intent: "plain",
                        shape: "circle",
                        size: "square-petite",
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
                        shape: "circle",
                        size: "square-petite",
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
                        size: "square-petite",
                        shape: "circle",
                        className: "hover:border-blue-500/20**:data-[slot=icon]:text-fg",
                      })}
                      target="_blank"
                      href="https://dub.sh/NfSXJrL"
                    >
                      <IconBrandIntentui />
                    </Link>

                    <GithubLink />
                  </>
                </div>
              </div>
            </PageContainer>
          </nav>
        </div>
      </LayoutGroup>
      {!isDesktop && <ResponsiveAside openCmd={open} setOpenCmd={setOpen} />}
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
          size="small"
          className="-ml-1 group pressed:bg-transparent hover:bg-transparent sm:px-1.5"
        >
          <span className="flex items-center gap-x-1.5">
            <IconBrandIntentui className="size-5" data-slot="logo" />
            <span className="font-semibold text-sm">Intent </span>{" "}
            <span className="font-semibold text-muted-fg text-sm">UI</span>
          </span>
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
        <Button intent="plain" size="extra-small">
          2.x
          <IconChevronDown />
        </Button>
        <Menu.Content>
          <Menu.Item href="https://github.com/irsyadadl/intentui/tree/next" target="_blank">
            3.x (beta)
          </Menu.Item>
          <Menu.Item href="https://intentui.com/docs/getting-started/introduction">
            2.x (latest)
          </Menu.Item>
          <Menu.Item href="https://1x.intentui.com/docs/getting-started/introduction">
            1.x (deprecated)
          </Menu.Item>
        </Menu.Content>
      </Menu>
    </div>
  )
}

const premium = [
  {
    id: 1,
    label: "Premium Blocks",
    href: "https://blocks.intentui.com",
    icon: IconBrandIntentui,
    description: "Pre-designed, ready-to-use React components for seamless integration.",
  },
  {
    id: 4,
    label: "Templates",
    href: "https://blocks.intentui.com/templates",
    icon: IconBrandIntentui,
    description: "Pre-designed, ready-to-use React components for seamless integration.",
  },
  {
    id: 2,
    label: "Premium Starter Kit / Coming soon",
    href: "#",
    icon: IconWindowVisitFill,
    description:
      "Get started quickly with a complete React project setup, including authentication.",
    badge: "Coming soon",
  },
  {
    id: 3,
    label: "Figma / Coming soon",
    href: "#",
    icon: IconBrandFigma,
    description: "Enhance your Figma designs with Intent components.",
    badge: "Coming soon",
  },
]
