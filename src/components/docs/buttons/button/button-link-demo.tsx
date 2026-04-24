"use client"

import { Link } from "@/components/link"
import { buttonStyles } from "@/components/ui/button"

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
