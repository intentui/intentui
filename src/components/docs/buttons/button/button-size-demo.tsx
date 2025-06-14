"use client"

import { Button } from "@/components/ui/button"

export default function ButtonSizeDemo() {
  return (
    <div className="flex items-end gap-2">
      <Button size="xs">Label</Button>
      <Button size="sm">Label</Button>
      <Button>Label</Button>
      <Button size="lg">Label</Button>
    </div>
  )
}
