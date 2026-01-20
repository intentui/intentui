import { Sandbox } from "@/app/(app)/blocks/sandbox"
import { ogImage } from "@/lib/og"

const title = "Blocks of Auth"
const meta = {
  title: `${title} / Intent UI`,
  description:
    "Browse polished, accessible authentication design blocks for login, registration, and password reset. Copy, customize, and ship faster with ready-to-use layouts.",
  images: [
    {
      url: ogImage({
        title: title,
        description: "Accessible authentication blocks you can copy and customize",
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
    url: `https://intentui.com/blocks/auth`,
  },
  twitter: {
    card: "summary_large_image",
    ...meta,
    creator: "@irsyad",
  },
}
export default function Page() {
  return <Sandbox registries={["auth-01", "auth-02", "auth-03"]} />
}
