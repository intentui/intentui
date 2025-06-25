import { NavbarProvider } from "@/components/ui/navbar"
w
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <NavbarProvider>
      <AppNavbear />
      {children}
    </NavbarProvider>
  )
}
