"use client"

import { Button } from "@/components/ui/button"
import { IconGear } from "@intentui/icons"
import { Separator } from "react-aria-components"

const intents = ["primary", "secondary", "warning", "danger", "outline", "plain"] as const
export default function Page() {
  return (
    <div className="flex flex-col gap-y-6">
      <div className="grid grid-cols-2 gap-6">
        <div className="flex gap-4">
          <Button intent="primary">Label</Button>
          <Button intent="secondary">Label</Button>
          <Button intent="warning">Label</Button>
          <Button intent="danger">Label</Button>
          <Button intent="outline">Label</Button>
          <Button intent="plain">Label</Button>
        </div>
        <div className="flex gap-4">
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
      </div>

      <Separator />

      {intents.map((intent) => (
        <div key={intent} className="flex hidden gap-4">
          <Button size="xs" intent={intent}>
            Label
          </Button>
          <Button size="sm" intent={intent}>
            Label
          </Button>
          <Button size="md" intent={intent}>
            Label
          </Button>
          <Button size="lg" intent={intent}>
            Label
          </Button>
        </div>
      ))}

      {intents.map((intent) => (
        <div key={intent} className="flex items-start gap-4">
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
        <div key={intent} className="flex items-start gap-4">
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
  )
}
