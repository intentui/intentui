import { Aside } from '@/components/docs/aside'
import { PageContainer } from '@/components/page-container'
import { Footer } from '@/components/docs/footer'
import { Navigation } from '@/components/navigation'

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <Navigation />
      <PageContainer>
        <div className="relative flex w-full flex-auto justify-center border-page xl:border-x">
          <div className="hidden lg:relative lg:block lg:flex-none">
            <Aside />
          </div>
          <div className="w-full min-w-0">
            {children}
            <Footer />
          </div>
        </div>
      </PageContainer>
    </div>
  )
}
