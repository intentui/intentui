"use client"

import { ThemeProvider } from "@/components/theme-provider"
import { useRouter } from "next/navigation"
import { RouterProvider } from "react-aria-components"

declare module "react-aria-components" {
  interface RouterConfig {
    routerOptions: NonNullable<Parameters<ReturnType<typeof useRouter>["push"]>[1]>
  }
}

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  return (
    <RouterProvider navigate={router.push}>
      <ThemeProvider attribute="class">{children}</ThemeProvider>
    </RouterProvider>
  )
}
