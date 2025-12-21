"use client"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"
import { findNeighbour, type Root as PageTreeRoot } from "fumadocs-core/page-tree"
import { twMerge } from "tailwind-merge"
import { buttonStyles } from "@/components/ui/button"
import { Link } from "@/components/ui/link"

export const MobilePager = ({
  tree,
  url,
  className,
}: {
  tree: PageTreeRoot
  url: string
  className?: string
}) => {
  const neighbours = findNeighbour(tree, url)

  return (
    <div className={twMerge("not-prose flex items-center gap-x-1.5", className)}>
      {neighbours.previous && (
        <Link
          className={buttonStyles({
            size: "sq-sm",
            intent: "secondary",
            className: "focus-visible:outline-fg",
          })}
          href={neighbours.previous.url}
        >
          <span className="sr-only">{neighbours.previous.name}</span>
          <ChevronLeftIcon />
        </Link>
      )}

      {neighbours.next && (
        <Link
          className={buttonStyles({
            size: "sq-sm",
            intent: "secondary",
            className: "focus-visible:outline-fg",
          })}
          href={neighbours.next.url}
        >
          <span className="sr-only">{neighbours.next.name}</span>
          <ChevronRightIcon />
        </Link>
      )}
    </div>
  )
}
