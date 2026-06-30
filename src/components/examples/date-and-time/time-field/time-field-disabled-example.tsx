'use client'

import { DateInput } from '@/components/ui/date-field'
import { Label } from '@/components/ui/field'
import { TimeField } from '@/components/ui/time-field'

export default function TimeFieldDisabledDemo() {
  return (
    <TimeField isDisabled>
      <Label>Event time</Label>
      <DateInput />
    </TimeField>
  )
}
