"use client"

import { IconDeviceDesktop2, IconMoon, IconSun } from "@intentui/icons"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { composeTailwindRenderProps } from "@/lib/primitive"

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
      className={composeTailwindRenderProps(className, "**:data-[slot=icon]:text-fg")}
      aria-label="Switch theme"
      onPress={toggleTheme}
      {...props}
    >
      {theme === "light" ? <IconSun /> : theme === "dark" ? <IconMoon /> : <IconDeviceDesktop2 />}
    </Button>
  )
}
