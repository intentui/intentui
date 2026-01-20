"use client"

import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline"
import { PageContainer } from "@/components/page-container"
import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"

export function Hero() {
  function go() {
    window.aurelie?.track?.("press")
    window.open("https://dub.sh/designiui", "_blank", "noopener")
  }
  return (
    <div className="border-b bg-bg py-6 sm:py-12">
      <PageContainer>
        <Heading level={1} className="text-2xl sm:text-3xl">
          Blocks
        </Heading>
        <div className="mt-6">
          <Button className="cursor-pointer" onPress={go} intent="secondary">
            Explore premium blocks
            <ArrowTopRightOnSquareIcon />
          </Button>
        </div>
      </PageContainer>
    </div>
  )
}
