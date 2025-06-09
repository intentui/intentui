"use client"

import { Button } from "@/components/ui/button"

export default function ButtonSizeDemo() {
  return (
    <div className="flex gap-2">
      <Button size="extra-small">Label</Button>
      <Button size="small">Label</Button>
      <Button>Label</Button>
      <Button size="large">Label</Button>
    </div>
  )
}
