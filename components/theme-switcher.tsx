"use client"

import { useEffect, useState } from "react"

import { cn } from "@/utils/classes"
import { IconDeviceDesktop2, IconMoon, IconSun } from "@intentui/icons"
import { useTheme } from "next-themes"
import { Button } from "ui"

export function ThemeSwitcher({
  shape = "square",
  appearance = "outline",
  className,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : theme === "dark" ? "system" : "light"
    setTheme(nextTheme)
  }

  if (!mounted) return null

  return (
    <Button
      shape={shape}
      appearance={appearance}
      size="square-petite"
      className={cn("[&_[data-slot=icon]]:text-fg", className)}
      aria-label="Switch theme"
      onPress={toggleTheme}
      {...props}
    >
      {theme === "light" ? <IconSun /> : theme === "dark" ? <IconMoon /> : <IconDeviceDesktop2 />}
    </Button>
  )
}
