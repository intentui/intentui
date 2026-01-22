import { Suspense } from "react"
import { Header } from "@/components/header"
import { PageContainer } from "@/components/page-container"
import { Loader } from "@/components/ui/loader"
import { createMetadata } from "@/lib/metadata"
import { IconsList } from "./partials/icons-list"

export const metadata = createMetadata({
  title: "Icons",
  description:
    "A library of beautifully crafted @intentui/icons to elevate your web apps with crisp visuals, consistent style, and a polished, delightful user experience.",
  path: "/icons",
  image: null,
  keywords: [
    "intent ui icons",
    "react icons",
    "icon library",
    "svg icons",
    "ui icons",
    "icon components",
    "intent ui",
    "intentui",
  ],
})

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
