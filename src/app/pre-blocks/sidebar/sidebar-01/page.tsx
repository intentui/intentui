import { Heading } from "@/components/ui/heading"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import AppSidebarNav from "../app-sidebar-nav"
import AppSidebar from "./app-sidebar"

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar collapsible="dock" />
      <SidebarInset>
        <AppSidebarNav />
        <div className="p-4 lg:p-6">
          <Heading>Basic</Heading>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
