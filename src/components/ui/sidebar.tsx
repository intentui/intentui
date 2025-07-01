"use client"

import { IconChevronLgDown, IconHamburger, IconSidebarFill } from "@intentui/icons"
import { createContext, use, useCallback, useEffect, useMemo, useState } from "react"
import type {
  ButtonProps,
  DisclosureGroupProps,
  DisclosureProps,
  LinkProps,
  LinkRenderProps,
  SeparatorProps as SidebarSeparatorProps,
} from "react-aria-components"
import {
  composeRenderProps,
  Disclosure,
  DisclosureGroup,
  DisclosurePanel,
  Header,
  Heading,
  Link,
  Separator,
  Text,
  Button as Trigger,
} from "react-aria-components"
import { twJoin, twMerge } from "tailwind-merge"
import { useMediaQuery } from "@/hooks/use-media-query"
import { composeTailwindRenderProps } from "@/lib/primitive"
import { Button } from "./button"
import { Sheet } from "./sheet"
import { Tooltip } from "./tooltip"

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
  children,
  shortcut = "b",
  ref,
  ...props
}: SidebarProviderProps) => {
  const isMobile = useMediaQuery("(max-width: 767px)")
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
      isMobile,
      isOpenOnMobile: openMobile,
      setIsOpenOnMobile: setOpenMobile,
      toggleSidebar,
    }),
    [state, open, setOpen, isMobile, openMobile, toggleSidebar],
  )

  return (
    <SidebarContext value={contextValue}>
      <div
        className={twMerge(
          "@container **:data-[slot=icon]:shrink-0",
          "[--default-px:--spacing(2.5)]",
          "[--sidebar-width-dock:3.25rem] [--sidebar-width:17rem]",
          "[--sidebar-border:color-mix(in_oklch,var(--color-sidebar)_25%,black_6%)]",
          "dark:[--sidebar-border:color-mix(in_oklch,var(--color-sidebar)_55%,white_10%)]",
          "[--sidebar-accent:color-mix(in_oklab,var(--color-sidebar)_95%,black_5%)]",
          "dark:[--sidebar-accent:color-mix(in_oklab,var(--color-sidebar)_90%,white_10%)]",
          "flex min-h-svh w-full text-sidebar-fg",
          "group/sidebar-root peer/sidebar-root has-data-[sidebar-intent=inset]:bg-sidebar dark:has-data-[sidebar-intent=inset]:bg-bg",

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
        data-sidebar-intent={intent}
        data-sidebar-collapsible="none"
        className={twMerge(
          "flex h-full w-(--sidebar-width) flex-col border-r bg-sidebar text-sidebar-fg",
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
        <span className="sr-only" aria-hidden data-sidebar-intent={intent} />
        <Sheet isOpen={isOpenOnMobile} onOpenChange={setIsOpenOnMobile} {...props}>
          <Sheet.Content
            closeButton={closeButton}
            aria-label="Sidebar"
            data-sidebar-intent="default"
            className="[&>button]:hidden"
            side={side}
          >
            <Sheet.Body className="p-[calc(var(--gutter)---spacing(4))]">{children}</Sheet.Body>
          </Sheet.Content>
        </Sheet>
      </>
    )
  }

  return (
    <div
      data-sidebar-state={state}
      data-sidebar-collapsible={state === "collapsed" ? collapsible : ""}
      data-sidebar-intent={intent}
      data-sidebar-side={side}
      className="group/sidebar-container peer hidden text-sidebar-fg md:block"
      {...props}
    >
      <div
        aria-hidden="true"
        className={twMerge([
          "w-(--sidebar-width) group-data-[sidebar-collapsible=hidden]/sidebar-container:w-0",
          "group-data-[sidebar-side=right]/sidebar-container:rotate-180",
          "relative h-svh bg-transparent transition-[width] duration-200 ease-linear",
          intent === "default" &&
            "group-data-[sidebar-collapsible=dock]/sidebar-container:w-(--sidebar-width-dock)",
          intent === "float" &&
            "group-data-[sidebar-collapsible=dock]/sidebar-container:w-[calc(var(--sidebar-width-dock)+--spacing(4))]",
          intent === "inset" &&
            "group-data-[sidebar-collapsible=dock]/sidebar-container:w-[calc(var(--sidebar-width-dock)+--spacing(2))]",
        ])}
      />
      <div
        className={twMerge(
          "fixed inset-y-0 z-10 hidden h-svh min-h-svh w-(--sidebar-width) bg-sidebar",
          "not-has-data-sidebar-footer:pb-2",
          "transition-[left,right,width] duration-200 ease-linear",
          "**:data-[slot=disclosure]:border-0 **:data-[slot=disclosure]:px-2.5",
          "md:flex",
          side === "left" &&
            "left-0 group-data-[sidebar-collapsible=hidden]/sidebar-container:left-[calc(var(--sidebar-width)*-1)]",
          side === "right" &&
            "right-0 group-data-[sidebar-collapsible=hidden]/sidebar-container:right-[calc(var(--sidebar-width)*-1)]",
          intent === "float" &&
            "bg-bg p-2 group-data-[sidebar-collapsible=dock]/sidebar-container:w-[calc(--spacing(4)+2px)]",
          intent === "inset" &&
            "bg-sidebar p-2 group-data-[sidebar-collapsible=dock]/sidebar-container:w-[calc(var(--sidebar-width-dock)+--spacing(2)+2px)] dark:bg-bg",
          intent === "default" && [
            "group-data-[sidebar-collapsible=dock]/sidebar-container:w-(--sidebar-width-dock) group-data-[sidebar-side=left]/sidebar-container:border-(--sidebar-border)",
            "group-data-[sidebar-side=left]/sidebar-container:border-r group-data-[sidebar-side=right]/sidebar-container:border-l",
          ],
          className,
        )}
        {...props}
      >
        <div
          data-sidebar="default"
          className={twJoin(
            "flex h-full w-full flex-col text-sidebar-fg",
            "group-data-[sidebar-intent=inset]/sidebar-container:bg-sidebar dark:group-data-[sidebar-intent=inset]/sidebar-container:bg-bg",
            "group-data-[sidebar-intent=float]/sidebar-container:rounded-lg group-data-[sidebar-intent=float]/sidebar-container:border group-data-[sidebar-intent=float]/sidebar-container:border-(--sidebar-border) group-data-[sidebar-intent=float]/sidebar-container:bg-sidebar group-data-[sidebar-intent=float]/sidebar-container:shadow-xs",
          )}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

const SidebarHeader = ({ className, ref, ...props }: React.ComponentProps<"div">) => {
  const { state } = use(SidebarContext)!
  return (
    <div
      ref={ref}
      data-sidebar-header="true"
      className={twMerge([
        "mb-2 flex flex-col **:data-[slot=sidebar-label-mask]:hidden",
        state === "collapsed"
          ? "mt-2 p-5 group-data-[sidebar-intent=float]/sidebar-container:mt-2 md:mx-auto md:size-9 md:items-center md:justify-center md:rounded-lg md:p-0 md:hover:bg-secondary"
          : "px-4 py-[calc(var(--spacing)*4)]",
        className,
      ])}
      {...props}
    />
  )
}

const SidebarFooter = ({ className, ...props }: React.ComponentProps<"div">) => {
  const { state, isMobile } = useSidebar()
  const collapsed = state === "collapsed" && !isMobile
  const expanded = state === "expanded"
  return (
    <div
      data-sidebar-footer="true"
      className={twMerge([
        "mt-auto flex flex-col p-2",
        "**:data-[slot=menu-trigger]:relative **:data-[slot=menu-trigger]:flex **:data-[slot=menu-trigger]:cursor-default **:data-[slot=menu-trigger]:items-center **:data-[slot=menu-trigger]:overflow-hidden **:data-[slot=menu-trigger]:rounded-lg **:data-[slot=menu-trigger]:pressed:bg-secondary **:data-[slot=menu-trigger]:p-2 **:data-[slot=menu-trigger]:outline-hidden **:data-[slot=menu-trigger]:hover:bg-secondary **:data-[slot=menu-trigger]:hover:text-fg sm:**:data-[slot=menu-trigger]:text-sm",
        expanded && "**:data-[slot=menu-content]:min-w-60",
        collapsed
          ? [
              "**:data-[slot=avatar]:*:size-6 **:data-[slot=avatar]:size-6",
              "**:data-[slot=chevron]:hidden **:data-[slot=menu-label]:hidden",
              "**:data-[slot=menu-trigger]:grid **:data-[slot=menu-trigger]:size-8 **:data-[slot=menu-trigger]:place-content-center",
            ]
          : [
              "**:data-[slot=avatar]:*:size-8 **:data-[slot=menu-trigger]:**:data-[slot=avatar]:mr-1.5 **:data-[slot=avatar]:size-8",
              "**:data-[slot=menu-trigger]:**:data-[slot=chevron]:ml-auto **:data-[slot=menu-trigger]:**:data-[slot=chevron]:text-muted-fg **:data-[slot=menu-trigger]:pressed:**:data-[slot=chevron]:text-fg **:data-[slot=menu-trigger]:**:data-[slot=chevron]:transition-transform **:data-[slot=menu-trigger]:w-full **:data-[slot=menu-trigger]:hover:**:data-[slot=chevron]:text-fg",
            ],
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
      data-sidebar-content="true"
      className={twMerge(
        "flex min-h-0 flex-1 scroll-mb-96 flex-col overflow-auto *:data-sidebar-section:border-l-0",
        state === "collapsed" && "items-center",
        className,
      )}
      {...props}
    />
  )
}

const SidebarSectionGroup = ({ className, ...props }: React.ComponentProps<"section">) => {
  const { state, isMobile } = useSidebar()
  const collapsed = state === "collapsed" && !isMobile
  return (
    <section
      data-sidebar-section-group="true"
      className={twMerge(
        "flex w-full flex-col gap-y-6",
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
      data-sidebar-section="true"
      className={twMerge(
        "col-span-full flex flex-col gap-y-0.5 **:data-sidebar-section:**:gap-y-0 **:data-sidebar-section:pr-0",
        state === "expanded" && "px-2.5",
        className,
      )}
      {...props}
    >
      {state !== "collapsed" && "label" in props && (
        <Header className="group-data-[sidebar-collapsible=dock]/sidebar-container:-mt-8 mb-1 flex shrink-0 items-center rounded-md px-2.5 font-medium text-sidebar-fg/70 text-xs outline-none ring-sidebar-ring transition-[margin,opa] duration-200 ease-linear focus-visible:ring-2 *:data-[slot=icon]:size-4 *:data-[slot=icon]:shrink-0 group-data-[sidebar-collapsible=dock]/sidebar-container:opacity-0">
          {props.label}
        </Header>
      )}
      <div className="grid grid-cols-[auto_1fr] gap-y-0.5">{props.children}</div>
    </div>
  )
}

interface SidebarItemProps extends Omit<React.ComponentProps<typeof Link>, "children"> {
  isCurrent?: boolean
  tooltip?: React.ReactNode | string
  children?:
    | React.ReactNode
    | ((
        values: LinkRenderProps & { defaultChildren: React.ReactNode; isCollapsed: boolean },
      ) => React.ReactNode)
  badge?: string | number | undefined
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
      data-sidebar-item="true"
      aria-current={isCurrent ? "page" : undefined}
      className={composeRenderProps(
        className,
        (className, { isPressed, isFocusVisible, isHovered, isDisabled }) =>
          twMerge([
            "href" in props ? "cursor-pointer" : "cursor-default",
            "w-full items-center rounded-lg text-left font-medium text-base/6 text-sidebar-fg",
            "group/sidebar-item relative col-span-full overflow-hidden focus-visible:outline-hidden",
            "**:data-[slot=menu-trigger]:absolute **:data-[slot=menu-trigger]:right-0 **:data-[slot=menu-trigger]:flex **:data-[slot=menu-trigger]:h-full **:data-[slot=menu-trigger]:w-[calc(var(--sidebar-width)-90%)] **:data-[slot=menu-trigger]:items-center **:data-[slot=menu-trigger]:justify-end **:data-[slot=menu-trigger]:pr-2.5 **:data-[slot=menu-trigger]:opacity-0 **:data-[slot=menu-trigger]:pressed:opacity-100 **:data-[slot=menu-trigger]:has-data-focus:opacity-100 **:data-[slot=menu-trigger]:focus-visible:opacity-100 hover:**:data-[slot=menu-trigger]:opacity-100",
            "**:data-[slot=icon]:size-5 **:data-[slot=icon]:shrink-0 **:data-[slot=icon]:text-muted-fg sm:**:data-[slot=icon]:size-4",
            "**:last:data-[slot=icon]:size-5 sm:**:last:data-[slot=icon]:size-4",
            "**:data-[slot=avatar]:-m-0.5 **:data-[slot=avatar]:*:size-6 **:data-[slot=avatar]:size-6 sm:**:data-[slot=avatar]:*:size-6 sm:**:data-[slot=avatar]:size-6",
            isCollapsed
              ? "flex not-has-data-[slot=icon]:hidden size-9 justify-center **:data-[slot=menu-trigger]:hidden **:data-[slot=icon]:size-4"
              : "grid grid-cols-[auto_1fr_1.5rem_0.5rem_auto] gap-3 p-2 **:last:data-[slot=icon]:ml-auto supports-[grid-template-columns:subgrid]:grid-cols-subgrid sm:gap-2.5 sm:py-2 sm:text-sm/5",
            isCurrent &&
              "bg-secondary text-fg hover:bg-secondary/90 hover:text-fg **:data-[slot=menu-trigger]:from-secondary **:data-[slot=icon]:text-fg [&_.text-muted-fg]:text-fg/80",
            isFocusVisible && "inset-ring inset-ring-ring outline-hidden ring-2 ring-ring/20",
            (isPressed || isHovered) &&
              "bg-secondary text-sidebar-fg **:data-[slot=icon]:text-sidebar-fg",
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
                className="-translate-y-1/2 absolute inset-ring-1 inset-ring-border inset-y-1/2 right-1.5 h-5.5 w-auto rounded-full bg-fg/5 px-2 text-[10px] transition-colors group-hover/sidebar-item:inset-ring-muted-fg/30 group-data-current:inset-ring-transparent"
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

  return isCollapsed && tooltip ? (
    <Tooltip delay={0}>
      {link}
      <Tooltip.Content
        className="**:data-[slot=icon]:hidden **:data-[slot=sidebar-label-mask]:hidden"
        intent="inverse"
        showArrow={false}
        placement="right"
      >
        {tooltip}
      </Tooltip.Content>
    </Tooltip>
  ) : (
    link
  )
}

interface SidebarLinkProps extends LinkProps {
  ref?: React.Ref<HTMLAnchorElement>
}
const SidebarLink = ({ className, ref, ...props }: SidebarLinkProps) => {
  const { state, isMobile } = useSidebar()
  const collapsed = state === "collapsed" && !isMobile
  return (
    <Link
      ref={ref}
      className={composeTailwindRenderProps(
        className,
        twJoin(
          "col-span-full items-center focus:outline-hidden",
          collapsed
            ? "absolute inset-0 flex size-full justify-center"
            : "grid grid-cols-[auto_1fr_1.5rem_0.5rem_auto] supports-[grid-template-columns:subgrid]:grid-cols-subgrid",
        ),
      )}
      {...props}
    />
  )
}

const SidebarInset = ({ className, ref, ...props }: React.ComponentProps<"main">) => {
  return (
    <main
      ref={ref}
      className={twMerge(
        "relative flex min-h-svh w-full flex-1 flex-col peer-data-[sidebar-intent=inset]:border peer-data-[sidebar-intent=inset]:border-(--sidebar-border) lg:min-w-0",
        "bg-bg peer-data-[sidebar-intent=inset]:overflow-hidden dark:peer-data-[sidebar-intent=inset]:bg-sidebar",
        "peer-data-[sidebar-intent=inset]:min-h-[calc(100svh---spacing(4))] md:peer-data-[sidebar-state=collapsed]:peer-data-[sidebar-intent=inset]:ml-2 md:peer-data-[sidebar-intent=inset]:m-2 md:peer-data-[sidebar-intent=inset]:ml-0 md:peer-data-[sidebar-intent=inset]:rounded-xl md:peer-data-[sidebar-intent=inset]:shadow-xs",
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
      data-sidebar-disclosure-group="true"
      allowsMultipleExpanded={allowsMultipleExpanded}
      className={composeTailwindRenderProps(className, "col-span-full flex flex-col gap-y-6")}
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
      data-sidebar-disclosure="true"
      className={composeTailwindRenderProps(
        className,
        state === "expanded" ? "px-2.5" : "col-span-full",
      )}
      {...props}
    />
  )
}

interface SidebarDisclosureTriggerProps extends ButtonProps {
  ref?: React.Ref<HTMLButtonElement>
}
const SidebarDisclosureTrigger = ({ className, ref, ...props }: SidebarDisclosureTriggerProps) => {
  const { state, isMobile } = useSidebar()
  const collapsed = state === "collapsed" && !isMobile
  return (
    <Heading level={3}>
      <Trigger
        ref={ref}
        slot="trigger"
        className={composeRenderProps(
          className,
          (className, { isPressed, isFocusVisible, isHovered, isDisabled }) =>
            twMerge(
              "flex w-full items-center rounded-lg text-left font-medium text-base/6 text-sidebar-fg",
              "group/sidebar-disclosure-trigger relative col-span-full overflow-hidden focus-visible:outline-hidden",
              "**:data-[slot=menu-trigger]:absolute **:data-[slot=menu-trigger]:right-0 **:data-[slot=menu-trigger]:flex **:data-[slot=menu-trigger]:h-full **:data-[slot=menu-trigger]:w-[calc(var(--sidebar-width)-90%)] **:data-[slot=menu-trigger]:items-center **:data-[slot=menu-trigger]:justify-end **:data-[slot=menu-trigger]:pr-2.5 **:data-[slot=menu-trigger]:opacity-0 **:data-[slot=menu-trigger]:pressed:opacity-100 **:data-[slot=menu-trigger]:has-data-focus:opacity-100 **:data-[slot=menu-trigger]:focus-visible:opacity-100 hover:**:data-[slot=menu-trigger]:opacity-100",
              "**:data-[slot=icon]:size-5 **:data-[slot=icon]:shrink-0 **:data-[slot=icon]:text-muted-fg sm:**:data-[slot=icon]:size-4",
              "**:last:data-[slot=icon]:size-5 sm:**:last:data-[slot=icon]:size-4",
              "**:data-[slot=avatar]:-m-0.5 **:data-[slot=avatar]:size-6 sm:**:data-[slot=avatar]:size-5",
              collapsed
                ? "size-9 justify-center"
                : "col-span-full gap-3 p-2 **:data-[slot=chevron]:text-muted-fg **:last:data-[slot=icon]:ml-auto sm:gap-2.5 sm:py-2 sm:text-sm/5",
              isFocusVisible && "inset-ring inset-ring-ring/70",
              (isPressed || isHovered) &&
                "bg-secondary text-sidebar-fg **:data-[slot=chevron]:text-fg",
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
              <IconChevronLgDown
                data-slot="chevron"
                className="z-10 ml-auto size-3.5 transition-transform group-aria-expanded/sidebar-disclosure-trigger:rotate-180"
              />
            )}
          </>
        )}
      </Trigger>
    </Heading>
  )
}

const SidebarDisclosurePanel = ({
  className,
  ...props
}: React.ComponentProps<typeof DisclosurePanel>) => {
  return (
    <DisclosurePanel
      data-sidebar-disclosure-panel="true"
      className={composeTailwindRenderProps(
        className,
        "col-span-full grid grid-cols-[auto_1fr] gap-y-0.5",
      )}
      {...props}
    />
  )
}

const SidebarSeparator = ({ className, ...props }: SidebarSeparatorProps) => {
  return (
    <Separator
      orientation="horizontal"
      className={twMerge(
        "col-span-full mx-auto my-2.5 h-px w-[calc(var(--sidebar-width)--spacing(6))] bg-border",
        className,
      )}
      {...props}
    />
  )
}

const SidebarTrigger = ({ onPress, children, ...props }: React.ComponentProps<typeof Button>) => {
  const { toggleSidebar } = useSidebar()
  return (
    <Button
      aria-label={props["aria-label"] || "Toggle Sidebar"}
      data-sidebar-trigger="true"
      intent={props.intent || "plain"}
      size={props.size || "sq-sm"}
      onPress={(event) => {
        onPress?.(event)
        toggleSidebar()
      }}
      {...props}
    >
      {children || (
        <>
          <IconSidebarFill className="hidden md:inline" />
          <IconHamburger className="inline md:hidden" />
          <span className="sr-only">Toggle Sidebar</span>
        </>
      )}
    </Button>
  )
}

const SidebarRail = ({ className, ref, ...props }: React.ComponentProps<"button">) => {
  const { toggleSidebar } = useSidebar()

  return (
    <button
      ref={ref}
      data-sidebar="rail"
      aria-label="Toggle Sidebar"
      title="Toggle Sidebar"
      tabIndex={-1}
      onClick={toggleSidebar}
      className={twMerge(
        "-translate-x-1/2 group-data-[sidebar-side=left]/sidebar-container:-right-4 absolute inset-y-0 z-20 hidden w-4 outline-hidden transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-transparent group-data-[sidebar-side=right]/sidebar-container:left-0 sm:flex",
        "in-data-[sidebar-side=left]:cursor-w-resize in-data-[sidebar-side=right]:cursor-e-resize",
        "[[data-sidebar-side=left][data-sidebar-state=collapsed]_&]:cursor-e-resize [[data-sidebar-side=right][data-sidebar-state=collapsed]_&]:cursor-w-resize",
        "group-data-[sidebar-collapsible=hidden]/sidebar-container:translate-x-0 group-data-[sidebar-collapsible=hidden]/sidebar-container:hover:bg-secondary group-data-[sidebar-collapsible=hidden]/sidebar-container:after:left-full",
        "[[data-sidebar-side=left][data-sidebar-collapsible=hidden]_&]:-right-2 [[data-sidebar-side=right][data-sidebar-collapsible=hidden]_&]:-left-2",
        className,
      )}
      {...props}
    />
  )
}

const SidebarLabel = ({ className, ref, ...props }: React.ComponentProps<typeof Text>) => {
  const { state, isMobile } = useSidebar()
  const collapsed = state === "collapsed" && !isMobile
  if (!collapsed) {
    return (
      <Text
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
        "isolate flex items-center justify-between gap-x-2 px-4 py-2.5 text-navbar-fg sm:justify-start md:w-full",
        isSticky && "static top-0 z-40 group-has-data-[sidebar-intent=default]/sidebar-root:sticky",
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
