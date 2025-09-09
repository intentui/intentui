"use client"
import { IconBrandIntentui } from "@intentui/icons"
import { starterKits } from "@/app/(home)/partials/starter-kit"
import { PageContainer } from "@/components/page-container"
import { Link } from "@/components/ui/link"
import { siteConfig } from "@/config/site"

const navigation = {
  resources: [
    { name: "Home", href: "/" },
    { name: "Colors", href: "/colors" },
    { name: "Themes", href: "/themes" },
    { name: "All components", href: "/components" },
    { name: "Docs", href: "/docs" },
    { name: "Blocks", href: "/blocks" },
  ],
  labs: [
    { name: "Github", href: "https://github.com/intentuilabs" },
    {
      name: "X / Formerly Twitter",
      href: "https://x.com/intent/follow?screen_name=irsyadadl",
    },
    { name: "Discord", href: "https://discord.gg/DYmVJ66JUD" },
    { name: "Design", href: "https://design.intentui.com" },
    { name: "Templates", href: "https://design.intentui.com/products" },
    { name: "Icons", href: "/icons" },
  ],
  extras: [
    { name: "Showcase", href: "/showcase" },
    { name: "Blog", href: "/blog" },
    { name: "Sponsor", href: "https://github.com/sponsors/irsyadadl" },
  ],
}

const currentYear = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t pb-16 text-bg-fg sm:pb-0">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <PageContainer className="relative z-20 py-12">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="flex items-center gap-x-2 self-start text-base/6">
            <IconBrandIntentui className="size-7" />
            <span className="font-medium">
              Intent <i className="text-muted-fg not-italic">UI</i>
            </span>
          </div>
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
            <div className="gap-8 md:grid md:grid-cols-2">
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
              <div>
                <h3 className="font-semibold text-fg text-sm">Extra</h3>
                <ul className="mt-3 space-y-2">
                  {navigation.extras.map((item) => (
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

      <PageContainer className="relative z-20 space-y-1.5 border-t bg-bg py-6 text-center text-muted-fg text-sm **:[a]:font-medium **:[a]:text-fg **:[strong]:font-medium">
        <p>
          <strong className="text-fg">
            {currentYear} &middot; {siteConfig.name} &trade;
          </strong>{" "}
          <br />
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
