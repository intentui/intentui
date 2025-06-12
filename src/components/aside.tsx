"use client"

import menus from "@/components-search.json"
import { usePathname } from "next/navigation"
import { useEffect, useRef } from "react"
import {
  Header,
  ListBox,
  ListBoxItem,
  type ListBoxItemProps,
  ListBoxSection,
} from "react-aria-components"
import { twMerge } from "tailwind-merge"

type SidebarItem = {
  section: string
  children?: { title: string; slug: string }[]
}

export interface ComponentProps {
  section: string
  children: {
    subsection: string
    children: {
      title: string
      slug: string
    }[]
  }[]
}

const prologue = menus[0] as SidebarItem
const gs = menus[1] as SidebarItem
const dm = menus[2] as SidebarItem
const components = menus[3] as ComponentProps

const orderGs = ["Introduction", "Installation", "Client Side Routing", "Colors", "CLI"]
const sortedGsChildren =
  gs?.children
    ?.filter((item) => orderGs.includes(item.title))
    .sort((a, b) => orderGs.indexOf(a.title) - orderGs.indexOf(b.title)) ?? []

export function Aside() {
  return (
    <ListBox
      className="flex flex-col gap-y-(--gap) px-4 [--gap:--spacing(6)]"
      aria-label="Documentation sidebar"
    >
      <ListBoxSection>
        <AsideHeader>{prologue?.section}</AsideHeader>
        {prologue?.children?.map((item) => (
          <AsideLink key={item.slug} href={item.slug}>
            {item.title}
          </AsideLink>
        ))}
      </ListBoxSection>
      <ListBoxSection>
        <AsideHeader>{gs?.section}</AsideHeader>
        {sortedGsChildren.map((item) => (
          <AsideLink key={item.slug} href={item.slug}>
            {item.title}
          </AsideLink>
        ))}
      </ListBoxSection>
      <ListBoxSection>
        <AsideHeader>{dm?.section}</AsideHeader>
        {dm?.children?.map((item) => (
          <AsideLink key={item.slug} href={item.slug}>
            {item.title}
          </AsideLink>
        ))}
      </ListBoxSection>
      <ListBoxSection className="flex flex-col gap-y-(--gap)">
        <AsideHeader className="-mb-6">{components?.section}</AsideHeader>
        {components?.children?.map((item) => (
          <ListBoxSection key={item.subsection}>
            <AsideHeader>{item?.subsection}</AsideHeader>
            {item?.children?.map((item) => (
              <AsideLink key={item.slug} href={item.slug}>
                {item.title}
              </AsideLink>
            ))}
          </ListBoxSection>
        ))}
      </ListBoxSection>
    </ListBox>
  )
}

interface AsideLinkProps extends ListBoxItemProps {
  isActive?: boolean
}

function AsideLink({ href, ...props }: AsideLinkProps) {
  const path = usePathname()
  const isActive = path === href
  const ref = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (isActive && ref.current) {
      ref.current.scrollIntoView({ behavior: "instant", block: "center" })
    }
  }, [isActive])
  return (
    <ListBoxItem
      {...props}
      href={href}
      ref={ref as any}
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
  return <Header className={twMerge("block font-medium text-xs/6", className)} {...props} />
}
