'use client'

import { Form } from 'react-aria-components/Form'
import { Button } from '@/components/ui/button'
import { DatePicker, DatePickerTrigger } from '@/components/ui/date-picker'
import { FieldError, Label } from '@/components/ui/field'

export default function DatePickerRequiredDemo() {
  return (
    <Form onSubmit={(e) => e.preventDefault()} className="space-y-3">
      <DatePicker isRequired>
        <Label>Event date</Label>
        <DatePickerTrigger />
        <FieldError />
      </DatePicker>

      <Button type="submit">Submit</Button>
    </Form>
  )
}
