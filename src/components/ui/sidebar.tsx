"use client"

import { IconSidebarFill } from "@intentui/icons"
import { createContext, use, useCallback, useEffect, useMemo, useRef, useState } from "react"
import {
  type ButtonProps,
  composeRenderProps,
  Disclosure,
  DisclosureGroup,
  type DisclosureGroupProps,
  DisclosurePanel,
  type DisclosurePanelProps,
  type DisclosureProps,
  DisclosureStateContext,
  Header,
  Heading,
  type LinkProps,
  type LinkRenderProps,
  Separator,
  type SeparatorProps as SidebarSeparatorProps,
  Text,
  Button as Trigger,
} from "react-aria-components"
import { twJoin, twMerge } from "tailwind-merge"
import { SheetContent } from "@/components/ui/sheet"
import { useMediaQuery } from "@/hooks/use-media-query"
import { composeTailwindRenderProps } from "@/lib/primitive"
import { Button } from "./button"
import { Link } from "./link"
import { Tooltip, TooltipContent } from "./tooltip"

const SIDEBAR_WIDTH = "17rem"
const SIDEBAR_WIDTH_DOCK = "3.25rem"
const SIDEBAR_COOKIE_NAME = "sidebar_state"
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7

type SidebarContextProps = {
  state: "expanded" | "collapsed"
  open: boolean
  setOpen: (open: boolean) => void
  isOpenOnMobile: boolean
  setIsOpenOnMobile: (open: boolean) => void
  isMobile: boolean
  toggleSidebar: () => void
}

const SidebarContext = createContext<SidebarContextProps | null>(null)

const useSidebar = () => {
  const context = use(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.")
  }

  return context
}

interface SidebarProviderProps extends React.ComponentProps<"div"> {
  defaultOpen?: boolean
  isOpen?: boolean
  shortcut?: string
  onOpenChange?: (open: boolean) => void
}

