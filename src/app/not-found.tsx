import Link from "next/link"
import { buttonStyles } from "@/components/ui/button"
import { createMetadata } from "@/lib/metadata"
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";

export const metadata = createMetadata({
  title: "Page Not Found",
  description:
    "The page you're looking for doesn't exist. Return to Intent UI to explore accessible React components and design patterns.",
  path: "/404",
  noindex: true,
})

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <Heading className="text-muted-fg" level={1}>404</Heading>
      <Heading level={2} className="mt-6">Page Not Found</Heading>
      <Text className="mt-1 max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </Text>
    </div>
  )
}
