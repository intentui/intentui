"use client"

import { twMerge } from "tailwind-merge"
import { IconBrandTanstack, IconBrandVite } from "@/components/framework-guides"
import { BrandLaravelIcon } from "@/components/icons/brand-laravel-icon"
import { BrandNextjsIcon } from "@/components/icons/brand-nextjs-icon"
import { PageContainer } from "@/components/page-container"
import { CardHeader } from "@/components/ui/card"
import { Link } from "@/components/ui/link"
import { Text } from "@/components/ui/text"

export const starterKits = [
  {
    icon: BrandNextjsIcon,
    name: "Next.js",
    url: `/docs/getting-started/nextjs`,
    description: "A full-featured starter with routing, layouts, and authentication built in.",
  },
  {
    icon: BrandLaravelIcon,
    name: "Laravel",
    url: `/docs/getting-started/laravel`,
    description: "Server-driven starter with routing, auth, and front-end integration ready to go.",
  },
  {
    icon: IconBrandTanstack,
    name: "Tanstack Router",
    url: `/docs/getting-started/tanstack-router`,
    description: "Opinionated setup with routing, layouts, and auth, ready for modern apps.",
  },
  {
    icon: IconBrandVite,
    name: "Vite",
    url: `/docs/getting-started/vite`,
    description: "The simple way to start Vite with Intent UI installed.",
    label: "Starter Kit",
  },
]

export function StarterKit() {
  return (
    <>
      <div className="border-page border-b">
        <PageContainer>
          <div className="border-page border-x p-6">
            <CardHeader
              className="max-w-lg"
              title="Starter kit"
              description="A preconfigured project setup that includes everything you need to start building and shipping faster with Intent UI."
            />
          </div>
        </PageContainer>
      </div>
      <PageContainer>
        <div className="border-page border-x">
          <div className="grid grid-cols-1 divide-x divide-y divide-page *:p-6 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4">
            {starterKits.map((item) => (
              <Link
                className="flex flex-col gap-y-4 hover:bg-secondary/50"
                href={item.url}
                key={item.name}
              >
                <div className="flex gap-x-3">
                  <item.icon className="size-6 shrink-0" />
                  <span>{item.name}</span>
                </div>
                <Text>{item.description}</Text>
              </Link>
            ))}
          </div>
        </div>
      </PageContainer>
    </>
  )
}

export function Wrapper({
  slot = "wrapper-card",
  className,
  ...props
}: React.ComponentProps<"div"> & { slot?: string }) {
  return (
    <div
      data-slot={slot}
      className={twMerge(
        "relative rounded-md border bg-overlay px-4 py-10 sm:px-6 sm:py-8",
        className,
      )}
      {...props}
    />
  )
}
