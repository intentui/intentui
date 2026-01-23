import { Sandbox } from "@/app/(app)/blocks/sandbox"
import { createMetadata } from "@/lib/metadata"

export const metadata = createMetadata({
  title: "Blocks of Navbar",
  description:
    "Explore a curated gallery of responsive, accessible navbar design blocks. Copy, customize, and ship faster with ready-to-use layouts for modern websites.",
  path: "/blocks/navbar",
  type: "article",
  keywords: [
    "navbar blocks",
    "navigation components",
    "responsive navbar",
    "accessible navigation",
    "react navbar",
    "intent ui",
    "intentui",
  ],
})
export default function Page() {
  return <Sandbox registries={["navbar-01", "navbar-02", "navbar-03", "navbar-04", "navbar-05"]} />
}
