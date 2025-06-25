"use client"

import { PageContainer } from "@/components/page-container"
import { Heading } from "@/components/ui/heading"
import type React from "react"
import { twMerge } from "tailwind-merge"

export function Header({ children, className }: React.ComponentProps<"div">) {
  return (
    <div className={twMerge("py-6 lg:py-10", className)}>
      <PageContainer>
        <Heading level={1} className="text-2xl sm:text-3xl">
          {children}
        </Heading>
      </PageContainer>
    </div>
  )
}
