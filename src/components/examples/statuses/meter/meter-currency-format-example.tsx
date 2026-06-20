'use client'

import { Description, Label } from '@/components/ui/field'
import { Meter, MeterHeader, MeterTrack, MeterValue } from '@/components/ui/meter'

export default function MeterCurrencyFormatDemo() {
  return (
    <Meter formatOptions={{ style: 'currency', currency: 'USD' }} value={15}>
      <MeterHeader>
        <Label>Revenue</Label>
        <MeterValue />
      </MeterHeader>
      <MeterTrack />
      <Description>Current revenue</Description>
    </Meter>
  )
}
