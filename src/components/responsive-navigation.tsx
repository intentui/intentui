import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import {
  Autocomplete,
  Header,
  Link,
  Menu,
  MenuItem,
  type MenuItemProps,
  MenuSection,
  MenuTrigger,
  Popover,
  type PopoverProps,
  useFilter,
} from "react-aria-components"
import { twJoin, twMerge } from "tailwind-merge"
import { menus } from "@/app/(home)/partials/navbar"
import { components, dm, gs, prologue, sortedGsChildren } from "@/components/aside"
import { BrandDiscordIcon } from "@/components/icons/brand-discord-icon"
import { BrandGithubIcon } from "@/components/icons/brand-github-icon"
import { BrandXIcon } from "@/components/icons/brand-x-icon"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { Button, buttonStyles } from "@/components/ui/button"
import { SearchField, SearchInput } from "@/components/ui/search-field"
import { Separator } from "@/components/ui/separator"
import { app } from "@/config/app"
import { cx } from "@/lib/primitive"

interface ResponsiveNavigationProps {
  className?: string
  popover?: Pick<PopoverProps, "className">
}
export function ResponsiveNavigation({ className, popover }: ResponsiveNavigationProps) {
  const { contains } = useFilter({ sensitivity: "base" })

  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setOpen(false)
  }, [pathname])
  return (
    <nav
      className={twMerge(
        "sticky top-0 z-40 flex items-center bg-bg px-2 py-2 lg:hidden",
        pathname === "/" && "bg-transparent",
        className,
      )}
    >
      <div className="flex items-center gap-x-2">
        <MenuTrigger>
          <Button
            size="sq-sm"
            onPress={() => setOpen((p) => !p)}
            intent="plain"
            className="pressed:bg-transparent outline-hidden"
          >
            <span className="relative flex h-8 w-(--width) items-center justify-center [--width:--spacing(4.5)]">
              <span className="relative size-(--width)">
                <span
                  className={twJoin(
                    "absolute left-0 block h-0.5 w-(--width) bg-fg transition-all duration-100",
                    open ? "top-[0.4rem] -rotate-45" : "top-1",
                  )}
                />
                <span
                  className={twJoin(
                    "absolute left-0 block h-0.5 w-(--width) bg-fg transition-all duration-100",
                    open ? "top-[0.4rem] rotate-45" : "top-[--spacing(2.6)]",
                  )}
                />
              </span>
              <span className="sr-only">Toggle Menu</span>
            </span>
          </Button>
          <Popover
            placement="bottom"
            offset={10}
            onOpenChange={setOpen}
            isOpen={open}
            className={cx(
              "placement-bottom:entering:slide-in-from-top-1 -mt-1 w-full overflow-y-auto bg-linear-to-b from-bg to-bg/90 px-2 outline-hidden backdrop-blur-xl entering:ease-out [--gap:--spacing(6)]",
              "entering:fade-in exiting:fade-out entering:animate-in exiting:animate-out",
              "slide-out-to-top-1 slide-in-from-top-1",
              pathname === "/" && "from-blue-50 dark:from-[#151518]",
              popover?.className,
            )}
            containerPadding={0}
          >
            <Autocomplete filter={contains}>
              <div
                className={twJoin(
                  "sticky top-0 h-16 bg-linear-to-b via-bg pt-2",
                  pathname === "/" ? "from-blue-50 dark:from-[#151518]" : "from-bg",
                )}
              >
                <SearchField autoFocus aria-label="Search...">
                  <SearchInput
                    className="bg-bg focus:border-input focus:ring-0 focus:enabled:hover:border-input"
                    placeholder="Search&hellip;"
                  />
                </SearchField>
              </div>
              <Menu className="-mt-4 outline-hidden">
                <MenuSection>
                  <NavHeading>Pages</NavHeading>
                  <NavLink href="/">Home</NavLink>
                  {menus.map((menu) => (
                    <NavLink key={menu.href} href={menu.href}>
                      {menu.label}
                    </NavLink>
                  ))}
                  <NavLink href="/blog">Blog</NavLink>
                  <NavLink href="/sponsor">Sponsor</NavLink>
                </MenuSection>
                <MenuSection>
                  <NavHeading>{prologue?.section}</NavHeading>
                  {prologue?.children?.map((item) => (
                    <NavLink key={item.slug} href={item.slug}>
                      {item.title}
                    </NavLink>
                  ))}
                </MenuSection>
                <MenuSection>
                  <NavHeading>{gs?.section}</NavHeading>
                  {sortedGsChildren.map((item) => (
                    <NavLink
                      textValue={`${gs?.section} ${item.title} ${item.slug.replaceAll("-", "")} ${item.slug}`}
                      key={item.slug}
                      href={item.slug}
                    >
                      {item.title}
                    </NavLink>
                  ))}
                </MenuSection>
                <MenuSection>
                  <NavHeading>{dm?.section}</NavHeading>
                  {dm?.children?.map((item) => (
                    <NavLink
                      textValue={`${dm?.section} ${item.title} ${item.slug.replaceAll("-", "")} ${item.slug}`}
                      key={item.slug}
                      href={item.slug}
                    >
                      {item.title}
                    </NavLink>
                  ))}
                </MenuSection>
                {components?.children?.map((item) => (
                  <MenuSection
                    aria-label={item?.subsection}
                    className="flex flex-col gap-y-1"
                    key={item.subsection}
                  >
                    {item?.children?.map((child) => (
                      <NavLink
                        textValue={`${item?.subsection} ${child.title} ${child.slug.replaceAll("-", "")} ${child.slug}`}
                        key={child.slug}
                        href={child.slug}
                      >
                        {child.title}
                      </NavLink>
                    ))}
                  </MenuSection>
                ))}
              </Menu>
            </Autocomplete>
          </Popover>
        </MenuTrigger>
        <Separator orientation="vertical" className="mr-1 h-4" />
        <Link href="/" className="font-semibold text-base text-fg">
          Intent <span className="text-muted-fg">UI</span>
        </Link>
      </div>
      <div className="flex-1" aria-hidden />
      <div className="flex items-center gap-x-0.5">
        <Link
          className={buttonStyles({ intent: "plain", size: "sq-sm" })}
          href={app.links.twitter}
          target="_blank"
        >
          <BrandXIcon className="size-5" />
        </Link>
        <Link
          className={buttonStyles({ intent: "plain", size: "sq-sm" })}
          href={app.links.discord}
          target="_blank"
        >
          <BrandDiscordIcon className="size-5" />
        </Link>
        <Link
          className={buttonStyles({ intent: "plain", size: "sq-sm" })}
          href={app.repo.url}
          target="_blank"
        >
          <BrandGithubIcon className="size-5" />
        </Link>
        <Separator orientation="vertical" className="mr-1.5 ml-2.5 h-5" />
        <ThemeSwitcher className="**:data-[slot=icon]:size-5" intent="plain" />
      </div>
    </nav>
  )
}

interface NavLinkProps extends MenuItemProps {
  isActive?: boolean
  href: string
}

function NavLink({ href, ...props }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (isActive && ref.current) {
      ref.current.scrollIntoView({
        behavior: "instant",
        block: "center",
      })
    }
  }, [isActive])

  return (
    <MenuItem
      {...props}
      href={href}
      ref={ref}
      className={twMerge(
        "mb-0.5 flex items-center justify-between rounded-lg px-2 py-2.5 font-medium text-xl/6",
        "focus:outline-hidden",
        "hover:bg-fg/10 hover:text-secondary-fg",
        "focus:bg-fg/10 focus:text-secondary-fg",
        "pressed:bg-fg/10 pressed:text-secondary-fg",
        isActive && [
          "font-medium",
          "text-blue-600 hover:bg-blue-100 hover:text-blue-600",
          "dark:text-blue-400 dark:hover:bg-blue-400/10 dark:hover:text-blue-400",
        ],
      )}
    />
  )
}

function NavHeading({ children }: { children: React.ReactNode }) {
  return <Header className="mt-6 mb-2 px-2 font-medium text-muted-fg text-sm/6">{children}</Header>
}