const SidebarProvider = ({
  defaultOpen = true,
  isOpen: openProp,
  onOpenChange: setOpenProp,
  className,
  style,
  children,
  shortcut = "b",
  ref,
  ...props
}: SidebarProviderProps) => {
  const [openMobile, setOpenMobile] = useState(false)

  const [internalOpenState, setInternalOpenState] = useState(defaultOpen)
  const open = openProp ?? internalOpenState
  const setOpen = useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      const openState = typeof value === "function" ? value(open) : value

      if (setOpenProp) {
        setOpenProp(openState)
      } else {
        setInternalOpenState(openState)
      }

      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
    },
    [setOpenProp, open],
  )

  const isMobile = useMediaQuery("(max-width: 767px)")

  const toggleSidebar = useCallback(() => {
    return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open)
  }, [isMobile, setOpen])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === shortcut && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        toggleSidebar()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [toggleSidebar, shortcut])

  const state = open ? "expanded" : "collapsed"

  const contextValue = useMemo<SidebarContextProps>(
    () => ({
      state,
      open,
      setOpen,
      isMobile: isMobile ?? false,
      isOpenOnMobile: openMobile,
      setIsOpenOnMobile: setOpenMobile,
      toggleSidebar,
    }),
    [state, open, setOpen, isMobile, openMobile, toggleSidebar],
  )

  if (isMobile === undefined) {
    return null
  }

  return (
    <SidebarContext value={contextValue}>
      <div
        style={
          {
            "--sidebar-width": SIDEBAR_WIDTH,
            "--sidebar-width-dock": SIDEBAR_WIDTH_DOCK,
            ...style,
          } as React.CSSProperties
        }
        className={twMerge(
          "@container **:data-[slot=icon]:shrink-0",
          "flex min-h-svh w-full text-sidebar-fg",
          "group/sidebar-root peer/sidebar-root has-data-[intent=inset]:bg-sidebar dark:has-data-[intent=inset]:bg-bg",
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    </SidebarContext>
  )
}

interface SidebarProps extends React.ComponentProps<"div"> {
  intent?: "default" | "float" | "inset"
  collapsible?: "hidden" | "dock" | "none"
  side?: "left" | "right"
  closeButton?: boolean
}

const Sidebar = ({
  children,
  closeButton = true,
  collapsible = "hidden",
  side = "left",
  intent = "default",
  className,
  ...props
}: SidebarProps) => {
  const { isMobile, state, isOpenOnMobile, setIsOpenOnMobile } = useSidebar()

  if (collapsible === "none") {
    return (
      <div
        data-intent={intent}
        data-collapsible="none"
        data-slot="sidebar"
        className={twMerge(
          "flex h-full w-(--sidebar-width) flex-col bg-sidebar text-sidebar-fg",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    )
  }

  if (isMobile) {
    return (
      <>
        <span className="sr-only" aria-hidden data-intent={intent} />
        <SheetContent
          isOpen={isOpenOnMobile}
          onOpenChange={setIsOpenOnMobile}
          closeButton={closeButton}
          aria-label="Sidebar"
          data-slot="sidebar"
          data-intent="default"
          className="w-(--sidebar-width) [--sidebar-width:18rem] has-data-[slot=calendar]:[--sidebar-width:23rem]"
          side={side}
        >
          {children}
        </SheetContent>
      </>
    )
  }

  return (
    <div
      data-state={state}
      data-collapsible={state === "collapsed" ? collapsible : ""}
      data-intent={intent}
      data-side={side}
      data-slot="sidebar"
      className="group peer hidden text-sidebar-fg md:block"
      {...props}
    >
      <div
        data-slot="sidebar-gap"
        aria-hidden="true"
        className={twMerge([
          "w-(--sidebar-width) group-data-[collapsible=hidden]:w-0",
          "group-data-[side=right]:rotate-180",
          "relative h-svh bg-transparent transition-[width] duration-200 ease-linear",
          intent === "default" && "group-data-[collapsible=dock]:w-(--sidebar-width-dock)",
          intent === "float" &&
            "group-data-[collapsible=dock]:w-[calc(var(--sidebar-width-dock)+(--spacing(4)))]",
          intent === "inset" &&
            "group-data-[collapsible=dock]:w-[calc(var(--sidebar-width-dock)+--spacing(2))]",
        ])}
      />
      <div
        data-slot="sidebar-container"
        className={twMerge(
          "fixed inset-y-0 z-10 hidden h-svh min-h-svh w-(--sidebar-width) bg-sidebar",
          "not-has-data-[slot=sidebar-footer]:pb-2",
          "transition-[left,right,width] duration-200 ease-linear",
          "md:flex",
          side === "left" &&
            "left-0 group-data-[collapsible=hidden]:left-[calc(var(--sidebar-width)*-1)]",
          side === "right" &&
            "right-0 group-data-[collapsible=hidden]:right-[calc(var(--sidebar-width)*-1)]",
          intent === "float" &&
            "bg-bg p-2 group-data-[collapsible=dock]:w-[calc(--spacing(4)+2px)]",
          intent === "inset" &&
            "bg-sidebar group-data-[collapsible=dock]:w-[calc(var(--sidebar-width-dock)+--spacing(2)+2px)] dark:bg-bg",
          intent === "default" && [
            "group-data-[collapsible=dock]:w-(--sidebar-width-dock)",
            "group-data-[side=left]:border-sidebar-border group-data-[side=right]:border-sidebar-border group-data-[side=left]:border-r group-data-[side=right]:border-l",
          ],
          className,
        )}
        {...props}
      >
        <div
          data-sidebar="default"
          data-slot="sidebar-inner"
          className={twJoin(
            "flex h-full w-full flex-col text-sidebar-fg",
            "group-data-[intent=inset]:bg-sidebar dark:group-data-[intent=inset]:bg-bg",
            "group-data-[intent=float]:rounded-lg group-data-[intent=float]:border group-data-[intent=float]:border-sidebar-border group-data-[intent=float]:bg-sidebar group-data-[intent=float]:shadow-xs",
          )}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

const SidebarHeader = ({ className, ref, ...props }: React.ComponentProps<"div">) => {
  const { state } = useSidebar()
  return (
    <div
      ref={ref}
      data-slot="sidebar-header"
      className={twMerge(
        "flex flex-col gap-2 [.border-b]:border-sidebar-border",
        "in-data-[intent=inset]:p-4",
        state === "collapsed" ? "p-2.5" : "p-4",
        className,
      )}
      {...props}
    />
  )
}

const SidebarFooter = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      data-slot="sidebar-footer"
      className={twMerge([
        "mt-auto flex shrink-0 items-center justify-center p-4 **:data-[slot=chevron]:text-muted-fg",
        "in-data-[intent=inset]:px-6 in-data-[intent=inset]:py-4",
        className,
      ])}
      {...props}
    />
  )
}

const SidebarContent = ({ className, ...props }: React.ComponentProps<"div">) => {
  const { state } = useSidebar()
  return (
    <div
      data-slot="sidebar-content"
      className={twMerge(
        "flex min-h-0 flex-1 scroll-mb-96 flex-col overflow-auto *:data-[slot=sidebar-section]:border-l-0",
        state === "collapsed" ? "items-center" : "mask-b-from-95%",
        className,
      )}
      {...props}
    >
      {props.children}
    </div>
  )
}

const SidebarSectionGroup = ({ className, ...props }: React.ComponentProps<"section">) => {
  const { state, isMobile } = useSidebar()
  const collapsed = state === "collapsed" && !isMobile
  return (
    <section
      data-slot="sidebar-section-group"
      className={twMerge(
        "flex w-full min-w-0 flex-col gap-y-0.5",
        collapsed && "items-center justify-center",
        className,
      )}
      {...props}
    />
  )
}

interface SidebarSectionProps extends React.ComponentProps<"div"> {
  label?: string
}

const SidebarSection = ({ className, ...props }: SidebarSectionProps) => {
  const { state } = useSidebar()
  return (
    <div
      data-slot="sidebar-section"
      className={twMerge(
        "col-span-full flex min-w-0 flex-col gap-y-0.5 **:data-[slot=sidebar-section]:**:gap-y-0",
        state === "collapsed" ? "p-2" : "p-4",
        className,
      )}
      {...props}
    >
      {state !== "collapsed" && "label" in props && (
        <Header className="group-data-[collapsible=dock]:-mt-8 mb-1 flex shrink-0 items-center rounded-md px-2.5 font-medium text-sidebar-fg/70 text-xs/6 outline-none ring-sidebar-ring transition-[margin,opa] duration-200 ease-linear *:data-[slot=icon]:size-4 *:data-[slot=icon]:shrink-0 group-data-[collapsible=dock]:opacity-0">
          {props.label}
        </Header>
      )}
      <div data-slot="sidebar-section-inner" className="grid grid-cols-[auto_1fr] gap-y-0.5">
        {props.children}
      </div>
    </div>
  )
}

interface SidebarItemProps extends Omit<React.ComponentProps<typeof Link>, "children"> {
  isCurrent?: boolean
  children?:
    | React.ReactNode
    | ((
        values: LinkRenderProps & {
          defaultChildren: React.ReactNode
          isCollapsed: boolean
        },
      ) => React.ReactNode)
  badge?: string | number | undefined
  tooltip?: string | React.ComponentProps<typeof TooltipContent>
}

const SidebarItem = ({
  isCurrent,
  tooltip,
  children,
  badge,
  className,
  ref,
  ...props
}: SidebarItemProps) => {
  const { state, isMobile } = useSidebar()
  const isCollapsed = state === "collapsed" && !isMobile
  const link = (
    <Link
      ref={ref}
      data-slot="sidebar-item"
      aria-current={isCurrent ? "page" : undefined}
      className={composeRenderProps(
        className,
        (className, { isPressed, isFocusVisible, isHovered, isDisabled }) =>
          twMerge([
            "href" in props ? "cursor-pointer" : "cursor-default",
            "relative w-full min-w-0 items-center rounded-lg text-left font-medium text-base/6 text-sidebar-fg",
            "group/sidebar-item relative col-span-full overflow-hidden focus-visible:outline-hidden",
            "**:data-[slot=menu-action-trigger]:absolute **:data-[slot=menu-action-trigger]:right-0 **:data-[slot=menu-action-trigger]:flex **:data-[slot=menu-action-trigger]:h-full **:data-[slot=menu-action-trigger]:w-[calc(var(--sidebar-width)-90%)] **:data-[slot=menu-action-trigger]:items-center **:data-[slot=menu-action-trigger]:justify-end **:data-[slot=menu-action-trigger]:pr-2.5 **:data-[slot=menu-action-trigger]:opacity-0 **:data-[slot=menu-action-trigger]:pressed:opacity-100 **:data-[slot=menu-action-trigger]:has-data-focus:opacity-100 **:data-[slot=menu-action-trigger]:focus-visible:opacity-100 hover:**:data-[slot=menu-action-trigger]:opacity-100",
            "**:data-[slot=icon]:size-5 **:data-[slot=icon]:shrink-0 **:data-[slot=icon]:text-muted-fg sm:**:data-[slot=icon]:size-4",
            "**:last:data-[slot=icon]:size-5 sm:**:last:data-[slot=icon]:size-4",
            "**:data-[slot=avatar]:*:size-5 **:data-[slot=avatar]:size-5",
            "has-[[data-slot=avatar]]:has-[[data-slot=sidebar-label]]:gap-2 has-[[data-slot=icon]]:has-[[data-slot=sidebar-label]]:gap-2",
            "grid grid-cols-[auto_1fr_1.5rem_0.5rem_auto] p-2 **:last:data-[slot=icon]:ml-auto supports-[grid-template-columns:subgrid]:grid-cols-subgrid sm:text-sm/5",
            "has-[a]:p-0",
            "[--sidebar-current-bg:var(--color-sidebar-primary)] [--sidebar-current-fg:var(--color-sidebar-primary-fg)]",
            isCurrent &&
              "bg-(--sidebar-current-bg)/90 font-medium text-(--sidebar-current-fg) hover:bg-(--sidebar-current-bg) hover:text-(--sidebar-current-fg) **:data-[slot=icon]:text-(--sidebar-current-fg) hover:**:data-[slot=icon]:text-(--sidebar-current-fg) [&_.text-muted-fg]:text-sidebar-primary-fg/80",
            isFocusVisible && "inset-ring inset-ring-sidebar-ring outline-hidden",
            (isPressed || isHovered) &&
              "bg-sidebar-accent text-sidebar-accent-fg **:data-[slot=icon]:text-text-sidebar-accent-fg",
            isDisabled && "opacity-50",
            className,
          ]),
      )}
      {...props}
    >
      {(values) => (
        <>
          {typeof children === "function" ? children({ ...values, isCollapsed }) : children}

          {badge &&
            (state !== "collapsed" ? (
              <span
                data-slot="sidebar-badge"
                className="-translate-y-1/2 absolute inset-ring-1 inset-ring-sidebar-border inset-y-1/2 right-1.5 h-5.5 w-auto rounded-full bg-fg/5 px-2 text-[10px]/5.5 transition-colors group-hover/sidebar-item:inset-ring-muted-fg/30 group-data-current:inset-ring-transparent"
              >
                {badge}
              </span>
            ) : (
              <div
                aria-hidden
                className="absolute top-1 right-1 size-1.5 rounded-full bg-primary"
              />
            ))}
        </>
      )}
    </Link>
  )
  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip,
    }
  }

  return (
    <Tooltip delay={0}>
      {link}
      <TooltipContent
        className="**:data-[slot=icon]:hidden **:data-[slot=sidebar-label-mask]:hidden"
        inverse
        placement="right"
        showArrow
        hidden={!isCollapsed || isMobile || !tooltip}
        {...tooltip}
      />
    </Tooltip>
  )
}

interface SidebarLinkProps extends LinkProps {
  ref?: React.RefObject<HTMLAnchorElement>
}

const SidebarLink = ({ className, ref, ...props }: SidebarLinkProps) => {
  return (
    <Link
      ref={ref}
      className={composeTailwindRenderProps(className, [
        "col-span-full min-w-0 shrink-0 items-center p-2 focus:outline-hidden",
        "grid grid-cols-[auto_1fr_1.5rem_0.5rem_auto] supports-[grid-template-columns:subgrid]:grid-cols-subgrid",
      ])}
      {...props}
    />
  )
}

const SidebarInset = ({ className, ref, ...props }: React.ComponentProps<"main">) => {
  return (
    <main
      ref={ref}
      className={twMerge(
        "relative flex w-full flex-1 flex-col bg-bg lg:min-w-0",
        "peer-data-[intent=inset]:border peer-data-[intent=inset]:border-sidebar-border md:peer-data-[intent=inset]:peer-data-[state=collapsed]:ml-2 md:peer-data-[intent=inset]:m-2 md:peer-data-[intent=inset]:ml-0 md:peer-data-[intent=inset]:rounded-2xl",
        "peer-data-[intent=inset]:bg-bg dark:peer-data-[intent=inset]:bg-sidebar",
        className,
      )}
      {...props}
    />
  )
}

type SidebarDisclosureGroupProps = DisclosureGroupProps
const SidebarDisclosureGroup = ({
  allowsMultipleExpanded = true,
  className,
  ...props
}: SidebarDisclosureGroupProps) => {
  return (
    <DisclosureGroup
      data-slot="sidebar-disclosure-group"
      allowsMultipleExpanded={allowsMultipleExpanded}
      className={composeTailwindRenderProps(
        className,
        "col-span-full flex min-w-0 flex-col gap-y-0.5",
      )}
      {...props}
    />
  )
}

interface SidebarDisclosureProps extends DisclosureProps {
  ref?: React.Ref<HTMLDivElement>
}

const SidebarDisclosure = ({ className, ref, ...props }: SidebarDisclosureProps) => {
  const { state } = useSidebar()
  return (
    <Disclosure
      ref={ref}
      data-slot="sidebar-disclosure"
      className={composeTailwindRenderProps(className, [
        state === "collapsed" ? "p-2" : "p-4",
        "group col-span-full min-w-0",
      ])}
      {...props}
    />
  )
}

interface SidebarDisclosureTriggerProps extends ButtonProps {
  ref?: React.Ref<HTMLButtonElement>
}

const SidebarDisclosureTrigger = ({ className, ref, ...props }: SidebarDisclosureTriggerProps) => {
  const { state } = useSidebar()
  return (
    <Heading level={3}>
      <Trigger
        ref={ref}
        slot="trigger"
        className={composeRenderProps(
          className,
          (className, { isPressed, isFocusVisible, isHovered, isDisabled }) =>
            twMerge(
              "flex w-full min-w-0 items-center rounded-lg text-left font-medium text-base/6 text-sidebar-fg",
              "group/sidebar-disclosure-trigger relative col-span-full overflow-hidden focus-visible:outline-hidden",
              "**:data-[slot=menu-trigger]:absolute **:data-[slot=menu-trigger]:right-0 **:data-[slot=menu-trigger]:flex **:data-[slot=menu-trigger]:h-full **:data-[slot=menu-trigger]:w-[calc(var(--sidebar-width)-90%)] **:data-[slot=menu-trigger]:items-center **:data-[slot=menu-trigger]:justify-end **:data-[slot=menu-trigger]:pr-2.5 **:data-[slot=menu-trigger]:opacity-0 **:data-[slot=menu-trigger]:pressed:opacity-100 **:data-[slot=menu-trigger]:has-data-focus:opacity-100 **:data-[slot=menu-trigger]:focus-visible:opacity-100 hover:**:data-[slot=menu-trigger]:opacity-100",
              "**:data-[slot=icon]:size-5 **:data-[slot=icon]:shrink-0 **:data-[slot=icon]:text-muted-fg sm:**:data-[slot=icon]:size-4",
              "**:last:data-[slot=icon]:size-5 sm:**:last:data-[slot=icon]:size-4",
              "**:data-[slot=avatar]:size-6 sm:**:data-[slot=avatar]:size-5",
              "col-span-full gap-3 p-2 **:data-[slot=chevron]:text-muted-fg **:last:data-[slot=icon]:ml-auto sm:gap-2 sm:text-sm/5",

              isFocusVisible && "inset-ring inset-ring-ring/70",
              (isPressed || isHovered) &&
                "bg-sidebar-accent text-sidebar-accent-fg **:data-[slot=chevron]:text-sidebar-accent-fg **:data-[slot=icon]:text-sidebar-accent-fg **:last:data-[slot=icon]:text-sidebar-accent-fg",
              isDisabled && "opacity-50",
              className,
            ),
        )}
        {...props}
      >
        {(values) => (
          <>
            {typeof props.children === "function" ? props.children(values) : props.children}
            {state !== "collapsed" && (
              <svg
                data-slot="chevron"
                className="z-10 ml-auto size-3.5 transition-transform duration-200 group-aria-expanded/sidebar-disclosure-trigger:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </>
        )}
      </Trigger>
    </Heading>
  )
}

const SidebarDisclosurePanel = ({ className, ...props }: DisclosurePanelProps) => {
  const { isExpanded } = use(DisclosureStateContext)!
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = contentRef.current
    if (!el) return
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        el.parentElement?.style.setProperty("--disclosure-height", `${entry.target.clientHeight}px`)
      }
    })
    ro.observe(el)
    return () => ro.unobserve(el)
  }, [])

  return (
    <DisclosurePanel
      className={composeTailwindRenderProps(className, [
        "col-span-full overflow-hidden transition-all",
        "grid grid-cols-[auto_1fr] gap-y-0.5",
        isExpanded ? "animate-disclosure-expanded" : "animate-disclosure-collapsed",
      ])}
      {...props}
    >
      <div ref={contentRef} className="col-span-full grid min-w-0 grid-cols-[auto_1fr]">
        {props.children}
      </div>
    </DisclosurePanel>
  )
}

