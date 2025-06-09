"use client"

import { Link } from "@/components/ui/link"
import { Sheet } from "@/components/ui/sheet"
import {
  IconArrowUpRight,
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandIntentui,
  IconBrandX,
  IconHamburger,
  IconHome,
  IconSearch,
  IconSidebarFill,
} from "@intentui/icons"
import { LayoutGroup } from "motion/react"
import { usePathname } from "next/navigation"
import React, { useEffect, useState } from "react"

import { menus } from "@/app/(home)/partials/navbar"
import { buttonStyles } from "@/components/ui/button"
import { Menu } from "@/components/ui/menu"
import { Separator } from "@/components/ui/separator"
import { siteConfig } from "@/config/site"
import { Button as ButtonPrimitive } from "react-aria-components"
import { Aside } from "./aside"
import { CommandPalette } from "./command-palette"
import { NavbarDropdown } from "./navbar"
import { ThemeSwitcher } from "./theme-switcher"
export function ResponsiveAside({
  openCmd,
  setOpenCmd,
}: { openCmd: boolean; setOpenCmd: (open: boolean) => void }) {
  const id = React.useId()
  const [openAside, setOpenAside] = useState(false)
  const pathname = usePathname()

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => setOpenAside(false), [pathname])

  return (
    <>
      <CommandPalette setOpen={setOpenCmd} openCmd={openCmd} />
      <nav className="sticky top-0 z-30 flex items-center justify-between border-b bg-bg px-4 py-2 shadow-xs lg:hidden">
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
        <div className="flex items-center gap-x-0.5 **:data-[slot=icon]:size-5">
          <ButtonPrimitive
            onPress={() => setOpenCmd(true)}
            aria-label="Search docs"
            className="p-2 pressed:text-fg text-muted-fg outline-hidden hover:text-fg focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <IconSearch />
          </ButtonPrimitive>

          <ThemeSwitcher intent="plain" shape="circle" />

          <LinkIcon
            aria-label="Open Intent X / Twitter"
            href={siteConfig.links.twitter}
            target="_blank"
          >
            <IconBrandX />
          </LinkIcon>
          <LinkIcon
            aria-label="Open Intent Discord"
            href={siteConfig.links.discord}
            target="_blank"
          >
            <IconBrandDiscord />
          </LinkIcon>

          <LinkIcon aria-label="Open Intent Github" href={siteConfig.repo} target="_blank">
            <IconBrandGithub />
          </LinkIcon>
          <Separator orientation="vertical" className="mx-1 h-5" />
          <Menu respectScreen={false}>
            <ButtonPrimitive
              aria-label="Open menu"
              className="p-2 pressed:text-fg text-muted-fg outline-hidden hover:text-fg focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <IconHamburger className="size-4" />
            </ButtonPrimitive>
            <Menu.Content placement="bottom" className="min-w-64">
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
                  <Menu.Label>{menu.label}</Menu.Label>
                  {menu.external && <IconArrowUpRight />}
                </Menu.Item>
              ))}
            </Menu.Content>
          </Menu>
        </div>
      </nav>
      <Sheet.Content
        aria-label="Docs Menu"
        isOpen={openAside}
        onOpenChange={setOpenAside}
        classNames={{ content: "w-[19rem]" }}
        side="left"
        closeButton={true}
      >
        <Sheet.Header className="mb-4 flex flex-row justify-between py-2">
          <NavbarDropdown />
        </Sheet.Header>
        <Sheet.Body className="px-2">
          <LayoutGroup id={id}>
            <Aside />
          </LayoutGroup>
        </Sheet.Body>
      </Sheet.Content>
    </>
  )
}

function LinkIcon({ className, ...props }: React.ComponentProps<typeof Link>) {
  return (
    <Link
      {...props}
      className={buttonStyles({
        intent: "plain",
        size: "square-petite",
        shape: "circle",
      })}
    />
  )
}
