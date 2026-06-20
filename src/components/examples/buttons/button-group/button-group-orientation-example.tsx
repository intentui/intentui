'use client'

import { SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/button'
import { ButtonGroup } from '@/components/ui/button-group'

export default function ButtonGroupOrientationDemo() {
  return (
    <ButtonGroup orientation="vertical">
      <Button intent="secondary">
        <SpeakerWaveIcon />
      </Button>
      <Button intent="secondary">
        <SpeakerXMarkIcon />
      </Button>
    </ButtonGroup>
  )
}
