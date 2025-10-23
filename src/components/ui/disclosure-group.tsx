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
  Disclosure,
  DisclosureStateContext,
  Heading,
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

const DisclosureItem = ({ className, ...props }: DisclosureProps) => {
  return (
    <Disclosure
      className={composeRenderProps(className, (className, { isExpanded, isFocusVisibleWithin }) =>
        twMerge(
          "group/disclosure-item inset-ring inset-ring-(--disclosure-collapsed-border) w-full rounded-(--disclosure-radius) bg-(--disclosure-collapsed-bg) duration-200",
          (isExpanded || isFocusVisibleWithin) &&
            "inset-ring-(--disclosure-expanded-border) bg-(--disclosure-expanded-bg)",
          "has-data-hovered:inset-ring-(--disclosure-expanded-border) has-data-hovered:bg-(--disclosure-expanded-bg)",
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
            "outline-hidden [--width:--spacing(2.5)] [&_[data-slot='icon']:not([class*='size-'])]:size-4",
            "relative isolate flex w-full cursor-pointer items-center justify-between px-(--disclosure-gutter-x) py-[calc(var(--disclosure-gutter-x)-(--spacing(1)))] text-left font-medium text-sm/6",
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
              className="-mr-[calc(var(--disclosure-gutter-x)-(--spacing(3)))] pointer-events-none relative ml-(--disclosure-gutter-x) flex size-6 items-center justify-center"
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
        className="justify-start self-stretch text-pretty px-(--disclosure-gutter-x) pt-0 pb-(--disclosure-gutter-x) text-(--disclosure-collapsed-fg)"
      >
        {props.children}
      </div>
    </PrimitiveDisclosurePanel>
  )
}

export { DisclosureGroup, DisclosureItem, DisclosureTrigger, DisclosurePanel }
