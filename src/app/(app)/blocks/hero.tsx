"use client"

import { IconOpenLink } from "@intentui/icons"
import { PageContainer } from "@/components/page-container"
import { buttonStyles } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"

export function Hero() {
  return (
    <div className="py-6 sm:py-12">
      <PageContainer>
        <Heading level={1} className="text-2xl sm:text-3xl">
          Blo
          <span className="text-muted-fg">cks</span>
        </Heading>
        <div className="mt-6">
          <a
            className={buttonStyles({ intent: "secondary" })}
            href="https://blocks.intentui.com"
            target="_blank"
            rel="noopener"
          >
            Explore premium blocks
            <IconOpenLink />
          </a>
        </div>
      </PageContainer>
    </div>
  )
}
