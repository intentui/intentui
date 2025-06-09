"use client"

import NextLink from "next/link"
import { usePathname } from "next/navigation"
import type React from "react"
import { Link } from "react-aria-components"
import { twMerge } from "tailwind-merge"

// const navLinkStyles = tv({
//   base: "**:[svg]:-mx-0.5 relative flex outline-hidden items-center gap-x-2 py-4.5 text-muted-fg text-sm tracking-tight transition-colors focus-visible:text-fg focus:outline-hidden sm:py-3",
//   variants: {
//     isActive: {
//       false: "text-muted-fg hover:text-fg forced-colors:text-[Gray]",
//       true: "text-fg forced-colors:text-[WindowText]",
//     },
//   },
// })

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
        "**:[svg]:-mx-0.5 relative flex items-center gap-x-2 py-4.5 text-sm tracking-tight outline-hidden transition-colors focus:outline-hidden focus-visible:text-fg sm:py-3",
        isCurrent ? "font-medium text-fg" : "text-muted-fg hover:text-fg",
        className,
      )}
      {...props}
    />
  )
}

export { NavLink }
