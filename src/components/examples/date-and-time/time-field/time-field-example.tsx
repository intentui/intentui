'use client'

import { Time } from '@internationalized/date'
import { DateInput } from '@/components/ui/date-field'
import { Label } from '@/components/ui/field'
import { TimeField } from '@/components/ui/time-field'

export default function TimeFieldDemo() {
  return (
    <TimeField defaultValue={new Time()}>
      <Label>Event time</Label>
      <DateInput />
    </TimeField>
  )
}
