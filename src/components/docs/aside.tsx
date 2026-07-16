'use client'

import { ArrowUpRightIcon } from '@heroicons/react/20/solid'
import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'
import type { LinkProps } from 'react-aria-components/Link'
import { Link } from 'react-aria-components/Link'
import { twMerge } from 'tailwind-merge'
import { ColorsIcon } from '@/components/icons/colors-icon'
import { Package3DIcon } from '@/components/icons/package-3d-icon'
import { PackageIcon } from '@/components/icons/package-icon'
import { WindowIcon } from '@/components/icons/window-icon'
import { WindowVisitIcon } from '@/components/icons/window-visit-icon'
import { Badge } from '@/components/ui/badge'
import menus from '@/components-search.json'
import type { Component } from '@/types/search'

export type SidebarItem = {
  section: string
  children?: { title: string; slug: string }[]
}

export const prologue = menus[0] as SidebarItem
export const gs = menus[1] as SidebarItem
export const dm = menus[2] as SidebarItem
export const components = menus[3] as Component

export const orderGs = ['Introduction', 'Installation', 'Client Side Routing', 'MCP']
export const sortedGsChildren =
  gs?.children
    ?.filter((item) => orderGs.includes(item.title))
    .sort((a, b) => orderGs.indexOf(a.title) - orderGs.indexOf(b.title)) ?? []

export function Aside() {
  return (
    <div className="sticky h-screen w-full [--gap:--spacing(6)] sm:top-12 sm:w-64 sm:[--gap:--spacing(8)]">
      <div
        data-docs-sidebar-scroll
        className="flex **:data-[slot=section]:px-4 flex-col gap-y-(--gap) h-full py-10 scrollbar-thin scroll-fade-y overflow-y-auto"
      >
        <ul className="px-4 space-y-2 sm:*:text-sm/6">
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
        </ul>
        <div>
          <AsideHeader>{prologue?.section}</AsideHeader>
          <ul data-slot="section">
            {prologue?.children?.map((item) => (
              <AsideLink key={item.slug} href={item.slug}>
                {item.title}
              </AsideLink>
            ))}
          </ul>
        </div>

        <div>
          <AsideHeader>{gs?.section}</AsideHeader>
          <ul data-slot="section">
            {sortedGsChildren.map((item) => (
              <AsideLink key={item.slug} href={item.slug}>
                {item.title}
              </AsideLink>
            ))}

            <AsideLink href="/docs/getting-started/ai">Working with AI</AsideLink>
            <AsideLink target="_blank" href="/llms.txt">
              llms.txt
            </AsideLink>
          </ul>
        </div>
        <div>
          <AsideHeader>{dm?.section}</AsideHeader>
          <ul data-slot="section">
            {dm?.children?.map((item) => (
              <AsideLink key={item.slug} href={item.slug}>
                {item.title}
              </AsideLink>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-y-(--gap)">
          {components?.children?.map((item) => (
            <div key={item.subsection}>
              <AsideHeader>{item?.subsection}</AsideHeader>
              <ul data-slot="section">
                {item?.children?.map((item) => (
                  <AsideLink key={item.slug} href={item.slug}>
                    {item.title}
                    {item.status && (
                      <Badge
                        className="-mr-2 ml-auto"
                        isCircle={false}
                        intent={
                          item.status === 'new'
                            ? 'success'
                            : item.status === 'beta' || item.status === 'alpha'
                              ? 'warning'
                              : 'primary'
                        }
                      >
                        {item.status}
                      </Badge>
                    )}
                  </AsideLink>
                ))}
              </ul>
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
      const scrollContainer = ref.current.closest<HTMLElement>('[data-docs-sidebar-scroll]')
      if (!scrollContainer) return

      const linkRect = ref.current.getBoundingClientRect()
      const containerRect = scrollContainer.getBoundingClientRect()
      const visibleTop = Math.max(containerRect.top, 0)
      const visibleBottom = Math.min(containerRect.bottom, window.innerHeight)
      const edgePadding = 32
      const isWithinVisibleArea =
        linkRect.top >= visibleTop + edgePadding && linkRect.bottom <= visibleBottom - edgePadding

      if (isWithinVisibleArea) return

      scrollContainer.scrollTo({
        top:
          scrollContainer.scrollTop +
          (linkRect.top + linkRect.bottom) / 2 -
          (visibleTop + visibleBottom) / 2,
        behavior: 'instant',
      })
    }
  }, [isActive])

  return (
    <li className="relative">
      {isActive && (
        <span
          aria-hidden
          className="absolute top-1/2 -left-4 hidden h-6 w-0.5 -translate-y-1/2 rounded-full bg-primary md:block dark:bg-primary-subtle-fg"
        />
      )}
      <Link
        {...props}
        href={href}
        ref={ref}
        className={twMerge(
          'group relative mb-0.5 flex items-center gap-x-2 rounded-lg px-2 py-1 text-base text-fg/70 sm:text-sm/6',
          'hover:text-fg focus:text-fg focus:outline-hidden',
          '*:[svg]:size-4.5 *:[svg]:text-muted-fg hover:*:[svg]:text-fg',
          isActive && 'font-medium text-fg'
        )}
      >
        <>
          {props.children}

          {props.target === '_blank' && (
            <ArrowUpRightIcon
              style={{
                width: '16px',
                height: '16px',
              }}
              className="-mr-1 ml-auto hidden text-muted-fg group-hover:block"
            />
          )}
        </>
      </Link>
    </li>
  )
}

function AsideHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={twMerge(
        'relative mb-2 block px-6 font-mono text-[11px] text-muted-fg uppercase',
        className
      )}
      {...props}
    />
  )
}
