"use client"

import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline"
import { PageContainer } from "@/components/page-container"
import { buttonStyles } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"

export function Hero() {
  return (
    <div className="border-b py-6 sm:py-12">
      <PageContainer>
        <Heading level={1} className="text-2xl sm:text-3xl">
          Blocks
        </Heading>
        <div className="mt-6">
          <a
            className={buttonStyles({ intent: "secondary" })}
            href="https://dub.sh/designiui"
            target="_blank"
            rel="noopener"
          >
            Explore premium blocks
            <ArrowTopRightOnSquareIcon />
          </a>
        </div>
      </PageContainer>
    </div>
  )
}
