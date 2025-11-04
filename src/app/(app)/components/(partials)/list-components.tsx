"use client"

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import { useTheme } from "next-themes"
import { useEffect, useRef, useState } from "react"
import { Autocomplete, GridList, GridListItem, useFilter } from "react-aria-components"
import { PageContainer } from "@/components/page-container"
import { Heading } from "@/components/ui/heading"
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
      <div className="border-fg/10 border-t border-b bg-navbar py-6 md:border-t-0 lg:py-10">
        <PageContainer>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Heading level={1} className="text-2xl sm:text-3xl">
                Components
              </Heading>
              <Text className="mt-2 max-w-lg text-muted-fg sm:text-base/6">
                Explore{" "}
                <strong className="font-medium text-fg">80+ accessible UI components</strong>{" "}
                powered by react aria components, easy to customize and ready for production.
              </Text>
            </div>
            <SearchField className="font-normal sm:max-w-2xs" aria-label="Search components">
              <InputGroup>
                <MagnifyingGlassIcon />
                <Input
                  className="bg-overlay"
                  ref={inputRef as any}
                  placeholder="Search components"
                />
                <Keyboard>f</Keyboard>
              </InputGroup>
            </SearchField>
          </div>
        </PageContainer>
      </div>

      <div className="bg-muted py-6 sm:py-12">
        <PageContainer>
          <GridList
            aria-label="Components"
            layout="grid"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {allChildren.map((item: any) => {
              const name = item.slug.match(/([^/]+)\/?$/)?.[1] ?? ""
              const suffix = mounted && resolvedTheme === "dark" ? "-dark" : ""
              return (
                <GridListItem
                  textValue={`${item.slug} ${item.title}`}
                  key={item.slug}
                  className="group flex flex-col gap-y-2 outline-hidden hover:opacity-80"
                  href={item.slug}
                >
                  <Image
                    className="rounded-xl ring ring-fg/10 group-focus:ring-muted-fg/50"
                    width={708}
                    height={480}
                    src={`/images/thumbnails/${name}${suffix}.png`}
                    alt={item.title}
                  />
                  <span className="font-medium text-sm/6">{item.title}</span>
                </GridListItem>
              )
            })}
          </GridList>
        </PageContainer>
      </div>
    </Autocomplete>
  )
}
