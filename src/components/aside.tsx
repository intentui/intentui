"use client"

import { ArrowUpRightIcon } from "@heroicons/react/20/solid"
import { usePathname } from "next/navigation"
import { useEffect, useRef } from "react"
import type { LinkProps } from "react-aria-components/Link"
import { Link } from "react-aria-components/Link"
import { twMerge } from "tailwind-merge"
import { ColorsIcon } from "@/components/icons/colors-icon"
import { Package3DIcon } from "@/components/icons/package-3d-icon"
import { PackageIcon } from "@/components/icons/package-icon"
import { WindowIcon } from "@/components/icons/window-icon"
import { WindowVisitIcon } from "@/components/icons/window-visit-icon"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
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

export const orderGs = ["Introduction", "Installation", "Client Side Routing", "MCP"]
export const sortedGsChildren =
  gs?.children
    ?.filter((item) => orderGs.includes(item.title))
    .sort((a, b) => orderGs.indexOf(a.title) - orderGs.indexOf(b.title)) ?? []

export function Aside() {
  return (
    <div className="sticky h-screen w-full [--gap:--spacing(6)] sm:top-12 sm:w-64 sm:[--gap:--spacing(8)]">
      <ScrollArea scrollFade orientation="vertical">
        <div className="flex flex-col gap-y-(--gap) py-6">
          <div className="px-2 sm:*:text-sm/7">
            <AsideLink href="/components">
              <PackageIcon />
              Components
            </AsideLink>
            <AsideLink
              target="_blank"
              href="https://design.intentui.com/blocks?utm_source=intentui.com&utm_medium=referral&utm_campaign=sidebar"
            >
              <WindowIcon />
              Blocks
            </AsideLink>
            <AsideLink
              target="_blank"
              href="https://design.intentui.com/patterns?utm_source=intentui.com&utm_medium=referral&utm_campaign=sidebar"
            >
              <Package3DIcon />
              Patterns
            </AsideLink>
            <AsideLink
              target="_blank"
              href="https://design.intentui.com/templates?utm_source=intentui.com&utm_medium=referral&utm_campaign=sidebar"
            >
              <WindowVisitIcon />
              Templates
            </AsideLink>
            <AsideLink
              target="_blank"
              href="https://design.intentui.com/starter-kits?utm_source=intentui.com&utm_medium=referral&utm_campaign=sidebar"
            >
              <WindowIcon />
              Starter kits
            </AsideLink>
            <AsideLink
              target="_blank"
              href="https://design.intentui.com/themes?utm_source=intentui.com&utm_medium=referral&utm_campaign=sidebar"
            >
              <ColorsIcon />
              Themes
            </AsideLink>
          </div>
          <div>
            <AsideHeader>{prologue?.section}</AsideHeader>
            <div className="px-2">
              {prologue?.children?.map((item) => (
                <AsideLink key={item.slug} href={item.slug}>
                  {item.title}
                </AsideLink>
              ))}
            </div>
          </div>

          <div>
            <AsideHeader>{gs?.section}</AsideHeader>
            <div className="px-2">
              {sortedGsChildren.map((item) => (
                <AsideLink key={item.slug} href={item.slug}>
                  {item.title}
                </AsideLink>
              ))}

              <AsideLink href="/docs/getting-started/ai">Working with AI</AsideLink>
              <AsideLink target="_blank" href="/llms.txt">
                llms.txt
              </AsideLink>
            </div>
          </div>
          <div>
            <AsideHeader>{dm?.section}</AsideHeader>
            <div className="px-2">
              {dm?.children?.map((item) => (
                <AsideLink key={item.slug} href={item.slug}>
                  {item.title}
                </AsideLink>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-y-(--gap)">
            {components?.children?.map((item) => (
              <div key={item.subsection}>
                <AsideHeader>{item?.subsection}</AsideHeader>
                <div className="px-2">
                  {item?.children?.map((item) => (
                    <AsideLink key={item.slug} href={item.slug}>
                      {item.title}
                      {item.status && (
                        <Badge
                          className="-mr-2 ml-auto"
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
              </div>
            ))}
          </div>
        </div>
      </ScrollArea>
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
        "group relative mb-0.5 flex items-center gap-x-2 rounded-lg px-2 py-1 text-base text-fg sm:text-sm/6",
        "focus:outline-hidden",
        "hover:bg-muted hover:text-secondary-fg",
        "focus:bg-muted focus:text-secondary-fg",
        "*:[svg]:size-5 *:[svg]:text-muted-fg hover:*:[svg]:text-fg",
        isActive && [
          "font-medium",
          "bg-blue-100 text-blue-600 hover:bg-blue-100 hover:text-blue-600",
          "dark:bg-blue-400/10 dark:text-blue-400 dark:hover:bg-blue-400/10 dark:hover:text-blue-400",
        ],
      )}
    >
      <>
        {props.children}

        {props.target === "_blank" && (
          <ArrowUpRightIcon
            style={{
              width: "16px",
              height: "16px",
            }}
            className="-mr-1 ml-auto hidden text-muted-fg group-hover:block"
          />
        )}
      </>
    </Link>
  )
}

function AsideHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={twMerge(
        "relative mb-2 block px-4 font-mono text-[11px] text-muted-fg uppercase",
        className,
      )}
      {...props}
    />
  )
}
