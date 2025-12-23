"use client"

import { Bars2Icon } from "@heroicons/react/20/solid"
import { LayoutGroup, motion } from "motion/react"
import { createContext, use, useCallback, useId, useMemo, useState } from "react"
import type { LinkProps } from "react-aria-components"
import { Link } from "react-aria-components"
import { twJoin, twMerge } from "tailwind-merge"
import { useIsMobile } from "@/hooks/use-mobile"
import { cx } from "@/lib/primitive"
import { Button, type ButtonProps } from "./button"
import { Separator } from "./separator"
import { Sheet, SheetBody, SheetContent } from "./sheet"

interface NavbarContextProps {
  open: boolean
  setOpen: (open: boolean) => void
  isMobile: boolean
  toggleNavbar: () => void
}

const NavbarContext = createContext<NavbarContextProps | null>(null)

const useNavbar = () => {
  const context = use(NavbarContext)
  if (!context) {
    throw new Error("useNavbar must be used within a NavbarProvider.")
  }

  return context
}

interface NavbarProviderProps extends React.ComponentProps<"div"> {
  defaultOpen?: boolean
  isOpen?: boolean
  onOpenChange?: (open: boolean) => void
}

const NavbarProvider = ({
  isOpen: openProp,
  onOpenChange: setOpenProp,
  defaultOpen = false,
  className,
  ...props
}: NavbarProviderProps) => {
  const [openInternal, setOpenInternal] = useState(defaultOpen)
  const open = openProp ?? openInternal

  const setOpen = useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      if (setOpenProp) {
        return setOpenProp?.(typeof value === "function" ? value(open) : value)
      }

      setOpenInternal(value)
    },
    [setOpenProp, open],
  )

  const toggleNavbar = useCallback(() => {
    setOpen((open) => !open)
  }, [setOpen])

  const isMobile = useIsMobile()

  const contextValue = useMemo<NavbarContextProps>(
    () => ({
      open,
      setOpen,
      isMobile: isMobile ?? false,
      toggleNavbar,
    }),
    [open, setOpen, isMobile, toggleNavbar],
  )

  if (isMobile === undefined) {
    return null
  }

  return (
    <NavbarContext value={contextValue}>
      <div
        className={twMerge(
          "peer/navbar group/navbar relative isolate z-10 flex w-full flex-col",
          "has-data-navbar-inset:min-h-svh has-data-navbar-inset:bg-navbar dark:has-data-navbar-inset:bg-bg",
          className,
        )}
        {...props}
      />
    </NavbarContext>
  )
}

type Intent = "default" | "float" | "inset"
type Placement = "top" | "bottom"
type Side = "left" | "right"

interface StickyWithPlacement extends React.ComponentProps<"div"> {
  isSticky: true
  placement?: Placement
  side?: Side
  intent?: Intent
}

interface NonStickyWithoutPlacement extends React.ComponentProps<"div"> {
  isSticky?: false
  placement?: never
  side?: Side
  intent?: Intent
}

type NavbarProps = StickyWithPlacement | NonStickyWithoutPlacement

