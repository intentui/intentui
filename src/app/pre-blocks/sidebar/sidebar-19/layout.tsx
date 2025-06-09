import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

import AppSidebar from "./app-sidebar"
import AppSidebarNav from "./app-sidebar-nav"

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <SidebarProvider>
      <AppSidebar collapsible="dock" />
      <SidebarInset>
        <AppSidebarNav />
        <div className="p-4 lg:p-6">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  )
}
