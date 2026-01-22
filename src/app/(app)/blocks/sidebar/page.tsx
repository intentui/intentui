import { Sandbox } from "@/app/(app)/blocks/sandbox"
import { createMetadata } from "@/lib/metadata"

export const metadata = createMetadata({
  title: "Blocks of Sidebar",
  description:
    "Discover flexible sidebar design blocks built for dashboards and complex apps. Mix sections, icons, and nested menus, then tailor the layout to your product fast.",
  path: "/blocks/sidebar",
  type: "article",
  keywords: [
    "sidebar blocks",
    "navigation sidebar",
    "dashboard sidebar",
    "responsive sidebar",
    "react sidebar",
    "intent ui",
    "intentui",
  ],
})
export default function Page() {
  return <Sandbox registries={["sidebar-01", "sidebar-02", "sidebar-03", "sidebar-04"]} />
}
