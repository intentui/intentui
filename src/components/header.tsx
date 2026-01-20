import { twMerge } from "tailwind-merge"
import { PageContainer } from "@/components/page-container"
import { Heading, type HeadingProps } from "@/components/ui/heading"
import { Text } from "@/components/ui/text"

export function Header({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={twMerge("pt-14 pb-6 sm:pt-28 sm:pb-12", className)}>
      <PageContainer>{props.children}</PageContainer>
    </div>
  )
}

export function HeaderInner({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={twMerge("mx-auto max-w-2xl text-center sm:mx-0 sm:text-left", className)}
      {...props}
    />
  )
}

export function HeaderTitle({ className, ...props }: Omit<HeadingProps, "level">) {
  return (
    <Heading
      level={1}
      className={twMerge("mb-4 font-medium text-3xl sm:text-5xl", className)}
      {...props}
    />
  )
}

export function HeaderDescription({ className, ...props }: React.ComponentProps<"p">) {
  return <Text className={twMerge("text-pretty text-base/7 sm:text-lg/8", className)} {...props} />
}
