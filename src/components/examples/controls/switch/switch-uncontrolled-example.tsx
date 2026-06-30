'use client'

import { Description } from '@/components/ui/field'
import { Switch, SwitchField } from '@/components/ui/switch'

export default function SwitchUncontrolledDemo() {
  return (
    <SwitchField defaultSelected name="d">
      <Switch>Dark mode</Switch>
      <Description>Toggle dark mode for this site.</Description>
    </SwitchField>
  )
}
