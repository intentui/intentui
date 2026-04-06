"use client"

import { ComputerDesktopIcon, MoonIcon, SunIcon } from "@heroicons/react/24/outline"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"
import { cx } from "@/lib/primitive"

export function ThemeSwitcher({
  isCircle = false,
  intent = "outline",
  className,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : theme === "dark" ? "system" : "light"
    setTheme(nextTheme)
  }

  return (
    <Button
      isCircle={isCircle}
      intent={intent}
      size="sq-sm"
      className={cx("**:data-[slot=icon]:text-fg", className)}
      aria-label="Switch theme"
      onPress={toggleTheme}
      {...props}
    >
      {theme === "light" ? <SunIcon /> : theme === "dark" ? <MoonIcon /> : <ComputerDesktopIcon />}
    </Button>
  )
}
