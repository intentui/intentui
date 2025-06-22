import AppNavbar from "./app-navbar"

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AppNavbar />
      {children}
    </>
  )
}
