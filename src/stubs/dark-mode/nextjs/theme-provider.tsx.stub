"use client"

import { ThemeProvider as NextThemesProvider, type ThemeProviderProps, useTheme } from "next-themes"

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <NextThemesProvider enableSystem storageKey="intentui-theme" {...props}>
      {children}
    </NextThemesProvider>
  )
}

export { ThemeProvider, useTheme }
