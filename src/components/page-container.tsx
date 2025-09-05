import { twMerge } from "tailwind-merge"

export function PageContainer({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={twMerge("mx-auto px-4 sm:px-6 lg:max-w-(--breakpoint-2xl) lg:px-14", className)}
    />
  )
}
