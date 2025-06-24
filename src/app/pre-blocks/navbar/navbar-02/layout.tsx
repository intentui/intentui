import { NavbarProvider } from "@/components/ui/navbar"
import AppNavbar from "../app-navbar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <NavbarProvider>
      <AppNavbar intent="float" />
      {children}
    </NavbarProvider>
  )
}
