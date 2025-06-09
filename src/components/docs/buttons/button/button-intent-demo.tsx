"use client"

import { Button } from "@/components/ui/button"

export default function ButtonIntentDemo() {
  return (
    <div className="grid grid-cols-2 gap-2 *:flex *:flex-col *:gap-y-2">
      <div>
        <Button intent="primary">Label</Button>
        <Button intent="secondary">Label</Button>
        <Button intent="warning">Label</Button>
      </div>
      <div>
        <Button intent="danger">Label</Button>
        <Button intent="outline">Label</Button>
        <Button intent="plain">Label</Button>
      </div>
    </div>
  )
}
