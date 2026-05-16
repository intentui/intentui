"use client"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid"
import { findNeighbour, type Root as PageTreeRoot } from "fumadocs-core/page-tree"
import { twMerge } from "tailwind-merge"
import { LinkButton } from "@/components/link-button"
import { ButtonGroup } from "@/components/ui/button-group"

interface MobilePagerProps {
  tree: PageTreeRoot
  url: string
  className?: string
}

export const MobilePager = ({ tree, url, className }: MobilePagerProps) => {
  const neighbours = findNeighbour(tree, url)

  return (
    <ButtonGroup className={twMerge("not-prose", className)}>
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
  )
}
