"use client"

import { cn } from "@/resources/lib/utils"
import { IconChevronLgLeft, IconChevronLgRight } from "@intentui/icons"
import Link from "next/link"
import { buttonStyles } from "ui"

interface Doc {
  order: number
  slug: string
  title: string
}

const getPagerForDoc = (docs: Doc[], doc: Doc) => {
  const nav = docs.map((d) => ({
    href: `/${d.slug}`,
    title: d.title
  }))

  const activeIndex = nav.findIndex((link) => `/${doc.slug}` === link.href)

  const prev = activeIndex > 0 ? nav[activeIndex - 1] : null
  const next = activeIndex < nav.length - 1 ? nav[activeIndex + 1] : null

  return {
    prev,
    next
  }
}

export function Pager({ docs, doc }: { docs: Doc[]; doc: Doc }) {
  const groupedAndSortedDocs = docs.sort((a, b) => {
    const groupA = a.slug.split("/")[2]
    const groupB = b.slug.split("/")[2]

    if (groupA === groupB) {
      return a.order - b.order
    }

    return groupA.localeCompare(groupB)
  })

  const pager = getPagerForDoc(groupedAndSortedDocs, doc)

  if (!pager.prev && !pager.next) {
    return null
  }

  return (
    <div className="flex mt-6 flex-row items-center justify-between">
      {pager.prev && (
        <Link
          aria-label={`Previous page: ${pager.prev.title}`}
          href={pager.prev.href}
          className={buttonStyles({ appearance: "outline" })}
        >
          <IconChevronLgLeft />
          {pager.prev.title}
        </Link>
      )}
      {pager.next && (
        <Link
          aria-label={`Next page: ${pager.next.title}`}
          href={pager.next.href}
          className={cn(buttonStyles({ appearance: "outline" }), "ml-auto")}
        >
          {pager.next.title}
          <IconChevronLgRight />
        </Link>
      )}
    </div>
  )
}
