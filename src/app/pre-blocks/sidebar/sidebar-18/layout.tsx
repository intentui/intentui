import type React from "react"

import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { IconBrandPhp, IconX } from "@intentui/icons"

import AppSidebar from "./app-sidebar"

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <SidebarProvider className="[--sidebar-width:24rem]">
      <AppSidebar closeButton={false} intent="fleet" />
      <SidebarInset>
        <div className="sticky top-0 flex h-12 w-full items-center justify-between border-b bg-sidebar px-4">
          <SidebarTrigger className="-ml-2 md:hidden" />
          <div className="flex items-center">
            <IconBrandPhp className="w-8 text-indigo-500" />
            <span className="font-mono text-muted-fg text-xs">Controller.php</span>
          </div>
          <IconX />
        </div>
        <div>{children}</div>
      </SidebarInset>
    </SidebarProvider>
  )
}
