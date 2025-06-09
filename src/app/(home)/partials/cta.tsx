"use client"

import { siteConfig } from "@/config/site"
import { IconBrandGithub } from "@intentui/icons"

import { PageContainer } from "@/components/page-container"
import { buttonStyles } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { Link } from "@/components/ui/link"
export function Cta() {
  return (
    <div className="border-t bg-muted/40 py-8 lg:py-16">
      <PageContainer>
        <div className="mx-auto max-w-md text-center">
          <Heading className="text-2xl sm:text-3xl" level={3}>
            Intent is Open Source
          </Heading>
          <p className="mt-2 mb-4 text-base text-muted-fg lg:text-lg">
            Our code's chillin' on GitHub - dive in, peep it, or drop some hot commits if you're
            feelin' it!
          </p>

          <Link
            target="_blank"
            href={siteConfig.repo}
            className={buttonStyles({ size: "lg", intent: "outline" })}
          >
            <IconBrandGithub />
            GitHub
          </Link>
        </div>
      </PageContainer>
    </div>
  )
}
