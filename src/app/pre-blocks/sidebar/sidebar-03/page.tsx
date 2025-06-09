import AppSidebar from "@/app/pre-blocks/sidebar/app-sidebar"
import AppSidebarNav from "@/app/pre-blocks/sidebar/app-sidebar-nav"
import { Heading } from "@/components/ui/heading"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar collapsible="dock" intent="inset" />
      <SidebarInset>
        <AppSidebarNav />
        <div className="p-4 lg:p-6">
          <Heading>Inset</Heading>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
