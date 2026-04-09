"use client"

import { useEffect } from "react"
import { useTheme } from "@/components/theme-provider"
import { META_THEME_COLORS } from "@/config/app"

export function AppBootstrap() {
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    const root = document.documentElement
    const savedLayout = localStorage.getItem("layout")

    for (const className of [...root.classList]) {
      if (className.startsWith("layout-")) {
        root.classList.remove(className)
      }
    }

    if (savedLayout) {
      root.classList.add(`layout-${savedLayout}`)
    }
  }, [])

  useEffect(() => {
    const themeColor = document.querySelector('meta[name="theme-color"]')
    if (!themeColor) return

    themeColor.setAttribute(
      "content",
      resolvedTheme === "dark" ? META_THEME_COLORS.dark : META_THEME_COLORS.light,
    )
  }, [resolvedTheme])
  return null
}
