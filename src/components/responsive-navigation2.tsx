"use client"

import { Link } from "@/components/ui/link"
import { Sheet } from "@/components/ui/sheet"
import {
  IconArrowUpRight,
  IconBrandDiscord,
  IconBrandIntentui,
  IconBrandX,
  IconHamburger,
  IconHomeFill,
  IconNotepadFill,
  IconSearch,
  IconSidebarFill,
} from "@intentui/icons"
import { LayoutGroup, useMotionValueEvent, useScroll } from "motion/react"
import { usePathname } from "next/navigation"
import React, { useEffect, useState } from "react"

import { menus } from "@/app/(home)/partials/navbar"
import { GithubLink } from "@/components/github-link"
import { Button } from "@/components/ui/button"
import { Menu } from "@/components/ui/menu"
import { Separator } from "@/components/ui/separator"
import { siteConfig } from "@/config/site"
import { Button as ButtonPrimitive } from "react-aria-components"
import { twJoin } from "tailwind-merge"
import { Aside } from "./aside"
import { CommandPalette } from "./command-palette"
import { NavbarDropdown } from "./navigation"
import { ThemeSwitcher } from "./theme-switcher"
export function ResponsiveNavigation({
  openCmd,
  setOpenCmd,
}: { openCmd: boolean; setOpenCmd: (open: boolean) => void }) {
  const id = React.useId()
  const [openAside, setOpenAside] = useState(false)
  const pathname = usePathname()

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => setOpenAside(false), [pathname])
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 0)
  })
  return (
    <>
      <CommandPalette setOpen={setOpenCmd} openCmd={openCmd} />
      <nav className={twJoin("sticky top-0 z-30 flex animate-in items-center justify-between bg-bg px-4 py-2 transition-all duration-100 lg:hidden", isScrolled && "border-b shadow-xs",)}>
        <div className="flex items-center gap-x-2">
          <ButtonPrimitive
            onPress={() => setOpenAside(true)}
            aria-label="Search docs"
            className="-ml-2 p-2 outline-hidden hover:text-fg focus-visible:ring-2 focus-visible:ring-ring"
          >
            <IconSidebarFill className="size-5" />
          </ButtonPrimitive>
          <Separator orientation="vertical" className="h-5" />
          <Link className="rounded p-2 focus:outline-hidden" href="/" aria-label="Logo">
            <IconBrandIntentui className="size-5" />
          </Link>
        </div>
        <div className="flex items-center gap-x-2 **:data-[slot=icon]:size-5">
          <Button
            size="sq-sm"
            intent="plain"
            onPress={() => setOpenCmd(true)}
            aria-label="Search docs"
          >
            <IconSearch />
          </Button>

          <ThemeSwitcher intent="plain" />
          <GithubLink />
          <Separator orientation="vertical" className="mx-2 h-5" />
          <Menu>
            <Button aria-label="Search docs" intent="plain" size="sq-sm">
              <IconHamburger className="size-5" />
            </Button>
            <Menu.Content placement="bottom" className="min-w-68 sm:min-w-56">
              <Menu.Item href="/">
                <IconHomeFill />
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
              <Menu.Separator />

              <Menu.Item href="/blog">
                <IconNotepadFill />
                <Menu.Label>Blog</Menu.Label>
              </Menu.Item>

              <Menu.Item
                aria-label="Open Intent X / Twitter"
                href={siteConfig.links.twitter}
                target="_blank"
              >
                <IconBrandX />
                <Menu.Label>X</Menu.Label>
                <IconArrowUpRight />
              </Menu.Item>
              <Menu.Item href={siteConfig.links.discord} target="_blank">
                <IconBrandDiscord />
                <Menu.Label>Discord</Menu.Label>
                <IconArrowUpRight />
              </Menu.Item>
            </Menu.Content>
          </Menu>
        </div>
      </nav>
      <Sheet.Content
        aria-label="Docs Menu"
        isOpen={openAside}
        onOpenChange={setOpenAside}
        className="w-[19rem]"
        side="left"
        closeButton={true}
      >
        <Sheet.Header className="mb-4 flex flex-row justify-between py-2">
          <NavbarDropdown />
        </Sheet.Header>
        <Sheet.Body className="pr-0 pl-2">
          <LayoutGroup id={id}>
            <Aside />
          </LayoutGroup>
        </Sheet.Body>
      </Sheet.Content>
    </>
  )
}
