"use client"

import React, { useState } from "react"

import sidebar from "@/resources/lib/sidebar.json"
import {
  IconBrandIntentui,
  IconColors,
  IconColorSwatch,
  IconCube,
  IconHashtag,
  IconHome,
  IconNotes
} from "@intentui/icons"
import { useCommandState } from "cmdk"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { CommandMenu, useMediaQuery } from "ui"
import { useDebounce } from "use-debounce"

export interface OpenCloseProps {
  openCmd: boolean
  setOpen?: (isOpen: boolean) => void
}

interface SidebarItem {
  title: string
  slug?: string
  status?: string
  children?: SidebarItem[]
  toc?: {
    title: string
    url: string
    depth: number
  }[]
}

export function CommandPalette({ openCmd, setOpen }: OpenCloseProps) {
  const router = useRouter()
  const pathname = usePathname()

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        // @ts-ignore
        setOpen((open: boolean) => !open)
      }
    }

    document.addEventListener("keydown", down)

    return () => document.removeEventListener("keydown", down)
  }, [pathname, setOpen])

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  React.useEffect(() => {
    if (setOpen) {
      setOpen(false)
    }
  }, [pathname, setOpen])

  const isDesktop = useMediaQuery("(min-width: 1024px)")

  const [, setLoading] = useState(false)
  const [search, setSearch] = useState("")
  const [debouncedSearch] = useDebounce(search, 300)

  function searchSidebar(items: SidebarItem[], query: string): SidebarItem[] {
    return items
      .map((item) => {
        const matchesTitle =
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.slug?.toLowerCase().includes(query.toLowerCase())

        const filteredChildren = item.children?.length ? searchSidebar(item.children, query) : []

        const filteredToc =
          item.toc
            ?.filter(
              (t, index, self) =>
                t.title.toLowerCase().includes(query.toLowerCase()) &&
                self.findIndex((tt) => tt.title === t.title) === index
            )
            ?.slice(0, 5) || []

        const hasMatches = matchesTitle || filteredChildren.length > 0 || filteredToc.length > 0

        if (hasMatches) {
          return {
            ...item,
            children: matchesTitle ? item.children : filteredChildren,
            toc: filteredToc
          }
        }

        return null
      })
      .filter(Boolean) as SidebarItem[]
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  const filteredItems = React.useMemo(() => {
    if (!debouncedSearch) return []

    return searchSidebar(sidebar[3].children as any, debouncedSearch)
  }, [debouncedSearch, sidebar])

  React.useEffect(() => {
    if (debouncedSearch) {
      setLoading(true)
      const timeout = setTimeout(() => setLoading(false), 100)
      return () => clearTimeout(timeout)
    }
    setLoading(false)
  }, [debouncedSearch])

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  React.useEffect(() => {
    setSearch("")
  }, [pathname])
  return (
    <CommandMenu
      classNames={{
        content:
          "dark:supports-backdrop-filter:backdrop-blur-2xl dark:supports-backdrop-filter:bg-overlay/50"
      }}
      isOpen={openCmd}
      onOpenChange={setOpen}
    >
      <CommandMenu.Input
        className="text-sm"
        value={search}
        onValueChange={setSearch}
        autoFocus={isDesktop}
        placeholder="Eg. Colors, Date, Chart, etc."
      />
      <CommandMenu.List>
        <CommandMenu.Section>
          <CommandMenu.Item value="home" asChild>
            <Link href="/">
              <IconHome /> Home
            </Link>
          </CommandMenu.Item>
          <CommandMenu.Item value="documenation" asChild>
            <Link href="/docs/1.x/getting-started/installation">
              <IconNotes /> Docs
            </Link>
          </CommandMenu.Item>
          <CommandMenu.Item value="components" asChild>
            <Link href="/docs/1.x/components/buttons/button">
              <IconCube /> Components
            </Link>
          </CommandMenu.Item>
          <CommandMenu.Item value="colors" asChild>
            <Link href="/colors">
              <IconColors /> Colors
            </Link>
          </CommandMenu.Item>
          <CommandMenu.Item value="icons" asChild>
            <Link href="/icons">
              <IconBrandIntentui /> Icons
            </Link>
          </CommandMenu.Item>
          <CommandMenu.Item value="themes" asChild>
            <Link href="/themes">
              <IconColorSwatch /> Themes
            </Link>
          </CommandMenu.Item>
        </CommandMenu.Section>
        {debouncedSearch &&
          filteredItems.map((item, i) => (
            <CommandMenu.Section key={`${item.slug}-${i}-${item.title}`} heading={item.title}>
              {item.children?.map((child) => (
                <React.Fragment key={`${item.slug}-${item.title}-${child.slug}-${child.title}`}>
                  <SubItem
                    value={`${item.title} ${child.title} ${item.slug} ${child.slug}`}
                    onSelect={() => router.push(`/${child.slug}`)}
                  >
                    <IconCube />
                    {child.title}
                  </SubItem>
                  {child.toc?.map((tocItem) => (
                    <SubItem
                      key={`toc-${child.slug || child.title}-${tocItem.url}`}
                      value={`toc-${child.title} ${child.slug} ${tocItem.title} ${tocItem.url}`}
                      onSelect={() => router.push(`/${child.slug}${tocItem.url}`)}
                    >
                      <IconHashtag />
                      {tocItem.title}
                      <CommandMenu.Description>{child.title}</CommandMenu.Description>
                    </SubItem>
                  ))}
                </React.Fragment>
              ))}
            </CommandMenu.Section>
          ))}
      </CommandMenu.List>
    </CommandMenu>
  )
}

const SubItem = (props: React.ComponentProps<typeof CommandMenu.Item>) => {
  const search = useCommandState((state) => state.search)
  if (!search) return null
  return <CommandMenu.Item {...props} />
}
