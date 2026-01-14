import { twMerge } from "tailwind-merge"

export interface ContainerProps extends React.ComponentProps<"div"> {
  constrained?: boolean
}

export function Container({ className, constrained = false, ref, ...props }: ContainerProps) {
  return (
    <div
      className={twMerge(
        "mx-auto w-full max-w-(--breakpoint-xl) [--container-padding:--spacing(4)]",
        constrained ? "sm:px-(--container-padding)" : "px-(--container-padding)",
        className,
      )}
      {...props}
      ref={ref}
    />
  )
}
