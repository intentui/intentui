"use client"

import { use } from "react"
import type {
  ButtonProps,
  DisclosureGroupProps,
  DisclosurePanelProps,
  DisclosureProps,
} from "react-aria-components"
import {
  Button,
  composeRenderProps,
  DisclosureStateContext,
  Heading,
  Disclosure as PrimitiveDisclosure,
  DisclosureGroup as PrimitiveDisclosureGroup,
  DisclosurePanel as PrimitiveDisclosurePanel,
} from "react-aria-components"
import { twJoin, twMerge } from "tailwind-merge"
import { cx } from "@/lib/primitive"

const DisclosureGroup = ({ className, ...props }: DisclosureGroupProps) => {
  return (
    <PrimitiveDisclosureGroup
      className={cx(
        [
          "[--disclosure-gutter-x:--spacing(4)]",
          "[--disclosure-radius:var(--radius-lg)]",
          "[--disclosure-collapsed-border:var(--color-border)]",
          "[--disclosure-expanded-border:var(--color-muted-fg)]/30",
          "[--disclosure-collapsed-bg:var(--color-bg)]",
          "[--disclosure-collapsed-fg:var(--color-muted-fg)]",
          "[--disclosure-expanded-bg:var(--color-secondary)]/20",
          "[--disclosure-expanded-fg:var(--color-fg)]",
          "flex flex-col gap-y-2",
        ],
        className,
      )}
      {...props}
    />
  )
}

const Disclosure = ({ className, ...props }: DisclosureProps) => {
  return (
    <PrimitiveDisclosure
      className={composeRenderProps(className, (className, { isExpanded, isFocusVisibleWithin }) =>
        twMerge(
          "group/disclosure-item inset-ring inset-ring-(--disclosure-collapsed-border,transparent) w-full rounded-(--disclosure-radius,--spacing(0)) bg-(--disclosure-collapsed-bg,transparent) duration-200",
          (isExpanded || isFocusVisibleWithin) &&
            "inset-ring-(--disclosure-expanded-border,transparent) bg-(--disclosure-expanded-bg)",
          "has-data-hovered:inset-ring-(--disclosure-expanded-border,transparent) has-data-hovered:bg-(--disclosure-expanded-bg)",
          className,
        ),
      )}
      {...props}
    />
  )
}

interface DisclosureTriggerProps extends ButtonProps {
  ref?: React.Ref<HTMLButtonElement>
}

const DisclosureTrigger = ({ ref, className, ...props }: DisclosureTriggerProps) => {
  const state = use(DisclosureStateContext)!
  return (
    <Heading>
      <Button
        {...props}
        ref={ref}
        slot="trigger"
        className={cx(
          [
            "outline-hidden [--width:--spacing(2.5)]",
            "relative isolate flex w-full cursor-default items-center justify-between px-(--disclosure-gutter-x,--spacing(0)) py-[calc(var(--disclosure-gutter-x,--spacing(0))-(--spacing(1)))] text-left font-medium text-sm/6",
            "**:data-[slot=icon]:shrink-0 [&_[data-slot='icon']:not([class*='size-'])]:size-5 sm:[&_[data-slot='icon']:not([class*='size-'])]:size-4",
            "disabled:opacity-50",
            state.isExpanded
              ? "rounded-t-(--disclosure-radius) rounded-b-none text-(--disclosure-expanded-fg)"
              : "rounded-(--disclosure-radius) text-(--disclosure-collapsed-fg) hover:text-(--disclosure-expanded-fg)",
          ],
          className,
        )}
      >
        {(values) => (
          <>
            {typeof props.children === "function" ? props.children(values) : props.children}
            <span
              data-slot="disclosure-indicator"
              className="pointer-events-none relative -mr-[calc(var(--disclosure-gutter-x,--spacing(0))-(--spacing(3)))] ml-(--disclosure-gutter-x,--spacing(0)) flex size-6 items-center justify-center"
            >
              <span
                className={twJoin([
                  "absolute h-[1.5px] w-(--width) origin-center bg-current transition-transform duration-300",
                  state.isExpanded ? "rotate-0" : "rotate-90",
                ])}
              />
              <span className="absolute h-[1.5px] w-(--width) origin-center bg-current transition-transform duration-300" />
            </span>
          </>
        )}
      </Button>
    </Heading>
  )
}

const DisclosurePanel = ({ className, ...props }: DisclosurePanelProps) => {
  return (
    <PrimitiveDisclosurePanel
      data-slot="disclosure-panel"
      className={cx(
        "h-(--disclosure-panel-height) overflow-clip text-sm/6 transition-[height] duration-200",
        className,
      )}
    >
      <div
        data-slot="disclosure-panel-content"
        className="justify-start self-stretch text-pretty px-(--disclosure-gutter-x,--spacing(0)) pt-2 pb-(--disclosure-gutter-x,--spacing(0)) text-(--disclosure-collapsed-fg)"
      >
        {props.children}
      </div>
    </PrimitiveDisclosurePanel>
  )
}

export { DisclosureGroup, Disclosure, DisclosureTrigger, DisclosurePanel }
