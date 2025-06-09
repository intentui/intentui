"use client"

import { siteConfig } from "@/resources/config/site"
import { IconBrandIntentui, IconCube, IconStar } from "@intentui/icons"
import Link from "next/link"
import { Header, Text } from "react-aria-components"
import { buttonStyles, Container } from "ui"

export function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-bg">
      <div
        aria-hidden="true"
        className="absolute sm:block hidden inset-x-0 -top-10 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-56"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr dark:from-sky-500 dark:to-primary-500 opacity-10 dark:opacity-[0.17] sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
      <svg
        aria-hidden="true"
        className="absolute lg:block hidden inset-0 -z-10 h-full w-full stroke-zinc-200 dark:stroke-zinc-800 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>
      <div className="pt-10 pb-6 sm:py-8 lg:py-10 xl:py-20 2xl:py-24 border-b">
        <Container>
          <Header>
            <Link
              target="_blank"
              href={siteConfig.repo}
              className={buttonStyles({
                size: "extra-small",
                appearance: "outline",
                shape: "circle",
                className:
                  "[&_[data-slot=icon]]:text-warning group bg-white text-zinc-900 hover:bg-zinc-100"
              })}
            >
              <IconStar className="group-hover:text-yellow-500 group-hover:fill-yellow-500" /> Stars
              sustain energy
            </Link>
            <h1 className="max-w-xl mt-4 text-2xl font-bold lg:text-4xl mb-4 lg:mb-6 tracking-tight">
              Accessible React UI Components. Copy, Customize, and Make Them Yours.
            </h1>
            <Text
              slot="description"
              className="text-base [&_strong]:font-medium lg:text-xl max-w-2xl block leading-relaxed md:leading-loose text-muted-fg"
            >
              <strong className="text-fg">{siteConfig.name}</strong> is a chill set of React
              components, built on top of <strong className="text-fg">React Aria Components</strong>
              , all about keeping the web accessible. Easy to customize and just copy & paste into
              your React projects. Plus, it includes{" "}
              <strong className="text-fg">Tailwind CSS</strong> for sleek styling right out of the
              box.
            </Text>
          </Header>
          <div className="mt-6 space-x-2">
            <Link
              className={buttonStyles({
                size: "large"
              })}
              href="/docs/getting-started/installation"
            >
              <IconBrandIntentui />
              Get started
            </Link>
            <Link
              className={buttonStyles({
                size: "large",
                intent: "secondary"
              })}
              href="/components"
            >
              <IconCube />
              Components
            </Link>
          </div>
        </Container>
      </div>
    </div>
  )
}