const Navbar = ({
  children,
  isSticky,
  placement = "top",
  intent = "default",
  side = "left",
  className,
  ref,
  ...props
}: NavbarProps) => {
  const { isMobile, open, setOpen } = useNavbar()
  if (isMobile) {
    return (
      <>
        <span
          className="sr-only"
          aria-hidden
          data-navbar={intent}
          data-navbar-sticky={isSticky}
          data-placement={placement ?? undefined}
        />
        <Sheet isOpen={open} onOpenChange={setOpen} {...props}>
          <SheetContent
            side={side}
            aria-label="Mobile Navbar"
            className="entering:blur-in exiting:blur-out [&>button]:hidden"
          >
            <SheetBody className="p-[calc(var(--gutter)---spacing(2))] sm:p-[calc(var(--gutter)---spacing(4))]">
              {children}
            </SheetBody>
          </SheetContent>
        </Sheet>
      </>
    )
  }

  return (
    <div
      data-navbar={intent}
      ref={ref}
      data-placement={placement ?? undefined}
      data-navbar-sticky={isSticky}
      className={twMerge([
        "group/navbar-intent relative isolate",
        isSticky && "sticky top-0 z-40",
        placement === "top" && intent === "float" && "md:pt-8",
        placement === "bottom" && intent === "float" && "bottom-0 md:pb-8",
        intent === "float" && "mx-auto w-full max-w-7xl px-4 xl:max-w-(--breakpoint-xl)",
      ])}
      {...props}
    >
      <div
        className={twMerge(
          "relative isolate hidden py-(--navbar-gutter) [--navbar-gutter:--spacing(2.5)] md:block",
          intent === "float" &&
            "rounded-xl bg-bg py-0 *:data-[navbar=content]:max-w-7xl *:data-[navbar=content]:rounded-xl *:data-[navbar=content]:border *:data-[navbar=content]:bg-navbar *:data-[navbar=content]:px-4 *:data-[navbar=content]:py-(--navbar-gutter) *:data-[navbar=content]:shadow-xs",
          ["default", "inset"].includes(intent) && "px-4",
          intent === "default" && "border-b bg-navbar",
          className,
        )}
      >
        <div
          data-navbar="content"
          className="mx-auto w-full max-w-(--breakpoint-2xl) items-center md:flex"
        >
          {children}
        </div>
      </div>
    </div>
  )
}

const NavbarSection = ({ className, ...props }: React.ComponentProps<"div">) => {
  const id = useId()
  return (
    <LayoutGroup id={id}>
      <div
        data-slot="navbar-section"
        className={twMerge(
          "col-span-full grid grid-cols-[auto_1fr] flex-col gap-3 gap-y-0.5 md:flex md:flex-none md:grid-cols-none md:flex-row md:items-center md:gap-2.5",
          className,
        )}
        {...props}
      >
        {props.children}
      </div>
    </LayoutGroup>
  )
}

interface NavbarItemProps extends LinkProps {
  isCurrent?: boolean
}

const NavbarItem = ({ className, isCurrent, ...props }: NavbarItemProps) => {
  return (
    <Link
      data-slot="navbar-item"
      aria-current={isCurrent ? "page" : undefined}
      className={cx(
        [
          "href" in props ? "cursor-pointer" : "cursor-default",
          "group/sidebar-item pressed:bg-secondary pressed:text-secondary-fg hover:bg-secondary hover:text-secondary-fg",
          "aria-[current=page]:text-fg aria-[current=page]*:data-[slot=icon]:text-fg",
          "col-span-full grid grid-cols-[auto_1fr_1.5rem_0.5rem_auto] supports-[grid-template-columns:subgrid]:grid-cols-subgrid md:supports-[grid-template-columns:subgrid]:grid-cols-none",
          "relative min-w-0 items-center gap-x-3 rounded-lg p-2 text-left font-medium text-base/6 md:gap-x-(--navbar-gutter) md:px-(--navbar-gutter) md:py-[calc(var(--navbar-gutter)---spacing(0.5))] md:text-sm/5",
          "*:data-[slot=icon]:size-5 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:text-muted-fg md:*:data-[slot=icon]:size-4",
          "*:data-[slot=loader]:size-5 *:data-[slot=loader]:shrink-0 md:*:data-[slot=loader]:size-4",
          "*:not-nth-2:last:data-[slot=icon]:row-start-1 *:not-nth-2:last:data-[slot=icon]:ml-auto *:not-nth-2:last:data-[slot=icon]:size-5 md:*:not-nth-2:last:data-[slot=icon]:size-4",
          "*:data-[slot=avatar]:-m-0.5 *:data-[slot=avatar]:size-6 md:*:data-[slot=avatar]:size-5",
          "*:data-[slot=icon]:text-muted-fg pressed:*:data-[slot=icon]:text-fg hover:*:data-[slot=icon]:text-fg",
          "outline-hidden focus-visible:inset-ring focus-visible:inset-ring-ring focus-visible:ring-2 focus-visible:ring-ring/20",
          "text-left disabled:cursor-default disabled:opacity-50",
        ],
        className,
      )}
      {...props}
    >
      {(values) => (
        <>
          {typeof props.children === "function" ? props.children(values) : props.children}

          {(isCurrent || values.isCurrent) && (
            <motion.span
              data-slot="current-indicator"
              layoutId="current-indicator"
              transition={{ type: "spring", stiffness: 500, damping: 40 }}
              className={twJoin(
                "absolute rounded-full bg-fg [--gutter:--spacing(0.5)]",
                "inset-y-[calc(var(--navbar-gutter)---spacing(0.5))] -left-4 w-(--gutter) md:inset-y-auto md:w-auto",
                "md:inset-x-2 md:-bottom-(--navbar-gutter) md:h-(--gutter)",
              )}
            />
          )}
        </>
      )}
    </Link>
  )
}

