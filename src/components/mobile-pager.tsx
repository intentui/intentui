"use client"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid"
import { findNeighbour, type Root as PageTreeRoot } from "fumadocs-core/page-tree"
import type { TableOfContents, TOCItemType } from "fumadocs-core/toc"
import { twMerge } from "tailwind-merge"
import { LinkButton } from "@/components/link-button"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Menu, MenuContent, MenuItem, MenuLabel } from "@/components/ui/menu"

interface MobilePagerProps {
  tree: PageTreeRoot
  url: string
  toc?: TableOfContents
  className?: string
}

function getTocTextValue(item: TOCItemType) {
  return typeof item.title === "string" ? item.title : (item.url.split("#").pop() ?? item.url)
}

function scrollToTocItem(item: TOCItemType) {
  const id = item.url.split("#")[1]
  if (!id) return

  window.requestAnimationFrame(() => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  })
}

export const MobilePager = ({ tree, url, toc = [], className }: MobilePagerProps) => {
  const neighbours = findNeighbour(tree, url)
  const minDepth = toc.length > 0 ? toc.reduce((acc, item) => Math.min(acc, item.depth), 1000) : 0

  if (!neighbours.previous && !neighbours.next && toc.length === 0) {
    return null
  }

  return (
    <div className={twMerge("not-prose flex items-center gap-x-1.5", className)}>
      {toc.length > 0 && (
        <Menu>
          <Button
            intent="outline"
            size="sm"
            className="h-10 rounded-sm sm:hidden dark:bg-secondary/50 dark:hover:bg-secondary"
          >
            TOC
          </Button>
          <MenuContent
            aria-label="Table of contents"
            placement="bottom end"
            className="max-h-80 min-w-64"
          >
            {toc.map((item) => (
              <MenuItem
                key={item.url}
                onAction={() => scrollToTocItem(item)}
                textValue={getTocTextValue(item)}
              >
                <MenuLabel
                  className="truncate"
                  style={{
                    marginLeft: (item.depth - minDepth) * 16,
                  }}
                >
                  <span className="mr-2 text-muted-fg">#</span>
                  {item.title}
                </MenuLabel>
              </MenuItem>
            ))}
          </MenuContent>
        </Menu>
      )}

      <ButtonGroup>
        {neighbours.previous && (
          <LinkButton
            size="sq-sm"
            intent="outline"
            className="dark:bg-secondary/50 dark:hover:bg-secondary"
            href={neighbours.previous.url}
          >
            <span className="sr-only">{neighbours.previous.name}</span>
            <ChevronLeftIcon />
          </LinkButton>
        )}

        {neighbours.next && (
          <LinkButton
            size="sq-sm"
            intent="outline"
            className="dark:bg-secondary/50 dark:hover:bg-secondary"
            href={neighbours.next.url}
          >
            <span className="sr-only">{neighbours.next.name}</span>
            <ChevronRightIcon />
          </LinkButton>
        )}
      </ButtonGroup>
    </div>
  )
}
