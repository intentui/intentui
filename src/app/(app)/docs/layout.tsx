import { Aside } from "@/components/aside"
import { PageContainer } from "@/components/page-container"

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <PageContainer>
        <div className="relative flex w-full flex-auto justify-center border-transparent border-x lg:border-page">
          <div className="hidden lg:relative lg:block lg:flex-none">
            <Aside />
          </div>
          {children}
        </div>
      </PageContainer>
    </div>
  )
}
