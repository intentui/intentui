"use client"

import { BookOpenIcon, CubeIcon } from "@heroicons/react/24/outline"
import { PageContainer } from "@/components/page-container"
import { buttonStyles } from "@/components/ui/button"
import { Link } from "@/components/link"
import { app } from "@/config/app"

export function Hero() {
  return (
    <div className="-mt-16 bg-linear-to-b from-blue-50 to-bg pt-20 pb-8 lg:pt-40 lg:pb-16 dark:from-muted dark:to-zinc-950">
      <PageContainer>
        <div className="pt-6 text-left">
          <h1 className="mt-4 mb-4 max-w-3xl pb-1 font-medium text-3xl text-fg tracking-tight lg:mb-6 lg:text-5xl/14">
            Accessible React components to copy, customize, and make your own.
          </h1>
          <p className="block max-w-2xl text-base text-muted-fg leading-relaxed md:leading-relaxed lg:text-xl [&_strong]:font-normal [&_strong]:text-fg">
            <strong className="text-white">{app.name}</strong> is a set of accessible React
            components built with <strong className="text-fg">React aria components</strong>,
            designed for fast copy and paste customization, and styled with{" "}
            <strong className="text-fg">Tailwind CSS</strong>.
          </p>
        </div>

        <div className="mt-6 flex items-center gap-x-2">
          <Link
            className={buttonStyles({
              size: "lg",
              className: "inset-ring-white/10 shadow-none",
            })}
            href="/docs/getting-started/installation"
          >
            <BookOpenIcon />
            Get started
          </Link>
          <Link
            className={buttonStyles({
              size: "lg",
              intent: "secondary",
              className: "shadow-none",
            })}
            href="/components"
          >
            <CubeIcon />
            Components
          </Link>
        </div>
      </PageContainer>
    </div>
  )
}
