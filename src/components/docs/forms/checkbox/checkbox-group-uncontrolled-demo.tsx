"use client"

import { Checkbox, CheckboxGroup } from "@/components/ui/checkbox"

export default function CheckboxGroupUncontrolledDemo() {
  return (
    <CheckboxGroup defaultValue={["sound", "wifi"]} label="Options">
      <Checkbox value="sound">Sound</Checkbox>
      <Checkbox value="wifi">Wi-Fi</Checkbox>
      <Checkbox value="sync">Sync</Checkbox>
    </CheckboxGroup>
  )
}
