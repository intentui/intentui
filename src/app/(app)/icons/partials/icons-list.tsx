"use client"

import type React from "react"
import { useRef, useState } from "react"

import { Menu } from "@/components/ui/menu"
import * as icons from "@intentui/icons"
import { IconDownload } from "@intentui/icons"
import { useSearchParams } from "next/navigation"
import { ListBox, ListBoxItem } from "react-aria-components"
import * as ReactDOMServer from "react-dom/server"
import { toast } from "sonner"
import { copyToClipboard } from "usemods"

import { aliasLookup } from "@/app/(app)/icons/partials/aliases"
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
  const handleCopy = (type: "text" | "jsx") => {
    const textToCopy = type === "jsx" ? `<${name} />` : name
    copyToClipboard(textToCopy).then(() => {
      toast(
        <>
          <code className="mr-1 text-xs tracking-tight">{textToCopy}</code> copied to clipboard.
        </>,
        {
          closeButton: false,
        },
      )
    })
  }
  const triggerRef = useRef<HTMLButtonElement>(null)
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
        <Menu.Content
          triggerRef={triggerRef}
          className="sm:min-w-48"
          showArrow
          aria-label="Options"
        >
          <Menu.Header className="font-mono font-normal text-xs sm:text-xs" separator>
            {name}
          </Menu.Header>
          <Menu.Item onAction={() => handleCopy("jsx")}>
            <Menu.Label>Copy JSX</Menu.Label>
          </Menu.Item>
          <Menu.Item onAction={() => copySvgToClipboard(Icon)}>
            <Menu.Label>Copy SVG</Menu.Label>
          </Menu.Item>
          <Menu.Item onAction={() => handleCopy("text")}>
            <Menu.Label>Copy Name</Menu.Label>
          </Menu.Item>
          <Menu.Separator />
          <Menu.Item onAction={() => downloadSvg(Icon, name)}>
            <Menu.Label>Download SVG</Menu.Label>
            <IconDownload />
          </Menu.Item>
        </Menu.Content>
      </Menu>
    </ListBoxItem>
  )
}

const copySvgToClipboard = (IconComponent: React.ComponentType) => {
  const svgString = ReactDOMServer.renderToStaticMarkup(<IconComponent />)
  navigator.clipboard.writeText(svgString).then(() => {
    toast("SVG copied to clipboard")
  })
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
