"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect, useMemo, useRef } from "react"

export function AurelieAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const previousUrlRef = useRef<string | null>(null)

  const url = useMemo(() => {
    if (!pathname) return null
    const search = searchParams?.toString()
    return search ? `${pathname}?${search}` : pathname
  }, [pathname, searchParams])

  useEffect(() => {
    if (!url || previousUrlRef.current === url) {
      return
    }

    previousUrlRef.current = url
    window.aurelie?.trackPageview?.()
  }, [url])

  return null
}
