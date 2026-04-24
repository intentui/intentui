"use client"

import { buttonStyles } from "@/components/ui/button"
import { Link } from "@/components/link"

export default function ButtonLinkDemo() {
  return (
    <Link
      className={buttonStyles({ intent: "primary" })}
      href={"/docs/components/collections/choicebox"}
    >
      Choicebox
    </Link>
  )
}
