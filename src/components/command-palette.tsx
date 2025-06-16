"use client"
import results from "@/components-search.json"
import { ColorSwatch } from "@/components/ui/color-swatch"
import { CommandMenu } from "@/components/ui/command-menu"
import colors from "@/json/colors.json"
import type { CollectionComponent, Grouped, SubSection } from "@/types/search"
import {
  IconColorPalette,
  IconColors,
  IconHashtag,
  IconHome,
  IconNotes,
  IconPackage,
} from "@intentui/icons"
import { formatHex, parse } from "culori"
import { useRouter } from "next/navigation"
import { useMemo, useState } from "react"

const docs = [results[0], results[1], results[2]] as Grouped[]
const components = results[3] as any

export interface OpenCloseProps {
  openCmd: boolean
  setOpen?: (isOpen: boolean) => void
}

function isComponentArray(
  items: CollectionComponent[] | SubSection[],
): items is CollectionComponent[] {
  const first = items[0]
  return !!first && typeof first === "object" && "slug" in first && "title" in first
}

export function CommandPalette({ openCmd, setOpen }: OpenCloseProps) {
  const router = useRouter()
  const [input, setInput] = useState("")
  const inputLower = input.trim().toLowerCase()

  const filteredDocs = useMemo(() => {
    if (!inputLower) return []

    return docs
      .map((group) => {
        const sectionMatch = group.section.toLowerCase().includes(inputLower)

        if (!isComponentArray(group.children)) return sectionMatch ? group : null

        const children = group.children.filter(
          (item) =>
            item.title.toLowerCase().includes(inputLower) ||
            item.slug.toLowerCase().includes(inputLower),
        )

        if (sectionMatch) return group
        if (children.length) return { ...group, children }
        return null
      })
      .filter(Boolean) as Grouped[]
  }, [inputLower])

  const filteredComponents = useMemo(() => {
    if (!inputLower) return []

    return components.children
      .map((component: any) => {
        const subsectionMatch = component.subsection?.toLowerCase().includes(inputLower)
        const idMatch = String(component.id).includes(inputLower)

        if (subsectionMatch || idMatch) return component

        const children = component.children.filter(
          (item: CollectionComponent) =>
            item.title.toLowerCase().includes(inputLower) ||
            item.slug.toLowerCase().includes(inputLower),
        )

        return children.length ? { ...component, children } : null
      })
      .filter(Boolean)
  }, [inputLower])

  const filteredColors = useMemo(() => {
    if (!inputLower) return []

    return Object.entries(colors)
      .map(([colorName, shades]) => {
        const items = Object.entries(shades).filter(([shade, value]) => {
          const label = `${colorName}-${shade}`
          return label.includes(inputLower) || value.toLowerCase().includes(inputLower)
        })

        return items.length ? { colorName, items } : null
      })
      .filter(Boolean) as { colorName: string; items: [string, string][] }[]
  }, [inputLower])

  return (
    <>
      <CommandMenu
        shortcut="k"
        isOpen={openCmd}
        onOpenChange={setOpen}
        inputValue={input}
        onInputChange={setInput}
      >
        <CommandMenu.Search placeholder="Search components..." />
        <CommandMenu.List>
          <CommandMenu.Section className="hidden sm:grid" aria-label="Pages">
            <CommandMenu.Item textValue="Home" href="/">
              <IconHome />
              <CommandMenu.Label>Home</CommandMenu.Label>
            </CommandMenu.Item>
            <CommandMenu.Item textValue="Docs" href={"/docs/getting-started/installation"}>
              <IconNotes />
              <CommandMenu.Label>Docs</CommandMenu.Label>
            </CommandMenu.Item>
            <CommandMenu.Item textValue="components" href="/components">
              <IconPackage />
              <CommandMenu.Label>Components</CommandMenu.Label>
            </CommandMenu.Item>
            <CommandMenu.Item textValue="themes" href="/themes">
              <IconColorPalette />
              <CommandMenu.Label>Themes</CommandMenu.Label>
            </CommandMenu.Item>
            <CommandMenu.Item textValue="colors" href="/colors">
              <IconColors />
              <CommandMenu.Label>Colors</CommandMenu.Label>
            </CommandMenu.Item>
          </CommandMenu.Section>

          {filteredDocs.map((result) => (
            <CommandMenu.Section
              key={result.id}
              title={result.section}
              items={result.children as CollectionComponent[]}
            >
              {(item: CollectionComponent) => (
                <CommandMenu.Item
                  key={item.slug}
                  id={item.slug.split("/").pop()}
                  textValue={`${result.section} ${item.title}`}
                  onAction={() => {
                    router.push(item.slug, { scroll: false })
                    setOpen?.(false)
                  }}
                >
                  <IconHashtag />
                  <CommandMenu.Label>{item.title}</CommandMenu.Label>
                </CommandMenu.Item>
              )}
            </CommandMenu.Section>
          ))}

          {filteredComponents.map((component: any) => (
            <CommandMenu.Section
              key={component.id}
              id={component.id}
              title={component.subsection}
              items={component.children as CollectionComponent[]}
            >
              {(item: CollectionComponent) => (
                <CommandMenu.Item
                  key={item.slug}
                  id={item.slug.split("/").pop()}
                  textValue={`${component.subsection} ${item.title} ${item.slug.split("/").pop()}`}
                  onAction={() => {
                    router.push(item.slug, { scroll: false })
                    setOpen?.(false)
                  }}
                >
                  <IconHashtag />
                  <CommandMenu.Label>{item.title}</CommandMenu.Label>
                </CommandMenu.Item>
              )}
            </CommandMenu.Section>
          ))}

          {filteredColors.map(({ colorName, items }) => (
            <CommandMenu.Section key={colorName} title={colorName}>
              {items.map(([shade, value]) => {
                const label = `${colorName}-${shade}`
                return (
                  <CommandMenu.Item key={label} textValue={label}>
                    <ColorSwatch
                      className="mt-1"
                      color={formatHex(parse(value))}
                      colorName={colorName}
                      data-slot="icon"
                    />
                    <CommandMenu.Label>{label}</CommandMenu.Label>
                    <CommandMenu.Description className="font-mono text-xs tracking-tight">
                      {value}
                    </CommandMenu.Description>
                  </CommandMenu.Item>
                )
              })}
            </CommandMenu.Section>
          ))}
        </CommandMenu.List>
        <CommandMenu.Footer className="text-xs">
          Use <kbd>↑</kbd> and <kbd>↓</kbd> to navigate, <kbd>↵</kbd> to select.
        </CommandMenu.Footer>
      </CommandMenu>
    </>
  )
}
