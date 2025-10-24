"use client"

import { Checkbox, CheckboxGroup } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/field"

export default function CheckboxGroupUncontrolledDemo() {
  return (
    <CheckboxGroup defaultValue={["sound", "wifi"]}>
      <Label>Options</Label>
      <Checkbox value="sound">Sound</Checkbox>
      <Checkbox value="wifi">Wi-Fi</Checkbox>
      <Checkbox value="sync">Sync</Checkbox>
    </CheckboxGroup>
  )
}
