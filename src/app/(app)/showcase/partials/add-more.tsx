"use client"
import { buttonStyles } from "@/components/ui/button"

export function AddMore() {
  return (
    <a
      className={buttonStyles()}
      href="https://github.com/intentui/showcase"
      target="_blank"
      rel="noopener"
    >
      Add yours
    </a>
  )
}
