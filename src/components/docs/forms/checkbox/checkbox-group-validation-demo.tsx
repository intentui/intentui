"use client"

import { Button } from "@/components/ui/button"
import { Checkbox, CheckboxGroup } from "@/components/ui/checkbox"
import { Form } from "@/components/ui/form"

export default function CheckboxValidationDemo() {
  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <CheckboxGroup className="mb-4" label="Settings" isRequired>
        <Checkbox value="notifications">Enable notifications</Checkbox>
        <Checkbox value="auto_update">Auto-update applications</Checkbox>
        <Checkbox value="dark_mode">Enable dark mode</Checkbox>
        <Checkbox value="location_access">Allow location access</Checkbox>
        <Checkbox value="two_factor_auth">Enable two-factor authentication</Checkbox>
      </CheckboxGroup>
      <Button type="submit">Submit</Button>
    </Form>
  )
}
