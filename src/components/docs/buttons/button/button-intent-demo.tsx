"use client"

import { Button } from "@/components/ui/button"

export default function ButtonIntentDemo() {
  return (
    <div className="flex flex-wrap items-start justify-center gap-2">
      <Button intent="primary">Label</Button>
      <Button intent="secondary">Label</Button>
      <Button intent="warning">Label</Button>
      <Button intent="danger">Label</Button>
      <Button intent="outline">Label</Button>
      <Button intent="plain">Label</Button>
    </div>
  )
}
