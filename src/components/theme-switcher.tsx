"use client"

import { IconCircleHalf, IconCircleHalfFill } from "@intentui/icons"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

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
      className={className}
      size="sq-sm"
      aria-label="Switch theme"
      onPress={toggleTheme}
      {...props}
    >
      {theme === "light" ? (
        <IconCircleHalf />
      ) : theme === "dark" ? (
        <IconCircleHalfFill />
      ) : (
        <IconCircleHalf />
      )}
    </Button>
  )
}
