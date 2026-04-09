"use client"

import { createContext, useContext, useEffect, useMemo, useState } from "react"

type Theme = "light" | "dark" | "system"

export interface ThemeProviderProps {
  attribute?: "class" | string
  children: React.ReactNode
  defaultTheme?: Theme
  disableTransitionOnChange?: boolean
  enableSystem?: boolean
  storageKey?: string
}

interface ThemeContextValue {
  resolvedTheme: "light" | "dark"
  setTheme: (theme: Theme) => void
  theme: Theme
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

const MEDIA_QUERY = "(prefers-color-scheme: dark)"

function getSystemTheme() {
  if (typeof window === "undefined") {
    return "light" as const
  }

  return window.matchMedia(MEDIA_QUERY).matches ? ("dark" as const) : ("light" as const)
}

function disableTransitionsTemporarily() {
  const style = document.createElement("style")
  style.appendChild(
    document.createTextNode("*{-webkit-transition:none!important;transition:none!important}"),
  )
  document.head.appendChild(style)

  return () => {
    void window.getComputedStyle(document.body)
    requestAnimationFrame(() => {
      style.remove()
    })
  }
}

function applyTheme(theme: Theme, resolvedTheme: "light" | "dark", attribute: string) {
  const root = document.documentElement

  if (attribute === "class") {
    root.classList.remove("light", "dark")
    root.classList.add(resolvedTheme)
    return
  }

  root.setAttribute(attribute, theme === "system" ? resolvedTheme : theme)
}

export function ThemeProvider({
  attribute = "class",
  children,
  defaultTheme = "system",
  disableTransitionOnChange = false,
  enableSystem = true,
  storageKey = "intentui-theme",
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme)
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    const savedTheme = localStorage.getItem(storageKey) as Theme | null
    const nextTheme = savedTheme ?? defaultTheme
    const nextResolvedTheme =
      nextTheme === "system" && enableSystem
        ? getSystemTheme()
        : nextTheme === "dark"
          ? "dark"
          : "light"

    setThemeState(nextTheme)
    setResolvedTheme(nextResolvedTheme)
    applyTheme(nextTheme, nextResolvedTheme, attribute)
  }, [attribute, defaultTheme, enableSystem, storageKey])

  useEffect(() => {
    if (!enableSystem || typeof window === "undefined") {
      return
    }

    const mediaQuery = window.matchMedia(MEDIA_QUERY)
    const onChange = () => {
      setResolvedTheme((currentResolvedTheme) => {
        const nextResolvedTheme = getSystemTheme()
        const storedTheme = (localStorage.getItem(storageKey) as Theme | null) ?? defaultTheme

        if (storedTheme === "system") {
          applyTheme("system", nextResolvedTheme, attribute)
        }

        return currentResolvedTheme === nextResolvedTheme ? currentResolvedTheme : nextResolvedTheme
      })
    }

    mediaQuery.addEventListener("change", onChange)
    return () => mediaQuery.removeEventListener("change", onChange)
  }, [attribute, defaultTheme, enableSystem, storageKey])

  const setTheme = (nextTheme: Theme) => {
    const normalizedTheme = nextTheme === "system" && !enableSystem ? "light" : nextTheme
    const nextResolvedTheme =
      normalizedTheme === "system"
        ? getSystemTheme()
        : normalizedTheme === "dark"
          ? "dark"
          : "light"

    const restoreTransitions = disableTransitionOnChange ? disableTransitionsTemporarily() : null

    localStorage.setItem(storageKey, normalizedTheme)
    setThemeState(normalizedTheme)
    setResolvedTheme(nextResolvedTheme)
    applyTheme(normalizedTheme, nextResolvedTheme, attribute)

    restoreTransitions?.()
  }

  const value = useMemo<ThemeContextValue>(
    () => ({
      resolvedTheme,
      setTheme,
      theme,
    }),
    [resolvedTheme, theme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }

  return context
}

export type { Theme }
