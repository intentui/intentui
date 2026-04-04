import { DiscountBanner } from "@/components/discount-banner"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-svh flex-col bg-bg">
      <DiscountBanner />
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
