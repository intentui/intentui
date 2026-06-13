"use client"

import { Form } from "react-aria-components/Form"
import { Button } from "@/components/ui/button"
import { Description, FieldError, Label } from "@/components/ui/field"
import { Radio, RadioField, RadioGroup } from "@/components/ui/radio"

export default function RadioGroupValidationDemo() {
  return (
    <Form onSubmit={() => {}} className="space-y-4">
      <RadioGroup isRequired name="feature">
        <Label>Features</Label>
        <Description>Choose one of the available features</Description>
        <RadioField value="analytics">
          <Radio>Advanced Analytics</Radio>
          <Description>Gain insights with real-time data reports.</Description>
        </RadioField>

        <RadioField value="automation">
          <Radio>Workflow Automation</Radio>
          <Description>Automate repetitive tasks to save time.</Description>
        </RadioField>

        <RadioField value="integrations">
          <Radio>Third-party Integrations</Radio>
          <Description>Connect with your favorite tools and services.</Description>
        </RadioField>
        <FieldError />
      </RadioGroup>
      <Button type="submit" intent="secondary">
        Submit
      </Button>
    </Form>
  )
}
