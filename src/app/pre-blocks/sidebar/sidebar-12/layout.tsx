import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

import AppSidebarNav from "../app-sidebar-nav"
import AppSidebar from "./app-sidebar"

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
