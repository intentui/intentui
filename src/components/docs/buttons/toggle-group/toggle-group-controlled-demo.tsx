"use client"

import { useState } from "react"
import type { Key } from "react-aria-components"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export default function ToggleGroupControlledDemo() {
  const [selected, setSelected] = useState(new Set<Key>(["bold"]))

  return (
    <div className="space-y-6">
      <ToggleGroup
        selectionMode="multiple"
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
        <ToggleGroupItem id="bold">Bold</ToggleGroupItem>
        <ToggleGroupItem id="italic">Italic</ToggleGroupItem>
        <ToggleGroupItem id="underline">Underline</ToggleGroupItem>
      </ToggleGroup>
      {[...selected].length > 0 && (
        <p className="text-muted-fg">
          Selected:{" "}
          <strong className="font-semibold text-fg">{[...selected].join(", ")}</strong>
        </p>
      )}
    </div>
  )
}
