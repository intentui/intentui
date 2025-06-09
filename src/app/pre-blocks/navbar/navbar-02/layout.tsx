import AppNavbar from "./app-navbar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AppNavbar />
      <div className="@xl:py-12 py-6">{children}</div>
    </>
  )
}
