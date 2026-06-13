"use client"

import { Form } from "react-aria-components/Form"
import { Button } from "@/components/ui/button"
import { Checkbox, CheckboxField, CheckboxGroup } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/field"

export default function CheckboxGroupValidationExample() {
  return (
    <Form onSubmit={() => {}} className="space-y-6">
      <CheckboxGroup isRequired name="settings">
        <Label>Settings</Label>
        <CheckboxField value="notifications">
          <Checkbox>Enable notifications</Checkbox>
        </CheckboxField>
        <CheckboxField value="auto_update">
          <Checkbox>Auto-update applications</Checkbox>
        </CheckboxField>
        <CheckboxField value="dark_mode">
          <Checkbox>Enable dark mode</Checkbox>
        </CheckboxField>
        <CheckboxField value="location_access">
          <Checkbox>Allow location access</Checkbox>
        </CheckboxField>
        <CheckboxField value="two_factor_auth">
          <Checkbox>Enable two-factor authentication</Checkbox>
        </CheckboxField>
      </CheckboxGroup>
      <Button type="submit">Submit</Button>
    </Form>
  )
}
