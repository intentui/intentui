"use client"

import { ColorGenerator } from "@/app/(app)/colors/(colors)/color-generator"
import { ColorItem } from "@/app/(app)/colors/(colors)/color-item"
import colors from "@/colors/colors.json"
import { Container } from "@/components/ui/container"

export function ColorPalette() {
  return (
    <div className="bg-muted/30">
      <div className="mx-auto max-w-7xl sm:px-8">
        <Container constrained className="bg-bg px-0 shadow-fg/10 sm:border-x sm:px-0 lg:px-0">
          <ColorGenerator />
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {Object.keys(colors).map((key) => (
              <ColorItem key={key} color={key as keyof typeof colors} />
            ))}
          </div>
        </Container>
      </div>
    </div>
  )
}
