"use client"

import { createContext, use, useCallback, useId, useMemo, useState } from "react"

import { Button, type ButtonProps } from "@/components/ui/button"
import { Sheet } from "@/components/ui/sheet"
import { useMediaQuery } from "@/hooks/use-media-query"
import { composeTailwindRenderProps } from "@/lib/primitive"
import { IconHamburger } from "@intentui/icons"
import { LayoutGroup, motion } from "motion/react"
import type { LinkProps } from "react-aria-components"
import { Link } from "react-aria-components"
import { twJoin, twMerge } from "tailwind-merge"

type NavbarContextProps = {
  open: boolean
  setOpen: (open: boolean) => void
  isMobile: boolean
  toggleNavbar: () => void
}

const NavbarContext = createContext<NavbarContextProps | null>(null)

function useNavbar() {
  const context = use(NavbarContext)
  if (!context) {
    throw new Error("useNavbar must be used within a Navbar.")
  }

  return context
}

interface NavbarProviderProps extends React.ComponentProps<"nav"> {
  defaultOpen?: boolean
  isOpen?: boolean
  onOpenChange?: (open: boolean) => void
}

const NavbarProvider = ({
  children,
  isOpen: openProp,
  onOpenChange: setOpenProp,
  defaultOpen = false,
  className,
  ...props
}: NavbarProviderProps) => {
  const isMobile = useMediaQuery("(max-width: 767px)")
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

  const contextValue = useMemo<NavbarContextProps>(
    () => ({
      open,
      setOpen,
      isMobile,
      toggleNavbar,
    }),
    [open, setOpen, isMobile, toggleNavbar],
  )
  return (
    <NavbarContext value={contextValue}>
      <nav
        className={twMerge(
          "peer/navbar group/navbar relative isolate flex w-full flex-col",
          "*:data-navbar-inset:min-h-svh *:data-navbar-inset:bg-navbar dark:*:data-navbar-inset:bg-bg",
          className,
        )}
        {...props}
      >
        {children}
      </nav>
    </NavbarContext>
  )
}

interface NavbarProps extends React.ComponentProps<"div"> {
  intent?: "navbar" | "float" | "inset"
  isSticky?: boolean
  side?: "left" | "right"
  useDefaultResponsive?: boolean
}

const Navbar = ({
  useDefaultResponsive = true,
  intent = "navbar",
  side = "left",
  className,
  ref,
  ...props
}: NavbarProps) => {
  const { isMobile, open, setOpen } = useNavbar()
  return (
    <div
      data-navbar={intent}
      ref={ref}
      className={twMerge([
        "group/navbar-intent relative isolate",
        // "group peer flex h-(--navbar-height) w-full items-center px-4 [--navbar-height:3.5rem]",
        // "[&>div]:mx-auto [&>div]:w-full [&>div]:max-w-[1680px] [&>div]:items-center md:[&>div]:flex",
        // isSticky && "sticky top-0 z-40",
        intent === "float" && "md:px-22 md:pt-10",
        // intent === "inset" && "pt-10 sm:px-22",
        // intent === "navbar" && "border-b bg-navbar text-navbar-fg md:px-6",
        // intent === "inset" &&
        //   "mx-auto md:px-6 [&>div]:mx-auto [&>div]:w-full [&>div]:items-center md:[&>div]:flex 2xl:[&>div]:max-w-(--breakpoint-2xl)",
        className,
      ])}
      {...props}
    >
      {isMobile ? (
        <Sheet isOpen={open} onOpenChange={setOpen} {...props}>
          <Sheet.Content
            side={side}
            aria-label="Mobile Navbar"
            data-navbar="sheet"
            className="text-fg [&>button]:hidden"
            isFloat={intent === "float"}
          >
            <Sheet.Body className="p-[calc(var(--gutter)---spacing(2))]">
              {props.children}
            </Sheet.Body>
          </Sheet.Content>
        </Sheet>
      ) : (
        <div
          className={twMerge(
            "relative isolate mx-auto hidden w-full items-center md:flex md:h-14",
            intent === "float" && "max-w-7xl rounded-xl border bg-navbar px-4 shadow-xs",
            intent === "inset" && "max-w-(--breakpoint-2xl) px-6",
            intent === "navbar" && "max-w-(--breakpoint-2xl) border-b px-6",
          )}
        >
          {props.children}
        </div>
      )}
    </div>
  )
}

