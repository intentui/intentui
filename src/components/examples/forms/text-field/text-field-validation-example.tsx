'use client'

import { Form } from 'react-aria-components/Form'
import { Button } from '@/components/ui/button'
import { FieldError, Label } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { TextField } from '@/components/ui/text-field'

export default function TextFieldValidationDemo() {
  return (
    <Form className="space-y-4">
      <TextField isRequired name="name">
        <Label>Name</Label>
        <Input />
        <FieldError />
      </TextField>
      <Button type="submit">Submit</Button>
    </Form>
  )
}
