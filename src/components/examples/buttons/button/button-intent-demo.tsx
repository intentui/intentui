"use client"

import { Cog6ToothIcon } from "@heroicons/react/24/outline"
import { Button } from "@/components/ui/button"

export default function ButtonIntentDemo() {
  return (
    <div className="mx-auto flex max-w-xs flex-wrap items-start justify-center gap-6">
      <Button intent="primary">
        <Cog6ToothIcon /> Label
      </Button>
      <Button intent="secondary">
        <Cog6ToothIcon /> Label
      </Button>
      <Button intent="warning">
        <Cog6ToothIcon /> Label
      </Button>
      <Button intent="success">
        <Cog6ToothIcon /> Label
      </Button>
      <Button intent="danger">
        <Cog6ToothIcon /> Label
      </Button>
      <Button intent="outline">
        <Cog6ToothIcon /> Label
      </Button>
      <Button intent="plain">
        <Cog6ToothIcon /> Label
      </Button>
    </div>
  )
}
