'use client'

import { Toggle } from '@/components/ui/toggle'

export default function ToggleShapeDemo() {
  return <Toggle isCircle>{({ isSelected }) => <>{isSelected ? 'Disabled' : 'Enabled'}</>}</Toggle>
}
