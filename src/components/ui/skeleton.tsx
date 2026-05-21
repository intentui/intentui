import { twMerge } from "tailwind-merge"

export interface SkeletonProps extends React.ComponentProps<"div"> {
  isLoading?: boolean
  soft?: boolean
}

export function Skeleton({
  ref,
  isLoading = false,
  soft = false,
  className,
  ...props
}: SkeletonProps) {
  return (
    <div
      data-slot="skeleton"
      data-loading={isLoading ? "" : undefined}
      ref={ref}
      className={twMerge(
        isLoading
          ? [
              "pointer-events-none",

              "[&>*>*>:not(:has(*))]:[-webkit-box-decoration-break:clone]",
              "[&>*>*>:not(:has(*))]:[box-decoration-break:clone]",
              "[&>*>*>:not(:has(*))]:bg-muted",
              "[&>*>*>:not(:has(*))]:text-transparent",
              "[&>*>*>:not(:has(*))]:shadow-none",
              "[&>*>*>:not(:has(*))]:animate-pulse",
              "[&>*>*>:not(:has(*))]:select-none",
              "[&>*>*>:not(:has(*))]:rounded-lg",
              "[&>*>*>*_:is(img)]:[content:'']",
              "[&_img]:bg-muted",
              "[&_img]:text-transparent",
              "[&_img]:border-0",
              "[&_img]:shadow-none",
              "[&_img]:animate-pulse",
              "[&_img]:object-none",
              "[&_img]:[content:'']",

              "[&>*>*>*_:not(:has(*)):not(:empty)]:bg-muted",
              "[&>*>*>*_:not(:has(*)):not(:empty)]:text-transparent",
              "[&>*>*>*_:not(:has(*)):not(:empty)]:shadow-none",
              "[&>*>*>*_:not(:has(*)):not(:empty)]:animate-pulse",
              "[&>*>*>*_:not(:has(*)):not(:empty)]:select-none",
              "[&>*>*>*_:not(:has(*)):not(:empty)]:rounded-md",
            ]
          : ["shrink-0 animate-pulse rounded-lg", soft ? "bg-muted-fg/20" : "bg-muted-fg/40"],
        className,
      )}
      {...props}
    />
  )
}
