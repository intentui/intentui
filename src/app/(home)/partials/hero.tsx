"use client"

import { BookOpenIcon, CubeIcon } from "@heroicons/react/24/outline"
import { Header } from "react-aria-components"
import { PageContainer } from "@/components/page-container"
import { buttonStyles } from "@/components/ui/button"
import { Link } from "@/components/ui/link"
import { siteConfig } from "@/config/site"

export function Hero() {
  return (
    <div className="-mt-20 bg-gradient-to-b from-blue-50 to-bg pt-20 pb-8 lg:pt-40 lg:pb-16 dark:from-muted dark:to-zinc-950">
      <PageContainer>
        <Header className="pt-6 text-left">
          <h1 className="mt-4 mb-4 max-w-3xl pb-1 font-semibold text-3xl text-fg tracking-tight lg:mb-6 lg:text-5xl/14">
            Accessible React component library to copy, customize, and own your UI.
          </h1>
          <p className="block max-w-2xl text-base text-muted-fg leading-relaxed md:leading-relaxed lg:text-xl [&_strong]:font-medium [&_strong]:text-fg">
            <strong className="text-white">{siteConfig.name}</strong> is a chill set of React
            components, built on top of <strong className="text-fg">React Aria Components</strong>,
            all about keeping the web accessible. Easy to customize and just copy & paste into your
            React projects. Plus, it includes <strong className="text-fg">Tailwind CSS</strong> for
            sleek styling right out of the box.
          </p>
        </Header>

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
              intent: "outline",
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