const NavbarSpacer = ({ className, ref, ...props }: React.ComponentProps<"div">) => {
  return <div ref={ref} className={twMerge("-ml-4 flex-1", className)} {...props} />
}

const NavbarStart = ({ className, ref, ...props }: React.ComponentProps<"div">) => {
  return <div ref={ref} className={twMerge("relative p-2 py-4 md:p-0.5", className)} {...props} />
}

const NavbarGap = ({ className, ref, ...props }: React.ComponentProps<"div">) => {
  return <div ref={ref} className={twMerge("mx-2", className)} {...props} />
}

const NavbarSeparator = ({ className, ...props }: React.ComponentProps<typeof Separator>) => {
  return <Separator orientation="vertical" className={twMerge("h-5", className)} {...props} />
}

const NavbarMobile = ({ className, ref, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      ref={ref}
      data-slot="navbar-mobile"
      className={twMerge(
        "group/navbar-mobile flex items-center gap-x-3 px-4 py-2.5 md:hidden",
        "group-has-data-navbar-sticky/navbar:sticky group-has-data-navbar-sticky/navbar:bg-navbar",
        // top
        "group-has-data-navbar-sticky/navbar:group-has-placement-top/navbar:top-0 group-has-data-navbar-sticky/navbar:group-has-placement-top/navbar:border-b",
        // bottom
        "group-has-data-navbar-sticky/navbar:group-has-placement-bottom/navbar:bottom-0 group-has-data-navbar-sticky/navbar:group-has-placement-bottom/navbar:border-t",
        className,
      )}
      {...props}
    />
  )
}

const NavbarInset = ({ className, ref, children, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      ref={ref}
      data-navbar-inset={true}
      className={twMerge("flex flex-1 flex-col bg-navbar pb-2 md:px-2 dark:bg-bg", className)}
      {...props}
    >
      <div className="grow bg-bg p-6 md:rounded-lg md:p-16 md:shadow-xs md:ring-1 md:ring-fg/15 md:dark:bg-navbar md:dark:ring-border md:dark:group-has-data-navbar-inset/navbar:bg-muted">
        <div className="mx-auto max-w-7xl">{children}</div>
      </div>
    </div>
  )
}

interface NavbarTriggerProps extends ButtonProps {
  ref?: React.RefObject<HTMLButtonElement>
}

const NavbarTrigger = ({ className, onPress, ref, ...props }: NavbarTriggerProps) => {
  const { toggleNavbar } = useNavbar()
  return (
    <Button
      ref={ref}
      data-slot="navbar-trigger"
      intent="plain"
      aria-label={props["aria-label"] || "Toggle Navbar"}
      size="sq-sm"
      className={cx("-ml-2 lg:hidden", className)}
      onPress={(event) => {
        onPress?.(event)
        toggleNavbar()
      }}
      {...props}
    >
      <Bars2Icon />
      <span className="sr-only">Toggle Navbar</span>
    </Button>
  )
}

const NavbarLabel = ({ className, ...props }: React.ComponentProps<"span">) => {
  return (
    <span
      data-slot="navbar-label"
      className={twJoin("col-start-2 row-start-1 truncate", className)}
      {...props}
    />
  )
}

export type { NavbarProviderProps, NavbarProps, NavbarTriggerProps, NavbarItemProps }
export {
  useNavbar,
  NavbarProvider,
  Navbar,
  NavbarMobile,
  NavbarInset,
  NavbarTrigger,
  NavbarItem,
  NavbarSection,
  NavbarSpacer,
  NavbarLabel,
  NavbarSeparator,
  NavbarStart,
  NavbarGap,
}
