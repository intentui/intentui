'use client'

import { Switch, SwitchField } from '@/components/ui/switch'

export default function SwitchCustomLayoutExample() {
  return (
    <SwitchField name="dark">
      <Switch className="gap-x-3 ltr:grid-cols-[auto_1fr] ltr:*:data-[slot=indicator]:col-start-1 ltr:*:data-[slot=control-label]:col-start-2">
        Dark mode
      </Switch>
    </SwitchField>
  )
}
