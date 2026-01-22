import type { Metadata } from "next"
import { Suspense } from "react"
import { Header } from "@/components/header"
import { PageContainer } from "@/components/page-container"
import { Loader } from "@/components/ui/loader"
import { app } from "@/config/app"
import { IconsList } from "./partials/icons-list"

export const metadata: Metadata = {
  title: "Intent UI Icons",
  description:
    "A library of beautifully crafted @intentui/icons to elevate your web apps with crisp visuals, consistent style, and a polished, delightful user experience.",
  metadataBase: new URL(app.url),
  applicationName: app.name,
  keywords: [
    "intent ui icons",
    "tailwind css",
    "ui components",
    "ui kit",
    "ui library",
    "ui framework",
    "intent ui",
    "next.js 15",
    "react aria",
    "react aria components",
    "server components",
    "react components",
    "next ui components",
    "ui design system",
    "ui for laravel inertia",
    "laravel inertia ui",
    "laravel inertia components",
    "laravel inertia ui components",
    "laravel inertia ui kit",
    "laravel inertia ui library",
    "laravel inertia ui framework",
    "laravel inertia intent ui",
    "laravel intent ui",
    "intent components",
    "intent ui components",
    "intent ui kit",
    "intent ui library",
    "intent ui framework",
    "intent ui laravel inertia",
    "intent ui laravel",
    "intent ui inertia",
    "intentui",
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
