"use client"

import { BrandGithubIcon } from "@/components/icons/brand-github-icon"
import { PageContainer } from "@/components/page-container"
import { buttonStyles } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { Link } from "@/components/ui/link"
import { app } from "@/config/app"
export function OpenSource() {
  return (
    <div className="border-transparent border-t bg-secondary/20 sm:mb-0 sm:border-border">
      <PageContainer className="px-0">
        <div className="relative z-20 mx-auto max-w-lg rounded-3xl bg-fg p-6 text-center text-bg sm:rounded-4xl lg:p-12">
          <Heading level={3} className="text-zinc-50 dark:text-zinc-900">
            Open source
          </Heading>
          <p className="mt-2 mb-4 text-base text-bg/70">
            Fully open source and built with care. Explore the code, contribute, or use it freely in
            your own projects.
          </p>

          <div className="flex items-center justify-center gap-x-2">
            <Link
              target="_blank"
              href={app.repo.url}
              className={buttonStyles({
                size: "lg",
                intent: "outline",
                className: "w-full bg-bg text-fg hover:bg-bg/95",
              })}
            >
              <BrandGithubIcon />
              GitHub
            </Link>

            <Link
              href="/sponsor"
              className={buttonStyles({
                size: "lg",
                intent: "outline",
                className: "w-full bg-bg text-fg hover:bg-bg/95",
              })}
            >
              <svg
                className="size-5 fill-pink-700 sm:size-4 dark:fill-pink-400"
                aria-hidden="true"
                viewBox="0 0 16 16"
                data-view-component="true"
              >
                <path d="m8 14.25.345.666a.75.75 0 0 1-.69 0l-.008-.004-.018-.01a7.152 7.152 0 0 1-.31-.17 22.055 22.055 0 0 1-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.066 22.066 0 0 1-3.744 2.584l-.018.01-.006.003h-.002ZM4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.58 20.58 0 0 0 8 13.393a20.58 20.58 0 0 0 3.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.749.749 0 0 1-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5Z" />
              </svg>
              Become sponsor
            </Link>
          </div>
        </div>
      </PageContainer>
    </div>
  )
}
