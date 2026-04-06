"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect, useMemo, useRef } from "react"

export function AurelieAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const previousUrlRef = useRef<string | null>(null)
  const scriptLoadedRef = useRef(false)

  const url = useMemo(() => {
    if (!pathname) return null
    const search = searchParams?.toString()
    return search ? `${pathname}?${search}` : pathname
  }, [pathname, searchParams])

  useEffect(() => {
    if (scriptLoadedRef.current || typeof window === "undefined") {
      return
    }

    scriptLoadedRef.current = true

    const script = document.createElement("script")
    script.async = true
    script.src = process.env.NEXT_PUBLIC_AURELIE_URL ?? "https://app.useaurelie.com/florin.js?v1"

    const siteKey = process.env.NEXT_PUBLIC_AURELIE_PUBLIC_KEY
    if (siteKey) {
      script.dataset.siteKey = siteKey
    }

    document.head.append(script)

    return () => {
      script.remove()
      scriptLoadedRef.current = false
    }
  }, [])

  useEffect(() => {
    if (!url || previousUrlRef.current === url) {
      return
    }

    previousUrlRef.current = url
    window.aurelie?.trackPageview?.()
  }, [url])

  return null
}
