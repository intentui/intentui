'use client'

import {
  ArrowTopRightOnSquareIcon,
  BookOpenIcon,
  CubeIcon,
  DocumentTextIcon,
  HashtagIcon,
  HeartIcon,
  HomeIcon,
  Square3Stack3DIcon,
  Squares2X2Icon,
  SwatchIcon,
  WindowIcon,
} from '@heroicons/react/24/outline'
import { formatHex, parse } from 'culori'
import { useRouter } from 'next/navigation'
import { useMemo, useState } from 'react'
import { twJoin } from 'tailwind-merge'
import { useDebounce } from 'use-debounce'
import { ColorSwatch } from '@/components/ui/color-swatch'
import {
  CommandMenu,
  CommandMenuDescription,
  CommandMenuFooter,
  CommandMenuItem,
  CommandMenuLabel,
  CommandMenuList,
  CommandMenuSearch,
  CommandMenuSection,
  CommandMenuSeparator,
} from '@/components/ui/command-menu'
import results from '@/components-search.json'
import { useClipboard } from '@/hooks/use-clipboard'
import colors from '@/json/colors.json'
import type { CollectionComponent, Grouped, SubSection } from '@/types/search'

const docs = [results[0], results[1], results[2]] as Grouped[]
const components = results[3] as any

export interface OpenCloseProps {
  openCmd: boolean
  setOpen?: (isOpen: boolean) => void
}

function isComponentArray(
  items: CollectionComponent[] | SubSection[]
): items is CollectionComponent[] {
  const first = items[0]
  return !!first && typeof first === 'object' && 'slug' in first && 'title' in first
}

export function CommandPalette({ openCmd, setOpen }: OpenCloseProps) {
  const router = useRouter()
  const [input, setInput] = useState('')
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
            item.slug.toLowerCase().includes(inputLower)
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
            item.slug.toLowerCase().includes(inputLower)
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
      <CommandMenuSearch placeholder="Search components, color..." />
      <CommandMenuList>
        <CommandMenuSection aria-label="Pages">
          <CommandMenuItem textValue="Home" href="/">
            <HomeIcon />
            <CommandMenuLabel>Home</CommandMenuLabel>
          </CommandMenuItem>
          <CommandMenuItem textValue="Docs" href={'/docs/getting-started/installation'}>
            <BookOpenIcon />
            <CommandMenuLabel>Docs</CommandMenuLabel>
          </CommandMenuItem>
          <CommandMenuItem textValue="components" href="/components">
            <CubeIcon />
            <CommandMenuLabel>Components</CommandMenuLabel>
          </CommandMenuItem>
          <CommandMenuItem textValue="blocks" href="/blocks">
            <WindowIcon />
            <CommandMenuLabel>Blocks</CommandMenuLabel>
          </CommandMenuItem>
          <CommandMenuItem textValue="colors" href="/colors">
            <SwatchIcon />
            <CommandMenuLabel>Colors</CommandMenuLabel>
          </CommandMenuItem>
          <CommandMenuItem textValue="sponsor" href="/sponsor">
            <HeartIcon />
            <CommandMenuLabel>Sponsor</CommandMenuLabel>
          </CommandMenuItem>
          <CommandMenuItem textValue="showcase" href="/showcase">
            <Squares2X2Icon />
            <CommandMenuLabel>Showcase</CommandMenuLabel>
          </CommandMenuItem>
          <CommandMenuItem textValue="blog" href="/blog">
            <DocumentTextIcon />
            <CommandMenuLabel>Blog</CommandMenuLabel>
          </CommandMenuItem>
          <CommandMenuSeparator className="my-1.5" />
          <CommandMenuItem textValue="premium block" href="https://dub.sh/designiui">
            <CommandMenuLabel>Premium blocks</CommandMenuLabel>
            <ArrowTopRightOnSquareIcon />
          </CommandMenuItem>
          <CommandMenuItem textValue="themes" href="https://design.intentui.com/themes">
            <CommandMenuLabel>Themes</CommandMenuLabel>
            <ArrowTopRightOnSquareIcon />
          </CommandMenuItem>
          <CommandMenuItem textValue="themes" href="https://design.intentui.com/templates">
            <Square3Stack3DIcon />
            <CommandMenuLabel>Templates</CommandMenuLabel>
            <ArrowTopRightOnSquareIcon />
          </CommandMenuItem>
        </CommandMenuSection>

        {filteredDocs.map((result) => (
          <CommandMenuSection
            key={result.id}
            label={result.section}
            items={result.children as CollectionComponent[]}
          >
            {(item: CollectionComponent) => (
              <CommandMenuItem
                key={item.slug}
                id={item.slug.split('/').pop()}
                textValue={`${result.section} ${item.title}`}
                onAction={() => {
                  router.push(item.slug, { scroll: false })
                  setOpen?.(false)
                }}
              >
                <HashtagIcon />
                <CommandMenuLabel>{item.title}</CommandMenuLabel>
              </CommandMenuItem>
            )}
          </CommandMenuSection>
        ))}

        {filteredComponents.map((component: any) => (
          <CommandMenuSection
            key={component.id}
            id={component.id}
            label={component.subsection}
            items={component.children as CollectionComponent[]}
          >
            {(item: CollectionComponent) => (
              <CommandMenuItem
                key={item.slug}
                id={item.slug.split('/').pop()}
                textValue={`${component.subsection} ${item.title} ${item.slug.split('/').pop()}`}
                onAction={() => {
                  router.push(item.slug, { scroll: false })
                  setOpen?.(false)
                }}
              >
                <HashtagIcon />
                <CommandMenuLabel>{item.title}</CommandMenuLabel>
              </CommandMenuItem>
            )}
          </CommandMenuSection>
        ))}

        {filteredColors.map(({ colorName, items }) => (
          <CommandMenuSection key={colorName} label={colorName}>
            {items.map(([shade, value]) => {
              const label = `${colorName}-${shade}`
              return (
                <ColorItem
                  key={label}
                  label={label}
                  value={value}
                  textValue={`${colorName} ${shade} ${value}`}
                />
              )
            })}
          </CommandMenuSection>
        ))}
      </CommandMenuList>
      <CommandMenuFooter className="text-xs">
        Use <kbd>↑</kbd> and <kbd>↓</kbd> to navigate, <kbd>↵</kbd> to{' '}
        {filteredColors.length > 0 && filteredDocs.length === 0 && filteredComponents.length === 0
          ? 'copy'
          : 'select'}
        .
      </CommandMenuFooter>
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
  const { copied, copy } = useClipboard()
  return (
    <CommandMenuItem onAction={() => copy(value)} textValue={textValue}>
      <ColorSwatch
        className="mt-0.5 mr-2 [--size:--spacing(5)]"
        color={formatHex(parse(value))}
        colorName={colorName}
      />
      <CommandMenuLabel>{label}</CommandMenuLabel>
      <CommandMenuDescription className="text-xs tracking-tight">
        <span
          className={twJoin(
            'absolute inset-y-0 right-2 left-0 self-center justify-self-end font-mono focus:transition focus:duration-300',
            copied ? '-translate-y-1.5 opacity-0' : 'translate-y-0 opacity-100'
          )}
        >
          {value}
        </span>
        <span
          className={twJoin(
            'absolute inset-y-0 right-2 left-0 gap-x-1 self-center justify-self-end transition duration-300',
            copied ? 'translate-y-0 opacity-100' : 'translate-y-1.5 opacity-0'
          )}
        >
          Copied
        </span>
      </CommandMenuDescription>
    </CommandMenuItem>
  )
}
