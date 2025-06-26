"use client"

import menus from "@/components-search.json"
import type { Component } from "@/types/search"
import { IconBookOpen, IconCircleHalf, IconHighlight, IconPackage } from "@intentui/icons"
import { usePathname } from "next/navigation"
import { useEffect, useRef } from "react"
import { Link } from "react-aria-components"
import type { LinkProps } from "react-aria-components"
import { twMerge } from "tailwind-merge"

type SidebarItem = {
  section: string
  children?: { title: string; slug: string }[]
}

const prologue = menus[0] as SidebarItem
const gs = menus[1] as SidebarItem
const dm = menus[2] as SidebarItem
const components = menus[3] as Component

const orderGs = ["Introduction", "Installation", "Client Side Routing", "Colors", "CLI"]
const sortedGsChildren =
  gs?.children
    ?.filter((item) => orderGs.includes(item.title))
    .sort((a, b) => orderGs.indexOf(a.title) - orderGs.indexOf(b.title)) ?? []

export function Aside() {
  return (
    <div className="-ml-0.5 sticky h-screen w-full overflow-y-auto overflow-x-hidden pr-0 pl-0.5 sm:top-14 sm:w-64 sm:py-16 xl:w-60 ">
      <div
        className="flex flex-col gap-y-(--gap) pr-4 pb-10 pl-(--gap) [--gap:--spacing(6)]"
        aria-label="Documentation sidebar"
      >
        <div>
          <AsideHeader>
            {" "}
            <IconHighlight /> {prologue?.section}
          </AsideHeader>
          {prologue?.children?.map((item) => (
            <AsideLink key={item.slug} href={item.slug}>
              {item.title}
            </AsideLink>
          ))}
        </div>
        <div>
          <AsideHeader>
            <IconBookOpen /> {gs?.section}
          </AsideHeader>
          {sortedGsChildren.map((item) => (
            <AsideLink key={item.slug} href={item.slug}>
              {item.title}
            </AsideLink>
          ))}
        </div>
        <div>
          <AsideHeader>
            <IconCircleHalf /> {dm?.section}
          </AsideHeader>
          {dm?.children?.map((item) => (
            <AsideLink key={item.slug} href={item.slug}>
              {item.title}
            </AsideLink>
          ))}
        </div>
        <div className="flex flex-col gap-y-(--gap)">
          <AsideHeader className="-mb-4">
            <IconPackage /> {components?.section}
          </AsideHeader>
          {components?.children?.map((item) => (
            <div key={item.subsection}>
              <AsideHeader>{item?.subsection}</AsideHeader>
              {item?.children?.map((item) => (
                <AsideLink key={item.slug} href={item.slug}>
                  {item.title}
                </AsideLink>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

interface AsideLinkProps extends LinkProps {
  isActive?: boolean
  href: string
}

function AsideLink({ href, ...props }: AsideLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href
  const ref = useRef<HTMLAnchorElement>(null)
  useEffect(() => {
    if (isActive && ref.current) {
      ref.current.scrollIntoView({ behavior: "instant", block: "center" })
    }
  }, [isActive])

  return (
    <Link
      {...props}
      href={href}
      ref={ref}
      className={twMerge(
        "-ml-3 mb-0.5 flex items-center justify-between rounded-lg px-3 py-1.5 text-base text-muted-fg sm:text-sm",
        "focus:outline-hidden",
        "hover:bg-muted hover:text-secondary-fg",
        "focus:bg-muted focus:text-secondary-fg",
        isActive && [
          "font-medium",
          "bg-blue-100 text-blue-600 hover:bg-blue-100 hover:text-blue-600",
          "dark:bg-blue-400/10 dark:text-blue-400 dark:hover:bg-blue-400/10 dark:hover:text-blue-400",
        ],
      )}
    />
  )
}

function AsideHeader({ className, ...props }: React.ComponentProps<typeof Header>) {
  return (
    <div
      className={twMerge(
        [
          "relative block font-medium text-xs/6",
          "*:data-[slot=icon]:size-4 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:text-muted-fg",
          "*:data-[slot=icon]:-left-6 *:data-[slot=icon]:-translate-y-1/2 *:data-[slot=icon]:absolute *:data-[slot=icon]:top-1/2 *:data-[slot=icon]:hidden sm:*:data-[slot=icon]:inline",
        ],
        className,
      )}
      {...props}
    />
  )
}
