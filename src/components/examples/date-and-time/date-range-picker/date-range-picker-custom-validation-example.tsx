'use client'

import { getLocalTimeZone, today } from '@internationalized/date'
import { Form } from 'react-aria-components/Form'
import { Button } from '@/components/ui/button'
import { DateRangePicker, DateRangePickerTrigger } from '@/components/ui/date-range-picker'
import { FieldError, Label } from '@/components/ui/field'

export default function DateRangePickerCustomValidationDemo() {
  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <DateRangePicker
        validate={(range) =>
          range?.end.compare(range.start) > 7 ? 'Maximum booking duration is 1 week.' : null
        }
        defaultValue={{
          start: today(getLocalTimeZone()),
          end: today(getLocalTimeZone()).add({ weeks: 2 }),
        }}
        className="mb-2"
      >
        <Label>Room booking</Label>
        <DateRangePickerTrigger />
        <FieldError />
      </DateRangePicker>
      <Button type="submit">Book Room</Button>
    </Form>
  )
}
