import AppNavbar from "@/app/pre-blocks/navbar/navbar-03/app-navbar"
import { NavbarInset, NavbarProvider } from "@/components/ui/navbar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <NavbarProvider>
      <AppNavbar intent="inset" />
      <NavbarInset>{children}</NavbarInset>
    </NavbarProvider>
  )
}
