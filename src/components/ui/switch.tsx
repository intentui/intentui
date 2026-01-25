"use client"

import { Switch as SwitchPrimitive, type SwitchProps } from "react-aria-components"
import { twJoin, twMerge } from "tailwind-merge"
import { cx } from "@/lib/primitive"
import { Label } from "./field"

export function Switch({ children, className, ...props }: SwitchProps) {
  return (
    <SwitchPrimitive
      {...props}
      data-slot="control"
      className={cx(
        [
          "[--switch-bg-ring:var(--color-blue-700)]/90 [--switch-bg:var(--color-blue-600)] dark:[--switch-bg-ring:transparent]",
          "[--switch-ring:var(--color-blue-700)]/90 [--switch-shadow:var(--color-blue-900)]/20 [--switch:white]",
          "group relative grid cursor-default gap-x-6 gap-y-1 ltr:grid-cols-[1fr_auto] rtl:grid-cols-[auto_1fr]",
          "*:data-[slot=indicator]:self-start sm:*:data-[slot=indicator]:mt-0.5 ltr:*:data-[slot=indicator]:col-start-2 rtl:*:data-[slot=indicator]:col-start-1",
          "*:data-[slot=label]:row-start-1 has-[[slot=description]]:**:data-[slot=label]:font-medium ltr:*:data-[slot=label]:col-start-1 rtl:*:data-[slot=label]:col-start-2",
          "*:[[slot=description]]:row-start-2 ltr:*:[[slot=description]]:col-start-1 rtl:*:[[slot=description]]:col-start-2",
          "disabled:opacity-50",
        ],
        className,
      )}
      style={({ defaultStyle }) => ({
        ...defaultStyle,
        WebkitTapHighlightColor: "transparent",
      })}
    >
      {(values) => (
        <>
          <span
            data-slot="indicator"
            className={twMerge(
              "relative isolate inline-flex h-6 w-10 cursor-default rounded-full p-0.75 sm:h-5 sm:w-8",
              "transition duration-200 ease-in-out",
              "inset-ring inset-ring-input bg-input/30",
              "forced-colors:outline forced-colors:[--switch-bg:Highlight]",
              values.isHovered && "inset-ring-muted-fg/30",
              values.isFocusVisible &&
                "inset-ring-ring/70 selected:inset-ring-(--switch-bg)/30 bg-(--switch-bg)/20 ring-(--switch-bg)/20 ring-2 dark:inset-ring-(--switch-bg)/70",
              values.isSelected &&
                "inset-ring-(--switch-shadow) bg-(--switch-bg) dark:inset-ring-(--switch-bg-ring) dark:bg-(--switch-bg)",
              values.isDisabled &&
                "dark:group-disabled:bg-muted-fg/30 dark:group-disabled:group-selected:inset-ring-muted-fg/30 dark:group-disabled:group-selected:bg-(--switch-bg)",
            )}
          >
            <span
              aria-hidden="true"
              className={twJoin(
                "pointer-events-none relative inline-block size-4.5 translate-x-0 rounded-full border border-transparent bg-white shadow-sm ring ring-fg/5 transition duration-200 ease-in-out sm:size-3.5",
                values.isSelected &&
                  "bg-(--switch) shadow-(--switch-shadow) ring-(--switch-ring) group-disabled:shadow-sm group-disabled:ring-secondary-fg/5 ltr:translate-x-4 ltr:sm:translate-x-3 rtl:-translate-x-4 rtl:sm:-translate-x-3",
              )}
            />
          </span>
          {typeof children === "function" ? (
            children(values)
          ) : typeof children === "string" ? (
            <SwitchLabel>{children}</SwitchLabel>
          ) : (
            children
          )}
        </>
      )}
    </SwitchPrimitive>
  )
}

export function SwitchLabel(props: React.ComponentProps<typeof Label>) {
  return <Label elementType="span" {...props} />
}
