"use client"

import { Button } from "@/components/ui/button"
import { IconGear } from "@intentui/icons"
import { Separator } from "react-aria-components"

const intents = ["primary", "secondary", "warning", "danger", "outline", "plain"] as const
export default function Page() {
  return (
    <div className="m-auto flex max-w-4xl flex-col items-center gap-y-6">
      <div className="flex gap-4">
        <Button intent="primary">Label</Button>
        <Button intent="secondary">Label</Button>
        <Button intent="warning">Label</Button>
        <Button intent="danger">Label</Button>
        <Button intent="outline">Label</Button>
        <Button intent="plain">Label</Button>
      </div>

      <Separator className="h-px w-full" />

      <div className="grid grid-cols-2 gap-6">
        {intents.map((intent) => (
          <div key={intent} className="flex items-end justify-center gap-4">
            <Button size="xs" intent={intent}>
              <IconGear /> Label
            </Button>
            <Button size="sm" intent={intent}>
              <IconGear /> Label
            </Button>
            <Button size="md" intent={intent}>
              <IconGear /> Label
            </Button>
            <Button size="lg" intent={intent}>
              <IconGear /> Label
            </Button>
          </div>
        ))}

        {intents.map((intent) => (
          <div key={intent} className="flex items-end justify-center gap-4">
            <Button size="sq-xs" intent={intent}>
              <IconGear />
            </Button>
            <Button size="sq-sm" intent={intent}>
              <IconGear />
            </Button>
            <Button size="sq-md" intent={intent}>
              <IconGear />
            </Button>
            <Button size="sq-lg" intent={intent}>
              <IconGear />
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}
