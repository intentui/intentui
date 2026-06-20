'use client'

import { useState } from 'react'

import { Checkbox, CheckboxField } from '@/components/ui/checkbox'
import { Description } from '@/components/ui/field'

export default function CheckboxControlledDemo() {
  const [selected, setSelection] = useState(false)
  return (
    <>
      <CheckboxField isSelected={selected} onChange={setSelection} value="updates" name="ru">
        <Checkbox>Receive Updates</Checkbox>
      </CheckboxField>
      <Description className="mt-2 block [&>strong]:text-fg">
        You have <strong>{selected ? 'enabled' : 'disabled'}</strong> the option.
      </Description>
    </>
  )
}
