"use client"

import { siteConfig } from "@/config/site"
import { IconBrandGithub } from "@intentui/icons"

import { PageContainer } from "@/components/page-container"
import { buttonStyles } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { Link } from "@/components/ui/link"
export function OpenSource() {
  return (
    <div className="border-t bg-secondary/20">
      <PageContainer>
        <div className="mx-auto max-w-lg rounded-[2rem] bg-fg p-6 text-center text-bg lg:p-12">
          <Heading level={3} className="text-zinc-50 dark:text-zinc-900">
            Open source
          </Heading>
          <p className="mt-2 mb-4 text-base text-zinc-300 dark:text-zinc-600">
            Fully open source and built with care. Explore the code, contribute, or use it freely in
            your own projects.
          </p>

          <Link
            target="_blank"
            href={siteConfig.repo}
            className={buttonStyles({
              size: "lg",
              intent: "outline",
              className: "w-full bg-bg text-fg hover:bg-bg/95",
            })}
          >
            <IconBrandGithub />
            GitHub
          </Link>
        </div>
      </PageContainer>
    </div>
  )
}
