"use client"
import type { TableOfContents, TOCItemType } from "fumadocs-core/toc"
import { LayoutGroup, motion } from "motion/react"
import { Suspense, useEffect, useId, useRef, useState } from "react"
import scrollIntoView from "scroll-into-view-if-needed"
import { twMerge } from "tailwind-merge"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Props {
  className?: string
  items: TableOfContents
}

export function Toc({ className, items }: Props) {
  const tocRef = useRef<HTMLDivElement>(null)
  const ids = items.map((item) => item.url.split("#")[1])
  const activeId = useActiveItem(ids as string[])
  const activeIndex = activeId?.length || 0
  const id = useId()
  const minDepth = items.reduce((acc, item) => Math.min(acc, item.depth), 1000)

  useEffect(() => {
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

  return (
    <LayoutGroup id={id}>
      <aside ref={tocRef} className={twMerge("not-prose w-72 forced-color-adjust-none", className)}>
        <ScrollArea scrollFade orientation="vertical" className="xl:h-[calc(100vh-22rem)]">
          <nav aria-labelledby="on-this-page-title" className="not-prose relative w-56 p-6">
            <Suspense>
              {items.length > 0 && (
                <>
                  <h2 className="mb-3 font-medium text-fg text-sm/6">On this page</h2>

                  <ul className="flex flex-col gap-y-2.5">
                    {items.map((item) => (
                      <TocLink key={item.url} item={item} activeId={activeId} minDepth={minDepth} />
                    ))}
                  </ul>
                </>
              )}
            </Suspense>
          </nav>
        </ScrollArea>
      </aside>
    </LayoutGroup>
  )
}

interface TocLinkProps {
  item: TOCItemType
  activeId: string | null
  minDepth: number
}

function TocLink({ item, activeId, minDepth }: TocLinkProps) {
  return (
    <li key={item.url} className="relative">
      {item.url.split("#")[1] === activeId && (
        <motion.span
          transition={{
            type: "spring",
            stiffness: 450,
            damping: 35,
            mass: 0.8,
          }}
          layoutId="currentIndicator"
          className="absolute top-1/2 -left-6 hidden h-6 w-0.5 -translate-y-1/2 rounded-full bg-primary md:block dark:bg-primary-subtle-fg"
        />
      )}
      <a
        className={twMerge(
          "block text-sm/6 tracking-tight no-underline outline-hidden duration-200 focus-visible:text-fg focus-visible:outline-hidden",
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
