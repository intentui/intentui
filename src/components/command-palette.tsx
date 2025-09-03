"use client"
import {
  IconBrandIntentui,
  IconColorPaletteFill,
  IconColorsFill,
  IconDuplicateFill,
  IconHashtag,
  IconHomeFill,
  IconNotepadFill,
  IconNotesFill,
  IconPackageFill,
  IconWindowVisitFill,
} from "@intentui/icons"
import { formatHex, parse } from "culori"
import { useRouter } from "next/navigation"
import { useMemo, useState } from "react"
import { twJoin } from "tailwind-merge"
import { useDebounce } from "use-debounce"
import { ColorSwatch } from "@/components/ui/color-swatch"
import { CommandMenu } from "@/components/ui/command-menu"
import results from "@/components-search.json"
import { useCopy } from "@/hooks/use-copy"
import colors from "@/json/colors.json"
import type { CollectionComponent, Grouped, SubSection } from "@/types/search"

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
  const [debouncedInput] = useDebounce(input, 300)
  const inputLower = debouncedInput.trim().toLowerCase()
  const isLoading = input.length >= 2 && input !== debouncedInput

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
      .filter(Boolean) as {
      colorName: string
      items: [string, string][]
    }[]
  }, [inputLower])

  return (
    <CommandMenu
      shortcut="k"
      isOpen={openCmd}
      onOpenChange={setOpen}
      inputValue={input}
      onInputChange={setInput}
      isPending={isLoading}
    >
      <CommandMenu.Search placeholder="Search components, color..." />
      <CommandMenu.List>
        <CommandMenu.Section aria-label="Pages">
          <CommandMenu.Item textValue="Home" href="/">
            <IconHomeFill />
            <CommandMenu.Label>Home</CommandMenu.Label>
          </CommandMenu.Item>
          <CommandMenu.Item textValue="Docs" href={"/docs/getting-started/installation"}>
            <IconNotesFill />
            <CommandMenu.Label>Docs</CommandMenu.Label>
          </CommandMenu.Item>
          <CommandMenu.Item textValue="components" href="/components">
            <IconPackageFill />
            <CommandMenu.Label>Components</CommandMenu.Label>
          </CommandMenu.Item>
          <CommandMenu.Item textValue="themes" href="/themes">
            <IconColorPaletteFill />
            <CommandMenu.Label>Themes</CommandMenu.Label>
          </CommandMenu.Item>
          <CommandMenu.Item textValue="icons" href="/icons">
            <IconDuplicateFill />
            <CommandMenu.Label>Icons</CommandMenu.Label>
          </CommandMenu.Item>
          <CommandMenu.Item textValue="colors" href="/colors">
            <IconColorsFill />
            <CommandMenu.Label>Colors</CommandMenu.Label>
          </CommandMenu.Item>
          <CommandMenu.Item textValue="blocks" href="/blocks">
            <IconWindowVisitFill />
            <CommandMenu.Label>Blocks</CommandMenu.Label>
          </CommandMenu.Item>
          <CommandMenu.Separator />
          <CommandMenu.Item textValue="blog" href="/blog">
            <IconNotepadFill />
            <CommandMenu.Label>Blog</CommandMenu.Label>
          </CommandMenu.Item>
          <CommandMenu.Item textValue="premium block" href="https://dub.sh/designiui">
            <IconBrandIntentui />
            <CommandMenu.Label>Premium blocks</CommandMenu.Label>
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
                <ColorItem
                  key={label}
                  label={label}
                  value={value}
                  textValue={`${colorName} ${shade} ${value}` || `${colorName}-${shade}`}
                />
              )
            })}
          </CommandMenu.Section>
        ))}
      </CommandMenu.List>
      <CommandMenu.Footer className="text-xs">
        Use <kbd>↑</kbd> and <kbd>↓</kbd> to navigate, <kbd>↵</kbd> to{" "}
        {filteredColors.length > 0 &&
        filteredDocs.length === 0 &&
        filteredComponents.length === 0
          ? "copy"
          : "select"}
        .
      </CommandMenu.Footer>
    </CommandMenu>
  )
}

interface ColorItemProps {
  label: string
  value: string
  colorName?: string
  textValue?: string
}

function ColorItem({ label, value, colorName = label, textValue }: ColorItemProps) {
  const { copied, copy } = useCopy()
  return (
    <CommandMenu.Item onAction={() => copy(value)} textValue={textValue}>
      <ColorSwatch
        className="mt-1"
        color={formatHex(parse(value))}
        colorName={colorName}
        data-slot="icon"
      />
      <CommandMenu.Label>{label}</CommandMenu.Label>
      <CommandMenu.Description className="text-xs tracking-tight">
        {/*{copied ? "Copied" : value}*/}
        <span
          className={twJoin(
            "absolute inset-y-0 right-2 left-0 self-center justify-self-end font-mono focus:transition focus:duration-300",
            copied ? "-translate-y-1.5 opacity-0" : "translate-y-0 opacity-100",
          )}
        >
          {value}
        </span>
        <span
          className={twJoin(
            "absolute inset-y-0 right-2 left-0 gap-x-1 self-center justify-self-end transition duration-300",
            copied ? "translate-y-0 opacity-100" : "translate-y-1.5 opacity-0",
          )}
        >
          Copied
        </span>
      </CommandMenu.Description>
    </CommandMenu.Item>
  )
}
