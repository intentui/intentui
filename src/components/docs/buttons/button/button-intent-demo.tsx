"use client"

import { IconGear } from "@intentui/icons"
import { Button } from "@/components/ui/button"

export default function ButtonIntentDemo() {
  return (
    <div className="mx-auto flex max-w-xs flex-wrap items-start justify-center gap-6">
      <Button intent="primary">
        <IconGear /> Label
      </Button>
      <Button intent="secondary">
        <IconGear /> Label
      </Button>
      <Button intent="warning">
        <IconGear /> Label
      </Button>
      <Button intent="danger">
        <IconGear /> Label
      </Button>
      <Button intent="outline">
        <IconGear /> Label
      </Button>
      <Button intent="plain">
        <IconGear /> Label
      </Button>
    </div>
  )
}
