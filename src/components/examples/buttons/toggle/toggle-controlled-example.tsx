'use client'

import { useState } from 'react'
import { Toggle } from '@/components/ui/toggle'

export default function ToggleControlledDemo() {
  const [isSelected, setSelected] = useState(false)
  return (
    <Toggle isSelected={isSelected} onChange={setSelected}>
      {({ isSelected }) => <>{isSelected ? 'Select' : 'Not selected'}</>}
    </Toggle>
  )
}
