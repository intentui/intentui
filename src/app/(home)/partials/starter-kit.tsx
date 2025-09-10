"use client"

import { IconBrandLaravel, IconBrandNextjs } from "@intentui/icons"
import { twMerge } from "tailwind-merge"
import { IconBrandTanstack, IconBrandVite } from "@/components/framework-guides"
import { PageContainer } from "@/components/page-container"
import { CardHeader } from "@/components/ui/card"
import { Choicebox } from "@/components/ui/choicebox"

export const starterKits = [
  {
    icon: IconBrandNextjs,
    name: "Next.js",
    url: "https://github.com/intentuilabs/next.js",
    description: "A full-featured starter with routing, layouts, and authentication built in.",
  },
  {
    icon: IconBrandLaravel,
    name: "Laravel",
    url: "https://github.com/intentuilabs/laravel",
    description: "Server-driven starter with routing, auth, and front-end integration ready to go.",
  },
  {
    icon: IconBrandTanstack,
    name: "Tanstack Router",
    url: "https://github.com/intentuilabs/tanstack-router",
    description: "Opinionated setup with routing, layouts, and auth, ready for modern apps.",
  },
  {
    icon: IconBrandVite,
    name: "Vite",
    url: "https://github.com/intentuilabs/vite",
    description: "The simple way to start Vite with Intent UI installed.",
    label: "Starter Kit",
  },
]

export function StarterKit() {
  return (
    <PageContainer className="py-6 sm:py-12">
      <CardHeader
        className="mb-6 max-w-lg"
        title="Starter kit"
        description="A preconfigured project setup that includes everything you need to start building and shipping faster with Intent UI."
      />
      <Choicebox
        gap={6}
        columns={3}
        selectionMode="single"
        className="*:data-[slot=choicebox-item]:bg-bg"
        items={starterKits}
        aria-label="Starter Kit"
      >
        {(item) => (
          <Choicebox.Item target="_blank" href={item.url} textValue={item.name} id={item.name}>
            <item.icon />
            <Choicebox.Label>{item.name}</Choicebox.Label>
            <Choicebox.Description>{item.description}</Choicebox.Description>
          </Choicebox.Item>
        )}
      </Choicebox>
    </PageContainer>
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

export function WrapperIcon(props: React.ComponentProps<"div">) {
  return (
    <div
      id="support"
      className="inset-ring inset-ring-fg/10 mr-4 grid size-14 shrink-0 place-content-center rounded-full bg-secondary/20 text-xl group-hover:inset-ring-primary/25 group-hover:bg-primary/5 **:group-hover:text-primary **:[svg]:size-6"
      {...props}
    />
  )
}
