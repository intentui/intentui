"use client"

import { createContext, use } from "react"
import type { ProgressBarProps, ProgressBarRenderProps } from "react-aria-components"
import { ProgressBar as ProgressBarPrimitive } from "react-aria-components"
import { twMerge } from "tailwind-merge"
import { cx } from "@/lib/primitive"

const ProgressBarContext = createContext<ProgressBarRenderProps | null>(null)

export function ProgressBar({ className, children, ...props }: ProgressBarProps) {
  return (
    <ProgressBarPrimitive
      data-slot="control"
      className={cx(
        "w-full",
        "[&>[data-slot=progress-bar-header]+[data-slot=progress-bar-track]]:mt-2",
        "[&>[data-slot=progress-bar-header]+[data-slot=progress-bar-track]]:mt-2",
        "[&>[data-slot=progress-bar-header]+[slot='description']]:mt-1",
        "[&>[slot='description']+[data-slot=progress-bar-track]]:mt-2",
        "[&>[data-slot=progress-bar-track]+[slot=description]]:mt-2",
        "[&>[data-slot=progress-bar-track]+[slot=errorMessage]]:mt-2",
        "*:data-[slot=progress-bar-header]:font-medium",
        className,
      )}
      {...props}
    >
      {(values) => (
        <ProgressBarContext value={{ ...values }}>
          {typeof children === "function" ? children(values) : children}
        </ProgressBarContext>
      )}
    </ProgressBarPrimitive>
  )
}

export function ProgressBarHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="progress-bar-header"
      className={twMerge("flex items-center justify-between", className)}
      {...props}
    />
  )
}

export function ProgressBarValue({
  className,
  ...props
}: Omit<React.ComponentProps<"span">, "children">) {
  const { valueText } = use(ProgressBarContext)!
  return (
    <span className={twMerge("text-base/6 sm:text-sm/6", className)} {...props}>
      {valueText}
    </span>
  )
}

export function ProgressBarTrack({ className, ref, ...props }: React.ComponentProps<"div">) {
  const { isIndeterminate, percentage } = use(ProgressBarContext)!
  return (
    <span data-slot="progress-bar-track" className="relative block w-full">
      <style>{`
        @keyframes progress-slide {
          0% { left: 0% }
          50% { left: 100% }
          100% { left: 0% }
        }
      `}</style>
      <div ref={ref} className="flex w-full items-center gap-x-2" {...props}>
        <div
          className={twMerge(
            "relative h-1.5 w-full min-w-52 overflow-hidden rounded-full bg-secondary outline-1 outline-transparent -outline-offset-1 will-change-transform",
            className,
          )}
        >
          {!isIndeterminate ? (
            <div
              data-slot="progress-content"
              className="absolute top-0 left-0 h-full rounded-full bg-primary transition-[width] duration-200 ease-linear will-change-[width] motion-reduce:transition-none forced-colors:bg-[Highlight]"
              style={{ width: `${percentage}%` }}
            />
          ) : (
            <div
              data-slot="progress-content"
              className="absolute top-0 h-full animate-[progress-slide_2000ms_ease-in-out_infinite] rounded-full bg-primary forced-colors:bg-[Highlight]"
              style={{ width: "40%" }}
            />
          )}
        </div>
      </div>
    </span>
  )
}
