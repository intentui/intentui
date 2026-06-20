'use client'

import { getLocalTimeZone, now, parseZonedDateTime } from '@internationalized/date'
import { useState } from 'react'

import { DatePicker, DatePickerTrigger } from '@/components/ui/date-picker'
import { Label } from '@/components/ui/field'

export default function DateTimeDemo() {
  const today = parseZonedDateTime(now(getLocalTimeZone()).toString())
  const [value, setValue] = useState(today)

  return (
    <DatePicker
      hideTimeZone
      hourCycle={24}
      value={value}
      onChange={(newValue) => setValue(newValue!)}
    >
      <Label>Event date</Label>
      <DatePickerTrigger />
    </DatePicker>
  )
}
