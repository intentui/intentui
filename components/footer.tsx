"use client"

import React from "react"

import { siteConfig } from "@/resources/config/site"
import { IconBrandIntentui } from "@intentui/icons"
import { Container, Link } from "ui"

const navigation = {
  starterKits: [
    { name: "Inertia.js", href: "https://github.com/intentuilabs/inertia.ts/" },
    { name: "Next.js", href: "https://next.intentui.com/" },
    { name: "Remix", href: "https://remix.intentui.com/" },
    { name: "Astro", href: "https://astro.intentui.com/" }
  ],
  resources: [
    { name: "Icons", href: "/icons" },
    { name: "Colors", href: "/colors" },
    { name: "Themes", href: "/themes" },
    { name: "Showcase", href: "/showcase" }
  ],
  labs: [
    { name: "Github", href: "https://github.com/intentuilabs" },
    { name: "X / Formerly Twitter", href: "https://x.com/intent/follow?screen_name=irsyadadl" },
    { name: "CLI", href: "https://github.com/intentuilabs/cli" },
    { name: "Templates", href: "https://irsyad.co/templates" }
  ],
  legal: [{ name: "MIT", href: "https://github.com/intentuilabs/justd/blob/main/LICENSE" }]
}

export function Footer() {
  return (
    <footer aria-labelledby="footer-heading" className="border-t bg-bg text-bg-fg">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto relative z-20 max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:pb-32 lg:pt-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <IconBrandIntentui className="size-7" />
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-fg">Resources</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-muted-fg hover:text-fg"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-fg">Starter Kits</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.starterKits.map((item) => (
                    <li key={item.name}>
                      <Link
                        target="_blank"
                        href={item.href}
                        className="text-sm leading-6 text-muted-fg hover:text-fg"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-fg">Labs</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.labs.map((item) => (
                    <li key={item.name}>
                      <Link
                        target="_blank"
                        href={item.href}
                        className="text-sm leading-6 text-muted-fg hover:text-fg"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-fg">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        target="_blank"
                        href={item.href}
                        className="text-sm leading-6 text-muted-fg hover:text-fg"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center relative z-10 h-[14rem] flex -mb-20 -mt-28 sm:-mt-32 items-center flex-col justify-center overflow-hidden">
        <div className="absolute w-full sm:w-1/2 lg:w-1/4 h-32 bg-gradient-to-b dark:from-bg dark:via-fg dark:blur-xl dark:to-bg" />
        <strong className="dark:[text-shadow:1px_1px_0_hsl(var(--fg)),_-1px_-1px_0_hsl(var(--fg)),_1px_-1px_0_hsl(var(--fg)),_-1px_1px_0_hsl(var(--fg)),_1px_0_0_hsl(var(--fg)),_-1px_0_0_hsl(var(--fg)),_0_1px_0_hsl(var(--fg)),_0_-1px_0_hsl(var(--fg))] text-fg dark:text-bg inline-flex text-[7rem] sm:text-[10rem] leading-none dark:bg-clip-text dark:bg-gradient-to-b from-bg to-muted relative z-10 font-bold">
          JUSTD
        </strong>
      </div>

      <Container className="text-sm relative z-20 text-center py-6 bg-bg text-muted-fg [&_strong]:text-fg [&_strong]:font-semibold [&_a]:text-fg [&_a]:font-semibold space-y-1.5 border-t">
        <p>
          <strong>{siteConfig.name} &trade; 2024</strong> - This project’s crafted with{" "}
          <span className="font-[ui-sans-serif,-apple-system,system-ui] text-pink-500">♥</span> by{" "}
          <Link href="https://twitter.com/irsyadadl">Irsyad</Link>. Peep the Source Code on{" "}
          <Link href={siteConfig.repo}>GitHub</Link>.
        </p>

        <p>
          Cooked up with{" "}
          <Link href="https://nextjs.org" target="_blank">
            Next.js
          </Link>
          ,
          <Link href="https://tailwindcss.com" target="_blank">
            Tailwind CSS
          </Link>
          , and{" "}
          <Link href="https://react-spectrum.adobe.com/react-aria/components.html" target="_blank">
            RAC
          </Link>
          .
        </p>
        <p>
          Hosted on{" "}
          <Link href="https://vercel.com" target="_blank">
            Vercel
          </Link>
          . The source code's got the{" "}
          <Link href="https://github.com/intentuilabs/justd/blob/main/LICENSE">MIT</Link> license.
        </p>
      </Container>
    </footer>
  )
}
