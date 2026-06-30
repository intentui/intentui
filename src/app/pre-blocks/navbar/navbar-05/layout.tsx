import { NavbarProvider } from '@/components/ui/navbar'
import AppNavbar from './app-navbar'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <NavbarProvider>
      <AppNavbar />
      {children}
    </NavbarProvider>
  )
}
