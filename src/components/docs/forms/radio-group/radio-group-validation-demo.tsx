"use client"

import { Form } from "react-aria-components"
import { Button } from "@/components/ui/button"
import { Description, Label } from "@/components/ui/field"
import { Radio, RadioGroup } from "@/components/ui/radio"

export default function RadioGroupValidationDemo() {
  return (
    <Form onSubmit={() => {}} className="space-y-4">
      <RadioGroup isRequired name="feature">
        <Label>Features</Label>
        <Description>Choose one of the available features</Description>
        <Radio value="analytics">
          <Label>Advanced Analytics</Label>
          <Description>Gain insights with real-time data reports.</Description>
        </Radio>

        <Radio value="automation">
          <Label>Workflow Automation</Label>
          <Description>Automate repetitive tasks to save time.</Description>
        </Radio>

        <Radio value="integrations">
          <Label>Third-party Integrations</Label>
          <Description>Connect with your favorite tools and services.</Description>
        </Radio>
      </RadioGroup>
      <Button type="submit" intent="secondary">
        Submit
      </Button>
    </Form>
  )
}
