'use client'

import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Button } from '@/components/ui/button'
import { ButtonGroup, ButtonGroupText } from '@/components/ui/button-group'

export default function ButtonGroupWithTextDemo() {
  return (
    <ButtonGroup>
      <ButtonGroupText>Deploy</ButtonGroupText>
      <Button intent="outline">
        Options
        <ChevronDownIcon />
      </Button>
    </ButtonGroup>
  )
}
