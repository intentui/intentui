"use client"

import { usePathname } from "next/navigation"
import { useEffect, useRef } from "react"
import type { LinkProps } from "react-aria-components"
import { Link } from "react-aria-components"
import { twMerge } from "tailwind-merge"
import { Badge } from "@/components/ui/badge"
import menus from "@/components-search.json"
import type { Component } from "@/types/search"

export type SidebarItem = {
  section: string
  children?: { title: string; slug: string }[]
}

export const prologue = menus[0] as SidebarItem
export const gs = menus[1] as SidebarItem
export const dm = menus[2] as SidebarItem
export const components = menus[3] as Component

export const orderGs = ["Introduction", "Installation", "Client Side Routing", "Colors", "CLI"]
export const sortedGsChildren =
  gs?.children
    ?.filter((item) => orderGs.includes(item.title))
    .sort((a, b) => orderGs.indexOf(a.title) - orderGs.indexOf(b.title)) ?? []

export function Aside() {
  return (
    <div className="-ml-0.5 sticky h-screen w-full overflow-y-auto overflow-x-hidden pr-0 pl-0.5 sm:top-14 sm:w-64 sm:py-16 xl:w-60">
      <div className="flex flex-col gap-y-(--gap) px-4 pb-10 [--gap:--spacing(6)]">
        <div>
          <AsideHeader>{prologue?.section}</AsideHeader>
          {prologue?.children?.map((item) => (
            <AsideLink key={item.slug} href={item.slug}>
              {item.title}
            </AsideLink>
          ))}
        </div>
        <div>
          <AsideHeader>Products</AsideHeader>
          <AsideLink href="/components">
            Components{" "}
            <Badge className="-mr-1.5 rounded-sm" intent="info">
              Free
            </Badge>
          </AsideLink>
          <AsideLink
            target="_blank"
            href="https://design.intentui.com/blocks?utm_source=intentui.com&utm_medium=referral&utm_campaign=sidebar"
          >
            Blocks & Patterns{" "}
            <Badge className="-mr-1.5 rounded-sm bg-teal-500/15 text-teal-700 group-hover:bg-teal-500/25 dark:bg-teal-500/10 dark:text-teal-300 dark:group-hover:bg-teal-500/20">
              Pro
            </Badge>
          </AsideLink>
          <AsideLink
            target="_blank"
            href="https://design.intentui.com/products?utm_source=intentui.com&utm_medium=referral&utm_campaign=sidebar"
          >
            Templates & Starter kits{" "}
            <Badge className="-mr-1.5 rounded-sm bg-teal-500/15 text-teal-700 group-hover:bg-teal-500/25 dark:bg-teal-500/10 dark:text-teal-300 dark:group-hover:bg-teal-500/20">
              Pro
            </Badge>
          </AsideLink>
        </div>
        <div>
          <AsideHeader>{gs?.section}</AsideHeader>
          {sortedGsChildren.map((item) => (
            <AsideLink key={item.slug} href={item.slug}>
              {item.title}
            </AsideLink>
          ))}
        </div>
        <div>
          <AsideHeader>{dm?.section}</AsideHeader>
          {dm?.children?.map((item) => (
            <AsideLink key={item.slug} href={item.slug}>
              {item.title}
            </AsideLink>
          ))}
        </div>
        <div className="flex flex-col gap-y-(--gap)">
          {components?.children?.map((item) => (
            <div key={item.subsection}>
              <AsideHeader>{item?.subsection}</AsideHeader>
              {item?.children?.map((item) => (
                <AsideLink key={item.slug} href={item.slug}>
                  {item.title}
                  {item.status && (
                    <Badge
                      className="-mr-1.5"
                      isCircle={false}
                      intent={
                        item.status === "new"
                          ? "success"
                          : item.status === "beta" || item.status === "alpha"
                            ? "warning"
                            : "primary"
                      }
                    >
                      {item.status}
                    </Badge>
                  )}
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
      ref.current.scrollIntoView({
        behavior: "instant",
        block: "center",
      })
    }
  }, [isActive])

  return (
    <Link
      {...props}
      href={href}
      ref={ref}
      className={twMerge(
        "-ml-3 group mb-0.5 flex items-center justify-between rounded-lg px-3 py-1 text-base text-fg sm:text-sm/6",
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

function AsideHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={twMerge("relative mb-2 block font-medium text-muted-fg text-xs/6", className)}
      {...props}
    />
  )
}
