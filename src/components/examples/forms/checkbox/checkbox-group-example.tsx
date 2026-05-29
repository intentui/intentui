"use client"

import { Checkbox, CheckboxGroup } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/field"

export default function CheckboxGroupExample() {
  return (
    <CheckboxGroup name="settings">
      <Label>Settings</Label>
      <Checkbox value="notifications">Enable notifications</Checkbox>
      <Checkbox value="auto_update">Auto-update applications</Checkbox>
      <Checkbox value="dark_mode">Enable dark mode</Checkbox>
      <Checkbox value="location_access">Allow location access</Checkbox>
      <Checkbox value="two_factor_auth">Enable two-factor authentication</Checkbox>
    </CheckboxGroup>
  )
}
