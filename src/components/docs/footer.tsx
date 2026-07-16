'use client'
import { starterKits } from '@/app/(home)/partials/starter-kit'
import { BrandIntentuiIcon } from '@/components/icons/brand-intentui-icon'
import { Link } from '@/components/ui/link'
import { Text } from '@/components/ui/text'
import { app } from '@/config/app'
import { footerNavigation } from '@/components/footer'

export function Footer() {
  return (
    <footer className="border-page border-t bg-bg text-fg">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div>
        <div className="border-page py-16 xl:border-l border-b xl:px-20">
          <div className="grid gap-6 grid-cols-2 xl:grid-cols-4">
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

        <div className="xl:border-l w-full flex justify-between border-page xl:px-20 py-6">
          <Link href="/" className="flex items-center font-semibold text-fg text-lg">
            <BrandIntentuiIcon className="size-5 shrink-0" />
            <span className="ml-2">
              Intent <span className="text-muted-fg">UI</span>
            </span>
          </Link>
          <Text>&copy; {`${new Date().getFullYear()} · ${app.name} ™`}</Text>
        </div>
      </div>
    </footer>
  )
}
