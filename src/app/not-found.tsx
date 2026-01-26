import Link from "next/link"
import { buttonStyles } from "@/components/ui/button"
import { createMetadata } from "@/lib/metadata"

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
      <h1 className="font-bold text-6xl text-muted-fg">404</h1>
      <h2 className="mt-4 font-semibold text-xl">Page Not Found</h2>
      <p className="mt-2 max-w-md text-muted-fg">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <div className="mt-6 flex gap-3">
        <Link href="/" className={buttonStyles({ intent: "primary", size: "md" })}>
          Go Home
        </Link>
        <Link href="/components" className={buttonStyles({ intent: "secondary", size: "md" })}>
          Browse Components
        </Link>
      </div>
    </div>
  )
}
