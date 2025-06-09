"use client"
import { Link } from "@/components/ui/link"
import { IconChevronLgLeft, IconChevronLgRight } from "@intentui/icons"
import { type PageTree, findNeighbour } from "fumadocs-core/server"
import { twMerge } from "tailwind-merge"

export const Pager = ({
  tree,
  url,
  className,
}: { tree: PageTree.Root; url: string; className?: string }) => {
  const neighbours = findNeighbour(tree, url)

  return (
    <div className={twMerge("not-prose flex w-full justify-between gap-3", className)}>
      {neighbours.previous && (
        <div className="group w-40">
          <Link className="inline-flex justify-start text-sm" href={neighbours.previous.url}>
            <div>
              <div className="flex items-center gap-1 text-muted-fg">
                <IconChevronLgLeft className="group-hover:-translate-x-2 size-3.5 transition-transform" />
                Previous
              </div>
              <span className="line-clamp-1 text-fg">{neighbours.previous.name}</span>
            </div>
          </Link>
        </div>
      )}

      {neighbours.next && (
        <div className="group flex w-40 justify-end">
          <Link className="inline-flex justify-end text-sm" href={neighbours.next.url}>
            <div>
              <div className="flex items-center justify-end gap-1 text-right text-muted-fg">
                Next
                <IconChevronLgRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </div>
              <span className="line-clamp-1 text-fg">{neighbours.next.name}</span>
            </div>
          </Link>
        </div>
      )}
    </div>
  )
}