const SidebarSeparator = ({ className, ...props }: SidebarSeparatorProps) => {
  return (
    <Separator
      data-slot="sidebar-separator"
      orientation="horizontal"
      className={twMerge(
        "mx-auto h-px w-[calc(var(--sidebar-width)---spacing(10))] border-0 bg-sidebar-border forced-colors:bg-[ButtonBorder]",
        className,
      )}
      {...props}
    />
  )
}

const SidebarTrigger = ({
  onPress,
  className,
  children,
  ...props
}: React.ComponentProps<typeof Button>) => {
  const { toggleSidebar } = useSidebar()
  return (
    <Button
      aria-label={props["aria-label"] || "Toggle Sidebar"}
      data-slot="sidebar-trigger"
      intent={props.intent || "plain"}
      size={props.size || "sq-sm"}
      className={composeTailwindRenderProps(className, "shrink-0")}
      onPress={(event) => {
        onPress?.(event)
        toggleSidebar()
      }}
      {...props}
    >
      {children || (
        <>
          <IconSidebarFill />
          <span className="sr-only">Toggle Sidebar</span>
        </>
      )}
    </Button>
  )
}

const SidebarRail = ({ className, ref, ...props }: React.ComponentProps<"button">) => {
  const { toggleSidebar } = useSidebar()

  return !props.children ? (
    <button
      ref={ref}
      data-slot="sidebar-rail"
      aria-label="Toggle Sidebar"
      title="Toggle Sidebar"
      tabIndex={-1}
      onClick={toggleSidebar}
      className={twMerge(
        "-translate-x-1/2 group-data-[side=left]:-right-4 absolute inset-y-0 z-20 hidden w-4 outline-hidden transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-transparent group-data-[side=right]:left-0 sm:flex",
        "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "group-data-[collapsible=hidden]:translate-x-0 group-data-[collapsible=hidden]:hover:bg-sidebar-accent group-data-[collapsible=hidden]:after:left-full",
        "[[data-side=left][data-collapsible=hidden]_&]:-right-2 [[data-side=right][data-collapsible=hidden]_&]:-left-2",
        className,
      )}
      {...props}
    />
  ) : (
    props.children
  )
}

