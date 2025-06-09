"use client"

import { buttonStyles } from "@/components/ui/button"
import { Link } from "@/components/ui/link"
import { siteConfig } from "@/config/site"

export default function ButtonLinkDemo() {
  return (
    <Link
      className={(renderProps) => buttonStyles({ ...renderProps, intent: "primary" })}
      href={`/docs/${siteConfig.currentVersion}/components/collections/choicebox`}
    >
      Choicebox
    </Link>
  )
}
