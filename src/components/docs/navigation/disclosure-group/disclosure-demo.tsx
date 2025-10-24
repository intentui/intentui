"use client"

import { Form } from "react-aria-components"
import { Button } from "@/components/ui/button"
import { Checkbox, CheckboxLabel } from "@/components/ui/checkbox"
import { Disclosure, DisclosurePanel, DisclosureTrigger } from "@/components/ui/disclosure-group"
import { Fieldset, Label } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Text } from "@/components/ui/text"
import { TextField } from "@/components/ui/text-field"

export default function DisclosureDemo() {
  return (
    <Disclosure>
      <DisclosureTrigger>Add tax details</DisclosureTrigger>
      <DisclosurePanel>
        <Form>
          <Fieldset>
            <Text>These details appear on your invoices.</Text>
            <TextField>
              <Label>Company name</Label>
              <Input placeholder="Acme LLC" />
            </TextField>
            <TextField>
              <Label>Tax ID</Label>
              <Input placeholder="12-3456789" />
            </TextField>
            <TextField>
              <Label>Billing address</Label>
              <Input placeholder="123 Market St, San Francisco, CA" />
            </TextField>
            <Checkbox>
              <CheckboxLabel>Enable VAT reverse charge</CheckboxLabel>
            </Checkbox>
            <div data-slot="control">
              <Button>Save</Button>
            </div>
          </Fieldset>
        </Form>
      </DisclosurePanel>
    </Disclosure>
  )
}