const SidebarLabel = ({ className, ref, ...props }: React.ComponentProps<typeof Text>) => {
  const { state, isMobile } = useSidebar()
  const collapsed = state === "collapsed" && !isMobile
  if (!collapsed) {
    return (
      <Text
        data-slot="sidebar-label"
        tabIndex={-1}
        ref={ref}
        slot="label"
        className={twMerge(
          "col-start-2 overflow-hidden whitespace-nowrap outline-hidden",
          className,
        )}
        {...props}
      >
        {props.children}
      </Text>
    )
  }
  return null
}

interface SidebarNavProps extends React.ComponentProps<"nav"> {
  isSticky?: boolean
}

const SidebarNav = ({ isSticky = false, className, ...props }: SidebarNavProps) => {
  return (
    <nav
      data-slot="sidebar-nav"
      className={twMerge(
        "isolate flex items-center justify-between gap-x-2 px-(--container-padding,--spacing(4)) py-2.5 text-navbar-fg sm:justify-start sm:px-(--gutter,--spacing(4)) md:w-full",
        isSticky && "static top-0 z-40 group-has-data-[intent=default]/sidebar-root:sticky",
        className,
      )}
      {...props}
    />
  )
}

export type {
  SidebarProviderProps,
  SidebarProps,
  SidebarSectionProps,
  SidebarItemProps,
  SidebarNavProps,
  SidebarDisclosureGroupProps,
  SidebarDisclosureProps,
  SidebarSeparatorProps,
  SidebarLinkProps,
  SidebarDisclosureTriggerProps,
}

export {
  SidebarProvider,
  SidebarNav,
  SidebarHeader,
  SidebarContent,
  SidebarSectionGroup,
  SidebarSection,
  SidebarItem,
  SidebarLink,
  SidebarFooter,
  Sidebar,
  SidebarDisclosureGroup,
  SidebarDisclosure,
  SidebarSeparator,
  SidebarDisclosureTrigger,
  SidebarDisclosurePanel,
  SidebarTrigger,
  SidebarLabel,
  SidebarInset,
  SidebarRail,
  useSidebar,
}
