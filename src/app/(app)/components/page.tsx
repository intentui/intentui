import { ListComponents } from "@/app/(app)/components/(partials)/list-components"
import { createMetadata } from "@/lib/metadata"

export const metadata = createMetadata({
  title: "Components",
  description:
    "Explore 80+ accessible UI components built on React Aria, fully customizable and production ready, with consistent patterns for fast, polished interfaces.",
  path: "/components",
  keywords: [
    "react components",
    "ui components",
    "react aria components",
    "tailwind css components",
    "accessible components",
    "next.js components",
    "intent ui",
    "intentui",
  ],
})

export default function Page() {
  return <ListComponents />
}