const NavbarSection = ({ className, ...props }: React.ComponentProps<"div">) => {
  const { isMobile } = useNavbar()
  const id = useId()
  return (
    <LayoutGroup id={id}>
      <div
        data-slot="navbar-section"
        className={twMerge(
          "flex gap-3",
          isMobile
            ? "flex-col group-data-[slot=navbar-mobile]/navbar-mobile:flex-row group-data-[slot=navbar-mobile]/navbar-mobile:items-center"
            : "flex-row items-center",
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
  const { isMobile } = useNavbar()
  return (
    <Link
      data-slot="navbar-item"
      aria-current={isCurrent ? "page" : undefined}
      className={composeTailwindRenderProps(
        className,
        twJoin(
          "[--navbar-item-overlay-fg:var(--secondary-fg)] [--navbar-item-overlay:var(--secondary)]/50 dark:[--navbar-item-overlay:var(--secondary)]",
          "pressed:bg-(--navbar-item-overlay) hover:bg-(--navbar-item-overlay) focus-visible:bg-(--navbar-item-overlay)",
          "pressed:text-(--navbar-item-fg) hover:text-(--navbar-item-fg) focus-visible:text-(--navbar-item-fg) ",
          "relative inline-flex min-w-0 items-center gap-x-2 rounded-lg px-3 py-2 text-muted-fg outline-hidden sm:px-2.5 sm:text-sm/6 md:py-1",
          "disabled:opacity-50",
          "*:data-[slot=icon]:-mx-0.5 *:data-[slot=icon]:size-4 *:data-[slot=icon]:shrink-0",
          "disabled:cursor-default forced-colors:disabled:text-[GrayText]",
          isCurrent && "text-navbar-fg",
        ),
      )}
      {...props}
    >
      {(values) => (
        <>
          {typeof props.children === "function" ? props.children(values) : props.children}

          {(isCurrent || values.isCurrent) && !isMobile && (
            <motion.span
              layoutId="current-indicator"
              data-slot="current-indicator"
              className={twJoin(
                "-bottom-3 absolute inset-x-2 h-0.5 rounded-full bg-fg",
                "group-data-[navbar=inset]/navbar-intent:-bottom-[--spacing(3.3)] group-data-[navbar=float]/navbar-intent:hidden",
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
  return <div ref={ref} className={twMerge("p-4 md:p-2", className)} {...props} />
}

const NavbarGap = ({ className, ref, ...props }: React.ComponentProps<"div">) => {
  return <div ref={ref} className={twMerge("ml-4", className)} {...props} />
}

const NavbarMobile = ({ className, ref, ...props }: React.ComponentProps<"div">) => {
  const { isMobile } = useNavbar()
  return isMobile ? (
    <div
      ref={ref}
      data-slot="navbar-mobile"
      className={twMerge(
        "group/navbar-mobile flex items-center gap-x-3 px-4 py-2.5 md:hidden",
        "peer-has-data-[navbar=inset]:bg-bg",
        className,
      )}
      {...props}
    />
  ) : null
}

const NavbarInset = ({ className, ref, ...props }: React.ComponentProps<"div">) => {
  return (
    <main
      ref={ref}
      data-navbar-inset={true}
      className={twMerge("flex flex-1 flex-col bg-navbar pb-2 md:px-2 dark:bg-bg", className)}
      {...props}
    >
      <div className="grow bg-bg md:rounded-lg md:shadow-xs md:ring-1 md:ring-fg/15 md:dark:bg-navbar md:dark:ring-border">
        {props.children}
      </div>
    </main>
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
      className={composeTailwindRenderProps(className, "-ml-2 min-lg:hidden")}
      onPress={(event) => {
        onPress?.(event)
        toggleNavbar()
      }}
      {...props}
    >
      <IconHamburger />
      <span className="sr-only">Toggle Navbar</span>
    </Button>
  )
}

export type { NavbarProviderProps, NavbarProps, NavbarTriggerProps, NavbarItemProps }
export {
  NavbarProvider,
  Navbar,
  NavbarMobile,
  NavbarInset,
  NavbarTrigger,
  NavbarItem,
  NavbarSection,
  NavbarSpacer,
  NavbarStart,
  NavbarGap,
}
