import { Footer } from '@/components/footer'
import { Navigation } from '@/components/navigation'
import { Discount } from '@/components/discount'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-svh flex-col bg-bg">
      <Navigation />
      <Discount />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
