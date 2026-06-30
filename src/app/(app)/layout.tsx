import { Footer } from '@/components/footer'
import { Navigation } from '@/components/navigation'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-svh flex-col bg-bg">
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer currentYear={new Date().getUTCFullYear()} />
    </div>
  )
}
