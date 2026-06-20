'use client'

import { Form } from 'react-aria-components/Form'
import { Button } from '@/components/ui/button'
import { FieldError, Label } from '@/components/ui/field'
import { NumberField, NumberInput } from '@/components/ui/number-field'

export default function NumberFieldInvalidDemo() {
  return (
    <Form onSubmit={(e) => e.preventDefault()} className="space-y-4">
      <NumberField isRequired name="cookies">
        <Label>Cookies</Label>
        <NumberInput />
        <FieldError />
      </NumberField>
      <Button type="submit">Submit</Button>
    </Form>
  )
}
