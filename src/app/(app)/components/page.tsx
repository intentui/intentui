import { Header } from "@/components/header"
import { PageContainer } from "@/components/page-container"
import { Heading } from "@/components/ui/heading"
import { Link } from "@/components/ui/link"
import { siteConfig } from "@/config/site"
import { source } from "@/lib/source"
import { IconArrowRight, IconCube, IconPackage } from "@intentui/icons"
import type { Metadata } from "next"

export default function Page() {
  const components =
    (source.pageTree as any).children?.[0]?.children?.find(
      (item: any) => item.name === "Components",
    )?.children || []
  return (
    <div>
      <Header>
        <span className="text-fg tracking-tight">Comp</span>
        <span className="text-muted-fg tracking-tight">onents</span>
      </Header>
      <div className="bg-muted/35 py-4 lg:py-16">
        <PageContainer>
          <div className="columns-1 gap-(--gap) [--gap:0.5rem] sm:columns-2 md:columns-3 lg:columns-4">
            {components.map((item: ComponentProps, index: number) => (
              <div
                key={index}
                className="relative inset-ring-1 inset-ring-border mb-(--gap) break-inside-avoid rounded-md bg-white p-4 dark:inset-ring-fg/5 dark:inset-shadow-xs dark:inset-shadow-zinc-800 dark:bg-[#111114]"
              >
                <Heading
                  level={2}
                  className="mb-2 flex items-center gap-x-2 font-semibold text-base sm:text-base"
                >
                  <IconPackage /> {item.name}
                </Heading>
                <ol className="flex flex-col">
                  {item?.children?.map((child: ComponentProps, i: number) => (
                    <li key={i}>
                      <Link
                        href={child.url}
                        className="group flex items-center justify-between py-1 text-muted-fg duration-200 hover:text-fg sm:text-sm"
                      >
                        <span className="flex items-center gap-x-2">
                          <IconCube />
                          {child.name}
                        </span>
                        <IconArrowRight className="hidden size-4 group-hover:block" />
                      </Link>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </PageContainer>
      </div>
    </div>
  )
}

export const metadata: Metadata = {
  title: "Components",
  description:
    "Over 50 accessible components, neatly grouped into sections. Guaranteed usability for all!",
  metadataBase: new URL("https://intentui.com"),
  applicationName: siteConfig.name,
  keywords: [
    "Components",
    "Intent Components",
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
}

interface ComponentProps {
  name: string
  url: string
  children?: {
    name: string
    url: string
  }[]
}
