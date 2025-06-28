"use client"
import { IconAlignmentLeft } from "@intentui/icons"
import type { TableOfContents, TOCItemType } from "fumadocs-core/server"
import React, { Suspense, useEffect, useState } from "react"
import { Heading } from "react-aria-components"
import scrollIntoView from "scroll-into-view-if-needed"
import { twMerge } from "tailwind-merge"
import { Ads } from "@/components/ads"
import { useMediaQuery } from "@/hooks/use-media-query"
import { useScrollPosition } from "@/hooks/use-scroll-position"

interface Props {
  className?: string
  items: TableOfContents
}

export function Toc({ className, items }: Props) {
  const tocRef = React.useRef<HTMLDivElement>(null)
  const scrollPosition = useScrollPosition(tocRef)
  const ids = items.map((item) => item.url.split("#")[1])
  const activeId = useActiveItem(ids as string[])
  const activeIndex = activeId?.length || 0

  const minDepth = items.reduce((acc, item) => Math.min(acc, item.depth), 1000)

  React.useEffect(() => {
    if (!activeId || activeIndex < 2) return
    const anchor = tocRef.current?.querySelector(`li > a[href="#${activeId}"]`)

    if (anchor) {
      scrollIntoView(anchor, {
        behavior: "smooth",
        block: "center",
        inline: "center",
        scrollMode: "always",
        boundary: tocRef.current,
      })
    }
  }, [activeId, activeIndex])

  const isLargeScreen = useMediaQuery("(min-width: 1024px)")

  return (
    <aside
      ref={tocRef}
      className={twMerge(
        "not-prose forced-color-adjust-none",
        "scrollbar-hidden xl:-mr-6 xl:sticky xl:top-14 xl:h-[calc(100vh-4.75rem)] xl:flex-none xl:overflow-y-auto xl:py-16 xl:pr-12",
        "top-10",
        className,
      )}
      style={{
        WebkitMaskImage: isLargeScreen
          ? `linear-gradient(to top, transparent 0%, #000 100px, #000 ${scrollPosition > 30 ? "90%" : "100%"}, transparent 100%)`
          : undefined,
      }}
    >
      <nav aria-labelledby="on-this-page-title" className="w-56">
        <Suspense>
          <Heading
            level={2}
            className="mb-6 flex items-center gap-x-2 font-medium text-base text-fg leading-7 lg:text-sm"
          >
            <IconAlignmentLeft className="text-muted-fg" /> On this page
          </Heading>
          {items.length > 0 && (
            <ul className="flex flex-col gap-y-2.5">
              {items.map((item) => (
                <React.Fragment key={item.url}>
                  <TocLink item={item} activeId={activeId} minDepth={minDepth} />
                </React.Fragment>
              ))}
            </ul>
          )}
        </Suspense>
      </nav>

      <Ads className="hidden md:flex" />
    </aside>
  )
}

function TocLink({
  item,
  activeId,
  minDepth,
}: {
  item: TOCItemType
  activeId: string | null
  minDepth: number
}) {
  return (
    <li key={item.url}>
      <a
        className={twMerge(
          "block font-medium tracking-tight no-underline outline-hidden duration-200 focus-visible:text-fg focus-visible:outline-hidden lg:text-[0.885rem]",
          item.url.split("#")[1] === activeId
            ? "text-fg forced-colors:text-[Highlight]"
            : "text-muted-fg/90 forced-colors:text-[GrayText]",
        )}
        style={{
          marginLeft: (item.depth - minDepth) * 16,
        }}
        href={item.url}
      >
        {item.title}
      </a>
    </li>
  )
}

function useActiveItem(itemIds: string[]) {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let bestCandidate: IntersectionObserverEntry | null = null
        for (const entry of entries) {
          if (
            entry.isIntersecting &&
            (!bestCandidate || bestCandidate.intersectionRatio < entry.intersectionRatio)
          ) {
            bestCandidate = entry
          }
        }

        if (bestCandidate) {
          // @ts-ignore
          setActiveId(bestCandidate.target.id)
        }
      },
      { rootMargin: "0% 0% -25% 0%", threshold: 0.1 },
    )

    for (const id of itemIds) {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    }

    return () => {
      for (const id of itemIds) {
        const element = document.getElementById(id)
        if (element) observer.unobserve(element)
      }
    }
  }, [itemIds])

  return activeId
}
