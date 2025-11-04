"use client"

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import { useTheme } from "next-themes"
import { useEffect, useRef, useState } from "react"
import { Autocomplete, GridList, GridListItem, useFilter } from "react-aria-components"
import { Header } from "@/components/header"
import { PageContainer } from "@/components/page-container"
import { Input, InputGroup } from "@/components/ui/input"
import { Keyboard } from "@/components/ui/keyboard"
import { SearchField } from "@/components/ui/search-field"
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
      <Header className="border-fg/10 border-b bg-overlay">
        Components
        <SearchField className="mt-6 max-w-2xs font-normal" aria-label="Search components">
          <InputGroup>
            <MagnifyingGlassIcon />
            <Input ref={inputRef as HTMLInputElement} placeholder="Search components" />
            <Keyboard>f</Keyboard>
          </InputGroup>
        </SearchField>
      </Header>

      <PageContainer>
        <GridList
          layout="grid"
          className="my-6 grid grid-cols-1 gap-6 sm:my-12 sm:grid-cols-2 lg:grid-cols-4"
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
                <span className="text-sm/6">{item.title}</span>
              </GridListItem>
            )
          })}
        </GridList>
      </PageContainer>
    </Autocomplete>
  )
}
