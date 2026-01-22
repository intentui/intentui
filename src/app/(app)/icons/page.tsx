import type { Metadata } from "next"
import { Suspense } from "react"
import { Header } from "@/components/header"
import { PageContainer } from "@/components/page-container"
import { Loader } from "@/components/ui/loader"
import { app } from "@/config/app"
import { IconsList } from "./partials/icons-list"

export const metadata: Metadata = {
  title: "Intent Icons",
  description:
    "A library of beautifully crafted @intentui/icons to elevate your web apps with crisp visuals, consistent style, and a polished, delightful user experience.",
  metadataBase: new URL(app.url),
  applicationName: app.name,
  keywords: [
    "Intent Icons",
    "Tailwind CSS",
    "UI Components",
    "UI Kit",
    "UI Library",
    "UI Framework",
    "Intent UI",
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
      name: app.author.name,
      url: app.author.url,
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
