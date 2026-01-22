import { Sandbox } from "@/app/(app)/blocks/sandbox"
import { app } from "@/config/app"
import { ogImage } from "@/lib/og"

const title = "Blocks of Sidebar"
const meta = {
  title: `${title} / Intent UI`,
  description:
    "Discover flexible sidebar design blocks built for dashboards and complex apps. Mix sections, icons, and nested menus, then tailor the layout to your product fast.",
  images: [
    {
      url: ogImage({
        title: title,
        description: "Flexible sidebar blocks you can copy and customize",
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
    url: `${app.url}/blocks/sidebar`,
  },
  twitter: {
    card: "summary_large_image",
    ...meta,
    creator: `@${app.author.username}`,
  },
}
export default function Page() {
  return <Sandbox registries={["sidebar-01", "sidebar-02", "sidebar-03", "sidebar-04"]} />
}
