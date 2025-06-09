"use client"

import { Checkbox, CheckboxGroup } from "@/components/ui/checkbox"

export default function CheckboxDisabledDemo() {
  return (
    <CheckboxGroup isDisabled label="Settings">
      <Checkbox value="notifications">Enable notifications</Checkbox>
      <Checkbox value="auto_update">Auto-update applications</Checkbox>
      <Checkbox value="dark_mode">Enable dark mode</Checkbox>
      <Checkbox value="location_access">Allow location access</Checkbox>
      <Checkbox value="two_factor_auth">Enable two-factor authentication</Checkbox>
    </CheckboxGroup>
  )
}
