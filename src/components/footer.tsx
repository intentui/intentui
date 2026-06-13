"use client"
import { starterKits } from "@/app/(home)/partials/starter-kit"
import { BrandIntentuiIcon } from "@/components/icons/brand-intentui-icon"
import { LogoType } from "@/components/logo-type"
import { PageContainer } from "@/components/page-container"
import { Link } from "@/components/ui/link"
import { Text, TextLink } from "@/components/ui/text"
import { app } from "@/config/app"

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
    { name: "Sponsor", href: "/sponsor" },
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
  labs: [
    { name: "Github", href: app.links.github },
    {
      name: "X / Twitter",
      href: "https://x.com/intent/follow?screen_name=irsyad",
    },
    { name: "Discord", href: app.links.discord },
    { name: "Design", href: "https://design.intentui.com" },
    { name: "Templates", href: "https://design.intentui.com/templates" },
  ],
}

export function Footer({ currentYear }: { currentYear: number }) {
  return (
    <footer className="border-page border-t bg-bg text-fg dark:bg-muted/50">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <PageContainer className="relative z-20">
        <div className="border-page pt-16 pb-6 sm:border-x lg:px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[20rem_auto] lg:grid-cols-[18rem_auto] lg:gap-10 xl:grid-cols-[20rem_auto] xl:gap-24">
            <div>
              <Link href="/" className="flex items-center font-semibold text-fg text-lg">
                <BrandIntentuiIcon className="size-5" />
                <span className="ml-2">
                  Intent <span className="text-muted-fg">UI</span>
                </span>
              </Link>
              <div className="mt-3 space-y-3">
                <Text>Accessible React component library to copy, customize, and own your UI.</Text>
                <Text>
                  This project's crafted by{" "}
                  <TextLink href={app.author.url}>{app.author.name}</TextLink>. Peep the Source Code
                  on <TextLink href={app.repo.url}>GitHub</TextLink>.
                </Text>
                <Text>
                  Hosted on{" "}
                  <TextLink href="https://vercel.com?ref=intentui.com" target="_blank">
                    Vercel
                  </TextLink>
                  . The source code's got the{" "}
                  <Link href={`${app.repo.url}/blob/main/LICENSE`}>MIT</Link> license.
                </Text>
                <Text className="text-fg">{`2024 - ${currentYear} · ${app.name} ™`}</Text>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-y-10 lg:grid-cols-5 lg:gap-10 xl:gap-6 xl:gap-y-6">
              <div>
                <div className="font-medium text-base text-fg">Resources</div>
                <ul className="mt-3 space-y-3 text-sm/6">
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="font-normal text-fg/60 hover:text-fg">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="font-medium text-base text-fg">Templates</div>
                <ul className="mt-3 space-y-3 text-sm/6">
                  {navigation.templates.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="font-normal text-fg/60 hover:text-fg"
                        target="_blank"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="font-medium text-base text-fg">Labs</div>
                <ul className="mt-3 space-y-3 text-sm/6">
                  {navigation.labs.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="font-normal text-fg/60 hover:text-fg"
                        target="_blank"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="font-medium text-base text-fg">Starter Kits</div>
                <ul className="mt-3 space-y-3 text-sm/6">
                  {starterKits.map((kit) => (
                    <li key={kit.name}>
                      <Link
                        href={kit.url}
                        className="font-normal text-fg/60 hover:text-fg"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {kit.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="hidden xl:block xl:h-60">
            <LogoType className="absolute -bottom-16 left-1/2 h-18 -translate-x-1/2 sm:bottom-0 sm:h-40 lg:h-60" />
          </div>
        </div>
      </PageContainer>
    </footer>
  )
}
