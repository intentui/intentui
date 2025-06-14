"use client"
import results from "@/components-search.json"
import { CommandMenu } from "@/components/ui/command-menu"
import type { Component, Grouped } from "@/scripts/generate-search"
import {
  IconColorPalette,
  IconColors,
  IconHashtag,
  IconHome,
  IconNotes,
  IconPackage,
} from "@intentui/icons"
import { useRouter } from "next/navigation"

const docs = [results[0], results[1], results[2]] as Grouped[]
const components = results[3] as any

export interface OpenCloseProps {
  openCmd: boolean
  setOpen?: (isOpen: boolean) => void
}

export function CommandPalette({ openCmd, setOpen }: OpenCloseProps) {
  const router = useRouter()
  return (
    <>
      <CommandMenu shortcut="k" isOpen={openCmd} onOpenChange={setOpen}>
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

          {docs.map((result) => (
            <CommandMenu.Section
              key={result.id}
              title={result.section}
              items={result.children as any}
            >
              {(item: Component) => (
                <CommandMenu.Item
                  key={item.slug}
                  id={item.slug.split("/").pop()}
                  textValue={item.title}
                  onAction={() => {
                    router.push(item.slug, { scroll: false })
                    if (setOpen) {
                      setOpen(false)
                    }
                  }}
                >
                  <IconHashtag />
                  <CommandMenu.Label>{item.title}</CommandMenu.Label>
                </CommandMenu.Item>
              )}
            </CommandMenu.Section>
          ))}

          {components.children.map((component: any) => (
            <CommandMenu.Section
              items={component.children}
              id={component.id}
              key={component.id}
              title={component.subsection}
            >
              {(item: Component) => (
                <CommandMenu.Item
                  key={item.slug}
                  id={item.slug.split("/").pop()}
                  textValue={`${component.subsection} ${item.title} ${item.slug.split("/").pop()}`}
                  onAction={() => {
                    router.push(item.slug, { scroll: false })
                    if (setOpen) {
                      setOpen(false)
                    }
                  }}
                >
                  <IconHashtag />
                  <CommandMenu.Label>{item.title}</CommandMenu.Label>
                </CommandMenu.Item>
              )}
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
