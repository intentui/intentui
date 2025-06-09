import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

import { twJoin } from "tailwind-merge"
import AppSidebar from "../app-sidebar"
import AppSidebarNav from "../app-sidebar-nav"

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <SidebarProvider>
      <AppSidebar collapsible="dock" />
      <SidebarInset>
        <AppSidebarNav />
        <div
          className={twJoin(
            "[--layout-padding:--spacing(4)] sm:[--layout-padding:--spacing(6)]",
            "flex flex-col gap-y-(--layout-padding) p-(--layout-padding) lg:p-(--layout-padding)",
          )}
        >
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
