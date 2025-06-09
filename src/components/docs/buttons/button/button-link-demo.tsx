"use client"

import { buttonStyles } from "@/components/ui/button"
import { Link } from "@/components/ui/link"

export default function ButtonLinkDemo() {
  return (
    <Link
      className={(renderProps) => buttonStyles({ ...renderProps, intent: "primary" })}
      href="/docs/2.x/components/collections/choicebox"
    >
      Choicebox
    </Link>
  )
}
