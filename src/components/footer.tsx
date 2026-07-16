'use client'

import { starterKits } from '@/app/(home)/partials/starter-kit'
import { BrandIntentuiIcon } from '@/components/icons/brand-intentui-icon'
import { PageContainer } from '@/components/page-container'
import { Link } from '@/components/ui/link'
import { Text, TextLink } from '@/components/ui/text'
import { app } from '@/config/app'

export const footerNavigation = {
  resources: [
    { name: 'Home', href: '/' },
    { name: 'Colors', href: '/colors' },
    { name: 'Themes', href: 'https://design.intentui.com/themes' },
    { name: 'All components', href: '/components' },
    { name: 'Docs', href: '/docs' },
    { name: 'Blocks', href: '/blocks' },
    { name: 'Showcase', href: '/showcase' },
    { name: 'Blog', href: '/blog' },
    { name: 'Sponsor', href: '/sponsor' },
  ],

  templates: [
    {
      name: 'Screencast',
      href: 'https://design.intentui.com/templates/screencast',
    },
    {
      name: 'Deploy',
      href: 'https://design.intentui.com/templates/deploy',
    },
    {
      name: 'Axis',
      href: 'https://design.intentui.com/templates/axis',
    },
    {
      name: 'Cartel',
      href: 'https://design.intentui.com/templates/commerce',
    },
    {
      name: 'Provision',
      href: 'https://design.intentui.com/templates/provision',
    },
    {
      name: 'Personal',
      href: 'https://design.intentui.com/templates/personal',
    },
    {
      name: 'Clinic',
      href: 'https://design.intentui.com/templates/clinic',
    },
    {
      name: 'Spotlight',
      href: 'https://design.intentui.com/templates/spotlight',
    },
    {
      name: 'Scale',
      href: 'https://design.intentui.com/templates/saas-landing-page-template?utm_source=intentui.com&utm_medium=referral&utm_campaign=footer&utm_content=scale',
    },
    {
      name: 'Commerce',
      href: 'https://design.intentui.com/templates/commerce-design-template?utm_source=intentui.com&utm_medium=referral&utm_campaign=footer&utm_content=commerce',
    },
    {
      name: 'Explore more',
      href: 'https://design.intentui.com/templates?utm_source=intentui.com&utm_medium=referral&utm_campaign=footer',
    },
  ],
  labs: [
    { name: 'Github', href: app.links.github },
    {
      name: 'X / Twitter',
      href: 'https://x.com/intent/follow?screen_name=irsyad',
    },
    { name: 'Discord', href: app.links.discord },
    { name: 'Design', href: 'https://design.intentui.com' },
    { name: 'Templates', href: 'https://design.intentui.com/templates' },
  ],
}

export function Footer() {
  return (
    <footer className="border-page border-t bg-bg text-fg dark:bg-muted/50">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <PageContainer className="relative z-20">
        <div className="border-page pt-16 pb-6 sm:border-x lg:px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[20rem_auto] lg:gap-10 xl:grid-cols-[26rem_auto] xl:gap-24">
            <div>
              <Link href="/" className="flex items-center font-semibold text-fg text-lg">
                <BrandIntentuiIcon className="size-5" />
                <span className="ml-2">
                  Intent <span className="text-muted-fg">UI</span>
                </span>
              </Link>
              <div className="mt-3 space-y-3">
                <Text>
                  Accessible React component library to copy, customize, and own your UI. This
                  project's crafted by <TextLink href={app.author.url}>{app.author.name}</TextLink>.
                  Peep the Source Code on <TextLink href={app.repo.url}>GitHub</TextLink>. Hosted on{' '}
                  <TextLink href="https://vercel.com?ref=intentui.com" target="_blank">
                    Vercel
                  </TextLink>
                  . The source code's got the{' '}
                  <Link href={`${app.repo.url}/blob/main/LICENSE`}>MIT</Link> license.
                </Text>
                <Text>{`${new Date().getUTCFullYear()} · ${app.name} ™`}</Text>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-y-10 lg:grid-cols-4 lg:gap-10 xl:gap-6 xl:gap-y-6">
              <div>
                <div className="font-medium text-base text-fg">Resources</div>
                <ul className="mt-3 space-y-3 text-sm/6">
                  {footerNavigation.resources.map((item) => (
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
                  {footerNavigation.templates.map((item) => (
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
                  {footerNavigation.labs.map((item) => (
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
        </div>
      </PageContainer>
    </footer>
  )
}
