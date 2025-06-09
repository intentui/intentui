import type React from "react"

import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-svh flex-col bg-bg">
      <Navbar />
      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  )
}
