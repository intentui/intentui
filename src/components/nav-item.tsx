"use client"

import NextLink from "next/link"
import { usePathname } from "next/navigation"
import type React from "react"
import { Link } from "react-aria-components"
import { twMerge } from "tailwind-merge"

interface NavLinkProps {
  href: string
  isActive?: boolean
  isNextLink?: boolean
  children?: React.ReactNode
  target?: string
  className?: string
}

const NavLink = ({ href, isActive, className, isNextLink, ...props }: NavLinkProps) => {
  const El = isNextLink ? NextLink : Link
  const pathname = usePathname()
  const isCurrent = isActive || href === pathname
  return (
    <El
      href={href}
      className={twMerge(
        "relative flex items-center gap-x-2 py-4.5 text-sm tracking-tight outline-hidden transition-colors focus:outline-hidden focus-visible:text-fg sm:py-3 **:[svg]:-mx-0.5",
        isCurrent ? "font-medium text-fg" : "text-muted-fg hover:text-fg",
        className,
      )}
      {...props}
    />
  )
}

export { NavLink }
