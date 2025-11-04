"use client"

import Image from "next/image"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Link } from "@/components/ui/link"
import menus from "@/components-search.json"
import type { Component } from "@/types/search"

const components = menus[3] as Component

export function ListComponents() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <div>
      {components?.children?.map((item) => (
        <div className="mb-12 flex break-inside-avoid flex-col gap-y-2" key={item.subsection}>
          <h3 className="font-semibold text-fg text-sm">{item?.subsection}</h3>
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {item?.children?.map((item) => {
              const name = item.slug.match(/([^/]+)\/?$/)?.[1] ?? ""
              const suffix = mounted && resolvedTheme === "dark" ? "-dark" : ""
              return (
                <li key={item.slug}>
                  <Image
                    className="rounded-xl ring ring-fg/10"
                    width={708}
                    height={480}
                    src={`/images/thumbnails/${name}${suffix}.png`}
                    alt={item.title}
                  />
                  <Link
                    className="block py-2 text-muted-fg text-sm hover:text-fg focus:text-fg"
                    href={item.slug}
                  >
                    {item.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      ))}
    </div>
  )
}
