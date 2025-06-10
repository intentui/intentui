"use client"

import { Badge } from "@/components/ui/badge"
import { IconGear } from "@intentui/icons"
import { Separator } from "react-aria-components"

const intents = ["primary", "secondary", "warning", "danger", "outline"] as const
export default function Page() {
  return (
    <div className="flex flex-col items-center gap-y-6">
      <div className="flex gap-4">
        <Badge intent="primary">Label</Badge>
        <Badge intent="secondary">Label</Badge>
        <Badge intent="warning">Label</Badge>
        <Badge intent="danger">Label</Badge>
        <Badge intent="outline">Label</Badge>
      </div>

      <Separator className="w-90" />
      {intents.map((intent) => (
        <div key={intent} className="flex items-start gap-4">
          <Badge intent={intent}>
            <IconGear /> Label
          </Badge>
          <Badge intent={intent}>
            <IconGear /> Label
          </Badge>
          <Badge intent={intent}>
            <IconGear /> Label
          </Badge>
          <Badge intent={intent}>
            <IconGear /> Label
          </Badge>
        </div>
      ))}
    </div>
  )
}
