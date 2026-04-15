"use client"

import { Form } from 'react-aria-components/Form';
import { Button } from "@/components/ui/button"
import { Description, FieldError, Label } from "@/components/ui/field"
import { Radio, RadioGroup, RadioLabel } from "@/components/ui/radio"

export default function RadioGroupValidationDemo() {
  return (
    <Form onSubmit={() => {}} className="space-y-4">
      <RadioGroup isRequired name="feature">
        <Label>Features</Label>
        <Description>Choose one of the available features</Description>
        <Radio value="analytics">
          <RadioLabel>Advanced Analytics</RadioLabel>
          <Description>Gain insights with real-time data reports.</Description>
        </Radio>

        <Radio value="automation">
          <RadioLabel>Workflow Automation</RadioLabel>
          <Description>Automate repetitive tasks to save time.</Description>
        </Radio>

        <Radio value="integrations">
          <RadioLabel>Third-party Integrations</RadioLabel>
          <Description>Connect with your favorite tools and services.</Description>
        </Radio>
        <FieldError />
      </RadioGroup>
      <Button type="submit" intent="secondary">
        Submit
      </Button>
    </Form>
  )
}
