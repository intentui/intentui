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
          <h3 className="mb-2 font-semibold text-base/6 text-fg">{item?.subsection}</h3>
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {item?.children?.map((item) => {
              const name = item.slug.match(/([^/]+)\/?$/)?.[1] ?? ""
              const suffix = mounted && resolvedTheme === "dark" ? "-dark" : ""
              return (
                <li key={item.slug}>
                  <Link className="flex flex-col gap-y-2 hover:opacity-80" href={item.slug}>
                    <Image
                      className="rounded-xl ring ring-fg/10"
                      width={708}
                      height={480}
                      src={`/images/thumbnails/${name}${suffix}.png`}
                      alt={item.title}
                    />
                    <span className="text-sm/6">{item.title}</span>
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
