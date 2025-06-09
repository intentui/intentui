"use client"

import { PageContainer } from "@/components/page-container"
import { Heading } from "@/components/ui/heading"
import type React from "react"

export function Header({ children }: { children: React.ReactNode }) {
  return (
    <div className="py-6 lg:py-10">
      <PageContainer>
        <Heading level={1} className="text-2xl sm:text-3xl">
          {children}
        </Heading>
      </PageContainer>
    </div>
  )
}
