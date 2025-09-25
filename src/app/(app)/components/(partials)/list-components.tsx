"use client"

import { Link } from "@/components/ui/link"
import menus from "@/components-search.json"
import type { Component } from "@/types/search"

const components = menus[3] as Component

export function ListComponents() {
  return (
    <div className="columns-2 gap-6 pb-12 md:columns-3 lg:columns-4">
      {components?.children?.map((item) => (
        <div className="mb-12 flex break-inside-avoid flex-col gap-y-2" key={item.subsection}>
          <h3 className="font-semibold text-fg text-sm">{item?.subsection}</h3>
          <ul>
            {item?.children?.map((item) => (
              <li key={item.slug}>
                <Link
                  className="block py-2 text-muted-fg text-sm hover:text-fg focus:text-fg"
                  href={item.slug}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
