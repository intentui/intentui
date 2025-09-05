"use client"

import { IconChevronLeft } from "@intentui/icons"
import { use, useEffect, useRef } from "react"
import type {
  DisclosureGroupProps as AccordionProps,
  ButtonProps,
  DisclosureProps as CollapsibleProps,
  DisclosurePanelProps as DisclosurePanelPrimitiveProps,
} from "react-aria-components"
import {
  DisclosureGroup as Accordion,
  Button,
  Disclosure as Collapsible,
  DisclosurePanel as CollapsiblePanel,
  DisclosureStateContext,
  Heading,
} from "react-aria-components"
import { composeTailwindRenderProps } from "@/lib/primitive"

interface DisclosureGroupProps extends AccordionProps {
  ref?: React.RefObject<HTMLDivElement>
}
const DisclosureGroup = ({ children, ref, className, ...props }: DisclosureGroupProps) => {
  return (
    <Accordion
      ref={ref}
      data-slot="disclosure-group"
      {...props}
      className={composeTailwindRenderProps(
        className,
        "peer cursor-default disabled:cursor-not-allowed disabled:opacity-75",
      )}
    >
      {(values) => (
        <div data-slot="disclosure-content">
          {typeof children === "function" ? children(values) : children}
        </div>
      )}
    </Accordion>
  )
}

interface DisclosureProps extends CollapsibleProps {
  ref?: React.Ref<HTMLDivElement>
}
const Disclosure = ({ className, ref, ...props }: DisclosureProps) => {
  return (
    <Collapsible
      ref={ref}
      data-slot="disclosure"
      {...props}
      className={composeTailwindRenderProps(
        className,
        "peer group/disclosure w-full min-w-60 border-b disabled:opacity-60",
      )}
    >
      {props.children}
    </Collapsible>
  )
}

interface DisclosureTriggerProps extends ButtonProps {
  ref?: React.Ref<HTMLButtonElement>
}
const DisclosureTrigger = ({ className, ref, ...props }: DisclosureTriggerProps) => {
  return (
    <Heading>
      <Button
        ref={ref}
        slot="trigger"
        className={composeTailwindRenderProps(
          className,
          "group/trigger [&[aria-expanded=true]_[data-slot=disclosure-chevron]]:-rotate-90 **:data-[slot=icon]:-mx-0.5 flex w-full items-center justify-between gap-x-2 py-3 text-left font-medium open:text-fg focus:text-fg focus:outline-hidden disabled:cursor-default disabled:opacity-50 **:data-[slot=disclosure-chevron]:size-5 **:data-[slot=icon]:shrink-0 **:data-[slot=icon]:text-muted-fg sm:text-sm forced-colors:disabled:text-[GrayText] **:[span]:flex **:[span]:items-center **:[span]:gap-x-1 **:[span]:*:data-[slot=icon]:mr-1",
        )}
        {...props}
      >
        {(values) => (
          <>
            {typeof props.children === "function" ? props.children(values) : props.children}
            <IconChevronLeft
              data-slot="disclosure-chevron"
              className="internal-chevron ml-auto size-4 shrink-0 transition duration-300"
            />
          </>
        )}
      </Button>
    </Heading>
  )
}

interface DisclosurePanelProps extends DisclosurePanelPrimitiveProps {
  ref?: React.Ref<HTMLDivElement>
}
const DisclosurePanel = ({ className, ref, ...props }: DisclosurePanelProps) => {
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
    <CollapsiblePanel
      ref={ref}
      data-slot="disclosure-panel"
      className={composeTailwindRenderProps(className, [
        "overflow-hidden text-muted-fg **:data-[slot=disclosure-group]:border-t **:data-[slot=disclosure-group]:**:[.internal-chevron]:hidden has-data-[slot=disclosure-group]:**:[button]:px-4",
        isExpanded ? "animate-disclosure-expanded" : "animate-disclosure-collapsed",
      ])}
      {...props}
    >
      <div
        ref={contentRef}
        data-slot="disclosure-panel-content"
        className="text-pretty pt-0 pb-3 text-sm/6 not-has-data-[slot=disclosure-group]:group-data-expanded/disclosure:pb-3 [&:has([data-slot=disclosure-group])_&]:px-11"
      >
        {props.children}
      </div>
    </CollapsiblePanel>
  )
}

export type { DisclosureGroupProps, DisclosureProps, DisclosurePanelProps, DisclosureTriggerProps }
export { DisclosureGroup, Disclosure, DisclosurePanel, DisclosureTrigger }
