import { twMerge } from "tailwind-merge"

export interface SkeletonProps extends React.ComponentProps<"div"> {
  isLoading?: boolean
}

export function Skeleton({ ref, isLoading = false, className, ...props }: SkeletonProps) {
  return (
    <div
      data-slot="skeleton"
      data-loading={isLoading ? "" : undefined}
      ref={ref}
      className={twMerge(
        isLoading
          ? [
              "pointer-events-none",
              "[&>*>*>:not(:has(*))]:animate-pulse [&>*>*>:not(:has(*))]:select-none [&>*>*>:not(:has(*))]:rounded-lg [&>*>*>:not(:has(*))]:bg-secondary [&>*>*>:not(:has(*))]:text-transparent [&>*>*>:not(:has(*))]:shadow-none [&>*>*>:not(:has(*))]:[-webkit-box-decoration-break:clone] [&>*>*>:not(:has(*))]:[box-decoration-break:clone]",
              "**:data-[slot=avatar]:animate-pulse **:data-[slot=avatar]:bg-secondary **:data-[slot=avatar]:outline-none [&_[data-slot=avatar]_img]:bg-transparent [&_img]:animate-pulse [&_img]:border-0 [&_img]:bg-secondary [&_img]:text-transparent [&_img]:shadow-none [&_img]:[content-visibility:hidden]",
              "[&>*>*>*_:not(:has(*)):not(:empty)]:animate-pulse [&>*>*>*_:not(:has(*)):not(:empty)]:select-none [&>*>*>*_:not(:has(*)):not(:empty)]:rounded-md [&>*>*>*_:not(:has(*)):not(:empty)]:bg-secondary [&>*>*>*_:not(:has(*)):not(:empty)]:text-transparent [&>*>*>*_:not(:has(*)):not(:empty)]:shadow-none",
            ]
          : "shrink-0",
        className,
      )}
      {...props}
    />
  )
}
