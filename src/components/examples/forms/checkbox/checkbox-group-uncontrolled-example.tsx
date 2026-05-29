"use client"

import { Checkbox, CheckboxGroup } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/field"

export default function CheckboxGroupUncontrolledExample() {
  return (
    <CheckboxGroup defaultValue={["sound", "wifi"]} name="options">
      <Label>Options</Label>
      <Checkbox value="sound">Sound</Checkbox>
      <Checkbox value="wifi">Wi-Fi</Checkbox>
      <Checkbox value="sync">Sync</Checkbox>
    </CheckboxGroup>
  )
}
