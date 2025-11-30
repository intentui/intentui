"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect, useRef } from "react"

export function AurelieAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const previousUrlRef = useRef<string | null>(null)

  useEffect(() => {
    if (!pathname) {
      return
    }

    const search = searchParams?.toString()
    const url = search ? `${pathname}?${search}` : pathname

    if (previousUrlRef.current === url) {
      return
    }

    previousUrlRef.current = url

    window.aurelie?.trackPageview?.()
  }, [pathname, searchParams])

  return null
}
