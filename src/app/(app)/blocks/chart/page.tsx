import { Sandbox } from "@/app/(app)/blocks/sandbox"
import { app } from "@/config/app"
import { ogImage } from "@/lib/og"

const title = "Blocks of Charts"
const meta = {
  title: `${title} / Intent UI`,
  description:
    "Explore ready-to-use chart blocks for Area, Bar, Line, and more. Swap data, tweak options, and copy the code to ship dashboards faster.",
  images: [
    {
      url: ogImage({
        title: title,
        description: "Ready-to-use chart blocks you can copy and customize",
      }),
    },
  ],
}
export const metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    ...meta,
    type: "article",
    url: `${app.url}/blocks/chart`,
  },
  twitter: {
    card: "summary_large_image",
    ...meta,
    creator: `@${app.author.username}`,
  },
}
export default function Page() {
  return <Sandbox registries={["chart-01", "chart-02", "chart-03"]} />
}
