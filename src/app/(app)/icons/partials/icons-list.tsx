'use client'

import { ArrowDownTrayIcon } from '@heroicons/react/20/solid'
import * as icons from '@intentui/icons'
import { useSearchParams } from 'next/navigation'
import { useMemo, useRef, useState } from 'react'
import { ListBox, ListBoxItem } from 'react-aria-components/ListBox'
import * as ReactDOMServer from 'react-dom/server'
import { toast } from 'sonner'
import { aliasLookup } from '@/app/(app)/icons/partials/aliases'
import {
  Menu,
  MenuContent,
  MenuHeader,
  MenuItem,
  MenuLabel,
  MenuSeparator,
} from '@/components/ui/menu'
import iconMetadata from '@/generated/icon-metadata.json'
import { useClipboard } from '@/hooks/use-clipboard'
import { Controller } from './controller'
import { IconSearchProvider, useIconSearch } from './controller/use-icon-search'
import { box, item } from './styles'

export interface SearchParamsProps {
  searchParams: {
    query?: string
    t?: 'solid' | 'regular'
  }
}

function IconsListContent({ searchParams }: SearchParamsProps) {
  const { t } = searchParams
  const filterType = t ?? 'regular'
  const { searchQuery } = useIconSearch()

  const iconsByType = useMemo(() => {
    const typeMap = new Map<'solid' | 'regular', Set<string>>()
    typeMap.set('solid', new Set())
    typeMap.set('regular', new Set())

    for (const icon of iconMetadata.icons) {
      const type = icon.isSolid ? 'solid' : 'regular'
      typeMap.get(type)?.add(icon.name)
    }

    return typeMap
  }, [])

  const filteredIcons = useMemo(() => {
    const queryLower = searchQuery?.toLowerCase() || ''

    const matchingIcons = new Set(aliasLookup[queryLower] || [])

    const filteredMetadata = iconMetadata.icons.filter((icon) => {
      const nameLower = icon.name.toLowerCase()
      const matchesSearch =
        !searchQuery || nameLower.includes(queryLower) || matchingIcons.has(icon.name)
      const matchesFilter =
        !filterType ||
        (filterType === 'solid' && icon.isSolid) ||
        (filterType === 'regular' && !icon.isSolid)
      return matchesSearch && matchesFilter
    })

    return filteredMetadata.map(
      // biome-ignore lint/performance/noDynamicNamespaceImportAccess: intentional
      (icon) => [icon.name, icons[icon.name as keyof typeof icons]] as const
    )
  }, [searchQuery, filterType, iconsByType])

  return (
    <>
      <Controller searchParams={searchParams} />
      <div className="sm:-mx-2">
        <ListBox selectionMode="single" aria-label="List Icon" layout="grid" className={box()}>
          {filteredIcons.map(([name, Icon]) => (
            <IconListItem key={name} name={name} Icon={Icon} />
          ))}
        </ListBox>
      </div>
    </>
  )
}

interface IconListItemProps {
  name: string
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

export function IconListItem({ name, Icon }: IconListItemProps) {
  const [isSelected, setSelected] = useState(false)
  const searchParams = useSearchParams()
  const selectedSize = searchParams.get('s') ?? 'size-5'
  const { copy } = useClipboard()
  const handleCopy = async (type: 'text' | 'jsx') => {
    const textToCopy = type === 'jsx' ? `<${name} />` : name
    const didCopy = await copy(textToCopy)
    if (!didCopy) return
    toast(
      <>
        <code className="mr-1 text-xs tracking-tight">{textToCopy}</code> copied to clipboard.
      </>,
      {
        closeButton: false,
      }
    )
  }
  const triggerRef = useRef<HTMLDivElement>(null)
  return (
    <ListBoxItem
      data-open={isSelected}
      ref={triggerRef}
      onAction={() => setSelected(true)}
      className={item()}
      textValue={name}
    >
      <Icon className={selectedSize} key={name} />
      {isSelected && (
        <Menu isOpen onOpenChange={setSelected}>
          <MenuContent
            popover={{ triggerRef: triggerRef, arrow: true }}
            className="sm:min-w-48"
            aria-label="Options"
          >
            <MenuHeader className="font-mono font-normal text-xs sm:text-xs" separator>
              {name}
            </MenuHeader>
            <MenuItem onAction={() => handleCopy('jsx')}>
              <MenuLabel>Copy JSX</MenuLabel>
            </MenuItem>
            <MenuItem onAction={() => copySvgToClipboard(Icon, copy)}>
              <MenuLabel>Copy SVG</MenuLabel>
            </MenuItem>
            <MenuItem onAction={() => handleCopy('text')}>
              <MenuLabel>Copy Name</MenuLabel>
            </MenuItem>
            <MenuSeparator />
            <MenuItem onAction={() => downloadSvg(Icon, name)}>
              <MenuLabel>Download SVG</MenuLabel>
              <ArrowDownTrayIcon />
            </MenuItem>
          </MenuContent>
        </Menu>
      )}
    </ListBoxItem>
  )
}

const copySvgToClipboard = async (
  IconComponent: React.ComponentType,
  copy: (value: string) => Promise<boolean>
) => {
  const svgString = ReactDOMServer.renderToStaticMarkup(<IconComponent />)
  const didCopy = await copy(svgString)
  if (didCopy) toast('SVG copied to clipboard')
}

const downloadSvg = (IconComponent: React.ComponentType, fileName: string) => {
  const svgString = ReactDOMServer.renderToStaticMarkup(<IconComponent />)
  const blob = new Blob([svgString], { type: 'image/svg+xml' })
  const url = URL.createObjectURL(blob)

  const link = document.createElement('a')
  link.href = url
  link.download = `${fileName}.svg`
  document.body.appendChild(link)
  link.click()
  document.body?.removeChild(link)

  URL.revokeObjectURL(url)
}

export function IconsList({ searchParams }: SearchParamsProps) {
  return (
    <IconSearchProvider initialQuery={searchParams.query || ''}>
      <IconsListContent searchParams={searchParams} />
    </IconSearchProvider>
  )
}
