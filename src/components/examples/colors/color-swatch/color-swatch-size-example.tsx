'use client'

import { ColorSwatch } from '@/components/ui/color-swatch'

export default function ColorSwatchSizeDemo() {
  return (
    <ColorSwatch className="[--size:--spacing(16)]" aria-label="Current color" color="#0d6efd" />
  )
}
