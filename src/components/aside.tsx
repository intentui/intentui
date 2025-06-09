"use client"

import { Heading } from "@/components/ui/heading"
import { Link, type LinkProps } from "@/components/ui/link"
import { Separator } from "@/components/ui/separator"
import { source } from "@/lib/source"
import type { PageTree } from "fumadocs-core/server"
import { usePathname } from "next/navigation"
import React from "react"
import { twMerge } from "tailwind-merge"

export interface SidebarItem {
  title: string
  slug?: string
  status?: string
  children?: SidebarItem[]
}

export function Aside() {
  const pageTree = source.pageTree
  return (
    <div className="px-4">
      {pageTree.children.map((item, index) => {
        return <SidebarComposed key={index} node={item} />
      })}
    </div>
  )
}

interface AsideLinkProps extends LinkProps {
  isActive?: boolean
}

function AsideLink({ href, ...props }: AsideLinkProps) {
  const path = usePathname()
  const isActive = path === href
  const ref = React.useRef<HTMLAnchorElement>(null)

  React.useEffect(() => {
    if (isActive && ref.current) {
      ref.current.scrollIntoView({ behavior: "instant", block: "center" })
    }
  }, [isActive])
  return (
    <Link
      {...props}
      href={href}
      ref={ref as any}
      className={twMerge(
        "-ml-3 mb-0.5 flex items-center justify-between rounded-lg px-3 py-1.5 text-base text-muted-fg sm:text-sm",
        "focus:outline-hidden",
        "hover:bg-muted hover:text-secondary-fg",
        isActive && [
          "font-medium",
          "bg-blue-100 text-blue-600 hover:bg-blue-100 hover:text-blue-600",
          "dark:bg-blue-400/10 dark:text-blue-400 dark:hover:bg-blue-400/10 dark:hover:text-blue-400",
        ],
      )}
    />
  )
}

const SidebarComposed = ({
  node,
}: {
  node: PageTree.Node
}) => {
  if (node.type === "folder") {
    return (
      <div className="mb-6">
        {!Number(node.name) && node.name !== "2.x" && (
          <Heading
            className="mb-2 flex items-center gap-x-2 font-medium text-base sm:text-sm"
            level={3}
          >
            {node.name}
          </Heading>
        )}

        {node.children
          .filter((i) => i.name !== "2.x")
          .map((child, index) => (
            <SidebarComposed key={index} node={child} />
          ))}
      </div>
    )
  }

  if (node.type === "separator") {
    return <Separator />
  }

  if (node.type === "page") {
    return (
      <AsideLink href={node.url}>
        {node.icon}
        {node.name}
      </AsideLink>
    )
  }
}
