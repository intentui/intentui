"use client"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { Autocomplete, useFilter } from "react-aria-components/Autocomplete"
import { GridList, GridListItem } from "react-aria-components/GridList"
import { Header, HeaderDescription, HeaderInner, HeaderTitle } from "@/components/header"
import { PageContainer } from "@/components/page-container"
import { useTheme } from "@/components/theme-provider"
import { Input, InputGroup } from "@/components/ui/input"
import { Keyboard } from "@/components/ui/keyboard"
import { SearchField } from "@/components/ui/search-field"
import { Text } from "@/components/ui/text"
import menus from "@/components-search.json"

const components = menus[3]
const allChildren = (components?.children ?? []).flatMap((s: any) => s?.children ?? [])

export function ListComponents() {
  const { contains } = useFilter({ sensitivity: "base" })
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    const isEditable = (el: EventTarget | null) => {
      if (!(el instanceof HTMLElement)) return false
      const tag = el.tagName
      const editable = el.getAttribute("contenteditable")
      return (
        tag === "INPUT" ||
        tag === "TEXTAREA" ||
        editable === "true" ||
        el.closest("[role='textbox']") !== null
      )
    }
    const onKeyDown = (e: KeyboardEvent) => {
      const cmdF = (e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "f"
      const plainF =
        e.key.toLowerCase() === "f" && !e.metaKey && !e.ctrlKey && !e.altKey && !e.shiftKey
      if ((cmdF || plainF) && !isEditable(e.target)) {
        if (cmdF) e.preventDefault()
        inputRef.current?.focus()
        inputRef.current?.select?.()
      }
    }
    window.addEventListener("keydown", onKeyDown, { capture: true })
    return () => window.removeEventListener("keydown", onKeyDown, { capture: true } as any)
  }, [])

  return (
    <Autocomplete filter={contains}>
      <Header>
        <HeaderInner>
          <HeaderTitle>Components</HeaderTitle>
          <HeaderDescription>
            Explore 80+ accessible UI components powered by react aria components, easy to customize
            and ready for production.
          </HeaderDescription>
          <SearchField
            ref={inputRef}
            className="mt-6 font-normal sm:max-w-2xs"
            aria-label="Search components"
          >
            <InputGroup>
              <MagnifyingGlassIcon />
              <Input className="bg-overlay" placeholder="Search components" />
              <Keyboard>f</Keyboard>
            </InputGroup>
          </SearchField>
        </HeaderInner>
      </Header>

      <div className="border-page border-t bg-muted/50">
        <PageContainer>
          <div className="border-page sm:border-x">
            <GridList
              aria-label="Components"
              layout="grid"
              className="grid grid-cols-1 gap-6 py-6 sm:grid-cols-2 sm:gap-px sm:bg-border/50 sm:py-0 lg:grid-cols-4"
              renderEmptyState={() => (
                <div className="flex items-center justify-center">
                  <Text>No results found. Try searching for something else!</Text>
                </div>
              )}
            >
              {allChildren.map((item: any) => {
                const name = item.slug.match(/([^/]+)\/?$/)?.[1] ?? ""
                const suffix = mounted && resolvedTheme === "dark" ? "-dark" : ""
                return (
                  <GridListItem
                    textValue={`${item.slug} ${item.title}`}
                    key={item.slug}
                    className="group flex cursor-pointer flex-col outline-hidden hover:opacity-80 sm:bg-bg/60 sm:p-0"
                    href={item.slug}
                  >
                    <Image
                      width={708}
                      className="mb-3 rounded-xl border-page ring ring-page sm:mb-0 sm:rounded-none sm:border-b sm:ring-0"
                      height={480}
                      src={`/images/thumbnails/${name}${suffix}.png`}
                      alt={item.title}
                    />
                    <span className="font-medium text-sm sm:p-4">{item.title}</span>
                  </GridListItem>
                )
              })}
            </GridList>
          </div>
        </PageContainer>
      </div>
    </Autocomplete>
  )
}
