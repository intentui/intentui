import { createMetadata } from "@/lib/metadata"
import { Sandbox } from "./sandbox"

export const metadata = createMetadata({
  title: "Blocks",
  description:
    "Pre-built application blocks with sidebars, navigation, and authentication layouts. Copy and customize production-ready templates built with React Aria and Tailwind CSS.",
  path: "/blocks",
  keywords: [
    "blocks",
    "templates",
    "ui blocks",
    "react blocks",
    "sidebar templates",
    "navigation templates",
    "intent ui",
    "intentui",
  ],
})

export default function Page() {
  return <Sandbox registries={["sidebar-02", "navbar-01", "auth-01"]} />
}
