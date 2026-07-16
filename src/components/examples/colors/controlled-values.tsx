'use client'

import type { ColorFormat } from 'react-aria-components/ColorSwatch'
import { Card } from '@/components/ui/card'
import { ColorSwatch } from '@/components/ui/color-swatch'

const formats: string[] = ['hex', 'hexa', 'rgb', 'rgba', 'hsl', 'hsla', 'hsb', 'hsba']
export function ControlledValues({ color }: { color: any }) {
  return (
    <Card className="flex min-w-62 flex-col gap-y-2 bg-transparent p-3 text-center sm:min-w-72 [&>span]:flex [&>span]:justify-between [&>span]:gap-x-6">
      {formats.map((format, i) => (
        <span key={i}>
          <span className="flex items-center gap-x-1.5">
            <ColorSwatch
              aria-label="color picked"
              className="rounded [--size:--spacing(5)]"
              color={color.toString(format as ColorFormat | 'css' | undefined)}
            />
            <span className="text-xs uppercase tabular-nums">{format}</span>
          </span>
          <span className="text-xs tabular-nums sm:text-sm">
            {color.toString(format as ColorFormat | 'css' | undefined)}
          </span>
        </span>
      ))}
    </Card>
  )
}
