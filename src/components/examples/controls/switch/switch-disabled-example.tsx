'use client'

import { Switch, SwitchField } from '@/components/ui/switch'

export default function SwitchDisabledDemo() {
  return (
    <SwitchField name="d" isDisabled>
      <Switch>Dark Mode</Switch>
    </SwitchField>
  )
}
