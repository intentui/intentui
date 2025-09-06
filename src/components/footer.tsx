"use client"
import { IconBrandIntentui } from "@intentui/icons"
import { starterKits } from "@/app/(home)/partials/starter-kit"
import { PageContainer } from "@/components/page-container"
import { Link } from "@/components/ui/link"
import { siteConfig } from "@/config/site"

const navigation = {
  resources: [
    { name: "Colors", href: "/colors" },
    { name: "Themes", href: "/themes" },
    { name: "Blocks", href: "https://dub.sh/d8ldbi9" },
    { name: "Showcase", href: "/showcase" },
    { name: "Blog", href: "/blog" },
  ],
  labs: [
    { name: "Github", href: "https://github.com/intentuilabs" },
    {
      name: "X / Formerly Twitter",
      href: "https://x.com/intent/follow?screen_name=irsyadadl",
    },
    { name: "Discord", href: "https://discord.gg/DYmVJ66JUD" },
  ],
  extra: [
    { name: "Plus", href: "https://dub.sh/designiui" },
    { name: "Templates", href: "https://irsyad.co" },
    { name: "Icons", href: "/icons" },
  ],
}

const currentYear = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t pb-16 text-bg-fg sm:pb-0">
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
                  {starterKits.map((item) => (
                    <li key={item.name}>
                      <Link
                        target="_blank"
                        href={item.url}
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
                <h3 className="font-semibold text-fg text-sm">Ecosystem</h3>
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

      <PageContainer className="relative z-20 space-y-1.5 border-t bg-bg py-6 text-center text-muted-fg text-sm **:[a]:text-fg **:[strong]:font-semibold">
        <p>
          <strong>
            {currentYear} &middot; {siteConfig.name} &trade;
          </strong>{" "}
          <br />
          This project’s crafted by <Link href="https://x.com/irsyadadl">Irsyad</Link>. Peep the
          Source Code on <Link href={siteConfig.repo}>GitHub</Link>.
        </p>
        <p>
          Hosted on{" "}
          <Link href="https://vercel.com?ref=intentui.com" target="_blank">
            Vercel
          </Link>
          . The source code's got the{" "}
          <Link href="https://github.com/irsyadadl/intentui/blob/main/LICENSE">MIT</Link> license.
        </p>
      </PageContainer>
    </footer>
  )
}
