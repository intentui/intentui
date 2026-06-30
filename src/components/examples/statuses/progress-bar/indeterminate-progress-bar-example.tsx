'use client'
import { Label } from '@/components/ui/field'
import {
  ProgressBar,
  ProgressBarHeader,
  ProgressBarTrack,
  ProgressBarValue,
} from '@/components/ui/progress-bar'

export default function ProgressBarDemo() {
  return (
    <ProgressBar value={30} isIndeterminate>
      <ProgressBarHeader>
        <Label>Loading…</Label>
        <ProgressBarValue />
      </ProgressBarHeader>
      <ProgressBarTrack />
    </ProgressBar>
  )
}
