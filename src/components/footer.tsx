"use client"
import { PageContainer } from "@/components/page-container"
import { Link } from "@/components/ui/link"
import { siteConfig } from "@/config/site"
import { IconBrandIntentui } from "@intentui/icons"

const navigation = {
  starterKits: [
    { name: "Laravel", href: "https://github.com/intentuilabs/laravel" },
    { name: "Next.js", href: "https://github.com/intentuilabs/next" },
    { name: "Remix", href: "https://github.com/intentuilabs/remix" },
    { name: "Astro", href: "https://github.com/intentuilabs/astro" },
  ],
  resources: [
    { name: "Icons", href: "/icons" },
    { name: "Colors", href: "/colors" },
    { name: "Themes", href: "/themes" },
    { name: "Blocks", href: "https://dub.sh/d8ldbi9" },
    { name: "Showcase", href: "/showcase" },
    { name: "Blog", href: "/blog" },
  ],
  labs: [
    { name: "Github", href: "https://github.com/intentuilabs" },
    { name: "X / Formerly Twitter", href: "https://x.com/intent/follow?screen_name=irsyadadl" },
    { name: "CLI", href: "https://github.com/intentuilabs/cli" },
    { name: "Premium Blocks", href: "https://blocks.intentui.com" },
    { name: "Templates", href: "https://blocks.intentui.com/templates" },
  ],
  extra: [
    { name: "Discord", href: "https://discord.gg/DYmVJ66JUD" },
    { name: "MIT", href: "https://github.com/irsyadadl/intentui/blob/main/LICENSE" },
  ],
}

const currentYear = new Date().getFullYear()

export function Footer() {
  return (
    <footer aria-labelledby="footer-heading" className="border-t text-bg-fg">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <PageContainer className="relative z-20 py-16 sm:py-24 lg:pt-16 lg:pb-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <IconBrandIntentui className="size-7" />
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="font-semibold text-fg text-sm">Resources</h3>
                <ul className="mt-3 space-y-2">
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-muted-fg text-sm hover:text-fg">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="font-semibold text-fg text-sm">Starter Kits</h3>
                <ul className="mt-3 space-y-2">
                  {navigation.starterKits.map((item) => (
                    <li key={item.name}>
                      <Link
                        target="_blank"
                        href={item.href}
                        className="text-muted-fg text-sm hover:text-fg"
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
                <h3 className="font-semibold text-fg text-sm">Labs</h3>
                <ul className="mt-3 space-y-2">
                  {navigation.labs.map((item) => (
                    <li key={item.name}>
                      <Link
                        target="_blank"
                        href={item.href}
                        className="text-muted-fg text-sm hover:text-fg"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="font-semibold text-fg text-sm">Legal</h3>
                <ul className="mt-3 space-y-2">
                  {navigation.extra.map((item) => (
                    <li key={item.name}>
                      <Link
                        target="_blank"
                        href={item.href}
                        className="text-muted-fg text-sm hover:text-fg"
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
      </PageContainer>

      <PageContainer className="relative z-20 space-y-1.5 border-t bg-bg py-6 text-center text-muted-fg text-sm **:[a]:font-semibold **:[a]:text-fg **:[strong]:font-semibold **:[strong]:text-fg">
        <p>
          <strong>
            {siteConfig.name} &trade; {currentYear}
          </strong>{" "}
          - This project’s crafted with{" "}
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
          <Link href="https://github.com/irsyadadl/intentui/blob/main/LICENSE">MIT</Link> license.
        </p>
      </PageContainer>
    </footer>
  )
}
