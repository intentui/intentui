"use client"

import React from "react"

import { IconBrandIntentui, IconBrandX, IconHamburger, IconSearch } from "@intentui/icons"
import { LayoutGroup } from "motion/react"
import { usePathname } from "next/navigation"
import { Button, buttonStyles, Link, Sheet } from "ui"

import { Aside } from "./aside"
import { CommandPalette } from "./command-palette"
import { NavbarDropdown } from "./navbar"
import { ThemeSwitcher } from "./theme-switcher"

export function ResponsiveAside({
  openCmd,
  setOpenCmd
}: {
  openCmd: boolean
  setOpenCmd: (open: boolean) => void
}) {
  const id = React.useId()
  const [openAside, setOpenAside] = React.useState(false)
  const pathname = usePathname()
  React.useEffect(() => setOpenAside(false), [pathname])
  return (
    <nav className="lg:hidden z-10 relative">
      <CommandPalette setOpen={setOpenCmd} openCmd={openCmd} />
      <div className="flex items-center justify-between pl-4 pr-2 -mb-2 pt-2">
        <Button
          aria-label="Open Menu."
          className="-ml-2 [&_[data-slot=icon]]:text-fg"
          appearance="outline"
          size="square-petite"
          onPress={() => {
            setOpenAside(true)
          }}
        >
          <IconHamburger />
        </Button>
        <Link className="focus:outline-none -mr-6 rounded" href="/" aria-label="Logo">
          <IconBrandIntentui className="size-6" />
        </Link>
        <div className="flex items-center gap-x-1">
          <Button
            onPress={() => setOpenCmd(true)}
            size="square-petite"
            appearance="outline"
            aria-label="Open command palette"
          >
            <IconSearch />
          </Button>
          <ThemeSwitcher />
          <Link
            href="https://x.com/irsyadadl"
            aria-label="Follow me on twitter"
            className={buttonStyles({ appearance: "outline", size: "square-petite" })}
          >
            <IconBrandX />
          </Link>
        </div>
      </div>
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
    </nav>
  )
}
