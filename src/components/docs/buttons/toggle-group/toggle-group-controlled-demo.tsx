import { useState } from "react"

import { Toggle, ToggleGroup } from "@/components/ui/toggle"
import type { Key } from "react-aria-components"

export default function ToggleGroupControlledDemo() {
  const [selected, setSelected] = useState(new Set<Key>(["bold"]))

  return (
    <>
      <ToggleGroup selectionMode="multiple" selectedKeys={selected} onSelectionChange={setSelected}>
        <Toggle id="bold">Bold</Toggle>
        <Toggle id="italic">Italic</Toggle>
        <Toggle id="underline">Underline</Toggle>
      </ToggleGroup>
      {[...selected].length > 0 && (
        <p className="mt-4 text-muted-fg">
          Selected: <strong className="font-semibold text-fg">{[...selected].join(", ")}</strong>
        </p>
      )}
    </>
  )
}
