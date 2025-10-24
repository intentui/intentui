import { twMerge } from "tailwind-merge"

interface ContainerProps extends React.ComponentProps<"div"> {
  constrained?: boolean
}

const Container = ({ className, constrained = false, ref, ...props }: ContainerProps) => (
  <div
    className={twMerge(
      "mx-auto w-full max-w-7xl [--container-padding:--spacing(4)] xl:max-w-(--breakpoint-xl) 2xl:max-w-(--breakpoint-2xl)",
      constrained ? "sm:px-(--container-padding)" : "px-(--container-padding)",
      className,
    )}
    {...props}
    ref={ref}
  />
)

export type { ContainerProps }
export { Container }
