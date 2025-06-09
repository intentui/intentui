"use client"

import { useState } from "react"

import { Checkbox, CheckboxGroup } from "@/components/ui/checkbox"
import { Description } from "@/components/ui/field"

export default function CheckboxGroupControlledDemo() {
  const [values, setValues] = useState<string[]>([])
  return (
    <>
      <CheckboxGroup value={values} onChange={setValues} label="Options">
        <Checkbox value="sound">Sound</Checkbox>
        <Checkbox value="wifi">Wi-Fi</Checkbox>
        <Checkbox value="sync">Sync</Checkbox>
      </CheckboxGroup>

      <Description className="mt-2 flex h-10 flex-col gap-y-1 [&>strong]:font-medium [&>strong]:text-fg">
        {values.length > 0 ? (
          <>
            Selected values <strong className="font-medium">{values.join(", ")}</strong>
          </>
        ) : (
          "No values selected"
        )}
      </Description>
    </>
  )
}
