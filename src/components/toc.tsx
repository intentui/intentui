'use client'

import type { TableOfContents, TOCItemType } from 'fumadocs-core/toc'
import { LayoutGroup, motion } from 'motion/react'
import { Suspense, useEffect, useId, useRef, useState } from 'react'
import scrollIntoView from 'scroll-into-view-if-needed'
import { tv } from 'tailwind-variants'
import { twMerge } from 'tailwind-merge'

const tocStyles = tv({
  slots: {
    root: 'not-typeset forced-color-adjust-none',
    nav: 'scrollbar-thin scroll-fade-y relative overflow-y-auto p-6',
  },
  variants: {
    context: {
      docs: {
        root: 'w-72',
        nav: 'h-[calc(100vh-22rem)]',
      },
      blog: {
        root: 'w-86 shrink-0',
        nav: 'h-full w-86',
      },
    },
  },
  defaultVariants: {
    context: 'docs',
  },
})

interface TocProps {
  className?: string
  context?: 'docs' | 'blog'
  items: TableOfContents
}

export function Toc({ className, context = 'docs', items }: TocProps) {
  const tocRef = useRef<HTMLElement>(null)
  const ids = items.map((item) => item.url.split('#')[1])
  const activeId = useActiveItem(ids as string[])
  const activeIndex = activeId?.length || 0
  const id = useId()
  const minDepth = items.reduce((acc, item) => Math.min(acc, item.depth), 1000)
  const styles = tocStyles({ context })

  useEffect(() => {
    if (!activeId || activeIndex < 2) return
    const anchor = tocRef.current?.querySelector(`li > a[href="#${activeId}"]`)

    if (anchor) {
      scrollIntoView(anchor, {
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
        scrollMode: 'always',
        boundary: tocRef.current,
      })
    }
  }, [activeId, activeIndex])

  return (
    <LayoutGroup id={id}>
      <aside ref={tocRef} className={styles.root({ className })}>
        <nav aria-labelledby="on-this-page-title" className={styles.nav()}>
          <Suspense>
            {items.length > 0 && (
              <>
                <h2 id="on-this-page-title" className="text-sm/6 mb-4 text-muted-fg">
                  On this page
                </h2>

                <ul className="flex flex-col gap-y-2.5">
                  {items.map((item) => (
                    <TocLink key={item.url} item={item} activeId={activeId} minDepth={minDepth} />
                  ))}
                </ul>
              </>
            )}
          </Suspense>
        </nav>
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
    <li className="relative">
      {item.url.split('#')[1] === activeId && (
        <motion.span
          transition={{
            type: 'spring',
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
          'block text-sm/6 tracking-tight no-underline outline-hidden duration-200 focus-visible:text-fg focus-visible:outline-hidden',
          item.url.split('#')[1] === activeId
            ? 'text-fg forced-colors:text-[Highlight]'
            : 'text-muted-fg/90 forced-colors:text-[GrayText]'
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
      { rootMargin: '0% 0% -25% 0%', threshold: 0.1 }
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
