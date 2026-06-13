"use client"

import { useState } from "react"

import { Checkbox, CheckboxField, CheckboxGroup } from "@/components/ui/checkbox"
import { Description, Label } from "@/components/ui/field"

export default function CheckboxGroupControlledExample() {
  const [values, setValues] = useState<string[]>([])
  return (
    <>
      <CheckboxGroup value={values} onChange={setValues} name="options">
        <Label>Options</Label>
        <CheckboxField value="sound">
          <Checkbox>Sound</Checkbox>
        </CheckboxField>
        <CheckboxField value="wifi">
          <Checkbox>Wi-Fi</Checkbox>
        </CheckboxField>
        <CheckboxField value="sync">
          <Checkbox>Sync</Checkbox>
        </CheckboxField>
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
