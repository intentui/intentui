import type { Metadata } from "next"
import { Suspense } from "react"
import { Header } from "@/components/header"
import { PageContainer } from "@/components/page-container"
import { Loader } from "@/components/ui/loader"
import { siteConfig } from "@/config/site"
import { IconsList } from "./partials/icons-list"

export const metadata: Metadata = {
  title: "Intent Icons",
  description:
    " A library of beautifully crafted react icons, perfect for enhancing the visual appeal and user experience of your web applications. ",
  metadataBase: new URL("https://intentui.com"),
  applicationName: siteConfig.name,
  keywords: [
    "Intent Icons",
    "Tailwind CSS",
    "UI Components",
    "UI Kit",
    "UI Library",
    "UI Framework",
    "Intent",
    "Next.js 15",
    "React Aria",
    "React Aria Components",
    "Server Components",
    "React Components",
    "Next UI Components",
    "UI Design System",
    "UI for Laravel Inertia",
    "Laravel Inertia UI",
    "Laravel Inertia Components",
    "Laravel Inertia UI Components",
    "Laravel Inertia UI Kit",
    "Laravel Inertia UI Library",
    "Laravel Inertia UI Framework",
    "Laravel Inertia Intent",
    "Laravel Intent",
    "Intent Components",
    "Intent UI Components",
    "Intent UI Kit",
    "Intent UI Library",
    "Intent UI Framework",
    "Intent Laravel Inertia",
    "Intent Laravel",
    "Intent Inertia",
  ],
  authors: [
    {
      name: "irsyadadl",
      url: "https://x.com/irsyadadl",
    },
  ],
}

interface Props {
  searchParams: Promise<{
    query: string
    t: "solid" | "regular"
  }>
}

export default async function Page({ searchParams }: Props) {
  const { query, t } = await searchParams
  return (
    <>
      <Header>
        Ico
        <span className="text-muted-fg">ns</span>
      </Header>
      <PageContainer>
        <Suspense
          fallback={
            <div className="flex min-h-96 items-center justify-center">
              <Loader />
            </div>
          }
        >
          <IconsList searchParams={{ query, t }} />
        </Suspense>
      </PageContainer>
    </>
  )
}
