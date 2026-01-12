"use client"

import { ArrowDownTrayIcon } from "@heroicons/react/20/solid"
import * as icons from "@intentui/icons"
import { useSearchParams } from "next/navigation"
import type React from "react"
import { useRef, useState } from "react"
import { ListBox, ListBoxItem } from "react-aria-components"
import * as ReactDOMServer from "react-dom/server"
import { toast } from "sonner"
import { aliasLookup } from "@/app/(app)/icons/partials/aliases"
import {
  Menu,
  MenuContent,
  MenuHeader,
  MenuItem,
  MenuLabel,
  MenuSeparator,
} from "@/components/ui/menu"
import { useClipboard } from "@/hooks/use-clipboard"
import { Controller } from "./controller"
import { box, item } from "./styles"

export interface SearchParamsProps {
  searchParams: {
    query: string
    t: "solid" | "regular"
  }
}

export function IconsList({ searchParams }: SearchParamsProps) {
  const { query, t } = searchParams
  const filterType = t ?? "regular"

  const filteredIcons = (query = "", filterType?: "solid" | "regular") => {
    const queryLower = query.toLowerCase()

    const matchingIcons = new Set(aliasLookup[queryLower] || [])
    return Object.entries(icons).filter(([name]) => {
      const nameLower = name.toLowerCase()

      const matchesSearch = nameLower.includes(queryLower) || matchingIcons.has(name)
      const isSolid = nameLower.endsWith("fill")
      const matchesFilter =
        !filterType || (filterType === "solid" && isSolid) || (filterType === "regular" && !isSolid)
      return matchesSearch && matchesFilter
    })
  }
  const iconsList = filteredIcons(query, filterType)

  return (
    <>
      <Controller searchParams={searchParams} />
      <div className="sm:-mx-2">
        <ListBox selectionMode="single" aria-label="List Icon" layout="grid" className={box()}>
          {iconsList.map(([name, Icon]) => (
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
  const selectedSize = searchParams.get("s") ?? "size-5"
  const { copy } = useClipboard()
  const handleCopy = async (type: "text" | "jsx") => {
    const textToCopy = type === "jsx" ? `<${name} />` : name
    const didCopy = await copy(textToCopy)
    if (!didCopy) return
    toast(
      <>
        <code className="mr-1 text-xs tracking-tight">{textToCopy}</code> copied to clipboard.
      </>,
      {
        closeButton: false,
      },
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
      <Menu isOpen={isSelected} onOpenChange={setSelected}>
        <MenuContent
          popover={{ triggerRef: triggerRef, arrow: true }}
          className="sm:min-w-48"
          aria-label="Options"
        >
          <MenuHeader className="font-mono font-normal text-xs sm:text-xs" separator>
            {name}
          </MenuHeader>
          <MenuItem onAction={() => handleCopy("jsx")}>
            <MenuLabel>Copy JSX</MenuLabel>
          </MenuItem>
          <MenuItem onAction={() => copySvgToClipboard(Icon, copy)}>
            <MenuLabel>Copy SVG</MenuLabel>
          </MenuItem>
          <MenuItem onAction={() => handleCopy("text")}>
            <MenuLabel>Copy Name</MenuLabel>
          </MenuItem>
          <MenuSeparator />
          <MenuItem onAction={() => downloadSvg(Icon, name)}>
            <MenuLabel>Download SVG</MenuLabel>
            <ArrowDownTrayIcon />
          </MenuItem>
        </MenuContent>
      </Menu>
    </ListBoxItem>
  )
}

const copySvgToClipboard = async (
  IconComponent: React.ComponentType,
  copy: (value: string) => Promise<boolean>,
) => {
  const svgString = ReactDOMServer.renderToStaticMarkup(<IconComponent />)
  const didCopy = await copy(svgString)
  if (didCopy) toast("SVG copied to clipboard")
}

const downloadSvg = (IconComponent: React.ComponentType, fileName: string) => {
  const svgString = ReactDOMServer.renderToStaticMarkup(<IconComponent />)
  const blob = new Blob([svgString], { type: "image/svg+xml" })
  const url = URL.createObjectURL(blob)

  const link = document.createElement("a")
  link.href = url
  link.download = `${fileName}.svg`
  document.body.appendChild(link)
  link.click()
  document.body?.removeChild(link)

  URL.revokeObjectURL(url)
}
