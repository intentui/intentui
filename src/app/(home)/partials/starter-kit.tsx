"use client"

import { twMerge } from "tailwind-merge"
import { IconBrandTanstack, IconBrandVite } from "@/components/framework-guides"
import { BrandLaravelIcon } from "@/components/icons/brand-laravel-icon"
import { BrandNextjsIcon } from "@/components/icons/brand-nextjs-icon"
import { PageContainer } from "@/components/page-container"
import { CardHeader } from "@/components/ui/card"
import {
  ChoiceBox,
  ChoiceBoxDescription,
  ChoiceBoxItem,
  ChoiceBoxLabel,
} from "@/components/ui/choice-box"

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
    <PageContainer className="py-6 sm:py-12">
      <CardHeader
        className="mb-6 max-w-lg"
        title="Starter kit"
        description="A preconfigured project setup that includes everything you need to start building and shipping faster with Intent UI."
      />
      <ChoiceBox
        gap={2}
        columns={4}
        selectionMode="single"
        className="*:data-[slot=choicebox-item]:bg-bg"
        items={starterKits}
        aria-label="Starter Kit"
      >
        {(item) => (
          <ChoiceBoxItem
            className="hover:bg-muted"
            href={item.url}
            textValue={item.name}
            id={item.name}
          >
            <item.icon />
            <ChoiceBoxLabel>{item.name}</ChoiceBoxLabel>
            <ChoiceBoxDescription>{item.description}</ChoiceBoxDescription>
          </ChoiceBoxItem>
        )}
      </ChoiceBox>
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
