"use client"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"
import { findNeighbour, type Root as PageTreeRoot } from "fumadocs-core/page-tree"
import { twMerge } from "tailwind-merge"
import { LinkButton } from "@/components/link-button"

interface MobilePagerProps {
  tree: PageTreeRoot
  url: string
  className?: string
}

export const MobilePager = ({ tree, url, className }: MobilePagerProps) => {
  const neighbours = findNeighbour(tree, url)

  return (
    <div className={twMerge("not-prose flex items-center gap-x-1.5", className)}>
      {neighbours.previous && (
        <LinkButton size="sq-sm" intent="outline" href={neighbours.previous.url}>
          <span className="sr-only">{neighbours.previous.name}</span>
          <ChevronLeftIcon />
        </LinkButton>
      )}

      {neighbours.next && (
        <LinkButton size="sq-sm" intent="outline" href={neighbours.next.url}>
          <span className="sr-only">{neighbours.next.name}</span>
          <ChevronRightIcon />
        </LinkButton>
      )}
    </div>
  )
}
