'use client'

import { useEffect, useState } from 'react'
import { Description, Label } from '@/components/ui/field'
import { Meter, MeterHeader, MeterTrack, MeterValue } from '@/components/ui/meter'

export default function MeterDemo() {
  const [value, setValue] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prev) => (prev < 100 ? prev + 1 : 100))
    }, 50)

    return () => clearInterval(interval)
  }, [])
  return (
    <Meter value={value}>
      <MeterHeader>
        <Label>Storage space</Label>
        <MeterValue />
      </MeterHeader>
      <MeterTrack />
      <Description>Current storage space usage</Description>
    </Meter>
  )
}
