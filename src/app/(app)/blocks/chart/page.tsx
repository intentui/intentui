import { Sandbox } from "@/app/(app)/blocks/sandbox"
import { createMetadata } from "@/lib/metadata"

export const metadata = createMetadata({
  title: "Blocks of Charts",
  description:
    "Explore ready-to-use chart blocks for Area, Bar, Line, and more. Swap data, tweak options, and copy the code to ship dashboards faster.",
  path: "/blocks/chart",
  type: "article",
  keywords: [
    "chart blocks",
    "data visualization",
    "react charts",
    "dashboard charts",
    "area charts",
    "bar charts",
    "intent ui",
    "intentui",
  ],
})
export default function Page() {
  return <Sandbox registries={["chart-01", "chart-02", "chart-03"]} />
}
