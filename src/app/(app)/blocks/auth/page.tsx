import { Sandbox } from "@/app/(app)/blocks/sandbox"
import { createMetadata } from "@/lib/metadata"

export const metadata = createMetadata({
  title: "Blocks of Auth",
  description:
    "Browse polished, accessible authentication design blocks for login, registration, and password reset. Copy, customize, and ship faster with ready-to-use layouts.",
  path: "/blocks/auth",
  type: "article",
  keywords: [
    "authentication blocks",
    "login forms",
    "registration forms",
    "password reset",
    "auth ui",
    "intent ui",
    "intentui",
  ],
})
export default function Page() {
  return <Sandbox registries={["auth-01", "auth-02", "auth-03"]} />
}
