"use client"

import { Form } from 'react-aria-components/Form';
import { Button } from "@/components/ui/button"
import { Description, FieldError, Fieldset, Label, Legend } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Text } from "@/components/ui/text"
import { TextField } from "@/components/ui/text-field"

export default function FieldDemo() {
  return (
    <Form>
      <Fieldset>
        <Legend>Profile information</Legend>
        <Text>Update your account's profile information and email address.</Text>

        <TextField isRequired name="name">
          <Label>Name</Label>
          <Input />
          <FieldError />
          <Description>This is your public display name.</Description>
        </TextField>
        <TextField isRequired name="email">
          <Label>Email</Label>
          <Description>This is your public display name.</Description>
          <Input type="email" />
          <FieldError />
        </TextField>
        <TextField isRequired name="password">
          <Label>Password</Label>
          <Input type="password" />
          <FieldError />
        </TextField>
        <div data-slot="control">
          <Button type="submit">Register</Button>
        </div>
      </Fieldset>
    </Form>
  )
}
