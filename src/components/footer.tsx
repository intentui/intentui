"use client"
import { starterKits } from "@/app/(home)/partials/starter-kit"
import { BrandIntentuiIcon } from "@/components/icons/brand-intentui-icon"
import { PageContainer } from "@/components/page-container"
import { Link } from "@/components/ui/link"
import { siteConfig } from "@/config/site"

const navigation = {
  resources: [
    { name: "Home", href: "/" },
    { name: "Colors", href: "/colors" },
    { name: "Themes", href: "https://design.intentui.com/themes" },
    { name: "All components", href: "/components" },
    { name: "Docs", href: "/docs" },
    { name: "Blocks", href: "/blocks" },
    { name: "Showcase", href: "/showcase" },
    { name: "Blog", href: "/blog" },
  ],
  labs: [
    { name: "Github", href: "https://github.com/intentui" },
    {
      name: "X",
      href: "https://x.com/intent/follow?screen_name=irsyad",
    },
    { name: "Discord", href: "https://discord.gg/DYmVJ66JUD" },
    { name: "Design", href: "https://design.intentui.com" },
    { name: "Templates", href: "https://design.intentui.com/templates" },
    { name: "Sponsor", href: "https://github.com/sponsors/irsyadadl" },
  ],
  templates: [
    {
      name: "Screencast",
      href: "https://design.intentui.com/templates/course-platform-template?utm_source=intentui.com&utm_medium=referral&utm_campaign=footer&utm_content=screencast",
    },
    {
      name: "Deploy",
      href: "https://design.intentui.com/templates/server-management-template?utm_source=intentui.com&utm_medium=referral&utm_campaign=footer&utm_content=deploy",
    },
    {
      name: "Axis",
      href: "https://design.intentui.com/templates/retail-dashboard-template?utm_source=intentui.com&utm_medium=referral&utm_campaign=footer&utm_content=axis",
    },
    {
      name: "Cartel",
      href: "https://design.intentui.com/templates/commerce-dashboard-template?utm_source=intentui.com&utm_medium=referral&utm_campaign=footer&utm_content=cartel",
    },
    {
      name: "Provision",
      href: "https://design.intentui.com/templates/provision-dashboard-template?utm_source=intentui.com&utm_medium=referral&utm_campaign=footer&utm_content=provision",
    },
    {
      name: "Personal",
      href: "https://design.intentui.com/templates/modern-personal-website-template?utm_source=intentui.com&utm_medium=referral&utm_campaign=footer&utm_content=personal",
    },
    {
      name: "Clinic",
      href: "https://design.intentui.com/templates/clinic-dashboard-template?utm_source=intentui.com&utm_medium=referral&utm_campaign=footer&utm_content=clinic",
    },
    {
      name: "Spotlight",
      href: "https://design.intentui.com/templates/simple-personal-website-template?utm_source=intentui.com&utm_medium=referral&utm_campaign=footer&utm_content=spotlight",
    },
    {
      name: "Scale",
      href: "https://design.intentui.com/templates/saas-landing-page-template?utm_source=intentui.com&utm_medium=referral&utm_campaign=footer&utm_content=scale",
    },
    {
      name: "Commerce",
      href: "https://design.intentui.com/templates/commerce-design-template?utm_source=intentui.com&utm_medium=referral&utm_campaign=footer&utm_content=commerce",
    },
    {
      name: "Explore more",
      href: "https://design.intentui.com/templates?utm_source=intentui.com&utm_medium=referral&utm_campaign=footer",
    },
  ],
}

const currentYear = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-muted-fg/15 border-t bg-bg pb-16 text-fg sm:pb-0">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <PageContainer className="relative z-20 py-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[20rem_auto] lg:grid-cols-[18rem_auto] lg:gap-10 xl:grid-cols-[20rem_auto] xl:gap-24">
          <div>
            <Link href="/" className="flex items-center font-semibold text-fg text-lg">
              <BrandIntentuiIcon className="size-5" />
              <span className="ml-2">
                Intent <span className="text-muted-fg">UI</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-muted-fg text-sm">
              Accessible React component library to copy, customize, and own your UI.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-y-10 lg:grid-cols-4 lg:gap-10 xl:gap-6 xl:gap-y-6">
            <div>
              <h3 className="mb-2 font-medium text-muted-fg text-sm/6">Resources</h3>
              <ul className="space-y-2 text-sm/6">
                {navigation.resources.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="hover:underline">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-2 font-medium text-muted-fg text-sm/6">Labs</h3>
              <ul className="space-y-2 text-sm/6">
                {navigation.labs.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="hover:underline" target="_blank">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-2 font-medium text-muted-fg text-sm/6">Starter Kits</h3>
              <ul className="space-y-2 text-sm/6">
                {starterKits.map((kit) => (
                  <li key={kit.name}>
                    <Link
                      href={kit.url}
                      className="hover:underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {kit.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-2 font-medium text-muted-fg text-sm/6">Templates</h3>
              <ul className="space-y-2 text-sm/6">
                {navigation.templates.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="hover:underline" target="_blank">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </PageContainer>

      <PageContainer className="relative z-20 space-y-1.5 border-muted-fg/15 border-t py-6 text-center text-muted-fg text-sm **:[a]:font-medium **:[a]:text-fg **:[strong]:font-medium">
        <p>
          <strong className="text-fg">
            {currentYear} &middot; {siteConfig.name} &trade;
          </strong>{" "}
          <br />
          <br />
          This project’s crafted by <Link href="https://x.com/irsyad">Irsyad</Link>. Peep the Source
          Code on <Link href={siteConfig.repo}>GitHub</Link>.
        </p>
        <p>
          Hosted on{" "}
          <Link href="https://vercel.com?ref=intentui.com" target="_blank">
            Vercel
          </Link>
          . The source code's got the{" "}
          <Link href="https://github.com/intentui/intentui/blob/main/LICENSE">MIT</Link> license.
        </p>
      </PageContainer>
    </footer>
  )
}
