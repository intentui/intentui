"use client"
import { IconChevronLgLeft, IconChevronLgRight } from "@intentui/icons"
import { findNeighbour, type PageTree } from "fumadocs-core/server"
import { twMerge } from "tailwind-merge"
import { buttonStyles } from "@/components/ui/button"
import { Link } from "@/components/ui/link"

export const MobilePager = ({
  tree,
  url,
  className,
}: {
  tree: PageTree.Root
  url: string
  className?: string
}) => {
  const neighbours = findNeighbour(tree, url)

  return (
    <div className={twMerge("not-prose flex items-center gap-x-2 sm:hidden", className)}>
      {neighbours.previous && (
        <Link
          className={buttonStyles({ size: "sq-xs", intent: "secondary" })}
          href={neighbours.previous.url}
        >
          <span className="sr-only">{neighbours.previous.name}</span>
          <IconChevronLgLeft />
        </Link>
      )}

      {neighbours.next && (
        <Link
          className={buttonStyles({ size: "sq-xs", intent: "secondary" })}
          href={neighbours.next.url}
        >
          <span className="sr-only">{neighbours.next.name}</span>
          <IconChevronLgRight />
        </Link>
      )}
    </div>
  )
}
