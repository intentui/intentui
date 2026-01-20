import { Sandbox } from "@/app/(app)/blocks/sandbox"
import { ogImage } from "@/lib/og"

const title = "Blocks of Navbar"
const meta = {
  title: `${title} / Intent UI`,
  description:
    "Explore a curated gallery of responsive, accessible navbar design blocks. Copy, customize, and ship faster with ready-to-use layouts for modern websites.",
  images: [
    {
      url: ogImage({
        title: title,
        description: "Responsive blocks of navbar you can copy and customize",
      }),
    },
  ],
}
export const metadata = {
  title: "",
  description: "",
  openGraph: {
    ...meta,
    type: "article",
    url: `https://intentui.com/blocks/navbar`,
  },
  twitter: {
    card: "summary_large_image",
    ...meta,
    creator: "@irsyad",
  },
}
export default function Page() {
  return <Sandbox registries={["navbar-01", "navbar-02", "navbar-03"]} />
}
