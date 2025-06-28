import { IconArrowUpRight, IconBrandDiscord, IconBrandGithub, IconBrandX } from "@intentui/icons"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import type { LinkProps, PopoverProps } from "react-aria-components"
import { DialogTrigger, Link, Popover } from "react-aria-components"
import { twJoin, twMerge } from "tailwind-merge"
import { menus } from "@/app/(home)/partials/navbar"
import { components, dm, gs, prologue, sortedGsChildren } from "@/components/aside"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { siteConfig } from "@/config/site"
import { composeTailwindRenderProps } from "@/lib/primitive"

interface ResponsiveNavigationProps {
  className?: string
  popover?: Pick<PopoverProps, "className">
}
export function ResponsiveNavigation({ className, popover }: ResponsiveNavigationProps) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setOpen(false)
  }, [pathname])
  return (
    <nav
      className={twMerge(
        "sticky top-0 z-40 flex items-center bg-bg px-2 py-2 lg:hidden",
        className,
      )}
    >
      <div className="flex items-center gap-x-2">
        <DialogTrigger>
          <Button
            size="sq-sm"
            onPress={() => setOpen((p) => !p)}
            intent="plain"
            className="pressed:bg-transparent outline-hidden"
          >
            <div className="relative flex h-8 w-(--width) items-center justify-center [--width:--spacing(4.5)]">
              <div className="relative size-(--width)">
                <span
                  className={twJoin(
                    "absolute left-0 block h-0.5 w-(--width) bg-fg transition-all duration-100",
                    open ? "-rotate-45 top-[0.4rem]" : "top-1",
                  )}
                />
                <span
                  className={twJoin(
                    "absolute left-0 block h-0.5 w-(--width) bg-fg transition-all duration-100",
                    open ? "top-[0.4rem] rotate-45" : "top-[--spacing(2.6)]",
                  )}
                />
              </div>
              <span className="sr-only">Toggle Menu</span>
            </div>
          </Button>
          <Popover
            placement="bottom"
            offset={10}
            onOpenChange={setOpen}
            isOpen={open}
            className={composeTailwindRenderProps(popover?.className, [
              "placement-bottom:entering:slide-in-from-top-1 w-full overflow-y-auto bg-linear-to-b from-bg to-bg/90 outline-hidden backdrop-blur-xl entering:ease-out [--gap:--spacing(6)]",
              "entering:fade-in entering:animate-in",
              "exiting:fade-out exiting:animate-out",
              "placement-bottom:entering:slide-in-from-top-1",
              "placement-bottom:exiting:slide-out-to-top-1",
              "relative z-50 flex w-full flex-col gap-y-8 px-2 py-(--gap)",
            ])}
            containerPadding={0}
          >
            <div>
              <NavHeading>Menu</NavHeading>
              <div>
                <NavLink href="/">Home</NavLink>
                {menus.map((menu) => (
                  <NavLink
                    key={menu.href}
                    href={menu.href}
                    target={menu.external ? "_blank" : undefined}
                  >
                    {menu.label}
                    {menu.external && <IconArrowUpRight />}
                  </NavLink>
                ))}
                <NavLink href="/blog">Blog</NavLink>
              </div>
            </div>
            <div>
              <NavHeading>{prologue?.section}</NavHeading>
              {prologue?.children?.map((item) => (
                <NavLink key={item.slug} href={item.slug}>
                  {item.title}
                </NavLink>
              ))}
            </div>
            <div>
              <NavHeading>{gs?.section}</NavHeading>
              {sortedGsChildren.map((item) => (
                <NavLink key={item.slug} href={item.slug}>
                  {item.title}
                </NavLink>
              ))}
            </div>
            <div>
              <NavHeading>{dm?.section}</NavHeading>
              {dm?.children?.map((item) => (
                <NavLink key={item.slug} href={item.slug}>
                  {item.title}
                </NavLink>
              ))}
            </div>
            <div className="flex flex-col gap-y-8">
              {/*<div className="text-muted-fg text-sm">{components?.section}</div>*/}
              {components?.children?.map((item) => (
                <div key={item.subsection}>
                  <NavHeading>{item?.subsection}</NavHeading>
                  {item?.children?.map((item) => (
                    <NavLink key={item.slug} href={item.slug}>
                      {item.title}
                    </NavLink>
                  ))}
                </div>
              ))}
            </div>
          </Popover>
        </DialogTrigger>
        <Separator orientation="vertical" className="mr-1 h-4" />
        <Link href="/" className="font-semibold text-base text-fg">
          Intent <span className="text-muted-fg">UI</span>
        </Link>
      </div>
      <div className="flex-1" aria-hidden />
      <div className="flex items-center gap-x-0.5">
        <Link
          className="p-2 text-muted-fg outline-hidden hover:text-fg focus-visible:ring-2 focus-visible:ring-blue-500"
          href={siteConfig.links.twitter}
          target="_blank"
        >
          <IconBrandX className="size-5" />
        </Link>
        <Link
          className="p-2 text-muted-fg outline-hidden hover:text-fg focus-visible:ring-2 focus-visible:ring-blue-500"
          href={siteConfig.discord}
          target="_blank"
        >
          <IconBrandDiscord className="size-5" />
        </Link>
        <Link
          className="inline-flex gap-x-2 p-2 font-medium font-mono text-muted-fg text-sm outline-hidden hover:text-fg focus-visible:ring-2 focus-visible:ring-blue-500"
          href={siteConfig.repo}
          target="_blank"
        >
          <IconBrandGithub className="size-5" />
          {siteConfig.repoStars}K
        </Link>
        <Separator orientation="vertical" className="mr-1.5 ml-2.5 h-5" />
        <ThemeSwitcher className="**:data-[slot=icon]:size-5" intent="plain" />
      </div>
    </nav>
  )
}

interface NavLinkProps extends LinkProps {
  isActive?: boolean
  href: string
}

function NavLink({ href, ...props }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href
  const ref = useRef<HTMLAnchorElement>(null)
  useEffect(() => {
    if (isActive && ref.current) {
      ref.current.scrollIntoView({ behavior: "instant", block: "center" })
    }
  }, [isActive])

  return (
    <Link
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
  return <div className="mb-2 px-2 font-medium text-muted-fg text-sm/6">{children}</div>
}
