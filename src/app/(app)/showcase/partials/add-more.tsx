"use client"
import { PlusIcon } from "@heroicons/react/24/outline"
import { buttonStyles } from "@/components/ui/button"

export function AddMore() {
  return (
    <a
      className={buttonStyles()}
      href="https://github.com/intentui/showcase"
      target="_blank"
      rel="noopener"
    >
      <PlusIcon />
      Add yours
    </a>
  )
}
